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
				primary: '#bd93f9'
			},
			fontFamily: {
				body: ['ZCOOL KuaiLe']
			},
			backgroundImage: {
				header: 'url(/static/header.png)'
			}
		}
	},
	plugins: []
};
