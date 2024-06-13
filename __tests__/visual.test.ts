import React from 'react';
import 'expect-puppeteer';

const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

jest.setTimeout(30000);

describe('Visual Regression Tests', () => {
	beforeAll(async () => {
		await page.goto('http://localhost:3000');
		await page.setViewport({ width: 1200, height: 800 });
	}, 30000);

	it('should visually match the snapshot', async () => {
		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot({
			failureThreshold: 0.01, // 1% threshold
			failureThresholdType: 'percent', // Use percentage threshold
		});
	}, 30000);
});
