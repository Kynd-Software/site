import { useEffect } from 'react';
import { Route, Switch } from 'wouter';
import { useLocation } from 'wouter';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/compliance/cookie-banner';
import { scrollToSection } from '@/lib/scroll-to-section';
import { getCookieValue, consentCookie } from '@/lib/consent-cookie';
import { initAnalytics } from '@/lib/firebase';
import { HomePage } from '@/pages/home-page';
import { AboutPage } from '@/pages/about-page';
import { InitialFeaturesPage } from '@/pages/initial-features-page';
import { InvitePage } from '@/pages/invite-page';
import { PrivacyPolicyPage } from '@/pages/legal/privacy-policy-page';
import { CookiePolicyPage } from '@/pages/legal/cookie-policy-page';
import { TermsAndConditionsPage } from '@/pages/legal/terms-and-conditions-page';
import { FeedbackPage } from '@/pages/feedback-page';

const scrollToHashTarget = (): void => {
  if (window.location.pathname !== '/' || !window.location.hash) {
    return;
  }

  const targetId = decodeURIComponent(window.location.hash.slice(1));

  window.requestAnimationFrame(() => {
    const target = document.getElementById(targetId);
    if (target) {
      scrollToSection(target, 'auto');
    }
  });
};

const scrollToPageTop = (): void => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
};

export default function App() {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.pathname === '/' && window.location.hash) {
      scrollToHashTarget();
    } else {
      scrollToPageTop();
    }

    const handleHashChange = (): void => {
      scrollToHashTarget();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location]);

  useEffect(() => {
    const consent = getCookieValue(consentCookie.name);
    if (consent === consentCookie.acceptValue) {
      initAnalytics();
    }
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/initial-features" component={InitialFeaturesPage} />
          <Route path="/invite/:id" component={InvitePage} />
          <Route path="/privacy-policy" component={PrivacyPolicyPage} />
          <Route path="/cookie-policy" component={CookiePolicyPage} />
          <Route path="/terms-and-conditions" component={TermsAndConditionsPage} />
          <Route path="/feedback" component={FeedbackPage} />
          <Route>
            <HomePage />
          </Route>
        </Switch>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
