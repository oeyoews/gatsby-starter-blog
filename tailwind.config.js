/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./content/blog/**/*.md",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            /* a: {
              textDecoration: `none`,
            }, */
            "blockquote p:first-of-type::before": null,
            "blockquote p:last-of-type::after": null,
            code: {
              backgroundColor: theme("colors.slate.100"),
              borderRadius: theme("borderRadius.sm"),
              padding: `${theme("padding.1")} ${theme("padding.1.5")}`,
              border: `none`,
            },
            "code::before": {
              content: "normal",
            },
            "code::after": {
              content: "normal",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  important: true,
}
