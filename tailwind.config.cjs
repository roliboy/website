module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: {
					dark: '#282a36',
					light: '#44475a'
				},
				foreground: '#f8f8f2',
				primary: '#bd93f9',
				secondary: `#ff79c6`
			},
			fontFamily: {
				saira: ['Saira', 'sans-serif']
			},
			backgroundImage: {
				header: 'linear-gradient(rgba(40, 42, 54, 0.65), #282a36), url(/static/header.png)'
			}
		}
	},
	plugins: []
};
