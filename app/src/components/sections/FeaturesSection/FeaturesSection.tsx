import { motion } from 'framer-motion';
import { EASE } from '@/lib/motion';
import type { ReactNode } from 'react';
import { features } from '@/data';
import { IconBox, SectionHeader } from '@/components/ui';
import { useAnimateIn } from '@/hooks/useAnimateIn';
import styles from './FeaturesSection.module.css';

const ICONS: Record<string, ReactNode> = {
  setup: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
  steps: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
      <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
    </svg>
  ),
  routines: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  checkins: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  rsd: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  collab: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  focus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="22" height="22">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay: i * 0.08 },
  }),
};

export function FeaturesSection() {
  const heroFeature = features.find((f) => f.hero);
  const gridFeatures = features.filter((f) => !f.hero);
  const { ref, isVisible } = useAnimateIn();

  return (
    <section className={`section ${styles.section}`} id="features" aria-labelledby="features-heading">
      <div className="container">
      <SectionHeader
        eyebrow="What's inside"
        heading="Everything your brain actually needs"
        lead="kynd gives you the tools that genuinely work for ADHD minds in a way that's flexible, forgiving, and supportive without being overwhelming."
        centred
        headingId="features-heading"
      />

      {heroFeature && (
        <motion.div
          className={styles.heroCard}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className={styles.heroContent}>
            <IconBox variant={heroFeature.iconVariant} className={styles.heroIcon}>
              {ICONS[heroFeature.id]}
            </IconBox>
            <h3 className={styles.heroTitle}>{heroFeature.title}</h3>
            <p className={styles.heroDesc}>{heroFeature.description}</p>
          </div>
          <div className={styles.heroDecor} aria-hidden="true">
            <div className={styles.decorCluster}>
              <div className={`${styles.decorShape} ${styles.decorShapeLarge}`} />
              <div className={`${styles.decorShape} ${styles.decorShapeMedium}`} />
              <div className={`${styles.decorShape} ${styles.decorShapeSmall}`} />
              <div className={`${styles.decorShape} ${styles.decorShapeTall}`} />
              <div className={`${styles.decorShape} ${styles.decorShapeWide}`} />

              <div className={styles.decorCard}>
                <div className={styles.decorTask}>
                  <span className={styles.decorDot} />
                  <span className={`${styles.decorTaskLine} ${styles.decorTaskLineLong}`} />
                </div>
                <div className={styles.decorTask}>
                  <span className={styles.decorDot} />
                  <span className={`${styles.decorTaskLine} ${styles.decorTaskLineMedium}`} />
                </div>
                <div className={styles.decorTask}>
                  <span className={styles.decorDot} />
                  <span className={`${styles.decorTaskLine} ${styles.decorTaskLineShort}`} />
                </div>
                <div className={styles.decorTask}>
                  <span className={styles.decorDotMuted} />
                  <span className={`${styles.decorTaskLine} ${styles.decorTaskLineMedium}`} />
                </div>
              </div>

              <div className={`${styles.decorBlob} ${styles.decorBlobLower}`} />
              <div className={`${styles.decorBlob} ${styles.decorBlobRight}`} />
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={styles.grid}
      >
        {gridFeatures.map((feature, i) => (
          <motion.div
            key={feature.id}
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={i}
          >
            <IconBox variant={feature.iconVariant}>{ICONS[feature.id]}</IconBox>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDesc}>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
