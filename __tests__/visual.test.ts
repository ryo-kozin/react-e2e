import React from 'react';
import 'expect-puppeteer';

const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('Visual Regression Tests', () => {
	beforeAll(async () => {
		await page.goto('http://localhost:3000');
		await page.setViewport({ width: 1200, height: 800 });
	});

	it('should visually match the snapshot', async () => {
		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});
});
