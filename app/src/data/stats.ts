export interface Stat {
  id: string;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { id: 'prevalence', value: '1 in 20', label: 'adults worldwide\nhave ADHD' },
  { id: 'apps', value: '80%', label: "of productivity apps\nweren't built for us" },
  { id: 'kynd', value: 'kynd', label: 'is built differently —\nfrom day one' },
];
