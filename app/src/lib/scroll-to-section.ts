const SECTION_TOP_OFFSET_PX = 30;

export const scrollToSection = (
  section: HTMLElement,
  behavior: ScrollBehavior = 'auto',
): void => {
  const top = window.scrollY + section.getBoundingClientRect().top - SECTION_TOP_OFFSET_PX;
  window.scrollTo({ top, left: 0, behavior });
};
