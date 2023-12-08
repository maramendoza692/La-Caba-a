module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,png,jpg,jpeg,svg,html,txt,css,js}'
	],
	swDest: 'build/sw.js',
	swSrc: "src/sw-template.js"
};
