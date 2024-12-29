import { defineConfig } from 'vitest/config'

export default defineConfig({
   test: {
    globals: true, // Enable global test APIs like `describe`, `it`, `expect`
    environment: 'jsdom', // Simulates a browser-like DOM environment
    setupFiles: './src/setupTests.ts', // Path to setup file for test configuration
    css: true, // Enable CSS support in tests
    watch:true,
    coverage: {
      provider:'v8',
      reporter: ['text', 'json', 'html'], // Generate coverage reports
      include:['src/**/*.{ts,tsx}'],
      exclude: ['node_modules/', 'src/setupTests.ts','src/**/*.{test,spec,stories}.{ts,tsx}'], // Exclude these files from coverage
    },
    //testMatch:['**/*.test.{ts,tsx}','**/*.spec.{ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': '/src', // Simplify imports with @ for the src directory
    },
  },
})
