import { Button } from '@/components/ui';
import { useHomeSectionNavigation } from '@/hooks/use-home-section-navigation';
import styles from './Hero.module.css';

export function Hero() {
  const { navigateToSection } = useHomeSectionNavigation();

  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-heading">
      <div className={`${styles.blob} ${styles.blob1}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blob3}`} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>
        {/* Copy */}
        <div className={styles.copy}>
          <h1 className={styles.headline} id="hero-heading">
            The productivity app for <em>different kinds</em> of minds.
          </h1>

          <div className={styles.sub}>
            <p>
              We love people. They're unique and imperfect and brilliant. We love software too,
              because almost anything is possible.
            </p>
            <p>
              There's a whole universe of apps to make you into a productivity machine or a learning
              superhero. We want to make apps that are <strong>more human</strong> — for people who
              find life hard to manage, a little more manageable.
            </p>
            <p className={styles.subBrand}>This is kynd.</p>
          </div>

          <div className={styles.actions}>
            <Button variant="secondary" size="lg" onClick={() => navigateToSection('how-it-works')}>
              See how it works
            </Button>
          </div>

          <div className={styles.trust}>
            <div className={styles.trustAvatars} aria-hidden="true">
              <div className={`${styles.trustAvatar} ${styles.trustAvatar1}`}>A</div>
              <div className={`${styles.trustAvatar} ${styles.trustAvatar2}`}>S</div>
              <div className={`${styles.trustAvatar} ${styles.trustAvatar3}`}>J</div>
            </div>
            <span>
              Join <strong>2,400+</strong> people already waiting
            </span>
          </div>
        </div>

        {/* Phone illustration */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.phoneWrap}>
            {/* Floating feature chips */}
            <div className={`${styles.chip} ${styles.chipFocus}`}>Focus Mode</div>
            <div className={`${styles.chip} ${styles.chipBody}`}>Body Doubling</div>
            <div className={`${styles.chip} ${styles.chipEnergy}`}>Energy Aware</div>
            <div className={`${styles.chip} ${styles.chipWin}`}>Streak-Free Wins</div>
            <div className={`${styles.chip} ${styles.chipCapture}`}>Smart Capture</div>

            <PhoneSvg />
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div className={styles.featureStrip}>
        <div className={styles.featurePill}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
          Focus Mode
        </div>
        <div className={styles.featurePill}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Collaborative Support
        </div>
        <div className={styles.featurePill}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Routine Builder
        </div>
        <div className={styles.featurePill}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          RSD Support
        </div>
        <div className={styles.featurePill}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Wins Celebration
        </div>
        <div className={styles.featurePill}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Check-ins
        </div>
      </div>
      </div>
    </section>
  );
}

function PhoneSvg() {
  return (
    <svg
      className={styles.phoneSvg}
      viewBox="0 0 280 570"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Wireframe preview of the kynd app"
    >
      <rect x="16" y="20" width="260" height="540" rx="38" fill="rgba(25,40,23,0.08)" />
      <rect x="8" y="8" width="264" height="554" rx="40" fill="white" stroke="#d0c5b2" strokeWidth="1.5" />
      <rect x="2" y="130" width="5" height="44" rx="3" fill="#d0c5b2" />
      <rect x="2" y="188" width="5" height="44" rx="3" fill="#d0c5b2" />
      <rect x="273" y="156" width="5" height="60" rx="3" fill="#d0c5b2" />
      <rect x="100" y="20" width="80" height="24" rx="12" fill="#1a2917" opacity="0.06" />
      <text x="24" y="34" fontFamily="Nunito, sans-serif" fontSize="9" fill="#9aaa95" fontWeight="600" opacity="0.6">9:41</text>
      <rect x="220" y="26" width="26" height="9" rx="4.5" fill="#9aaa95" opacity="0.25" />
      <rect x="221" y="27" width="18" height="7" rx="3.5" fill="#3d5c34" opacity="0.5" />
      <rect x="248" y="27" width="12" height="7" rx="2" fill="#9aaa95" opacity="0.25" />
      <circle cx="243" cy="30.5" r="3.5" fill="#9aaa95" opacity="0.3" />
      <rect x="18" y="54" width="244" height="60" rx="16" fill="#f0f5ed" />
      <rect x="34" y="66" width="90" height="11" rx="5.5" fill="#3d5c34" opacity="0.35" />
      <rect x="34" y="84" width="60" height="9" rx="4.5" fill="#9aaa95" opacity="0.4" />
      <circle cx="236" cy="76" r="22" fill="#e4eedf" />
      <circle cx="236" cy="72" r="9" fill="#7ba06a" opacity="0.45" />
      <rect x="225" y="85" width="22" height="8" rx="4" fill="#7ba06a" opacity="0.3" />
      <rect x="18" y="126" width="130" height="13" rx="6.5" fill="#3d5c34" opacity="0.4" />
      <rect x="214" y="127" width="48" height="11" rx="5.5" fill="#d4902a" opacity="0.25" />
      <rect x="18" y="150" width="244" height="80" rx="18" fill="#3d5c34" />
      <rect x="34" y="164" width="14" height="14" rx="7" fill="white" opacity="0.3" />
      <rect x="56" y="164" width="120" height="11" rx="5.5" fill="white" opacity="0.75" />
      <rect x="56" y="182" width="80" height="9" rx="4.5" fill="white" opacity="0.4" />
      <rect x="180" y="162" width="54" height="20" rx="10" fill="white" opacity="0.15" />
      <rect x="190" y="169" width="34" height="7" rx="3.5" fill="white" opacity="0.5" />
      <rect x="34" y="204" width="48" height="8" rx="4" fill="white" opacity="0.25" />
      <rect x="188" y="200" width="24" height="12" rx="6" fill="white" opacity="0.2" />
      <rect x="18" y="242" width="244" height="68" rx="18" fill="#f2ece0" />
      <rect x="34" y="256" width="14" height="14" rx="7" fill="#3d5c34" opacity="0.18" />
      <rect x="56" y="256" width="110" height="11" rx="5.5" fill="#3d5c34" opacity="0.35" />
      <rect x="56" y="274" width="78" height="9" rx="4.5" fill="#9aaa95" opacity="0.5" />
      <rect x="194" y="260" width="48" height="18" rx="9" fill="#e4eedf" />
      <rect x="202" y="266" width="32" height="6" rx="3" fill="#3d5c34" opacity="0.3" />
      <rect x="18" y="322" width="244" height="68" rx="18" fill="#f2ece0" />
      <rect x="34" y="336" width="14" height="14" rx="7" fill="#3d5c34" opacity="0.18" />
      <rect x="56" y="336" width="136" height="11" rx="5.5" fill="#3d5c34" opacity="0.35" />
      <rect x="56" y="354" width="64" height="9" rx="4.5" fill="#9aaa95" opacity="0.5" />
      <rect x="228" y="336" width="14" height="14" rx="7" fill="#e4eedf" />
      <rect x="18" y="402" width="118" height="60" rx="16" fill="#faeaba" />
      <rect x="30" y="414" width="64" height="9" rx="4.5" fill="#d4902a" opacity="0.55" />
      <circle cx="32" cy="446" r="8" fill="#d4902a" opacity="0.8" />
      <circle cx="52" cy="446" r="8" fill="#d4902a" opacity="0.8" />
      <circle cx="72" cy="446" r="8" fill="#d4902a" opacity="0.5" />
      <circle cx="92" cy="446" r="8" fill="#d4902a" opacity="0.2" />
      <circle cx="112" cy="446" r="8" fill="#d4902a" opacity="0.1" />
      <rect x="144" y="402" width="118" height="60" rx="16" fill="#e4eedf" />
      <rect x="156" y="414" width="70" height="9" rx="4.5" fill="#3d5c34" opacity="0.45" />
      <rect x="158" y="431" width="40" height="14" rx="7" fill="#3d5c34" opacity="0.22" />
      <rect x="204" y="433" width="46" height="11" rx="5.5" fill="#3d5c34" opacity="0.3" />
      <line x1="8" y1="490" x2="272" y2="490" stroke="#e6ddd0" strokeWidth="1" />
      <rect x="30" y="502" width="16" height="16" rx="5" fill="#9aaa95" opacity="0.3" />
      <rect x="30" y="520" width="16" height="3" rx="1.5" fill="transparent" />
      <circle cx="140" cy="510" r="14" fill="#3d5c34" opacity="0.12" />
      <rect x="132" y="504" width="16" height="16" rx="5" fill="#3d5c34" opacity="0.7" />
      <rect x="134" y="525" width="12" height="3" rx="1.5" fill="#3d5c34" opacity="0.6" />
      <rect x="190" y="502" width="16" height="16" rx="5" fill="#9aaa95" opacity="0.3" />
      <rect x="234" y="502" width="16" height="16" rx="5" fill="#9aaa95" opacity="0.3" />
      <rect x="110" y="546" width="60" height="4" rx="2" fill="#1a2917" opacity="0.1" />
    </svg>
  );
}
