import { Link } from 'react-router-dom';

function WorkflowMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 28 28" aria-hidden="true">
      <path d="M9 14c5 0 5-7 11-7M9 14c5 0 5 7 11 7" />
      <rect className="brand-mark__trigger" x="3" y="10" width="8" height="8" rx="2" />
      <rect className="brand-mark__step" x="19" y="4" width="7" height="7" rx="2" />
      <rect className="brand-mark__step" x="19" y="17" width="7" height="7" rx="2" />
    </svg>
  );
}

export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Papliba home">
      <WorkflowMark />
      <span className="brand-word">Papliba</span>
    </Link>
  );
}
