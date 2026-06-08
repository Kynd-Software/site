import { Link } from 'wouter';
import styles from './about-page.module.css';

const founders = [
  {
    name: 'Graham',
    title: 'Co-founder',
    bio: 'Graham helps shape Kynd around the real, messy experience of trying to keep life moving when your brain does not always follow the plan. He cares about making software feel calm, useful, and genuinely supportive.',
  },
  {
    name: 'David',
    title: 'Co-founder',
    bio: 'David brings the product and technical side together so Kynd can turn thoughtful ideas into tools people can actually use every day. He wants the software to feel human first, and clever second.',
  },
] as const;

export const AboutPage = () => {
  return (
    <article className={styles.page}>
      <div className="container">
        <header className={styles.hero}>
          <p className={styles.eyebrow}>About Kynd</p>
          <h1 className={styles.title}>This is Kynd.</h1>
          <div className={styles.intro}>
            <p>
              We love people. They&apos;re unique and imperfect and brilliant. We love software too,
              because almost anything is possible.
            </p>
            <p>
              There&apos;s a whole universe of apps to make you into a productivity machine or a
              learning superhero. We want to make apps that are more human and for people who find
              life hard to manage a little more, well, manageable.
            </p>
            <p>This is Kynd.</p>
          </div>
        </header>

        <section className={styles.section} aria-labelledby="founders-heading">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Cofounders</p>
            <h2 id="founders-heading">The people behind Kynd</h2>
          </div>

          <div className={styles.founders}>
            {founders.map((founder) => (
              <section key={founder.name} className={styles.founderCard} aria-labelledby={`${founder.name}-heading`}>
                <p className={styles.founderRole}>{founder.title}</p>
                <h3 id={`${founder.name}-heading`} className={styles.founderName}>
                  {founder.name}
                </h3>
                <p className={styles.founderBio}>{founder.bio}</p>
              </section>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.communitySection}`} aria-labelledby="community-link-heading">
          <div>
            <p className={styles.sectionEyebrow}>Community</p>
            <h2 id="community-link-heading">Join the Facebook community</h2>
            <p className={styles.communityCopy}>
              The Kynd Facebook group is where we share what we&apos;re building, ask questions, and
              learn from people who want more supportive tools for everyday life.
            </p>
          </div>

          <a
            href="https://www.facebook.com/groups/kyndsoft/"
            target="_blank"
            rel="noreferrer"
            className={styles.communityLink}
          >
            Visit the Facebook group
          </a>
        </section>

        <div className={styles.actions}>
          <Link href="/" className={`${styles.actionLink} ${styles.actionSecondary}`}>
            Back to home
          </Link>
          <a
            href="https://www.facebook.com/groups/kyndsoft/"
            target="_blank"
            rel="noreferrer"
            className={`${styles.actionLink} ${styles.actionPrimary}`}
          >
            Join the community
          </a>
        </div>
      </div>
    </article>
  );
};
