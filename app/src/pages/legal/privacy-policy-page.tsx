import { LegalPageLayout } from './legal-page-layout';
import styles from './legal-page.module.css';

export const PrivacyPolicyPage = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      summary="This policy explains what information kynd collects today, why we collect it, and how we keep that information safe while we build and improve the product."
      lastUpdated="31 May 2026"
    >
      <section className={styles.section}>
        <h2>What we collect</h2>
        <p>
          When you join the kynd waitlist or contact us, we may collect personal information such as
          your name, email address, and any details you choose to share with us. We also collect
          limited technical information, such as browser type and device information, when needed to
          keep the site secure and working properly.
        </p>
      </section>

      <section className={styles.section}>
        <h2>How we use your information</h2>
        <ul>
          <li>To manage the waitlist and send launch or product updates you have asked for.</li>
          <li>To respond to enquiries, feedback, or support requests.</li>
          <li>To monitor site reliability, prevent misuse, and improve the experience.</li>
          <li>To meet legal or regulatory obligations where they apply.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>How we store and share data</h2>
        <p>
          We keep personal information only for as long as it is needed for the purpose it was
          collected for, or for as long as the law requires. We do not sell personal information.
          We may share information with trusted service providers who help us run the site, manage
          communications, or support product operations, but only where that support is necessary
          and subject to appropriate safeguards.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Your choices</h2>
        <p>
          You can ask to access, correct, or delete the personal information we hold about you, and
          you can unsubscribe from product emails at any time. If we introduce new processing that
          requires consent, we will request that consent before using your data in that way.
        </p>
      </section>
    </LegalPageLayout>
  );
};
