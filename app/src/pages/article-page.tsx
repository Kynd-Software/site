import { useEffect, useMemo, useState } from 'react';
import { Link, useRoute } from 'wouter';
import { MarkdownRenderer } from '@/components/markdown-renderer';
import { getAdjacentArticles, getArticleBySlug, getArticlesInSameSection } from '@/data/article-data';
import styles from './article-page.module.css';

const footerPattern = /^\*Researched and written/i;
const orderedListPattern = /^\d+\.\s+/;
const articleModules = import.meta.glob<string>('../data/articles/*.md', {
  query: '?raw',
  import: 'default',
});
const articleLoadersBySlug = Object.fromEntries(
  Object.entries(articleModules).map(([path, loadArticle]) => {
    const filename = path.split('/').pop() ?? '';
    const slug = filename.replace(/^\d+-/, '').replace(/\.md$/, '');
    return [slug, loadArticle];
  }),
) as Record<string, () => Promise<string>>;
const footerNote =
  'Researched and written with care by the Kynd team. This content is for education, not diagnosis or treatment.';

const splitMarkdownBlocks = (markdown: string) => {
  const lines = markdown
    .replace(/\r\n/g, '\n')
    .split('\n')
    .filter((line) => line.trim() !== '---' && !footerPattern.test(line.trim()));

  const blocks: string[] = [];
  let currentBlock: string[] = [];

  for (const line of lines) {
    if (line.trim() === '') {
      if (currentBlock.length > 0) {
        blocks.push(currentBlock.join('\n'));
        currentBlock = [];
      }
      continue;
    }

    currentBlock.push(line);
  }

  if (currentBlock.length > 0) {
    blocks.push(currentBlock.join('\n'));
  }

  return blocks;
};

const isListBlock = (block: string) => {
  const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);

  if (lines.length === 0) {
    return false;
  }

  return lines.every((line) => line.startsWith('- ') || orderedListPattern.test(line));
};

const getArticleContent = (markdown: string) => {
  const blocks = splitMarkdownBlocks(markdown).filter((block) => !block.trim().startsWith('# '));
  const firstSectionHeadingIndex = blocks.findIndex((block) => block.trim().startsWith('## '));
  const standfirstIndex = blocks.findIndex((block, index) => {
    const trimmedBlock = block.trim();

    if (trimmedBlock.startsWith('## ') || trimmedBlock.startsWith('### ') || isListBlock(trimmedBlock)) {
      return false;
    }

    if (firstSectionHeadingIndex === -1) {
      return true;
    }

    return index < firstSectionHeadingIndex;
  });

  return {
    standfirst: standfirstIndex === -1 ? '' : blocks[standfirstIndex].split('\n').join(' ').trim(),
    bodyMarkdown: blocks
      .filter((_, index) => index !== standfirstIndex)
      .join('\n\n'),
  };
};

const getArticleCountLabel = (count: number) => `${count} article${count === 1 ? '' : 's'}`;

export const ArticlePage = () => {
  const [, params] = useRoute('/resources/:slug');
  const slug = params?.slug ?? '';
  const article = useMemo(() => getArticleBySlug(slug), [slug]);
  const sectionArticles = useMemo(() => getArticlesInSameSection(slug), [slug]);
  const { previous, next } = useMemo(() => getAdjacentArticles(slug), [slug]);
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!article) {
      setMarkdown(null);
      setHasError(false);
      setIsLoading(false);
      return;
    }

    const loadArticle = articleLoadersBySlug[slug];

    if (!loadArticle) {
      setMarkdown(null);
      setHasError(true);
      setIsLoading(false);
      return;
    }

    let isCancelled = false;

    setIsLoading(true);
    setHasError(false);
    setMarkdown(null);

    loadArticle()
      .then((content) => {
        if (!isCancelled) {
          setMarkdown(content);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setHasError(true);
          setIsLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [article, slug]);

  const articleContent = useMemo(() => {
    if (!markdown) {
      return {
        standfirst: '',
        bodyMarkdown: '',
      };
    }

    return getArticleContent(markdown);
  }, [markdown]);

  if (!article) {
    return (
      <section className={styles.page}>
        <div className="container">
          <div className={styles.statusCard}>
            <span className={styles.pill}>Article not found</span>
            <h1 className={styles.statusTitle}>That article does not exist.</h1>
            <p className={styles.statusText}>Browse the full library to find the piece you were looking for.</p>
            <Link href="/resources" className={styles.statusLink}>
              Back to all articles
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className={styles.page}>
        <div className="container">
          <div className={styles.statusCard}>
            <span className={styles.pill}>{`Article ${article.number} · ${article.section}`}</span>
            <h1 className={styles.statusTitle}>Loading article...</h1>
          </div>
        </div>
      </section>
    );
  }

  if (hasError || !markdown) {
    return (
      <section className={styles.page}>
        <div className="container">
          <div className={styles.statusCard}>
            <span className={styles.pill}>{`Article ${article.number} · ${article.section}`}</span>
            <h1 className={styles.statusTitle}>We could not load this article.</h1>
            <p className={styles.statusText}>Try another article or head back to the full library.</p>
            <Link href="/resources" className={styles.statusLink}>
              Back to all articles
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <article className={styles.page}>
      <div className="container">
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <ol className={styles.breadcrumbsList}>
            <li className={styles.breadcrumbItem}>
              <Link href="/" className={styles.breadcrumbLink}>
                Home
              </Link>
            </li>
            <li className={styles.breadcrumbItem}>
              <Link href="/resources" className={styles.breadcrumbLink}>
                Articles
              </Link>
            </li>
            <li className={styles.breadcrumbItem}>
              <Link href={`/resources#${article.sectionId}`} className={styles.breadcrumbLink}>
                {article.section}
              </Link>
            </li>
            <li className={styles.breadcrumbItem} aria-current="page">
              <span className={styles.currentBreadcrumb}>{article.title}</span>
            </li>
          </ol>
        </nav>

        <div className={styles.layout}>
          <section className={styles.content}>
            <div className={styles.articleMeta}>
              <span className={styles.pill}>{`Article ${article.number} · ${article.section}`}</span>
              <span className={styles.metaInfo}>{`${article.readTime} min read`}</span>
            </div>
            <h1 className={styles.title}>{article.title}</h1>
            {articleContent.standfirst ? (
              <p className={styles.standfirst}>{articleContent.standfirst}</p>
            ) : null}
            <div className={styles.body}>
              <MarkdownRenderer markdown={articleContent.bodyMarkdown} />
            </div>
            <p className={styles.footerNote}>{footerNote}</p>
            <div className={styles.articleFooter}>
              {previous ? (
                <Link href={`/resources/${previous.slug}`} className={styles.pager}>
                  <small className={styles.pagerLabel}>Previous</small>
                  {`← ${previous.title}`}
                </Link>
              ) : <span />}
              {next ? (
                <Link href={`/resources/${next.slug}`} className={`${styles.pager} ${styles.pagerNext}`}>
                  <small className={styles.pagerLabel}>Next</small>
                  {`${next.title} →`}
                </Link>
              ) : null}
            </div>
          </section>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarBox}>
              <h2 className={styles.sidebarTitle}>{article.section}</h2>
              <p className={styles.sidebarSub}>{`${getArticleCountLabel(sectionArticles.length)} in this section`}</p>
              <nav aria-label="Articles in this section">
                <ul className={styles.sidebarList}>
                  {sectionArticles.map((sectionArticle) => (
                    <li key={sectionArticle.slug}>
                      <Link
                        href={`/resources/${sectionArticle.slug}`}
                        className={`${styles.sidebarLink} ${sectionArticle.slug === article.slug ? styles.sidebarLinkCurrent : ''}`.trim()}
                        aria-current={sectionArticle.slug === article.slug ? 'page' : undefined}
                      >
                        <span className={styles.sidebarNumber}>{sectionArticle.number}</span>
                        <span>{sectionArticle.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link href="/resources" className={styles.sidebarAll}>
                ← All articles
              </Link>
            </div>
          </aside>
        </div>

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
      </div>
    </article>
  );
};
