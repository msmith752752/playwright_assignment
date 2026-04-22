import { test, expect } from '@playwright/test';
import fs from 'fs';
import { LoginPage } from '../pages/loginPage';

// Load test data
const testCases = JSON.parse(
  fs.readFileSync('./data/testCases.json', 'utf-8')
);

test.describe('Data-driven Kanban tests', () => {

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('admin', 'password123');
  });

  for (const tc of testCases) {

    test(`Verify ${tc.task} in ${tc.app}`, async ({ page }) => {

      // Navigate to correct application (Web or Mobile)
      await page.getByRole('button', { name: tc.app }).click();

      // Locate task card
      const task = page.getByText(tc.task);
      await expect(task).toBeVisible();

      // Scope to task container
      const taskCard = task.locator('..');

      // Verify column exists
      await expect(page.getByText(tc.column)).toBeVisible();

      // Verify tags inside correct task card (FIXED SCOPING ISSUE)
      for (const tag of tc.tags) {
        await expect(
          taskCard.locator('span', { hasText: tag })
        ).toBeVisible();
      }

      console.log('Validated test case:', tc);
    });

  }

});