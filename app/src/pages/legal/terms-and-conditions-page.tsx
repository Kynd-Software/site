import { LegalPageLayout } from './legal-page-layout';
import styles from './legal-page.module.css';

export const TermsAndConditionsPage = () => {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      summary="These terms explain how you may use the kynd website and what to expect while the product is still in an early, pre-launch stage."
      lastUpdated="31 May 2026"
    >
      <section className={styles.section}>
        <h2>Using the website</h2>
        <p>
          You may use the kynd website for lawful, personal, and non-commercial purposes. You agree
          not to misuse the site, interfere with its operation, or attempt to gain unauthorised
          access to any systems, accounts, or data.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Waitlist and product information</h2>
        <p>
          Joining the waitlist does not create a purchase, subscription, or guaranteed product
          entitlement. Any timelines, launch details, pricing, or feature descriptions shared on the
          site are subject to change as the product evolves.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Intellectual property</h2>
        <p>
          All content on this website, including branding, copy, graphics, and interface elements,
          belongs to kynd or its licensors unless stated otherwise. You may not reproduce, adapt, or
          distribute that content without permission.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Liability and updates</h2>
        <p>
          The website is provided on an “as is” basis while the service is being developed. To the
          fullest extent permitted by law, kynd does not guarantee uninterrupted availability and is
          not liable for losses arising from temporary downtime, inaccuracies, or changes to the
          pre-launch experience. These terms may be updated from time to time, and the latest version
          published on this site will apply.
        </p>
      </section>
    </LegalPageLayout>
  );
};
