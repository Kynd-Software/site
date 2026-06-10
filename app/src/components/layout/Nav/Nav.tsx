import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui';
import logomark from '@/assets/images/logomark.png';
import { homeSectionLinks } from '@/lib/site-navigation';
import { useHomeSectionNavigation } from '@/hooks/use-home-section-navigation';
import styles from './Nav.module.css';

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, navigate] = useLocation();
  const { navigateToSection } = useHomeSectionNavigation();
  const sectionLinks = homeSectionLinks.filter(({ id }) => id !== 'community');

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
      window.scrollTo({ top: 0, behavior: 'auto' });
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
          {sectionLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`/#${id}`}
              className={styles.navLink}
              onClick={handleSectionClick(id)}
            >
              {label}
            </a>
          ))}
          <Link href="/about" className={styles.navLink} onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </nav>

        <div className={styles.actions}>
          <Button variant="primary" size="sm" onClick={() => navigateToSection('community')}>
            Join community
          </Button>
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
