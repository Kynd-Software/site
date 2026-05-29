import React from 'react';
import { motion } from 'framer-motion';
import { EASE } from '@/lib/motion';
import { stats } from '@/data';
import styles from './StatsBand.module.css';

export function StatsBand() {
  return (
    <div className={styles.band} aria-label="ADHD statistics">
      <div className={styles.inner}>
        {stats.map(({ id, value, label }, i) => (
          <React.Fragment key={id}>
            {i > 0 && <div className={styles.divider} aria-hidden="true" />}
            <motion.div
              className={styles.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
            >
              <div className={styles.value}>{value}</div>
              <div className={styles.label}>{label}</div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
