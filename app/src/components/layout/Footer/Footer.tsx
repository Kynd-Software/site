import { Link } from 'wouter';
import { homeSectionLinks, legalLinks } from '@/lib/site-navigation';
import { useHomeSectionNavigation } from '@/hooks/use-home-section-navigation';
import styles from './Footer.module.css';

export function Footer() {
  const { navigateToSection } = useHomeSectionNavigation();

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <img src="/logomark.png" alt="kynd" />
            </div>
            <p className={styles.footerTagline}>
              A life management app designed for the ADHD mind. Kind, flexible, and genuinely helpful.
            </p>
          </div>

          <nav className={styles.footerCols} aria-label="Footer navigation">
            <div className={styles.footerCol}>
              <h4>Product</h4>
              <ul>
                {homeSectionLinks.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`/#${id}`}
                      onClick={(event) => {
                        event.preventDefault();
                        navigateToSection(id);
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About</Link></li>
                {/* <li><a href="#">Blog</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Contact</a></li> */}
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>Connect</h4>
              <ul>
                <li><a href="https://www.instagram.com/kyndsoft/">Instagram</a></li>
                {/* <li><a href="#">TikTok</a></li> */}
                <li><a href="https://www.facebook.com/groups/kyndsoft/" target="_blank" rel="noreferrer">Facebook</a></li>
                {/* <li><a href="#">Newsletter</a></li> */}
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>Legal</h4>
              <ul>
                {legalLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>© 2026 kynd. All rights reserved.</p>
          <p className={styles.footerCitation}>
            ADHD prevalence source:{' '}
            <a
              href="https://digital.nhs.uk/data-and-information/publications/statistical/adult-psychiatric-morbidity-survey/survey-of-mental-health-and-wellbeing-england-2023-24/attention-deficit-hyperactivity-disorder"
              target="_blank"
              rel="noreferrer"
            >
              NHS Digital — Survey of Mental Health and Wellbeing, England 2023-24
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
