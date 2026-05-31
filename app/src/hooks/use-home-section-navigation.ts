import { useLocation } from 'wouter';
import { getSectionHref } from '@/lib/site-navigation';

interface NavigateToSectionOptions {
  behavior?: ScrollBehavior;
}

interface UseHomeSectionNavigationResult {
  navigateToSection: (sectionId: string, options?: NavigateToSectionOptions) => void;
}

export const useHomeSectionNavigation = (): UseHomeSectionNavigationResult => {
  const [, navigate] = useLocation();

  const navigateToSection = (
    sectionId: string,
    { behavior = 'smooth' }: NavigateToSectionOptions = {},
  ): void => {
    const nextHref = getSectionHref(sectionId);

    if (window.location.pathname === '/') {
      const nextHash = `#${sectionId}`;

      if (window.location.hash !== nextHash) {
        window.history.pushState({}, '', nextHref);
      }

      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior, block: 'start' });
      }

      return;
    }

    navigate(nextHref);
  };

  return { navigateToSection };
};
