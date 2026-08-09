import { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import { Users, XCircle } from 'lucide-react';
import { validateInviteToken } from '@/lib/kynd-app';
import type { ValidateInviteResult } from '@/lib/kynd-app';
import styles from './invite-page.module.css';

const SCOPE_DISPLAY: Record<string, { name: string; emoji: string }> = {
  supporter: { name: 'Supporter', emoji: '🤝' },
};

const APP_STORE_URL = 'https://apps.apple.com/app/kynd/id6738830374';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.kyndsoft.kynd';

export const InvitePage = () => {
  const [, params] = useRoute('/invite/:token');
  const token = params?.token ?? '';

  const [invite, setInvite] = useState<ValidateInviteResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setInvite({ valid: false, reason: 'not_found' });
      setLoading(false);
      return;
    }

    validateInviteToken(token).then((data) => {
      setInvite(data);
      setLoading(false);
    });
  }, [token]);

  if (loading) {
    return (
      <section className={styles.page}>
        <p className={styles.loading}>Loading your invite...</p>
      </section>
    );
  }

  if (!invite?.valid) {
    const errorMessages: Record<string, { title: string; message: string }> = {
      not_found: {
        title: 'Invite not found',
        message: "This invite link doesn't seem to exist or has already been used. Check with the person who sent it.",
      },
      expired: {
        title: 'Invite expired',
        message: 'This invite has expired. Ask the person who sent it to resend a new one.',
      },
      already_redeemed: {
        title: 'Already accepted',
        message: 'This invite has already been accepted. Open the kynd app to get started.',
      },
      error: {
        title: 'Something went wrong',
        message: "We couldn't load this invite. Please try again or ask the person who sent it to resend.",
      },
    };

    const { title, message } = errorMessages[invite?.reason || 'not_found'] || errorMessages.not_found;

    return (
      <section className={styles.page}>
        <div className={styles.errorCard}>
          <div className={styles.iconWrap}>
            <XCircle size={32} color="var(--brand)" />
          </div>
          <h1 className={styles.errorTitle}>{title}</h1>
          <p className={styles.errorMessage}>{message}</p>
        </div>
      </section>
    );
  }

  const scope = SCOPE_DISPLAY[invite.accessScope || 'supporter'] || SCOPE_DISPLAY.supporter;

  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <div className={styles.iconWrap}>
          <Users size={32} color="var(--brand)" />
        </div>

        <h1 className={styles.title}>You&apos;re invited</h1>
        <p className={styles.subtitle}>
          <strong>{invite.inviterName || 'Someone'}</strong> wants you to be their{' '}
          <strong>{scope.name}</strong> on kynd.
        </p>

        <span className={styles.roleBadge}>
          {scope.emoji} {scope.name}
        </span>

        <p className={styles.instructions}>
          Open the <strong>kynd</strong> app to accept this invite. If you don&apos;t have the app yet,
          download it first.
        </p>

        <div className={styles.ctaGroup}>
          <a href={`kynd://invite/${token}`} className={styles.primaryCta}>
            Open in app
          </a>
          <a href={APP_STORE_URL} className={styles.secondaryCta} target="_blank" rel="noopener noreferrer">
            Download for iOS
          </a>
          <a href={PLAY_STORE_URL} className={styles.secondaryCta} target="_blank" rel="noopener noreferrer">
            Download for Android
          </a>
        </div>

        <div className={styles.privacyNote}>
          🔒 This invite only connects you with {invite.inviterName || 'the person who sent it'}.
          Your data stays private.
        </div>
      </div>
    </section>
  );
};
