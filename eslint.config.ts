import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Other custom rules
      'prettier/prettier': 'error',
      'react/prop-types': 'off', // We are using TypeScript types
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'no-unused-vars': 'off', // Disabled because TypeScript handles it
      '@typescript-eslint/no-unused-vars': ['error'], // TypeScript-specific
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], ['internal', 'sibling', 'parent', 'index']],
        },
      ],
    },
  }
)
