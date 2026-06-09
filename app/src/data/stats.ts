export interface Stat {
  id: string;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { id: 'prevalence', value: '1 in 15*', label: 'adults worldwide\nhave ADHD' },
  { id: 'apps', value: '95%', label: "of productivity apps aren't designed for neurodivergence" },
  { id: 'kynd', value: 'kynd', label: 'is optimised to help with the challenges of living with ADHD' },
];
