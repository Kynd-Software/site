import { motion } from 'framer-motion';
import { EASE } from '@/lib/motion';
import { problems } from '@/data';
import { SectionHeader } from '@/components/ui';
import { useAnimateIn } from '@/hooks/useAnimateIn';
import styles from './ProblemSection.module.css';

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
        heading="Productivity apps weren't built for how you think"
        lead="Most apps assume you can just… start. They ignore the real challenges that come with ADHD — the paralysis, the anxiety, the forgetting you even installed them."
        centred
        headingId="problems-heading"
      />

      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={styles.grid}
      >
        {problems.map(({ id, emoji, title, description, highlight }, i) => (
          <motion.div
            key={id}
            className={`${styles.card} ${highlight ? styles.highlight : ''}`}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={i}
          >
            <span className={styles.emoji} aria-hidden="true">{emoji}</span>
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
