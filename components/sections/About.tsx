import { Team } from '@/components/sections/Team'

export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about__inner">
        <div>
          <span className="section-label reveal">About</span>
          <h2 className="section-title reveal rd-1" id="about-heading">
            A backbone for
            <br />
            European AI.
          </h2>
          <span className="amber-rule reveal rd-2" aria-hidden="true" />
          <p className="about__lead reveal rd-2">
            An AI Compute Cluster for the workloads that define the next decade.
          </p>
        </div>

        <div>
          <div className="about__body reveal rd-2">
            <p>
              <strong>V53 is a next generation AI Compute Cluster</strong> strategically
              located in the Groningen region, designed to become a critical backbone of
              Europe&apos;s digital economy. It exists for one reason: to give European
              AI builders, researchers and enterprises a fully equipped, industrial grade
              place to run the workloads that matter.
            </p>
            <p>
              Across the continent, demand for large scale AI and high performance
              computing has outpaced supply. Standard clouds throttle, sovereign options
              are scarce, and projects stall on capacity that has not been built.
              V53 directly addresses that structural shortage with scalable, demand ready
              infrastructure engineered for enterprise AI adoption.
            </p>
            <p>
              The cluster is being built for the long arc: training, inference, HPC and
              sovereign hosting under one roof, with EU jurisdiction by default. MVP
              compute goes live in 2027. Forward capacity is open to discuss today.
            </p>
            <p>
              The V53 AI Cluster delivers sovereign by design infrastructure and hands
              on cluster management, built for regulated, enterprise and public sector
              AI workloads that must stay under EU and Dutch jurisdiction.
            </p>
            <p>
              V53 is founded by a team of seasoned serial entrepreneurs with a proven
              track record across infrastructure development, finance, digital platforms,
              clean technology, and regulatory strategy. This multidisciplinary expertise
              uniquely positions the team to execute complex, capital intensive projects
              and to navigate regulatory, sustainability, and market dynamics at scale.
            </p>
          </div>
          <div className="about__pillars reveal rd-3">
            <div className="about__pillar">
              <div className="about__pillar-label">Industrial grade</div>
              <div className="about__pillar-text">Engineered for sustained, high density AI and HPC workloads at scale.</div>
            </div>
            <div className="about__pillar">
              <div className="about__pillar-label">EU sovereign</div>
              <div className="about__pillar-text">EU sovereignty from the infrastructure layers.</div>
            </div>
            <div className="about__pillar">
              <div className="about__pillar-label">Demand ready</div>
              <div className="about__pillar-text">Capacity designed and developed to meet demand.</div>
            </div>
            <div className="about__pillar">
              <div className="about__pillar-label">Strategically located</div>
              <div className="about__pillar-text">Groningen: abundant power, dark fibre and a clear path to scale.</div>
            </div>
          </div>
        </div>
      </div>

      <Team />
    </section>
  )
}
