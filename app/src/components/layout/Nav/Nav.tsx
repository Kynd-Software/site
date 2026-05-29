import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui';
import logomark from '@/assets/images/logomark.png';
import styles from './Nav.module.css';

const navLinks = [
  { href: '#for-adhd', label: 'For ADHD' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#waitlist', label: 'Early access' },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setCtaVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );
    observerRef.current.observe(hero);

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        <a href="#" className={styles.logo} aria-label="kynd — go to top">
          <img src={logomark} alt="kynd" className={styles.logoImg} />
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          {ctaVisible && (
            <Button variant="primary" size="sm" onClick={() => (window.location.href = '#waitlist')}>
              Join waitlist
            </Button>
          )}
          <button
            className={styles.menuToggle}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </button>
        </div>
      </div>
    </header>
  );
}
