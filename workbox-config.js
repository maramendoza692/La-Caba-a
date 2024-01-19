module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,png,html,txt,css,js}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};