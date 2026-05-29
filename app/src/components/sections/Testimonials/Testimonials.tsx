import { motion } from 'framer-motion';
import { EASE } from '@/lib/motion';
import { testimonials } from '@/data';
import { SectionHeader } from '@/components/ui';
import { useAnimateIn } from '@/hooks/useAnimateIn';
import styles from './Testimonials.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay: i * 0.1 },
  }),
};

export function Testimonials() {
  const { ref, isVisible } = useAnimateIn();

  return (
    <section className={`section section--sm ${styles.section}`} aria-labelledby="testimonials-heading">
      <div className="container">
      <SectionHeader
        eyebrow="Early feedback"
        heading="What our beta testers are saying"
        centred
        headingId="testimonials-heading"
      />

      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={styles.grid}
      >
        {testimonials.map(({ id, quote, name, meta, avatarInitial, avatarVariant }, i) => (
          <motion.figure
            key={id}
            className={styles.card}
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={i}
          >
            <blockquote className={styles.quote}>
              <p>"{quote}"</p>
            </blockquote>
            <figcaption className={styles.author}>
              <div className={`${styles.avatar} ${styles[avatarVariant]}`} aria-hidden="true">
                {avatarInitial}
              </div>
              <div>
                <span className={styles.name}>{name}</span>
                <span className={styles.meta}>{meta}</span>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>

      <p className={styles.disclaimer}>Names changed. Testimonials from closed beta testers.</p>
      </div>
    </section>
  );
}
