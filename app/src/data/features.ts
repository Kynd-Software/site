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
      "Simply tell kynd what's on your mind, and it magically transforms your thoughts into a clear, actionable task list.",
    iconVariant: 'brand',
    hero: true,
  },
  {
    id: 'steps',
    title: 'One step at a time',
    description:
      'Overwhelming tasks get broken into small, concrete steps. kynd guides you through your day one action at a time so you always know exactly what to do next.',
    iconVariant: 'brand',
  },
  {
    id: 'routines',
    title: 'Routine Builder',
    description:
      "Build morning, evening, or any-time routines and let kynd walk you through them step by step, helping you to navigate the repetitive but necessary parts of your day.",
    iconVariant: 'brand',
  },
  {
    id: 'checkins',
    title: 'Regular check-ins',
    description:
      "kynd checks in throughout the day to help keep you on track without pressure, overwhelm or guilt.",
    iconVariant: 'amber',
  },
  {
    id: 'rsd',
    title: 'Calm the spiral',
    description:
      'When RSD or anxiety kicks in, kynd offers grounding exercises and gentle reframing to help you regain perspective and then builds a plan to help you reclaim control.',
    iconVariant: 'terracotta',
  },
  {
    id: 'collab',
    title: 'Collaborative support',
    description:
      'Add a trusted collaborator to your account who can help build out your tasks, routines and schedules. Perfect for accountability, body doubles and having someone help celebrate your wins.',
    iconVariant: 'brand',
  },
  {
    id: 'focus',
    title: 'Focus Mode',
    description:
      'A zero distraction view that helps keep you zoned in on the task at hand, with or without a focus timer. Keeps everything else out of the way until you\'re ready to move on.',
    iconVariant: 'brand',
  },
];
