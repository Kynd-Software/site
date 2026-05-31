import styles from './CommunityCta.module.css';

export const CommunityCta = () => {
  return (
    <section className={styles.section} id="community" aria-labelledby="community-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Community</p>
        <h2 id="community-heading" className={styles.heading}>
          Join our community
        </h2>
        <p className={styles.lead}>
          Join the kynd Facebook group to share ideas, meet other people building systems that fit
          their brains, and keep up with what we are exploring next.
        </p>

        <div className={styles.actions}>
          <a
            href="https://www.facebook.com/groups/kyndsoft/"
            target="_blank"
            rel="noreferrer"
            className={styles.primaryLink}
          >
            Join the Facebook group
          </a>
        </div>

        <div className={styles.highlights} aria-label="Community benefits">
          <div className={styles.highlight}>
            <h3>Share what would help</h3>
            <p>Tell us what is hard, what is missing, and what would make daily planning easier.</p>
          </div>
          <div className={styles.highlight}>
            <h3>See product updates</h3>
            <p>We will use the group to share progress, questions, and next steps while we build.</p>
          </div>
          <div className={styles.highlight}>
            <h3>Meet people like you</h3>
            <p>Connect with people who care about calmer, more supportive productivity tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
