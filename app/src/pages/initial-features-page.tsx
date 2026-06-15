import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui';
import { addDocumentWithTimestamp } from '@/lib/firebase';
import styles from './initial-features-page.module.css';

const MAX_FIELD_LENGTH = 5000;

interface DesignSlide {
  label: string;
  src: string;
}

interface FeatureSection {
  id: string;
  textareaId: string;
  title: string;
  items: string[];
  designs?: DesignSlide[];
}

const featureSections: FeatureSection[] = [
  {
    id: 'simple-registration',
    textareaId: 'registration',
    title: 'Simple registration',
    items: [
      'Register with Google, Facebook, Apple or email and password',
      'Minimal signup process (no more than three steps to get started)',
    ],
    designs: [
      { label: 'Create account', src: '/initial-feature-designs/auth-1-create-account.html' },
      { label: 'Sign in', src: '/initial-feature-designs/auth-2-sign-in.html' },
      { label: 'All set', src: '/initial-feature-designs/auth-3-all-set.html' },
    ],
  },
  {
    id: 'single-screen',
    textareaId: 'ingest',
    title: 'Single screen to capture your thoughts',
    items: [
      'Speak your thoughts, or type a "stream of consciousness" into the app in a single place',
      'Kynd will make sense of your input and create tasks, routines, appointments and lists for you',
      'Manual adjustment of tasks, appointments etc. if required',
      'Reusable routines that can be used multiple times a day / week eg. "floss, brush teeth, use mouthwash"',
    ],
    designs: [
      { label: 'Speak or type', src: '/initial-feature-designs/capture-1-speak-or-type.html' },
      { label: 'Making sense', src: '/initial-feature-designs/capture-2-making-sense.html' },
      { label: 'Interpretation', src: '/initial-feature-designs/capture-3-interpretation.html' },
    ],
  },
  {
    id: 'task-overview',
    textareaId: 'task-initiation',
    title: 'Task overview and initiation',
    items: [
      'See your day (or week) broken down into easy to digest chunks',
      'Zoom in to just see your next task to avoid overwhelm',
      '"Help me get started" features to assist when you know what needs doing but cannot quite get "launched"',
      "Have your next task broken down into smaller, more manageable steps if you're struggling to get started",
      "Buddy mode will check in with you if you've not interacted with the app for a while",
      "Customisable check-in level from 'occasional nudge' through to 'obnoxiously persistent'",
    ],
    designs: [
      { label: 'Just next', src: '/initial-feature-designs/today-1-just-next.html' },
      { label: 'Broken into steps', src: '/initial-feature-designs/today-2-broken-into-steps.html' },
      { label: 'Now Next Later', src: '/initial-feature-designs/today-3-now-next-later.html' },
      { label: 'Whole day', src: '/initial-feature-designs/today-4-whole-day.html' },
    ],
  },
  {
    id: 'routines',
    textareaId: 'routines',
    title: 'Routines',
    items: [
      'Build routines that can be scheduled and reused across the day or week',
      'Step through a routine one action at a time without losing your place',
      'Adjust routines as life changes without having to start from scratch',
    ],
    designs: [
      { label: 'Build', src: '/initial-feature-designs/routine-1-build.html' },
      { label: 'Schedule', src: '/initial-feature-designs/routine-2-schedule.html' },
      { label: 'Run', src: '/initial-feature-designs/routine-3-run.html' },
      { label: 'Finish', src: '/initial-feature-designs/routine-4-finish.html' },
    ],
  },
  {
    id: 'collaborators',
    textareaId: 'collaborators',
    title: 'Collaborators',
    items: [
      'Add a partner, parent, trusted friend or colleague to your space',
      'Collaborators can help build your lists or routines, and add tasks or appointments',
      'Manually or automatically share your completed items - great for accountability, and your collaborator can help celebrate your wins',
    ],
    designs: [
      { label: 'Your people', src: '/initial-feature-designs/people-1-your-people.html' },
      { label: 'Person detail', src: '/initial-feature-designs/people-2-person-detail.html' },
      { label: 'Pending invite', src: '/initial-feature-designs/people-3-pending-invite.html' },
      { label: 'Invite someone', src: '/initial-feature-designs/people-4-invite-someone.html' },
      { label: 'Invite role modal', src: '/initial-feature-designs/people-5-role-modal-invite.html' },
      { label: 'Person role modal', src: '/initial-feature-designs/people-6-role-modal-person.html' },
    ],
  },
  {
    id: 'rsd-overwhelm',
    textareaId: 'overwhelm',
    title: 'RSD & Overwhelm',
    items: [
      '"Panic" button, for when you need extra support from the app',
      'Grounding exercises like controlled breathing and attention focus',
      'Reframing tool to help you work through anxiety and RSD spirals',
      'Refocussing tool help moves from problem thinking to a simple next step to get you back on track',
      '"Ask <collaborator> to help me" feature for wipeout days',
    ],
    designs: [
      { label: 'What is going on', src: '/initial-feature-designs/support-1-what-is-going-on.html' },
      { label: 'Overwhelmed', src: '/initial-feature-designs/support-2-overwhelmed.html' },
      { label: 'Breathe', src: '/initial-feature-designs/support-3-breathe.html' },
      { label: 'Worried', src: '/initial-feature-designs/support-4-worried.html' },
      { label: 'Reflect back', src: '/initial-feature-designs/support-5-reflect-back.html' },
      { label: 'Ask for a hand', src: '/initial-feature-designs/support-6-ask-for-a-hand.html' },
    ],
  },
  {
    id: 'user-encouragement',
    textareaId: 'encouragement',
    title: 'User encouragement',
    items: [
      'Streak success celebration without punishing you for breaking the chain',
      'Shame-free language if you come back to the app after a break - "welcome back" rather than "here are 14 things you should have done yesterday"',
    ],
  },
] as const;

const getFormValue = (formData: FormData, fieldName: string): string => {
  const value = formData.get(fieldName);

  if (typeof value !== 'string') {
    throw new Error(`Missing form value for ${fieldName}.`);
  }

  return value.trim().slice(0, MAX_FIELD_LENGTH);
};

const DesignCarousel = ({ title, designs }: { title: string; designs: DesignSlide[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDesign = designs[activeIndex];
  const canShowPrevious = activeIndex > 0;
  const canShowNext = activeIndex < designs.length - 1;

  const showPrevious = () => {
    setActiveIndex((currentIndex) => Math.max(currentIndex - 1, 0));
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => Math.min(currentIndex + 1, designs.length - 1));
  };

  return (
    <aside className={styles.carouselPanel} aria-label={`${title} design carousel`}>
      <div className={styles.carouselFrame}>
        <iframe
          key={activeDesign.src}
          title={`${title} design preview: ${activeDesign.label}`}
          src={activeDesign.src}
          className={styles.carouselViewport}
        />
      </div>
      <div className={styles.carouselControls}>
        <Button type="button" variant="secondary" size="sm" onClick={showPrevious} disabled={!canShowPrevious}>
          ‹
        </Button>
        <div className={styles.carouselMeta}>
          <p className={styles.carouselLabel}>{activeDesign.label}</p>
        </div>
        <Button type="button" variant="brand" size="sm" onClick={showNext} disabled={!canShowNext}>
          ›
        </Button>
      </div>
    </aside>
  );
};

export const InitialFeaturesPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot check — if filled, silently "succeed" without submitting
    if (formData.get('website')) {
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitted(false);

    try {
      await addDocumentWithTimestamp('initial-feature-feedback', {
        registration: getFormValue(formData, 'registration'),
        ingest: getFormValue(formData, 'ingest'),
        taskInitiation: getFormValue(formData, 'task-initiation'),
        routines: getFormValue(formData, 'routines'),
        collaborators: getFormValue(formData, 'collaborators'),
        overwhelm: getFormValue(formData, 'overwhelm'),
        encouragement: getFormValue(formData, 'encouragement'),
        anyOtherComments: getFormValue(formData, 'any-other-comments'),
      });

      form.reset();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Could not submit feedback. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className={styles.page}>
      <div className="container">
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Initial features</p>
          <h1 className={styles.title}>Feature Set v1.0</h1>
          <div className={styles.summary}>
            <p>
              Here are the features we&apos;d like to explore in the first version of our app.
              Please add any comments, questions, suggestions or thoughts you may have below
              each section.
            </p>
            <section className={styles.notePanel} aria-labelledby="initial-features-note-heading">
              <h2 id="initial-features-note-heading" className={styles.noteHeading}>
                Please note:
              </h2>
              <ul className={styles.noteList}>
                <li>
                  Try to make your comments as objective as possible; if something
                  doesn&apos;t work for you explain why and, if possible, provide
                  suggestions for improvement.
                </li>
                <li>
                  This is a limited feature set for the first version of the app. We
                  plan to have an extensive roadmap of carefully considered follow on
                  features, so if you think there&apos;s something missing we&apos;ll
                  certainly be looking at it soon. Please add any feature requests in
                  the &quot;Any other comments&quot; section at the bottom of the form.
                </li>
                <li>
                  The interactive demo is not a functioning app, it&apos;s here to give
                  you a sense of what it will be like to navigate around the app. It
                  will open in a new tab on your browser.
                </li>
                <li>
                  When looking at the screenshots below, if you want to click through
                  the sections to get a sense of what we are trying to achieve, use
                  the navigation buttons under each screenshot (the little arrows).
                </li>
              </ul>
            </section>
            <p className={styles.summaryOutro}>
              We really value your feedback. It&apos;s vital to helping us shape kynd to be the
              best app we can, to help you and others in the ADHD community.
            </p>
          </div>
          <div className={styles.heroActions}>
            <a
              href="/initial-feature-designs/interactive-demo.html"
              target="_blank"
              rel="noreferrer"
              className={styles.demoLink}
            >
              Launch interactive demo
            </a>
          </div>
        </header>

        <form className={styles.form} aria-label="Initial features form" onSubmit={handleSubmit}>
          {featureSections.map((section) => (
            <section key={section.id} className={styles.section} aria-labelledby={`${section.id}-heading`}>
              <div className={styles.sectionHeader}>
                <h2 id={`${section.id}-heading`} className={styles.sectionTitle}>
                  {section.title}
                </h2>
              </div>
              <div
                className={`${styles.sectionContent} ${section.designs ? '' : styles.sectionContentSingle}`.trim()}
              >
                {section.designs ? (
                  <div className={styles.sectionMedia}>
                    <DesignCarousel title={section.title} designs={section.designs} />
                  </div>
                ) : null}

                <div className={styles.sectionMain}>
                  <ul className={styles.list}>
                    {section.items.map((item) => (
                      <li key={item} className={styles.listItem}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.field}>
                    <label htmlFor={section.textareaId} className={styles.label}>
                      Notes
                    </label>
                    <textarea
                      id={section.textareaId}
                      name={section.textareaId}
                      className={styles.textarea}
                      rows={6}
                      maxLength={MAX_FIELD_LENGTH}
                      placeholder={`Add notes about ${section.title.toLowerCase()}`}
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}

          <section className={styles.section} aria-labelledby="any-other-comments-heading">
            <div className={styles.sectionMain}>
              <div className={styles.sectionHeader}>
                <h2 id="any-other-comments-heading" className={styles.sectionTitle}>
                  Any other comments
                </h2>
                <p className={styles.sectionCopy}>
                  Add any broader thoughts, missing features, or anything else you
                  want us to consider.
                </p>
              </div>

              <div className={styles.field}>
                <label htmlFor="any-other-comments" className={styles.label}>
                  Any other comments
                </label>
                <textarea
                  id="any-other-comments"
                  name="any-other-comments"
                  className={styles.textarea}
                  rows={6}
                  maxLength={MAX_FIELD_LENGTH}
                  placeholder="Add any other comments"
                />
              </div>
            </div>
          </section>

          {/* Honeypot — hidden from real users, bots will fill it in */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
            <label htmlFor="website">Website</label>
            <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className={styles.formActions}>
            <Button type="submit" variant="brand" size="md" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting…' : 'Submit feedback'}
            </Button>
          </div>

          {submitted ? (
            <p className={`${styles.feedbackMessage} ${styles.feedbackSuccess}`} role="status" aria-live="polite">
              Thanks for your feedback.
            </p>
          ) : null}

          {submitError ? (
            <p className={`${styles.feedbackMessage} ${styles.feedbackError}`} role="alert">
              {submitError}
            </p>
          ) : null}
        </form>

        <div className={styles.actions}>
          <Link href="/" className={`${styles.actionLink} ${styles.actionSecondary}`}>
            Back to home
          </Link>
        </div>
      </div>
    </article>
  );
};
