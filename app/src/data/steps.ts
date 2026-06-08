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
      "Designed to make sense of unstructured brain dumps, kynd helps make sense of it all and builds a coherent and easy to follow plan for your day or week ahead.",
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
    title: 'Progress without pressure',
    description:
      "Whether you use kynd every day, or don't touch it for three weeks, the app can pick up where you left off without any pressure or guilt. The app's goal is to help you keep moving forward, adapting as required.",
  }
];
