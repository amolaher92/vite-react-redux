//jest.config.ts
import type { Config } from 'jest';

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom'],
	transform:{
		'^.+\\.tsx?$':'ts-jest',
	},
};

export default config;
