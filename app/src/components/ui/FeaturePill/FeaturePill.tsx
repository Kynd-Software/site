import type { ReactNode } from 'react';
import styles from './FeaturePill.module.css';

interface FeaturePillProps {
  icon: ReactNode;
  label: string;
}

export function FeaturePill({ icon, label }: FeaturePillProps) {
  return (
    <div className={styles.pill}>
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      {label}
    </div>
  );
}
