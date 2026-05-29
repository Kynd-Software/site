export interface Problem {
  id: string;
  emoji: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export const problems: Problem[] = [
  {
    id: 'paralysis',
    emoji: '😶‍🌫️',
    title: 'Paralysis & overwhelm',
    description:
      'Staring at a wall of tasks, completely frozen. Not lazy — just unable to figure out what to do first, or next.',
    highlight: true,
  },
  {
    id: 'initiation',
    emoji: '🚀',
    title: 'Task initiation',
    description:
      'Knowing exactly what needs doing but being completely unable to start. The gap between intention and action can feel impossible.',
  },
  {
    id: 'rsd',
    emoji: '🌀',
    title: 'RSD & anxiety spirals',
    description:
      'Rejection Sensitive Dysphoria turns a small setback into a cascade of spiralling thoughts that make everything feel hopeless.',
  },
  {
    id: 'abandonment',
    emoji: '📱',
    title: 'App abandonment',
    description:
      "You downloaded something promising last week. Now it's buried on page four of your home screen and you can't remember why you installed it.",
  },
];
