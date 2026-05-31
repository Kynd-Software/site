import { LegalPageLayout } from './legal-page-layout';
import styles from './legal-page.module.css';

export const CookiePolicyPage = () => {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      summary="This policy explains the cookies used on the kynd website and how your consent choices are stored."
      lastUpdated="31 May 2026"
    >
      <section className={styles.section}>
        <h2>How kynd uses cookies</h2>
        <p>
          Cookies are small text files stored on your device so a site can remember information
          about your visit. kynd currently uses a consent cookie so the site can remember whether
          you accepted or declined non-essential cookies.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Cookies currently in use</h2>
        <h3>Consent preference cookie</h3>
        <p>
          This cookie stores your cookie preference so the banner does not appear on every page
          load. It is required to respect the choice you made and does not track you for advertising
          or profiling purposes.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Future changes</h2>
        <p>
          If kynd starts using analytics, performance, or marketing cookies in the future, this
          policy will be updated before those cookies are activated, and the consent banner will be
          used to request permission where needed.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Managing cookies</h2>
        <p>
          Most browsers let you remove or block cookies through their settings. Disabling cookies
          may affect how some parts of a website behave, but you can still change your browser
          preferences at any time.
        </p>
      </section>
    </LegalPageLayout>
  );
};
