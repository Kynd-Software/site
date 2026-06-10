import { useLocation } from 'wouter';
import { getSectionHref } from '@/lib/site-navigation';
import { scrollToSection } from '@/lib/scroll-to-section';

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
    { behavior = 'auto' }: NavigateToSectionOptions = {},
  ): void => {
    const nextHref = getSectionHref(sectionId);

    if (window.location.pathname === '/') {
      const nextHash = `#${sectionId}`;

      if (window.location.hash !== nextHash) {
        window.history.pushState({}, '', nextHref);
      }

      const section = document.getElementById(sectionId);
      if (section) {
        scrollToSection(section, behavior);
      }

      return;
    }

    navigate(nextHref);
  };

  return { navigateToSection };
};
