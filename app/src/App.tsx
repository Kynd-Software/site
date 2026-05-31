import { useEffect } from 'react';
import { Route, Switch } from 'wouter';
import { useLocation } from 'wouter';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/compliance/cookie-banner';
import { HomePage } from '@/pages/home-page';
import { PrivacyPolicyPage } from '@/pages/legal/privacy-policy-page';
import { CookiePolicyPage } from '@/pages/legal/cookie-policy-page';
import { TermsAndConditionsPage } from '@/pages/legal/terms-and-conditions-page';

const scrollToHashTarget = (): void => {
  if (window.location.pathname !== '/' || !window.location.hash) {
    return;
  }

  const targetId = decodeURIComponent(window.location.hash.slice(1));

  window.requestAnimationFrame(() => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
};

export default function App() {
  const [location] = useLocation();

  useEffect(() => {
    scrollToHashTarget();

    const handleHashChange = (): void => {
      scrollToHashTarget();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/privacy-policy" component={PrivacyPolicyPage} />
          <Route path="/cookie-policy" component={CookiePolicyPage} />
          <Route path="/terms-and-conditions" component={TermsAndConditionsPage} />
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
