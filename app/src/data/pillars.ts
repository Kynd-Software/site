export interface Pillar {
  id: string;
  title: string;
  description: string;
  iconVariant?: 'brand' | 'amber' | 'terracotta';
}

export const pillars: Pillar[] = [
  {
    id: 'no-shame',
    title: 'No shame, ever',
    description:
      "kynd never uses language that makes you feel bad for being human. Missed a week? The app starts fresh with you, without comment.",
    iconVariant: 'brand',
  },
  {
    id: 'low-overwhelm',
    title: 'Low-overwhelm design',
    description:
      'Never more than one thing asking for your attention at once. The interface is calm by design — clear, spacious, with no decision fatigue.',
    iconVariant: 'brand',
  },
  {
    id: 'adapts',
    title: 'Adapts to real life',
    description:
      "Plans fall apart — that's fine. kynd recalibrates without drama, adjusting your day without making you feel like you've failed.",
    iconVariant: 'amber',
  },
  {
    id: 'community',
    title: 'Community-shaped',
    description:
      'Every feature has been shaped alongside members of the ADHD community — people who live this every day and know what actually helps.',
    iconVariant: 'amber',
  },
  {
    id: 'wins',
    title: 'Every win counts',
    description:
      'Getting dressed. Sending one email. Replying to that message. kynd treats these as the real achievements they are for an ADHD brain.',
    iconVariant: 'terracotta',
  },
  {
    id: 'nudges',
    title: 'Supportive nudges, not demands',
    description:
      "Check-ins that feel like a gentle tap on the shoulder, not a notification screaming at you. kynd checks in, it doesn't bark orders.",
    iconVariant: 'brand',
  },
];
