import type { ReactNode } from 'react';
import styles from './IconBox.module.css';

type IconBoxVariant = 'brand' | 'amber' | 'terracotta' | 'white';

interface IconBoxProps {
  variant?: IconBoxVariant;
  children: ReactNode;
  className?: string;
}

export function IconBox({ variant = 'brand', children, className }: IconBoxProps) {
  return (
    <div className={[styles.iconBox, styles[variant], className].filter(Boolean).join(' ')} aria-hidden="true">
      {children}
    </div>
  );
}
