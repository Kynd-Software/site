import { motion } from 'framer-motion';
import { EASE } from '@/lib/motion';
import { steps } from '@/data';
import { SectionHeader } from '@/components/ui';
import { useAnimateIn } from '@/hooks/useAnimateIn';
import styles from './HowItWorks.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay: i * 0.12 },
  }),
};

export function HowItWorks() {
  const { ref, isVisible } = useAnimateIn();

  return (
    <section className={`section ${styles.section}`} id="how-it-works" aria-labelledby="how-it-works-heading">
      <div className="container">
      <SectionHeader
        eyebrow="Getting started"
        heading="Three steps to a calmer day"
        lead="Getting started with kynd takes minutes. You don’t need a perfect system — you just need a beginning."
        centred
        headingId="how-it-works-heading"
      />

      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={styles.grid}
      >
        {steps.map(({ number, title, description, active }, i) => (
          <motion.div
            key={number}
            className={`${styles.card} ${active ? styles.active : ''}`}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={i}
          >
            <span className={styles.number} aria-hidden="true">
              {number}
            </span>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
