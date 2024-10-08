import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#ec4899",
                    400: "#f472b6",
                    800: "#ff007e",
                },
                error: {
                    DEFAULT: "#ef4444",
                },
                link: {
                    DEFAULT: "#3b82f6",
                },
            },
            flexBasis: {
                "1/4": "calc(25% - 1rem)",
                "1/3": "calc(33.33% - 1rem)",
                "1/2": "calc(50% - 1rem)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },

            // Animation
            animation: {
                zoomIn: "zoomIn .2s ease-in-out",
                fadeOut: "fadeOut .2s ease-in-out",
                fadeIn: "fadeIn .2s ease-in-out",
                fadeInLeft: "fadeInLeft .2s ease-in-out",
            },

            // Keyframes
            keyframes: () => ({
                zoomIn: {
                    "0%": { transform: "scale(0)" },
                    "100%": { transform: "scale(1)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInLeft: {
                    "0%": { opacity: "0", transform: "translateX(-20px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
            }),
        },
    },
    plugins: [
        plugin(function ({ addBase, theme, addVariant }) {
            addBase({
                h1: { fontSize: theme("fontSize.2xl") },
                h2: { fontSize: theme("fontSize.xl") },
                h3: { fontSize: theme("fontSize.lg") },
            });
            // Alias children element
            addVariant("img", "& > img");
            addVariant("input", "& > input");
        }),
    ],
};
export default config;
