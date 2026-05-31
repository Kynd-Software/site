import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

const renderAtPath = (path: string) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

describe('App routing', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    window.history.pushState({}, '', '/');
  });

  it('renders the marketing homepage by default', () => {
    renderAtPath('/');

    expect(
      screen.getByRole('heading', { level: 1, name: /the productivity app for different kinds of minds/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute(
      'href',
      '/privacy-policy',
    );
  });

  it('renders the privacy policy route', () => {
    renderAtPath('/privacy-policy');

    expect(screen.getByRole('heading', { level: 1, name: /privacy policy/i })).toBeInTheDocument();
    expect(screen.getByText(/what we collect/i)).toBeInTheDocument();
  });

  it('renders the cookie policy route and consent controls accessibly', () => {
    renderAtPath('/cookie-policy');

    expect(screen.getByRole('heading', { level: 1, name: /cookie policy/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /accept cookies/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /decline non-essential cookies/i }),
    ).toBeInTheDocument();
  });

  it('renders the terms and conditions route', () => {
    renderAtPath('/terms-and-conditions');

    expect(
      screen.getByRole('heading', { level: 1, name: /terms & conditions/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/joining the waitlist does not create a purchase/i)).toBeInTheDocument();
  });

  it('falls back to the homepage for unknown routes', () => {
    renderAtPath('/nope');

    expect(
      screen.getByRole('heading', { level: 1, name: /the productivity app for different kinds of minds/i }),
    ).toBeInTheDocument();
  });
});
