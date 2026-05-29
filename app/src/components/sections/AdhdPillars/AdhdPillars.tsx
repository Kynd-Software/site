import { motion } from 'framer-motion';
import { EASE } from '@/lib/motion';
import type { ReactNode } from 'react';
import { pillars } from '@/data';
import { SectionHeader } from '@/components/ui';
import { useAnimateIn } from '@/hooks/useAnimateIn';
import styles from './AdhdPillars.module.css';

const ICONS: Record<string, ReactNode> = {
  'no-shame': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  'low-overwhelm': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  ),
  adapts: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  wins: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  nudges: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  ),
};

const itemVariants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE, delay: i * 0.07 },
  }),
};

export function AdhdPillars() {
  const { ref, isVisible } = useAnimateIn();

  return (
    <section className={`section ${styles.section}`} aria-labelledby="pillars-heading">
      <div className="container">
      <SectionHeader
        eyebrow="Designed differently"
        heading="Built with the ADHD brain in mind"
        lead="kynd isn’t a generic productivity app with an ADHD label stuck on. Every design decision — from the colour palette to the notifications — was made with neurodivergent users at the centre."
        centred
        headingId="pillars-heading"
      />

      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={styles.grid}
      >
        {pillars.map(({ id, title, description, iconVariant }, i) => (
          <motion.div
            key={id}
            className={styles.item}
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={i}
          >
            <div className={`${styles.iconBox} ${iconVariant ? styles[`iconBox--${iconVariant}`] : ''}`}>
              {ICONS[id]}
            </div>
            <div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
