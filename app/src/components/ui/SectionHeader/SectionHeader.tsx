import type { ReactNode } from 'react';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  lead?: string;
  centred?: boolean;
  headingId?: string;
  children?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  heading,
  lead,
  centred = false,
  headingId,
  children,
}: SectionHeaderProps) {
  return (
    <div className={[styles.header, centred ? styles.centred : ''].filter(Boolean).join(' ')}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 id={headingId}>{heading}</h2>
      {lead && <p>{lead}</p>}
      {children}
    </div>
  );
}
