import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import conartiFsd from '@conarti/eslint-plugin-feature-sliced';

export default tseslint.config(
  { 
    ignores: ['dist', 'node_modules', 'src/app/types/**/*'] 
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'conarti-fsd': conartiFsd,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      // Вот актуальные названия правил из этого плагина
      'conarti-fsd/layers-slices': 'error',
      'conarti-fsd/absolute-relative': 'error',
      'conarti-fsd/public-api': 'error',
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
  }
);
