import { chromium } from '@playwright/test';

const browser = await chromium.launch();
const page = await browser.newPage();

// Desktop
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);
await page.screenshot({ path: '/tmp/kynd-desktop.png', fullPage: true });
console.log('Desktop screenshot saved');

// Section shots
const sections = ['#home', '#for-adhd', '#features', '#how-it-works', '#waitlist'];
for (const id of sections) {
  const el = await page.$(id);
  if (el) {
    await el.screenshot({ path: `/tmp/kynd${id.replace('#', '-')}.png` });
    console.log(`Section ${id} screenshot saved`);
  }
}

// Mobile
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);
await page.screenshot({ path: '/tmp/kynd-mobile.png', fullPage: true });
console.log('Mobile screenshot saved');

await browser.close();
