export interface Problem {
  id: string;
  iconVariant: 'brand' | 'amber' | 'terracotta';
  title: string;
  description: string;
  highlight?: boolean;
}

export const problems: Problem[] = [
  {
    id: 'paralysis',
    iconVariant: 'brand',
    title: 'Paralysis & overwhelm',
    description:
      'Staring at a wall of tasks, completely frozen. And while you\'re struggling to figure out what to do first, or next, you\'re also worried about appearing "lazy".',
    highlight: true,
  },
  {
    id: 'initiation',
    iconVariant: 'terracotta',
    title: 'Task initiation',
    description:
      'Knowing exactly what needs doing but being completely unable to start. The gap between intention and action can feel impossible.',
  },
  {
    id: 'rsd',
    iconVariant: 'amber',
    title: 'RSD & anxiety spirals',
    description:
      'Rejection Sensitive Dysphoria turns a small setback into a cascade of spiralling thoughts that make everything feel hopeless.',
  },
  {
    id: 'abandonment',
    iconVariant: 'brand',
    title: 'App abandonment',
    description:
      "You downloaded something promising last week. Now it's buried on page four of your home screen and you're back to square one.",
  },
];
