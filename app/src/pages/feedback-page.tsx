import { useState } from 'react';
import { addDocumentWithTimestamp } from '@/lib/firebase';
import styles from './feedback-page.module.css';

type FeedbackType = 'suggestion' | 'bug' | 'general';

interface FeedbackForm {
  name: string;
  email: string;
  type: FeedbackType;
  message: string;
}

const initialForm: FeedbackForm = {
  name: '',
  email: '',
  type: 'general',
  message: '',
};

export const FeedbackPage = () => {
  const [form, setForm] = useState<FeedbackForm>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await addDocumentWithTimestamp('feedback', form);
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <article className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.heading}>Share your feedback</h1>
          <p className={styles.subheading}>
            Help us shape Kynd. Tell us what's working, what's not, or what you'd love to see next.
          </p>
        </header>

        {status === 'success' ? (
          <div className={styles.successCard}>
            <h2>Thank you! 🎉</h2>
            <p>Your feedback has been received. We genuinely appreciate you taking the time.</p>
            <button
              className={styles.submitBtn}
              onClick={() => setStatus('idle')}
              type="button"
            >
              Send more feedback
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name (optional)"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email (optional)"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="type">Feedback type</label>
              <select id="type" name="type" value={form.type} onChange={handleChange}>
                <option value="general">General feedback</option>
                <option value="suggestion">Feature suggestion</option>
                <option value="bug">Bug report</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                required
              />
            </div>

            {status === 'error' && (
              <p className={styles.errorMsg}>
                Something went wrong. Please try again.
              </p>
            )}

            <button
              className={styles.submitBtn}
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send feedback'}
            </button>
          </form>
        )}
      </div>
    </article>
  );
};
