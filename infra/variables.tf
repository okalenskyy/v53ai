variable "aws_region" {
  description = "Primary AWS region for the S3 bucket and IAM resources."
  type        = string
  default     = "eu-central-1"
}

variable "site_domain" {
  description = "Fully-qualified domain the site is served on."
  type        = string
  default     = "v53ai.kalenskyy.com"
}

variable "parent_zone_name" {
  description = "Route53 hosted-zone name (without trailing dot) that owns site_domain."
  type        = string
  default     = "kalenskyy.com"
}

variable "github_repository" {
  description = "GitHub repository allowed to assume the deploy role, in `owner/name` form."
  type        = string
  default     = "okalenskyy/v53ai"
}

variable "github_branch" {
  description = "Git ref that may assume the deploy role. Restricts the OIDC trust policy."
  type        = string
  default     = "main"
}

variable "project" {
  description = "Project tag value applied to every managed resource."
  type        = string
  default     = "v53ai"
}
