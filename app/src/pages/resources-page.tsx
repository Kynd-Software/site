import { Link } from 'wouter';
import { articles, sections } from '@/data/article-data';
import styles from './resources-page.module.css';

const getArticleCountLabel = (count: number) => `${count} article${count === 1 ? '' : 's'}`;
const articlesBySlug = Object.fromEntries(articles.map((article) => [article.slug, article]));

export const ResourcesPage = () => {
  return (
    <article className={styles.page}>
      <div className="container">
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Kynd Learning Library</p>
          <h1 className={styles.title}>ADHD, explained kindly.</h1>
          <p className={styles.subtitle}>
            Twenty-five plain-English articles about how ADHD brains actually work — researched and
            written with care by the Kynd team. No jargon, no judgement.
          </p>
        </header>

        <nav className={styles.chips} aria-label="Article sections">
          {sections.map((section) => (
            <a key={section.id} className={styles.chip} href={`#${section.id}`}>
              {section.title}
            </a>
          ))}
        </nav>

        <section className={styles.promo} aria-label="Download the Kynd app">
          <div className={styles.promoCopy}>
            <h2 className={styles.promoTitle}>Reading about it is step one. Kynd is step two.</h2>
            <p className={styles.promoText}>
              Kynd turns what you learn here into gentle, doable daily habits — built for brains with
              focus and attention challenges.
            </p>
          </div>
          <div className={styles.promoActions}>
            <a className={styles.promoButton} href="/download">
              Download the Kynd app
            </a>
            <span className={styles.promoNote}>Free trial included · no card required</span>
          </div>
        </section>

        <div className={styles.sections}>
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={styles.section}
              aria-labelledby={`${section.id}-heading`}
            >
              <div className={styles.sectionHeader}>
                <h2 id={`${section.id}-heading`} className={styles.sectionTitle}>
                  {section.title}
                </h2>
                <span className={styles.sectionCount}>{getArticleCountLabel(section.articleSlugs.length)}</span>
              </div>
              <div className={styles.grid}>
                {section.articleSlugs.map((slug) => {
                  const article = articlesBySlug[slug];

                  return (
                    <Link key={article.slug} className={styles.card} href={`/resources/${article.slug}`}>
                      <span className={styles.cardNumber}>{`Article ${article.number}`}</span>
                      <h3 className={styles.cardTitle}>{article.title}</h3>
                      <p className={styles.cardDescription}>{article.description}</p>
                      <span className={styles.readLink}>Read article</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
};
