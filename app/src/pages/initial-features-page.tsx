import { useState } from 'react';
import type { FormEvent } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Link } from 'wouter';
import { Button } from '@/components/ui';
import { getDb } from '@/lib/firebase';
import styles from './initial-features-page.module.css';

const featureSections = [
  {
    id: 'simple-registration',
    textareaId: 'registration',
    title: 'Simple registration',
    items: [
      'Register with Google, Facebook, Apple or email and password',
      'Minimal signup process (no more than three steps to get started)',
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

  return value.trim();
};

export const InitialFeaturesPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitted(false);

    try {
      await addDoc(collection(getDb(), 'initial-feature-feedback'), {
        registration: getFormValue(formData, 'registration'),
        ingest: getFormValue(formData, 'ingest'),
        taskInitiation: getFormValue(formData, 'task-initiation'),
        collaborators: getFormValue(formData, 'collaborators'),
        overwhelm: getFormValue(formData, 'overwhelm'),
        encouragement: getFormValue(formData, 'encouragement'),
        createdAt: serverTimestamp(),
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
            <p>
              We really value your feedback. It&apos;s vital to helping us shape kynd to be the
              best app we can, to help you and others in the ADHD community.
            </p>
          </div>
        </header>

        <form className={styles.form} aria-label="Initial features form" onSubmit={handleSubmit}>
          {featureSections.map((section) => (
            <section key={section.id} className={styles.section} aria-labelledby={`${section.id}-heading`}>
              <div className={styles.sectionHeader}>
                <h2 id={`${section.id}-heading`} className={styles.sectionTitle}>
                  {section.title}
                </h2>
                <ul className={styles.list}>
                  {section.items.map((item) => (
                    <li key={item} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.field}>
                <label htmlFor={section.textareaId} className={styles.label}>
                  Notes
                </label>
                <textarea
                  id={section.textareaId}
                  name={section.textareaId}
                  className={styles.textarea}
                  rows={6}
                  placeholder={`Add notes about ${section.title.toLowerCase()}`}
                />
              </div>
            </section>
          ))}

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
