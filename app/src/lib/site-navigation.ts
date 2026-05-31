export interface HomeSectionLink {
  id: string;
  label: string;
}

export interface LegalLink {
  href: string;
  label: string;
}

export const homeSectionLinks: HomeSectionLink[] = [
  { id: 'for-adhd', label: 'For ADHD' },
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'community', label: 'Community' },
];

export const legalLinks: LegalLink[] = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
];

export const getSectionHref = (sectionId: string): string => `/#${sectionId}`;
