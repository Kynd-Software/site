import { motion } from 'framer-motion';
import { EASE } from '@/lib/motion';
import type { ReactNode } from 'react';
import { problems } from '@/data';
import { IconBox, SectionHeader } from '@/components/ui';
import { useAnimateIn } from '@/hooks/useAnimateIn';
import styles from './ProblemSection.module.css';

const ICONS: Record<string, ReactNode> = {
  paralysis: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width="22"
      height="22"
    >
      <circle cx="12" cy="12" r="9" />
      <line x1="10" y1="8" x2="10" y2="16" />
      <line x1="14" y1="8" x2="14" y2="16" />
    </svg>
  ),
  initiation: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width="22"
      height="22"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  ),
  rsd: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width="22"
      height="22"
    >
      <path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8c3.31 0 6 2.69 6 6s-2.69 6-6 6c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.1 0 2 .9 2 2s-.9 2-2 2" />
    </svg>
  ),
  abandonment: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width="22"
      height="22"
    >
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
      <path d="m12 7-3 3" />
      <path d="m12 7 3 3" />
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

export function ProblemSection() {
  const { ref, isVisible } = useAnimateIn();

  return (
    <section className={`section ${styles.section}`} id="for-adhd" aria-labelledby="problems-heading">
      <div className="container">
      <SectionHeader
        eyebrow="The ADHD experience"
        heading="Most life management apps weren't built for how you think"
        centred
        headingId="problems-heading"
      >
        Standard apps assume you can just <em>start</em>. They ignore the real challenges that come with ADHD: the paralysis, the anxiety, the forgetting-you-even-installed-them.
      </SectionHeader>

      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={styles.grid}
      >
        {problems.map(({ id, iconVariant, title, description, highlight }, i) => (
          <motion.div
            key={id}
            className={`${styles.card} ${highlight ? styles.highlight : ''}`}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={i}
          >
            <IconBox variant={iconVariant}>{ICONS[id]}</IconBox>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.bridge}>
        <p className={styles.bridgeText}>kynd was designed to change all of this.</p>
        <a href="#features" className="btn btn--brand btn--lg">See the features →</a>
      </div>
      </div>
    </section>
  );
}
