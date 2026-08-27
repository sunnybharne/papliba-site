import { ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CopyCode } from '../components/CopyCode';
import { product } from '../content/product';

const install = `git clone https://github.com/sunnybharne/papliba.git
cd papliba
npm install
npm install --prefix src/Papliba.Web`;

const startRunner = `npm run start:runner`;
const startWeb = `npm run start:web`;
const qualityChecks = `npm run validate`;

const docNav = [
  { label: 'Start here', id: 'start-here' },
  { label: 'Current status', id: 'current-status' },
  { label: 'Architecture', id: 'architecture' },
  { label: 'Run locally', id: 'run-locally' },
  { label: 'Workspace data', id: 'workspace-data' },
  { label: 'Validation', id: 'validation' },
] as const;

export function DocsPage() {
  const [searchParams] = useSearchParams();
  const selectedSection = searchParams.get('section');

  useEffect(() => {
    if (!selectedSection) return;
    document.getElementById(selectedSection)?.scrollIntoView({ block: 'start' });
  }, [selectedSection]);

  return (
    <>
      <section className="page-intro docs-intro">
        <div className="shell page-intro__inner docs-intro__inner">
          <div>
            <p className="eyebrow eyebrow--light">DOCUMENTATION</p>
            <h1>Run Papliba where the work lives.</h1>
            <p>
              The current alpha is a local application: a Next.js interface, an ASP.NET Core runner,
              and a revisioned SQLite workspace.
            </p>
          </div>
          <div className="version-readout">
            <span>APPLICATION</span>
            <strong>v{product.version}</strong>
            <small>{product.phase}</small>
          </div>
        </div>
      </section>

      <div className="docs-band">
        <div className="shell docs-layout">
          <aside className="docs-sidebar">
            <span>ON THIS PAGE</span>
            <nav aria-label="Documentation sections">
              {docNav.map((item) => (
                <Link key={item.id} to={`/docs?section=${item.id}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <a href={product.repository} target="_blank" rel="noreferrer">
              Application source <ExternalLink aria-hidden="true" />
            </a>
          </aside>

          <article className="docs-content">
            <section id="start-here">
              <p className="docs-overline">OVERVIEW</p>
              <h2>Start here</h2>
              <p className="docs-lead">
                Papliba is a local-first visual workflow builder. Projects contain workflows;
                workflows contain triggers and connected steps; Python steps map to ordinary folders
                on disk.
              </p>
              <div className="docs-note docs-note--green">
                <strong>No hosted application account is required</strong>
                <p>
                  The public website explains the product. The application and its runner execute
                  locally.
                </p>
              </div>
            </section>

            <section id="current-status">
              <p className="docs-overline">STATUS</p>
              <h2>Current status</h2>
              <div className="status-matrix">
                <div>
                  <span className="matrix-state matrix-state--available">AVAILABLE</span>
                  <strong>Visual workflow editing</strong>
                  <p>
                    Projects, workflows, triggers, workers, connections, selection, copy/paste, and
                    undo.
                  </p>
                </div>
                <div>
                  <span className="matrix-state matrix-state--available">AVAILABLE</span>
                  <strong>Durable local workspace</strong>
                  <p>
                    ASP.NET Core APIs, SQLite persistence, Python folders, file previews, and run
                    logs.
                  </p>
                </div>
                <div>
                  <span className="matrix-state matrix-state--in-progress">IN PROGRESS</span>
                  <strong>Production execution</strong>
                  <p>
                    The graph runner currently demonstrates execution state with simulated step
                    output.
                  </p>
                </div>
              </div>
            </section>

            <section id="architecture">
              <p className="docs-overline">ARCHITECTURE</p>
              <h2>Two local processes, one workspace</h2>
              <p>
                The browser interface owns presentation and canvas interaction. The runner owns
                local persistence, file operations, Codex authentication checks, and OS-level open
                actions.
              </p>
              <div className="architecture-rows">
                <div>
                  <span>3000</span>
                  <strong>Next.js + React</strong>
                  <p>Local browser interface and workflow editor.</p>
                </div>
                <div>
                  <span>5127</span>
                  <strong>ASP.NET Core</strong>
                  <p>Loopback runner and workspace API.</p>
                </div>
                <div>
                  <span>DB</span>
                  <strong>SQLite</strong>
                  <p>Revisioned project and workflow state.</p>
                </div>
              </div>
            </section>

            <section id="run-locally">
              <p className="docs-overline">LOCAL SETUP</p>
              <h2>Run locally</h2>
              <p>
                Install Node.js, npm, and the .NET 10 SDK, then install both JavaScript workspaces:
              </p>
              <CopyCode label="Install">{install}</CopyCode>
              <p>Start the runner in one terminal:</p>
              <CopyCode label="Terminal 1">{startRunner}</CopyCode>
              <p>Start the web interface in another terminal:</p>
              <CopyCode label="Terminal 2">{startWeb}</CopyCode>
              <p>
                Open <code>http://127.0.0.1:3000/app</code>. The runner listens only on{' '}
                <code>http://127.0.0.1:5127</code>.
              </p>
            </section>

            <section id="workspace-data">
              <p className="docs-overline">DATA</p>
              <h2>Workspace data</h2>
              <p>
                Papliba stores its workspace in the operating system's local application-data
                directory. Python steps receive their own project and workflow folders with a{' '}
                <code>main.py</code>
                entry file.
              </p>
              <div className="docs-note">
                <strong>Custom data directory</strong>
                <p>
                  Set <code>PAPLIBA_DATA_DIRECTORY</code> before starting the runner when
                  development or testing needs an isolated workspace.
                </p>
              </div>
            </section>

            <section id="validation">
              <p className="docs-overline">QUALITY</p>
              <h2>Validate the application</h2>
              <p>
                The repository validates the architecture diagram, .NET runner, and production web
                build together:
              </p>
              <CopyCode label="Checks">{qualityChecks}</CopyCode>
              <p>
                Release history and implementation details are maintained in the application
                repository's changelog and release notes.
              </p>
              <a
                className="docs-source-link"
                href={`${product.repository}/blob/main/CHANGELOG.md`}
                target="_blank"
                rel="noreferrer"
              >
                Read the application changelog <ExternalLink aria-hidden="true" />
              </a>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
