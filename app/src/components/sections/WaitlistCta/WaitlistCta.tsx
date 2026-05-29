import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui';
import styles from './WaitlistCta.module.css';

interface WaitlistFormValues {
  email: string;
}

export function WaitlistCta() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormValues>();

  const onSubmit = async (_data: WaitlistFormValues) => {
    // TODO: wire to backend / email service
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
  };

  return (
    <section className={styles.section} id="waitlist" aria-labelledby="waitlist-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Early access</p>
        <h2 id="waitlist-heading" className={styles.heading}>
          Be first to know when kynd launches
        </h2>
        <p className={styles.lead}>
          Join the waitlist and get early access, launch pricing, and updates as we build. No spam — just progress.
        </p>

        {submitted ? (
          <div className={styles.success} role="status" aria-live="polite">
            <p>✓ You’re on the list! We’ll be in touch.</p>
          </div>
        ) : (
          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-label="Waitlist sign-up form"
          >
            <div className={styles.inputWrap}>
              <label htmlFor="waitlist-email" className={styles.label}>
                Email address
              </label>
              <input
                id="waitlist-email"
                type="email"
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                placeholder="your@email.com"
                autoComplete="email"
                aria-required="true"
                aria-describedby={errors.email ? 'waitlist-email-error' : undefined}
                {...register('email', {
                  required: 'Please enter your email address.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address.',
                  },
                })}
              />
              {errors.email && (
                <p id="waitlist-email-error" className={styles.errorMsg} role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <Button type="submit" variant="brand" size="lg" disabled={isSubmitting}>
              {isSubmitting ? 'Joining…' : 'Join waitlist'}
            </Button>
          </form>
        )}

        <div className={styles.socialProof} aria-label="Social proof">
          <span className={styles.socialNum}>2,400+</span>
          <span>people already on the waitlist</span>
          <span className={styles.dot} aria-hidden="true" />
          <span>No credit card needed</span>
        </div>

        <div className={styles.badges} aria-label="Coming to app stores">
          <div className={styles.badge}>
            <svg className={styles.badgeIcon} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2c.7 0 1.4.1 2 .3M12 22c-5.5 0-10-4.5-10-10S6.5 2 12 2"/>
              <path d="M12 22c1.7 0 3.2-.4 4.6-1.1M17 9l-5 5-5-5"/>
              <path d="M12 3v10"/>
            </svg>
            <div>
              <div className={styles.badgeLabel}>Download on the</div>
              <div className={styles.badgeName}>App Store</div>
            </div>
          </div>
          <div className={styles.badge}>
            <svg className={styles.badgeIcon} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            <div>
              <div className={styles.badgeLabel}>Get it on</div>
              <div className={styles.badgeName}>Google Play</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
