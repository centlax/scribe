import typography from '@tailwindcss/typography';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,md,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [typography]
};
