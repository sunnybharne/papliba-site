import {
  ArrowRight,
  Blocks,
  Braces,
  Database,
  GitBranch,
  Laptop,
  Play,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { product } from '../content/product';

const capabilities = [
  {
    icon: GitBranch,
    title: 'Shape the workflow',
    copy: 'Place triggers and workers on a visual canvas, connect the steps, and keep the graph readable as it grows.',
  },
  {
    icon: Braces,
    title: 'Work with real files',
    copy: 'Each Python step owns a local folder with a main.py entry point, supporting files, and recoverable run history.',
  },
  {
    icon: Sparkles,
    title: 'Bring an agent into the step',
    copy: 'Use the local Codex workflow to draft Python changes, review them, and apply them without handing over the workspace.',
  },
] as const;

const releaseFacts = [
  'Persisted projects and workflows',
  'Multi-node selection and grouped movement',
  'Parallel branches and downstream joins',
  'Revisioned SQLite workspace storage',
] as const;

export function HomePage() {
  return (
    <>
      <section className="product-hero">
        <img
          className="product-hero__image"
          src="/papliba-workflow-dark.png"
          alt="Papliba workflow canvas with one trigger connected to two Python steps"
        />
        <div className="product-hero__scrim" />
        <div className="shell product-hero__inner">
          <div className="product-hero__copy">
            <p className="eyebrow eyebrow--light">
              <span className="live-dot" /> Open source · v{product.version} local alpha
            </p>
            <h1>Papliba</h1>
            <p className="product-hero__statement">A local-first visual workflow builder.</p>
            <p className="product-hero__lead">
              Connect triggers, code, and agent-assisted steps in a workspace that stays close to
              your files and keeps every handoff visible.
            </p>
            <div className="hero-actions">
              <Link className="button button--accent" to="/product">
                Explore the product <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="button button--quiet" to="/docs?section=run-locally">
                Run locally
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Papliba technology summary">
        <div className="shell proof-strip__inner">
          <span>
            <Laptop aria-hidden="true" /> Local-first
          </span>
          <span>
            <Blocks aria-hidden="true" /> Visual canvas
          </span>
          <span>
            <Database aria-hidden="true" /> SQLite persistence
          </span>
          <span>
            <ShieldCheck aria-hidden="true" /> Loopback runner
          </span>
        </div>
      </section>

      <section className="section section--light">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">THE PRODUCT</p>
              <h2>Automation you can see and shape.</h2>
            </div>
            <p>
              Papliba turns a loose collection of scripts and agent tasks into a deliberate graph:
              one clear trigger, small focused workers, and visible outputs.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, copy }, index) => (
              <article className="capability" key={title}>
                <div className="capability__topline">
                  <Icon aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section workflow-band">
        <div className="shell workflow-layout">
          <div className="workflow-copy">
            <p className="eyebrow eyebrow--light">A READABLE GRAPH</p>
            <h2>Trigger. Branch. Join. Review.</h2>
            <p>
              Start from a manual trigger, run sibling branches together, and hold downstream work
              until every reachable parent has finished. The canvas keeps execution structure in
              view.
            </p>
            <Link className="text-link text-link--light" to="/product">
              See product capabilities <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="workflow-demo" aria-label="Example Papliba workflow">
            <div className="flow-node flow-node--trigger">
              <span>MANUAL TRIGGER</span>
              <strong>Customer arrives</strong>
              <Play aria-hidden="true" />
            </div>
            <div className="flow-lines" aria-hidden="true">
              <i />
              <i />
            </div>
            <div className="flow-stack">
              <div className="flow-node">
                <span>PYTHON</span>
                <strong>Validate account</strong>
                <small>Ready</small>
              </div>
              <div className="flow-node">
                <span>OPENAI</span>
                <strong>Draft welcome note</strong>
                <small>Ready</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="shell local-layout">
          <div>
            <p className="eyebrow">LOCAL BY DEFAULT</p>
            <h2>Your workspace remains the workspace.</h2>
            <p className="section-lead">
              Papliba runs a browser interface and an ASP.NET Core companion on your machine. Files,
              workflow state, and tool access do not require a hosted Papliba account.
            </p>
          </div>
          <div className="runtime-list">
            <div>
              <span>01</span>
              <strong>Next.js interface</strong>
              <p>The canvas and editing experience at a loopback address.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Local .NET runner</strong>
              <p>Workspace persistence, file operations, and process boundaries.</p>
            </div>
            <div>
              <span>03</span>
              <strong>SQLite workspace</strong>
              <p>Revisioned projects and workflows stored on the same machine.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section release-band">
        <div className="shell release-layout">
          <div className="release-mark">
            <span>RELEASED</span>
            <strong>v{product.version}</strong>
            <small>Local alpha</small>
          </div>
          <div className="release-copy">
            <p className="eyebrow eyebrow--light">WHAT EXISTS TODAY</p>
            <h2>A real editing foundation, with honest limits.</h2>
            <p>
              Workflow editing, local persistence, file-backed Python steps, and execution feedback
              are implemented. Runtime execution is still a frontend demonstration while the local
              runner is hardened.
            </p>
            <ul>
              {releaseFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section final-cta section--light">
        <div className="shell final-cta__inner">
          <div>
            <p className="eyebrow">BUILD IN THE OPEN</p>
            <h2>Inspect the product, then run it locally.</h2>
          </div>
          <div className="final-cta__actions">
            <a
              className="button button--dark"
              href={product.repository}
              target="_blank"
              rel="noreferrer"
            >
              View source <ArrowRight aria-hidden="true" />
            </a>
            <Link className="button button--outline" to="/docs?section=run-locally">
              Local setup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
