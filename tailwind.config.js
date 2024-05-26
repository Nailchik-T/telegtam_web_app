/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,jsx}'],
	theme: {
		extend: {
			boxShadow: {
				custom: '0 20px 35px 0 rgba(0, 0, 0, 0.05)',
			},
			colors: {
				secondary: '#EEF1F4',
				primary: '#667080',
			},
		},
	},
	plugins: [],
}
