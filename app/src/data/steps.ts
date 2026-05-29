export interface Step {
  number: number;
  title: string;
  description: string;
  active?: boolean;
}

export const steps: Step[] = [
  {
    number: 1,
    title: "Tell kynd what's going on",
    description:
      "Dump everything on your mind — tasks, worries, half-formed ideas. The AI assistant helps sort the noise into something you can actually work with. No judgement, no structure required.",
  },
  {
    number: 2,
    title: 'kynd shows you what to do next',
    description:
      "No more staring at a list wondering where to start. kynd surfaces one clear next step, guides you through your day, and checks in to see how you're getting on.",
    active: true,
  },
  {
    number: 3,
    title: 'Build momentum, not pressure',
    description:
      "Every completed step is a win. kynd celebrates your progress, helps you recover when things go sideways, and keeps showing up — even on the days you forgot it existed.",
  },
];
