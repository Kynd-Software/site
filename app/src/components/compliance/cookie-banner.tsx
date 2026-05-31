import CookieConsent from 'react-cookie-consent';
import { Link } from 'wouter';
import styles from './cookie-banner.module.css';

export const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      cookieName="kyndCookieConsent"
      buttonText="Accept cookies"
      declineButtonText="Decline non-essential"
      ariaAcceptLabel="Accept cookies"
      ariaDeclineLabel="Decline non-essential cookies"
      enableDeclineButton
      setDeclineCookie
      sameSite="lax"
      extraCookieOptions={{ path: '/' }}
      disableStyles
      containerClasses={styles.banner}
      contentClasses={styles.content}
      buttonWrapperClasses={styles.buttonWrap}
      buttonClasses={styles.acceptButton}
      declineButtonClasses={styles.declineButton}
      overlayClasses={styles.overlay}
    >
      <strong>We use cookies carefully.</strong> Right now, kynd only uses a consent cookie to
      remember your choice. If we introduce analytics or other non-essential cookies later, we will
      ask first. Read the full{' '}
      <Link href="/cookie-policy" className={styles.policyLink}>
        Cookie Policy
      </Link>
      .
    </CookieConsent>
  );
};
