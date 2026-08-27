import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { App } from './App';

Object.defineProperty(window, 'scrollTo', { value: vi.fn(), writable: true });
const scrollIntoView = vi.fn();
Object.defineProperty(Element.prototype, 'scrollIntoView', {
  value: scrollIntoView,
  writable: true,
});

function renderApp(route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
}

describe('Papliba product site', () => {
  it('presents Papliba as the local-first visual workflow builder', () => {
    renderApp();

    expect(screen.getByRole('heading', { name: 'Papliba' })).toBeInTheDocument();
    expect(screen.getAllByText(/a local-first visual workflow builder/i)).not.toHaveLength(0);
  });

  it('navigates from the primary call to action to the product', async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(screen.getByRole('link', { name: /explore the product/i }));

    expect(
      screen.getByRole('heading', { name: /build the graph. keep control of the work/i }),
    ).toBeInTheDocument();
  });

  it('states the current execution limit in the documentation', () => {
    renderApp('/docs');

    expect(
      screen.getByRole('heading', { name: /run papliba where the work lives/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/simulated step output/i)).toBeInTheDocument();
  });

  it('keeps documentation section links inside the docs route', async () => {
    const user = userEvent.setup();
    renderApp('/docs');

    await user.click(screen.getByRole('link', { name: 'Architecture' }));

    expect(
      screen.getByRole('heading', { name: /run papliba where the work lives/i }),
    ).toBeInTheDocument();
    expect(scrollIntoView).toHaveBeenCalled();
  });

  it('moves focus without changing routes when the skip link is used', async () => {
    const user = userEvent.setup();
    renderApp('/product');

    await user.click(screen.getByRole('link', { name: /skip to content/i }));

    expect(
      screen.getByRole('heading', { name: /build the graph. keep control of the work/i }),
    ).toBeInTheDocument();
    await waitFor(() => expect(document.getElementById('main-content')).toHaveFocus());
  });
});
