export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  meta: string;
  avatarInitial: string;
  avatarVariant: 'brand' | 'amber' | 'terracotta';
}

export const testimonials: Testimonial[] = [
  {
    id: 'alex',
    quote:
      "Finally an app that doesn't make me feel broken for not using it perfectly. I opened it three days in a row — which is unheard of for me.",
    name: 'Alex M.',
    meta: 'Diagnosed ADHD, age 28',
    avatarInitial: 'A',
    avatarVariant: 'brand',
  },
  {
    id: 'sam',
    quote:
      "The step-by-step breakdown is everything. I knew what I had to do — I just couldn't start. Having one tiny action to take first changed that.",
    name: 'Sam T.',
    meta: 'ADHD + anxiety, age 34',
    avatarInitial: 'S',
    avatarVariant: 'amber',
  },
  {
    id: 'jordan',
    quote:
      "My partner uses the collaborative feature with me. Knowing someone can see my list and cheer me on has been surprisingly powerful.",
    name: 'Jordan K.',
    meta: 'Late-diagnosed ADHD, age 41',
    avatarInitial: 'J',
    avatarVariant: 'terracotta',
  },
];
