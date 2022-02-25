const config = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    'padded-blocks': ['error', {
      classes: 'always',
    }],
    'no-unused-vars': ['error', {
      args: 'after-used', vars: 'all', ignoreRestSiblings: false,
    }],
    'implicit-arrow-linebreak': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      json: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'windows'],
    'max-len': ['error', {
      code: 120,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
    'no-console': 'error',
    'no-debugger': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 0,
    }],
    quotes: ['error', 'single'],
    'sort-keys': ['error', 'asc', {
      caseSensitive: true,
      natural: false,
    }],
    'object-curly-newline': ['error', {
      ObjectPattern: {
        multiline: true,
      },
      ImportDeclaration: 'never',
      ExportDeclaration: {
        multiline: true,
        minProperties: 3,
      },
    }],
    '@typescript-eslint/no-var-requires': 0,
  },
  settings: {
    'import/extensions': ['.ts', '.json'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.json'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};

module.exports = config;
