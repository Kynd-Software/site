import { Link } from 'wouter';
import { useHomeSectionNavigation } from '@/hooks/use-home-section-navigation';
import { Card } from '@/components/ui';
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

const signals = [
  'Built around lived ADHD experience',
  'Calm, practical software for real life',
  'Shaped in the open with the community',
] as const;

export const AboutPage = () => {
  const { navigateToSection } = useHomeSectionNavigation();

  return (
    <article className={styles.page}>
      <div className="container">
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
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
          </div>

          <aside className={styles.heroPanel} aria-label="Kynd principles">
            <p className={styles.heroPanelEyebrow}>What matters to us</p>
            <div className={styles.heroHighlights}>
              {signals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
            <div className={styles.heroQuote}>
              <strong>Human first.</strong>
              <p>Smart enough to help with the mess, never so clever it becomes one more thing to manage.</p>
            </div>
          </aside>

          <div className={styles.heroActions}>
            <Link href="/" className={`${styles.actionLink} ${styles.actionSecondary}`}>
              Back to home
            </Link>
            <Link href="/#how-it-works" className={`${styles.actionLink} ${styles.actionPrimary}`}>
              See how it works
            </Link>
          </div>
        </header>

        <section className={`${styles.section} ${styles.storySection}`} aria-labelledby="story-heading">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Why Kynd exists</p>
            <h2 id="story-heading">We are building for the parts other apps tend to miss</h2>
          </div>

          <div className={styles.storyGrid}>
            <Card className={styles.storyCard}>
              <h3>More than productivity</h3>
              <p>
                Kynd is about managing life when the hard part is not knowing what a task manager is, but
                getting started, staying oriented, and recovering when everything slips.
              </p>
            </Card>
            <Card className={styles.storyCard}>
              <h3>Human first</h3>
              <p>
                We want the product to feel clear, calm, and useful; smart enough to organise the mess,
                but never so clever that it becomes another thing to manage.
              </p>
            </Card>
            <Card className={`${styles.storyCard} ${styles.storyCardAccent}`}>
              <h3>Community-shaped</h3>
              <p>
                The best ideas tend to come from the lived experience of people trying to remember things,
                keep plans together, and recover when the day goes sideways.
              </p>
            </Card>
          </div>
        </section>

        <section className={`${styles.section} ${styles.foundersSection}`} aria-labelledby="founders-heading">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Cofounders</p>
            <h2 id="founders-heading">The people behind Kynd</h2>
          </div>

          <div className={styles.founders}>
            {founders.map((founder) => (
              <section key={founder.name} className={styles.founderCard} aria-labelledby={`${founder.name}-heading`}>
                <div className={styles.founderBadge} aria-hidden="true">
                  {founder.name.charAt(0)}
                </div>
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
          <div className={styles.communityContent}>
            <p className={styles.sectionEyebrow}>Community</p>
            <h2 id="community-link-heading">Help shape what Kynd becomes</h2>
            <p className={styles.communityCopy}>
              The Facebook group is where we share what we are building, ask sharper questions, and learn
              from people who want better tools for planning, remembering, and getting through the day.
            </p>
            <div className={styles.communityPoints}>
              <p>See what we are building next.</p>
              <p>Tell us what is still too hard.</p>
              <p>Help steer the product in useful directions.</p>
            </div>
          </div>

          <div className={styles.communityCard}>
            <p className={styles.communityCardEyebrow}>Facebook group</p>
            <h3>See updates, questions, and works-in-progress</h3>
            <p>
              Join the conversation, share what would help, and help us steer the shape of Kynd while it is
              still taking form.
            </p>
            <a
              href="https://www.facebook.com/groups/kyndsoft/"
              target="_blank"
              rel="noreferrer"
              className={styles.communityLink}
            >
              Visit the Facebook group
            </a>
          </div>
        </section>

        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.actionLink} ${styles.actionSecondary}`}
            onClick={() => navigateToSection('community')}
          >
            Jump to community on the homepage
          </button>
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
