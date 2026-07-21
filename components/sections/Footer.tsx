import { EMAIL, ENTITY, LINKEDIN_URL } from '@/content/site'

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand_assets/logo_V53_light.png" alt="V53 AI Cluster" />
          </div>
          <p className="footer__tag">
            V53 AI Cluster, next generation AI compute for Europe&apos;s digital
            economy.
          </p>
          <p className="footer__operated">Operated by {ENTITY.operatedBy}</p>
        </div>

        <div className="footer__cols">
          <div>
            <div className="footer__col-label">Explore</div>
            <ul className="footer__col-list" role="list">
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#faq">FAQ</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer__col-label">Contact</div>
            <ul className="footer__col-list" role="list">
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <a href="/#contact">Reserve capacity</a>
              </li>
              {LINKEDIN_URL ? (
                <li>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
          <div>
            <div className="footer__col-label">Legal</div>
            <ul className="footer__col-list" role="list">
              <li>
                <a href="/privacy/">Privacy</a>
              </li>
              <li>
                <a href="/cookies/">Cookies</a>
              </li>
              <li>
                <a href="/imprint/">Imprint</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} V53 AI Cluster · MCPV. All rights reserved.</span>
        <span>Infra enabling AI</span>
      </div>
    </footer>
  )
}
