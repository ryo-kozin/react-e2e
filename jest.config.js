module.exports = {
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
		},
	},
	projects: [
		{
			displayName: 'snapshot',
			preset: 'ts-jest',
			testEnvironment: 'jest-environment-jsdom',
			setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
			testMatch: ['<rootDir>/__tests__/snapshot.test.tsx'],
		},
		{
			displayName: 'unit',
			preset: 'ts-jest',
			testEnvironment: 'jest-environment-jsdom',
			setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
			testMatch: ['<rootDir>/__tests__/unit.test.tsx'],
		},
		{
			displayName: 'visual',
			preset: 'jest-puppeteer',
			testMatch: ['<rootDir>/__tests__/visual.test.ts'],
		},
	],
};
