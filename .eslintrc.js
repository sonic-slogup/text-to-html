module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'plugin:prettier/recommended',
	],
	overrides: [],
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'prettier/prettier': 'error',
		'@typescript-eslint/explicit-function-return-type': 0,
	},
};
