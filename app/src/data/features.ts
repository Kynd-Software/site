export interface Feature {
  id: string;
  title: string;
  description: string;
  iconVariant: 'brand' | 'amber' | 'terracotta';
  hero?: boolean;
}

export const features: Feature[] = [
  {
    id: 'setup',
    title: 'Friction-free setup',
    description:
      "A friendly AI assistant helps you make sense of the noise. Tell it what's on your plate — in any order, however chaotic — and kynd helps turn it into something manageable.",
    iconVariant: 'brand',
    hero: true,
  },
  {
    id: 'steps',
    title: 'One step at a time',
    description:
      'Overwhelming tasks get broken into small, concrete steps. kynd guides you through your day one action at a time — so you always know exactly what to do next.',
    iconVariant: 'brand',
  },
  {
    id: 'routines',
    title: 'Routine Builder',
    description:
      "Build morning, evening, or any-time routines and let kynd walk you through them step by step. Flexible enough to adapt when life doesn't go to plan.",
    iconVariant: 'brand',
  },
  {
    id: 'checkins',
    title: 'Regular check-ins',
    description:
      "kynd checks in throughout the day — a gentle nudge to see how you're feeling and where you've got to. It keeps you connected without adding pressure.",
    iconVariant: 'amber',
  },
  {
    id: 'rsd',
    title: 'Calm the spiral',
    description:
      'When RSD or anxiety kicks in, kynd offers grounding exercises and gentle reframing to help you regain perspective — then builds a plan to help you reclaim control.',
    iconVariant: 'terracotta',
  },
  {
    id: 'collab',
    title: 'Collaborative support',
    description:
      'Bring in someone you trust — a parent, partner, friend, or coworker. They can help build your task list, keep you accountable, and celebrate your wins alongside you.',
    iconVariant: 'brand',
  },
  {
    id: 'focus',
    title: 'Focus Mode',
    description:
      'One task. Full screen. Pomodoro timer built in. When the world is too loud, kynd creates a quiet space for just the thing that matters right now.',
    iconVariant: 'brand',
  },
];
