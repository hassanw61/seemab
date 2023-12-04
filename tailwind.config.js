/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"primary-light": "rgba(255,255,255,0.18)",
				"primary-dark": "#081A51",
				"primary-text": "#ffffff",
			},
		},
	},
	plugins: [],
};
