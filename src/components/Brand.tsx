import { Link } from 'react-router-dom';

export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Papliba home">
      <span className="brand-signal" aria-hidden="true" />
      <span className="brand-word">Papliba</span>
    </Link>
  );
}
