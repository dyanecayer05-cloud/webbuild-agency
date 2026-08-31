import { test, expect } from '@playwright/test';

test.describe('Craft and Code Landing Page Automated Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Start from local preview or live URL
    await page.goto('http://localhost:4321');
  });

  test('Navbar branding and title render correctly', async ({ page }) => {
    await expect(page).toHaveTitle(/Craft and Code by H.H. Solutions/);
    await expect(page.locator('text=Craft and Code')).toBeVisible();
    await expect(page.locator('text=by H.H. Solutions')).toBeVisible();
  });

  test('All navigation links have valid targets', async ({ page }) => {
    const navLinks = ['#home', '#about', '#features', '#process', '#pricing'];
    
    for (const href of navLinks) {
      const link = page.locator(`header nav a[href="${href}"]`);
      await expect(link).toBeVisible();
      // Ensure target section exists in DOM
      const targetSection = page.locator(href);
      await expect(targetSection).toHaveCount(1);
    }
  });

  test('Primary "Start Project" CTA points to intake section', async ({ page }) => {
    const ctaButton = page.locator('header a[href="#contact"]');
    await expect(ctaButton).toBeVisible();
    await ctaButton.click();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('Intake form inputs are interactive', async ({ page }) => {
    const input = page.locator('#contact input[type="text"], #contact input[name="name"]').first();
    if (await input.count() > 0) {
      await input.fill('Automation Test');
      await expect(input).toHaveValue('Automation Test');
    }
  });
});