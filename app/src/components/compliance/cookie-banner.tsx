import { useMemo, useState } from 'react';
import type { ReactElement } from 'react';
import { Link } from 'wouter';
import { consentCookie, getCookieValue, setConsentCookie } from '@/lib/consent-cookie';
import { initAnalytics } from '@/lib/firebase';
import styles from './cookie-banner.module.css';

export const CookieBanner = (): ReactElement | null => {
  const shouldShowInitially = useMemo(
    () => getCookieValue(consentCookie.name) === undefined,
    [],
  );
  const [isVisible, setIsVisible] = useState(shouldShowInitially);

  if (!isVisible) {
    return null;
  }

  const handleConsent = (value: 'true' | 'false'): void => {
    setConsentCookie({ value });
    setIsVisible(false);

    if (value === consentCookie.acceptValue) {
      initAnalytics();
    }
  };

  return (
    <div className={styles.banner} role="region" aria-label="Cookie consent">
      <p className={styles.content}>
        <strong>We use cookies carefully.</strong> Right now, kynd only uses a consent cookie to
        remember your choice. If we introduce analytics or other non-essential cookies later, we
        will ask first. Read the full{' '}
        <Link href="/cookie-policy" className={styles.policyLink}>
          Cookie Policy
        </Link>
        .
      </p>

      <div className={styles.buttonWrap}>
        <button
          type="button"
          className={styles.declineButton}
          aria-label="Decline non-essential cookies"
          onClick={() => handleConsent(consentCookie.declineValue)}
        >
          Decline non-essential
        </button>
        <button
          type="button"
          className={styles.acceptButton}
          aria-label="Accept cookies"
          onClick={() => handleConsent(consentCookie.acceptValue)}
        >
          Accept cookies
        </button>
      </div>
    </div>
  );
};
