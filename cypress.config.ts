import { defineConfig } from 'cypress';

export default defineConfig({
	projectId: '8wqgav',
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		specPattern: 'cypress/integration/**/*.spec.{js,jsx,ts,tsx}',
		baseUrl: 'http://localhost:3000',
	},
});
