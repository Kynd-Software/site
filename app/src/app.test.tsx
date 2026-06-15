import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { clearCookie, consentCookie } from '@/lib/consent-cookie';

const renderAtPath = (path: string) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

describe('App routing', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    window.history.pushState({}, '', '/');
    clearCookie(consentCookie.name);
  });

  it('renders the marketing homepage by default', () => {
    renderAtPath('/');

    expect(
      screen.getByRole('heading', { level: 1, name: /the life management app for different kinds of minds/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /join our community/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 2, name: /be first to know when kynd launches/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 2, name: /what our beta testers are saying/i })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute(
      'href',
      '/privacy-policy',
    );
    expect(
      screen.getByRole('link', {
        name: /nhs digital — survey of mental health and wellbeing, england 2023-24/i,
      }),
    ).toHaveAttribute(
      'href',
      'https://digital.nhs.uk/data-and-information/publications/statistical/adult-psychiatric-morbidity-survey/survey-of-mental-health-and-wellbeing-england-2023-24/attention-deficit-hyperactivity-disorder',
    );
  });

  it('renders the privacy policy route', () => {
    renderAtPath('/privacy-policy');

    expect(screen.getByRole('heading', { level: 1, name: /privacy policy/i })).toBeInTheDocument();
    expect(screen.getByText(/what we collect/i)).toBeInTheDocument();
  });

  it('renders the about route', () => {
    renderAtPath('/about');

    expect(screen.getByRole('heading', { level: 1, name: /this is kynd/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /graham/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /david/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /visit the facebook group/i })).toHaveAttribute(
      'href',
      'https://www.facebook.com/groups/kyndsoft/',
    );
  });

  it('renders the initial features route without adding it to navigation', () => {
    renderAtPath('/initial-features');

    expect(screen.getByRole('heading', { level: 1, name: /feature set v1\.0/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /routines/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /any other comments/i })).toBeInTheDocument();
    expect(screen.getAllByRole('textbox')).toHaveLength(8);
    expect(screen.getByRole('link', { name: /launch interactive demo/i })).toHaveAttribute(
      'href',
      '/initial-feature-designs/interactive-demo.html',
    );
    expect(screen.getByRole('button', { name: /submit feedback/i })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /^initial features$/i })).not.toBeInTheDocument();
  });

  it('scrolls to the top when rendering a legal route', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo');

    renderAtPath('/privacy-policy');

    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'auto' });
  });

  it('renders the cookie policy route and consent controls accessibly', () => {
    renderAtPath('/cookie-policy');

    expect(screen.getByRole('heading', { level: 1, name: /cookie policy/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /accept cookies/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /decline non-essential cookies/i }),
    ).toBeInTheDocument();
  });

  it('hides the consent banner once a choice has already been stored', () => {
    document.cookie = `${consentCookie.name}=${consentCookie.acceptValue}; Path=/; SameSite=Lax`;

    renderAtPath('/');

    expect(screen.queryByRole('region', { name: /cookie consent/i })).not.toBeInTheDocument();
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
      screen.getByRole('heading', { level: 1, name: /the life management app for different kinds of minds/i }),
    ).toBeInTheDocument();
  });
});
