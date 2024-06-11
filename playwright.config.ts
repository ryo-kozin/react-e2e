import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './playwright',
	use: {
		browserName: 'chromium',
	},
});
