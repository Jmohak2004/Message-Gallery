import { test, expect } from '@playwright/test';

test('has title and branding', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/MessageMate/);
  await expect(page.getByText('Copy Smart, Respond Faster')).toBeVisible();
});

test('can navigate to login', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Sign In');
  await expect(page).toHaveURL(/\/login/);
});
