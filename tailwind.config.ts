import type { Config } from "tailwindcss"
import tailwindAnimation from "tailwindcss-animate"

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: {
					DEFAULT: "hsl(var(--background))",
					light: "#FFFFFF",
					dark: "#121212",
				},
				surface: {
					DEFAULT: "hsl(var(--surface))",
					light: "#F3F4F6",
					dark: "#1E1E1E",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					light: "#5B21B6",
					dark: "#8B5CF6",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					light: "#4C1D95",
					dark: "#6D28D9",
					foreground: "hsl(var(--secondary-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					light: "#7C3AED",
					dark: "#DDD6FE",
					foreground: "hsl(var(--accent-foreground))",
				},
				text: {
					DEFAULT: "hsl(var(--text))",
					light: "#111827",
					dark: "#FFFFFF",
				},
				muted: "hsl(var(--muted))",
				"muted-foreground": "hsl(var(--muted-foreground))",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [tailwindAnimation],
} satisfies Config

