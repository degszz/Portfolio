/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				'custom-calc': 'calc(100vh - 65px)',
				'custom--calc': 'calc(100vh - 51px)',
			},
			fontFamily: {

			},
			colors: {
				'kai': {
					'200': '#d5e1e8',
					'300': '#b8ced8',
					'400': '#96b5c4',
					'button': '#7d9eb4',
					'600': '#6686a3',
					'hover': '#5f7996',
					'800': '#51647c',
					'bg': '#445364',
					'bgblack': '#2c353f',
				},
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
