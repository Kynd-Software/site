import { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import { Users } from 'lucide-react';
import { fetchInvite } from '@/lib/kynd-app';
import type { InviteData } from '@/lib/kynd-app';
import styles from './invite-page.module.css';

const ROLE_DISPLAY: Record<string, { name: string; emoji: string }> = {
  cheerleader: { name: 'Cheerleader', emoji: '🎉' },
  supporter: { name: 'Supporter', emoji: '🤝' },
  copilot: { name: 'Buddy', emoji: '🧭' },
};

export const InvitePage = () => {
  const [, params] = useRoute('/invite/:id');
  const inviteId = params?.id ?? '';

  const [invite, setInvite] = useState<InviteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!inviteId) {
      setError(true);
      setLoading(false);
      return;
    }

    fetchInvite(inviteId).then((data) => {
      if (data) {
        setInvite(data);
      } else {
        setError(true);
      }
      setLoading(false);
    });
  }, [inviteId]);

  if (loading) {
    return (
      <section className={styles.page}>
        <p className={styles.loading}>Loading your invite...</p>
      </section>
    );
  }

  if (error || !invite) {
    return (
      <section className={styles.page}>
        <div className={styles.errorCard}>
          <div className={styles.iconWrap}>
            <Users size={32} color="var(--brand)" />
          </div>
          <h1 className={styles.errorTitle}>Invite not found</h1>
          <p className={styles.errorMessage}>
            This invite link doesn&apos;t seem to exist. Check with the person who sent it and ask
            them to share it again.
          </p>
        </div>
      </section>
    );
  }

  if (invite.status === 'accepted') {
    return (
      <section className={styles.page}>
        <div className={styles.card}>
          <div className={styles.iconWrap}>
            <Users size={32} color="var(--brand)" />
          </div>
          <span className={styles.expiredBadge}>Already accepted</span>
          <h1 className={styles.title}>You&apos;re all set</h1>
          <p className={styles.subtitle}>
            This invite has already been accepted. Open the kynd app to get started.
          </p>
        </div>
      </section>
    );
  }

  const role = ROLE_DISPLAY[invite.role] || ROLE_DISPLAY.supporter;

  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <div className={styles.iconWrap}>
          <Users size={32} color="var(--brand)" />
        </div>

        <h1 className={styles.title}>You&apos;re invited</h1>
        <p className={styles.subtitle}>
          {invite.fromName || 'Someone'} wants you to be their{' '}
          <strong>{role.name}</strong> on kynd.
        </p>

        <span className={styles.roleBadge}>
          {role.emoji} {role.name}
        </span>

        <p className={styles.codeLabel}>Your activation code</p>
        <p className={styles.codeDisplay}>{invite.code}</p>

        <p className={styles.instructions}>
          Open the <strong>kynd</strong> app, tap{' '}
          <strong>&ldquo;Been invited to help?&rdquo;</strong> and enter this code to get connected.
        </p>

        <div className={styles.privacyNote}>
          🔒 This code is just for you. It connects you with {invite.fromName || 'the person'} and
          nothing else.
        </div>
      </div>
    </section>
  );
};
