import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <img src="/logomark.png" alt="kynd" />
            </div>
            <p className={styles.footerTagline}>
              A life management app designed for the ADHD mind — kind, flexible, and genuinely helpful.
            </p>
          </div>

          <nav className={styles.footerCols} aria-label="Footer navigation">
            <div className={styles.footerCol}>
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#for-adhd">For ADHD</a></li>
                <li><a href="#waitlist">Early access</a></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">TikTok</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Newsletter</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>© 2026 kynd. All rights reserved.</p>
          <nav className={styles.footerLegal} aria-label="Legal navigation">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
