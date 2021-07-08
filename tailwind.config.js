module.exports = {
	purge: ['./src/pages/**/*.js', './src/components/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#707C8C',
				secondary: '#9082EF',
				light: '#ECECEC',
				sidebar: '#070A0D',
				content: '#272E37',
				bottom: '#1F1F1F',
			},
			width: {
				skinny: '0.1rem',
			},
			spacing: {
				100: '32rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
