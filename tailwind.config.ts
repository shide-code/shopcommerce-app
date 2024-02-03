import type { Config } from "tailwindcss";
import { colorsTheme } from "./themes";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				...colorsTheme,
			},
		},
	},
	plugins: [],
};
export default config;
