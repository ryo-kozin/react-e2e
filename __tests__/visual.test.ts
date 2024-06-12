import React from 'react';

const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

describe('Visual Regression Tests', () => {
	it('should visually match the snapshot', async () => {
		await page.goto('http://localhost:3000');
		const image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});
});
