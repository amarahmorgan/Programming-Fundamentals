import { test, expect } from '@playwright/test';

import testdata from './testdata.json';

testdata.tests.forEach((testCase: any) => {

    test(testCase.scenario, async ({ page }) => {

        await page.goto('https://quality-engineering-labs.vercel.app/payment.html');

        await page.getByLabel('Customer Phone Number').fill(testCase.input.phoneNumber);

        await page.getByTestId('select-product').selectOption(testCase.input.product);

        await page.getByTestId('select-provider').selectOption(testCase.input.provider);

        await page.getByTestId('quick-R29').click();

        if (testCase.input.acceptTerms) {
            await page.getByTestId('check-terms').check();
        }

        await page.getByTestId('submit-btn').click();

        if (testCase.expected.receiptVisible) {
            await expect(page.getByTestId('sale-receipt')).toBeVisible();
            await expect(page.getByTestId('receipt-ref')).toBeVisible();
        }

    });

});