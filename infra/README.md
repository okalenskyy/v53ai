# Infrastructure — v53ai.kalenskyy.com

Terraform that provisions the AWS hosting for the V53 AI Cluster marketing
site. S3 holds the static export, CloudFront fronts it, ACM issues the cert,
Route53 publishes the DNS, and an IAM role lets GitHub Actions deploy via
OIDC.

## What gets created

| Resource | Purpose |
|----------|---------|
| `aws_s3_bucket.site` | Private origin holding the Next.js static export |
| `aws_cloudfront_origin_access_control.site` | Locks S3 access to this distribution |
| `aws_cloudfront_function.index_rewrite` | Resolves `/foo/` → `/foo/index.html` |
| `aws_cloudfront_distribution.site` | Edge cache + TLS termination |
| `aws_acm_certificate.site` (us-east-1) | Cert for the custom domain |
| `aws_route53_record.site_a` / `site_aaaa` | Alias `v53ai.kalenskyy.com` to CloudFront |
| `aws_iam_role.github_deploy` | Assumed by GitHub Actions via OIDC for deploys |

## Prereqs

- Terraform >= 1.6 and the AWS CLI configured with credentials for account
  `376129843602`.
- `kalenskyy.com` already exists as a public Route53 hosted zone in that
  account (it does — the Terraform looks it up).
- The GitHub OIDC provider already exists in the account (it does — the
  Terraform references it as a data source).

## Apply

```bash
cd infra
terraform init
terraform plan -out=tfplan
terraform apply tfplan
```

The CloudFront distribution takes ~3–5 minutes to deploy. ACM DNS
validation completes within a minute once the validation record is in
Route53.

After apply, note these outputs — they get wired into GitHub Actions:

- `s3_bucket`
- `cloudfront_distribution_id`
- `github_deploy_role_arn`

## Wire up GitHub Actions

The workflow at `.github/workflows/deploy.yml` reads four repository
variables. Set them once under **Settings → Secrets and variables →
Actions → Variables** for `okalenskyy/v53ai`:

| Variable | Value |
|----------|-------|
| `AWS_REGION` | `eu-central-1` |
| `S3_BUCKET` | output `s3_bucket` |
| `CLOUDFRONT_DISTRIBUTION_ID` | output `cloudfront_distribution_id` |
| `AWS_DEPLOY_ROLE_ARN` | output `github_deploy_role_arn` |

A push to `main` then triggers `npm ci → npm run build → aws s3 sync →
CloudFront invalidation`.

## First deploy

After `terraform apply`, the bucket is empty. Either push a commit to
`main` to let GitHub Actions populate it, or seed it locally:

```bash
npm ci && npm run build
aws s3 sync ./out "s3://$(terraform -chdir=infra output -raw s3_bucket)" --delete
aws cloudfront create-invalidation \
  --distribution-id "$(terraform -chdir=infra output -raw cloudfront_distribution_id)" \
  --paths "/*"
```

## Variables you might tweak

All defaults live in `variables.tf`:

- `aws_region` — `eu-central-1`
- `site_domain` — `v53ai.kalenskyy.com`
- `parent_zone_name` — `kalenskyy.com`
- `github_repository` — `okalenskyy/v53ai`
- `github_branch` — `main` (the trust policy is scoped to this ref only)

Override at the CLI (`-var 'site_domain=...'`) or create
`terraform.tfvars` locally (gitignored).

## Teardown

```bash
terraform destroy
```

Note: CloudFront takes ~15 minutes to fully delete. The S3 bucket must be
empty first; `terraform destroy` will fail otherwise. Empty it with
`aws s3 rm s3://<bucket> --recursive` before retrying.
