import { useState, useEffect, useRef } from 'react';
import type { MouseEvent } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui';
import logomark from '@/assets/images/logomark.png';
import { homeSectionLinks } from '@/lib/site-navigation';
import { useHomeSectionNavigation } from '@/hooks/use-home-section-navigation';
import styles from './Nav.module.css';

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [location, navigate] = useLocation();
  const { navigateToSection } = useHomeSectionNavigation();

  useEffect(() => {
    observerRef.current?.disconnect();

    if (location !== '/') {
      setCtaVisible(false);
      return;
    }

    const hero = document.getElementById('home');
    if (!hero) {
      setCtaVisible(false);
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setCtaVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );
    observerRef.current.observe(hero);

    return () => observerRef.current?.disconnect();
  }, [location]);

  const handleSectionClick = (sectionId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);
    navigateToSection(sectionId);
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);

    if (location === '/') {
      window.history.pushState({}, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate('/');
  };

  return (
    <header className={styles.header} role="banner">
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="kynd — go to top" onClick={handleLogoClick}>
          <img src={logomark} alt="kynd" className={styles.logoImg} />
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Main navigation">
          {homeSectionLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`/#${id}`}
              className={styles.navLink}
              onClick={handleSectionClick(id)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          {ctaVisible && (
            <Button variant="primary" size="sm" onClick={() => navigateToSection('waitlist')}>
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
