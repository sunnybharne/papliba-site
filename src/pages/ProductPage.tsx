import {
  Boxes,
  Code2,
  Copy,
  Database,
  GitFork,
  History,
  MousePointer2,
  Play,
  RotateCcw,
  TerminalSquare,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { product } from '../content/product';

const canvasTools = [
  {
    icon: MousePointer2,
    title: 'Direct manipulation',
    copy: 'Drag triggers and nodes, marquee-select a group, and preserve spacing while moving it.',
  },
  {
    icon: GitFork,
    title: 'Graph-aware connections',
    copy: 'Create, remove, and redirect edges while the workflow remains visible on one canvas.',
  },
  {
    icon: Copy,
    title: 'Structured duplication',
    copy: 'Copy a selected subgraph with fresh IDs, offset positions, and preserved internal edges.',
  },
  {
    icon: RotateCcw,
    title: 'Undoable editing',
    copy: 'Reverse canvas edits without losing the project or leaving the workflow context.',
  },
] as const;

const localTools = [
  { icon: Code2, label: 'Python step folders', value: 'main.py plus supporting files' },
  {
    icon: TerminalSquare,
    label: 'Open in',
    value: 'VS Code, Cursor, Finder, Terminal, Ghostty, or Xcode',
  },
  { icon: History, label: 'Run history', value: 'timestamped logs with configurable retention' },
  { icon: Database, label: 'Persistence', value: 'revisioned SQLite workspace state' },
] as const;

export function ProductPage() {
  return (
    <>
      <section className="page-intro page-intro--product">
        <div className="shell page-intro__inner">
          <p className="eyebrow eyebrow--light">PAPLIBA PRODUCT</p>
          <h1>Build the graph. Keep control of the work.</h1>
          <p>
            Papliba gives local automation a visual surface without hiding the files, tools, and
            execution boundaries that make a workflow understandable.
          </p>
        </div>
      </section>

      <section className="product-capture section--light">
        <div className="shell">
          <figure>
            <img
              src="/papliba-workflow-dark.png"
              alt="Papliba application showing a branched workflow"
            />
            <figcaption>
              <span>REAL PRODUCT UI</span>
              <span>Dark workspace · v{product.version}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--light">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">THE CANVAS</p>
              <h2>Editing that respects structure.</h2>
            </div>
            <p>
              Every interaction is designed around the graph, not around a stack of disconnected
              configuration forms.
            </p>
          </div>
          <div className="tool-grid">
            {canvasTools.map(({ icon: Icon, title, copy }) => (
              <article key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-execution">
        <div className="shell execution-layout">
          <div>
            <p className="eyebrow eyebrow--light">EXECUTION MODEL</p>
            <h2>Run from the trigger, not from a list.</h2>
            <p>
              Papliba discovers the reachable graph from the selected trigger. Sibling branches can
              move together; downstream joins wait for their parents; disconnected work remains
              visibly disconnected.
            </p>
          </div>
          <ol className="execution-sequence">
            <li>
              <Play aria-hidden="true" />
              <span>
                <strong>Start</strong>
                <small>Press the trigger on the canvas.</small>
              </span>
            </li>
            <li>
              <GitFork aria-hidden="true" />
              <span>
                <strong>Branch</strong>
                <small>Run independent reachable work together.</small>
              </span>
            </li>
            <li>
              <Boxes aria-hidden="true" />
              <span>
                <strong>Join</strong>
                <small>Wait until each reachable parent completes.</small>
              </span>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section--light">
        <div className="shell local-tools-layout">
          <div>
            <p className="eyebrow">FILES STAY REAL</p>
            <h2>A workflow step can still be a folder you understand.</h2>
            <p className="section-lead">
              Python work lives in ordinary local files, opens in familiar tools, and keeps its logs
              beside the code.
            </p>
          </div>
          <dl className="local-tool-list">
            {localTools.map(({ icon: Icon, label, value }) => (
              <div key={label}>
                <dt>
                  <Icon aria-hidden="true" />
                  {label}
                </dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section product-status">
        <div className="shell status-layout">
          <div>
            <p className="eyebrow eyebrow--light">CURRENT STATUS</p>
            <h2>Useful alpha, not finished infrastructure.</h2>
          </div>
          <div>
            <p>
              Version {product.version} includes the application foundation and a functional local
              runner. Workflow output is still simulated while durable execution is developed.
            </p>
            <div className="status-actions">
              <Link className="button button--accent" to="/docs?section=run-locally">
                Run locally
              </Link>
              <Link className="button button--quiet" to="/roadmap">
                Read the roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
