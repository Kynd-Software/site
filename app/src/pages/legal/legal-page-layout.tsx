import type { PropsWithChildren } from 'react';
import { Link } from 'wouter';
import styles from './legal-page.module.css';

interface LegalPageLayoutProps extends PropsWithChildren {
  title: string;
  summary: string;
  lastUpdated: string;
}

export const LegalPageLayout = ({
  title,
  summary,
  lastUpdated,
  children,
}: LegalPageLayoutProps) => {
  return (
    <article className={styles.page}>
      <div className="container">
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Legal</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.summary}>{summary}</p>
          <p className={styles.meta}>Last updated: {lastUpdated}</p>
        </header>

        <div className={styles.content}>{children}</div>

        <div className={styles.actions}>
          <Link href="/" className={`${styles.actionLink} ${styles.actionSecondary}`}>
            Back to home
          </Link>
          <Link href="/#community" className={`${styles.actionLink} ${styles.actionPrimary}`}>
            Join the community
          </Link>
        </div>
      </div>
    </article>
  );
};
