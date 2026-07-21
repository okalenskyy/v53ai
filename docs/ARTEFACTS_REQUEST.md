# Artefacts required from Oleg — V53 refactor

To take the refactor plan from "ready to start" to "shippable", the build needs
the following inputs. They are grouped by whether they **block go-live**, block a
**single section**, or merely **enhance**. Quick-decision items are one-line
answers.

## A. Blocking for go-live (need real values)

1. **Legal entity details** (for the imprint + Organization schema — ADR-0005, 0007)
   - Registered company name (the operating B.V. — MCPV … B.V.?)
   - **KvK number**
   - Registered address
   - Controller/contact email for privacy purposes
   - Confirmation of the MCPV ↔ NODUM relationship wording to publish
2. **Legal review** — who signs off privacy/cookie/imprint copy before publish?
3. **Analytics stance** (one line) — will the site run any analytics? If yes,
   which tool? (Determines cookie-page copy and whether a consent banner is
   needed. Recommend EU-hosted, cookieless if any.)

## B. Quick decisions (one line each, but blocking downstream work)

4. **Canonical email** — `call@v53ai.eu` (in repo) or `contact@v53ai.eu` (shown
   live)? Pick one. (ADR-0006)
5. **LinkedIn company page URL** — needed for nav/contact/footer + `sameAs`
   schema. (ADR-0006, 0007) If none exists yet, should we create the section
   slot and fill later?
6. **Production server + domain** (ADR-0002, ADR-0009) — production is a manual
   deploy to a non-AWS host at `v53ai.eu`; `v53ai.kalenskyy.com` stays as the
   AWS dev/preview. To finish the deploy runbook and server config I need:
   - the **prod server stack** (nginx / Apache / Caddy / a managed static host?)
     and **how it's reached** for uploads (SSH/rsync, SFTP, a control panel?);
   - where **`v53ai.eu` DNS + TLS** are managed (registrar / DNS provider), so we
     can point it at the prod server and issue the cert off-AWS.
7. **Display font** — Option A (self-host an open-source grotesk like Space
   Grotesk/Instrument Sans for headlines) or Option B (Inter-only, drop the
   Trebuchet reference)? (ADR-0003)

## C. Section-blocking (section feature-flags off until supplied — never faked)

8. **Partner / ecosystem logos** — logo files **plus written permission** to
   display each. From the deck work the candidates were: TNO, Hanze, NOM, Nebul,
   HPE, Olympia, AIC4NL, Resilient Group. Which are cleared for public logo use?
   (Partners section — ADR-0004)
9. **Named voices / quotes** — 3–4 quotes with name, title, org, and approval to
   publish (MCPV/NODUM leadership, an anchor partner, a regional/institutional
   voice). (Voices section)
10. **Team** — names, one-line bios, and photos (or agreement to use
    initials-avatars) for the About team lockup.

## D. Visual source material (blocks WS-E only; SVG fallback exists)

11. **Site render / aerial / region imagery** — any existing visual of the
    Groningen/Veendam location? If none, confirm we should **author a stylised
    SVG region map / phased-buildout diagram** in the brand palette as the
    baseline. (ADR-0008)
12. **NODUM logo files** — the repo has V53 logos; the Style Guide references
    `logo_NODUM.*` but they are not in `public/brand_assets/`. Provide them for
    the footer "operated by" lockup.

## E. Enhancing (non-blocking, strengthens proof for investor/public audiences)

13. **Disclosable hard figures** — which of these are cleared to state publicly?
    - Phased MW roadmap (e.g. MVP MW → scale MW)
    - Grid-connection status/capacity secured
    - Renewable PPA / energy sourcing
    - Any sustainability angle (Groningen post-gas / waste-heat reuse)
    Infrastructure buyers and investors think in MW, not adjectives — even one
    disclosable number materially strengthens the stat band and Location section.
14. **Copy sign-off** — do you want to review/approve the rewritten hero, About
    (broken sentence fix), and corrected coverage/UK language before it ships, or
    should I draft and you edit in-repo?

## Notes
- Anything in A–B unanswered can still let most of the site proceed; only the
  imprint truly gates the **legal** go-live, and it can ship with a tracked
  `TODO(entity)` if you accept that risk temporarily.
- For C, the guiding rule is **never fabricate social proof** — no cleared
  logo/quote means the section stays off, not filled with placeholders.
