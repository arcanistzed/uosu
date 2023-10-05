/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				dark: "#272C5E",
				medium: "#9F9CD8",
				light: "#B4C4F6"
			},
			fontFamily: {
				sans: ["Poppins", "serif"],
				serif: ["Lato", "serif"],
			},
			animation: {
				"background-move": "background-move 3s linear infinite",
			},
			keyframes: {
				"background-move": {
					"0%": { backgroundPosition: "-100% -100%" },
					"100%": { backgroundPosition: "100% 100%" }
				},
			},
			backgroundSize: {
				zoom: "200%",
			},
		},
	},
	plugins: [],
};
