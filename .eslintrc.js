module.exports = {
	extends: [
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
		'prettier/react',
		'prettier/@typescript-eslint',
	],
	settings: {
		'import/resolver': {
			node: {
				paths: ['./src'],
			},
		},
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			impliedStrict: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'import/no-unresolved': 0,
		'react/no-array-index-key': 1,
		'react/jsx-curly-brace-presence': 1,
		'import/order': 1,
		'import/extensions': 0,
		'import/no-extraneous-dependencies': 0,
		'@typescript-eslint/no-var-requires': 0,
		'global-require': 0,
		'linebreak-style': 0,
		'prefer-const': 0,
		'no-console': [
			'warn',
			{
				allow: ['warn', 'error', 'log', 'info', 'disableYellowBox'],
			},
		],
		'no-param-reassign': ['warn', { props: false }],
		'no-restricted-globals': 0,
		'no-unused-vars': 0,
		'no-underscore-dangle': 0,
		'@typescript-eslint/interface-name-prefix': 0,

		'no-useless-constructor': 0,
		'no-restricted-syntax': 1,
		'prefer-template': 1,
		'react-hooks/exhaustive-deps': 0,
		'prefer-promise-reject-errors': 1,
		'no-prototype-builtins': 1,
		'no-unused-expressions': 1,
		'no-plusplus': 0,
		'no-nested-ternary': 0,
		'lines-between-class-members': [
			1,
			'always',
			{
				exceptAfterSingleLine: true,
			},
		],
		'prefer-destructuring': [
			1,
			{
				array: false,
				object: true,
			},
		],
		'max-classes-per-file': 0,
		'import/prefer-default-export': 0,
		airbnb: 0,
		'react/prefer-stateless-function': 0,
		'react/destructuring-assignment': 0,
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 0,
		'react/jsx-props-no-spreading': 0,
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.jsx', '.tsx'],
			},
		],
		'jsx-a11y/accessible-emoji': 0,
		'react/satic-property-placement': 0,
		'@typescript-eslint/explicit-member-accessibility': [1, { accessibility: 'no-public' }],
		'@typescript-eslint/no-empty-interface': 1,
		'@typescript-eslint/explicit-function-return-type': [
			0,
			{
				allowExpressions: true,
				allowTypedFunctionExpressions: true,
			},
		],
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-use-before-define': [
			1,
			{
				functions: false,
				classes: true,
				variables: false,
			},
		],
		'@typescript-eslint/no-unused-vars': [1, { args: 'none' }],
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
	},
    "env": {
        "browser": true,
        "node": true
    }
};
