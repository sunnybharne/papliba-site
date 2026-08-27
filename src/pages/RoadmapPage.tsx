import { ArrowRight, Check, Circle, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { product } from '../content/product';

const phases = [
  {
    label: 'RELEASED',
    title: 'Local editing foundation',
    detail: `v${product.version}`,
    state: 'complete',
    items: [
      'Persisted projects and workflows',
      'Visual trigger and worker canvas',
      'Python step folders and run logs',
      'Parallel graph feedback and joins',
    ],
  },
  {
    label: 'NEXT',
    title: 'Durable local execution',
    detail: 'Active development',
    state: 'next',
    items: [
      'Execute real Python steps through the local runner',
      'Capture real stdout, stderr, exit state, and duration',
      'Make cancellation and failures explicit on the graph',
      'Harden workspace and process permission boundaries',
    ],
  },
  {
    label: 'AFTER',
    title: 'Installable personal product',
    detail: 'Planned',
    state: 'planned',
    items: [
      'Package the interface and runner together',
      'Create a dependable first-run experience',
      'Add workspace backup and recovery controls',
      'Automate signed cross-platform releases',
    ],
  },
  {
    label: 'LATER',
    title: 'Team and enterprise boundaries',
    detail: 'Exploration',
    state: 'planned',
    items: [
      'Shared workflows and role-aware permissions',
      'Central execution with visible audit history',
      'Managed provider policy and team credentials',
      'Keep the personal product local-first',
    ],
  },
] as const;

export function RoadmapPage() {
  return (
    <>
      <section className="page-intro roadmap-intro">
        <div className="shell page-intro__inner">
          <p className="eyebrow eyebrow--light">PUBLIC ROADMAP</p>
          <h1>Turn a careful editor into a dependable runner.</h1>
          <p>
            Papliba already has a substantial local editing foundation. The next work is to make the
            execution boundary as thoughtful as the canvas.
          </p>
        </div>
      </section>

      <section className="section section--light roadmap-section">
        <div className="shell">
          <div className="roadmap-list">
            {phases.map((phase, index) => (
              <article className={`roadmap-phase roadmap-phase--${phase.state}`} key={phase.label}>
                <div className="roadmap-phase__index">{String(index + 1).padStart(2, '0')}</div>
                <div className="roadmap-phase__main">
                  <div className="roadmap-phase__heading">
                    <div>
                      <span>{phase.label}</span>
                      <h2>{phase.title}</h2>
                    </div>
                    <small>{phase.detail}</small>
                  </div>
                  <ul>
                    {phase.items.map((item) => (
                      <li key={item}>
                        {phase.state === 'complete' ? (
                          <Check aria-hidden="true" />
                        ) : phase.state === 'next' ? (
                          <Wrench aria-hidden="true" />
                        ) : (
                          <Circle aria-hidden="true" />
                        )}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section roadmap-principle">
        <div className="shell roadmap-principle__inner">
          <div>
            <p className="eyebrow eyebrow--light">PRODUCT PRINCIPLE</p>
            <h2>Local-first remains a boundary, not a temporary limitation.</h2>
          </div>
          <p>
            A future team product may add shared infrastructure. The personal product should still
            keep workspace authority, files, and credentials on the user's machine by default.
          </p>
        </div>
      </section>

      <section className="section section--light roadmap-cta">
        <div className="shell roadmap-cta__inner">
          <div>
            <p className="eyebrow">CURRENT RELEASE</p>
            <h2>Start with the application that exists today.</h2>
          </div>
          <div className="roadmap-cta__actions">
            <Link className="button button--dark" to="/docs?section=run-locally">
              Run locally <ArrowRight aria-hidden="true" />
            </Link>
            <a
              className="button button--outline"
              href={product.repository}
              target="_blank"
              rel="noreferrer"
            >
              Follow development
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
