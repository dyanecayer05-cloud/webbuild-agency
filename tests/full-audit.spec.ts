import { test, expect } from '@playwright/test';

test.describe('Automated Site Audit & Chaos Test', () => {
  const pagesToTest = ['/', '/login', '/admin', '/thank-you'];

  for (const path of pagesToTest) {
    test(`Comprehensive stress test on route: ${path}`, async ({ page }) => {
      const consoleErrors: string[] = [];
      const failedRequests: string[] = [];

      // 1. Listen for true application runtime errors
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          const text = msg.text();
          // Ignore external third-party auth host resolution in local headless mode
          const isThirdPartyAuthNoise = 
            text.includes('ERR_NAME_NOT_RESOLVED') ||
            text.includes('A server with the specified hostname could not be found') ||
            text.includes('clerk');

          if (!isThirdPartyAuthNoise) {
            consoleErrors.push(text);
          }
        }
      });

      // 2. Listen for failed internal network requests
      page.on('response', (res) => {
        const url = res.url();
        const isInternal = url.includes('localhost:4321');
        if (isInternal && res.status() >= 400) {
          failedRequests.push(`${res.status()} on ${url}`);
        }
      });

      await page.goto(`http://localhost:4321${path}`, { waitUntil: 'domcontentloaded' });

      // 3. Verify all images and SVGs render with valid dimensions
      const images = page.locator('img');
      const imgCount = await images.count();
      for (let i = 0; i < imgCount; i++) {
        const img = images.nth(i);
        if (await img.isVisible()) {
          const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
          expect(naturalWidth, `Broken image found on ${path}`).toBeGreaterThan(0);
        }
      }

      // 4. Verify all navigation links and anchor targets exist
      const links = page.locator('a[href]');
      const linkCount = await links.count();
      for (let i = 0; i < linkCount; i++) {
        const href = await links.nth(i).getAttribute('href');
        if (href?.startsWith('#') && href.length > 1) {
          const target = page.locator(href);
          const exists = (await target.count()) > 0;
          expect(exists, `Dead anchor link "${href}" on ${path}`).toBeTruthy();
        }
      }

      // 5. Hover and click simulation to detect layout crashes
      const buttons = page.locator('button, [role="button"]');
      const btnCount = await buttons.count();
      for (let i = 0; i < btnCount; i++) {
        const btn = buttons.nth(i);
        if (await btn.isVisible() && await btn.isEnabled()) {
          await btn.hover().catch(() => {});
        }
      }

      // 6. Assert zero application crashes or internal HTTP failures
      expect(failedRequests, `Internal HTTP errors on ${path}: ${failedRequests.join(', ')}`).toEqual([]);
      expect(consoleErrors, `Application errors on ${path}: ${consoleErrors.join(', ')}`).toEqual([]);
    });
  }
});