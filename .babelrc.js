export default {
	presets: [
		'@babel/preset-typescript',
		["@babel/preset-react", {"runtime": "automatic"}],
		'@babel/preset-env',
	],
	plugins: [
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-proposal-optional-chaining',
		['babel-plugin-jsx-remove-data-test-id', {attributes: 'data-testid'}]
	]
};
