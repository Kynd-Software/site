import type { HTMLAttributes } from 'react';
import styles from './Card.module.css';

type CardVariant = 'default' | 'surface' | 'pale' | 'brand';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export function Card({ variant = 'default', className, children, ...rest }: CardProps) {
  return (
    <div
      className={[styles.card, styles[variant], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
}
