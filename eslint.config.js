import js from '@eslint/js';

export default [
  {
    ...js.configs.recommended,
    rules: {
      ...js.configs.recommended.rules, // لو عايز تحتفظ بكل القواعد اللي جايه من recommended
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
