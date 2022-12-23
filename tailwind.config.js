// /** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/tw-elements/dist/js/**/*.js"
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				lg: '0rem'
			},
		},
		extend: {
			fontFamily: {
				opensans: ["Open Sans", "sans-serif"], // 345678 italic
				title: ["Love Ya Like A Sister", "cursive"] // 4
			},
			colors: {
				primary: '#D01110',
				secondary: '#0A0A00',
				light: '#EBE8E0',
				dark: '#262626',
			},
			keyframes: {
				notif: {
					"75%, 100%": {
						transform: "scale(3)",
						opacity: "0"
					}
				}
			},
			animation: {
				notif: 'notif 1s ease-in-out infinite',
			}
		},
		screens: {
			'sm': "640px",
			'md': "768px",
			'lg': "1024px",
			'xl': "1280px",
			'2xl': "1400px"
		}
	},
	plugins: [require('prettier-plugin-tailwindcss'), require('tw-elements/dist/plugin')],
}
