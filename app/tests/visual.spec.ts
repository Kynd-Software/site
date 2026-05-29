import { test, expect } from '@playwright/test';

test.describe('Full page', () => {
  test('desktop', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('full-page.png', { fullPage: true });
  });
});

test.describe('Sections', () => {
  const sections: Array<{ id: string; name: string }> = [
    { id: '#home',         name: 'hero' },
    { id: '#for-adhd',     name: 'problem' },
    { id: '#features',     name: 'features' },
    { id: '#how-it-works', name: 'how-it-works' },
    { id: '#waitlist',     name: 'waitlist' },
  ];

  for (const { id, name } of sections) {
    test(name, async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      // Scroll section into view so animations have fired
      const section = page.locator(id);
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await expect(section).toHaveScreenshot(`section-${name}.png`);
    });
  }
});

// Stats band sits between hero and problem — no id, target by aria-label
test.describe('Components', () => {
  test('stats-band', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const band = page.getByLabel('ADHD statistics');
    await band.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await expect(band).toHaveScreenshot('stats-band.png');
  });
});
