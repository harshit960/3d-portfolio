const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A293FF",
        secondary: "#00F0FF",
        accent: "#000000",
        accent2: "#8E8E8E",
        gray: "#F1F1F1",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: '#333',
            a: {
              color: '#A293FF',
              '&:hover': {
                color: '#00F0FF',
              },
            },
            h1: {
              color: '#111',
            },
            h2: {
              color: '#111',
            },
            h3: {
              color: '#111',
            },
            code: {
              color: '#111',
              backgroundColor: '#f5f5f5',
              padding: '0.1em 0.25em',
              borderRadius: '0.25em',
            },
            pre: {
              backgroundColor: '#0f172a',
              color: '#e2e8f0',
            },
          },
        },
        invert: {
          css: {
            color: '#d1d5db',
            a: {
              color: '#A293FF',
              '&:hover': {
                color: '#00F0FF',
              },
            },
            h1: {
              color: '#fff',
            },
            h2: {
              color: '#fff',
            },
            h3: {
              color: '#fff',
            },
            h4: {
              color: '#fff',
            },
            p: {
              color: '#d1d5db',
            },
            strong: {
              color: '#fff',
            },
            blockquote: {
              color: '#d1d5db',
              borderLeftColor: '#3f3f46',
            },
            code: {
              color: '#fff',
              backgroundColor: '#1f2937',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#e2e8f0',
            },
            ol: {
              li: {
                '&::marker': {
                  color: '#6b7280',
                },
              },
            },
            ul: {
              li: {
                '&::marker': {
                  color: '#6b7280',
                },
              },
            },
            hr: {
              borderColor: '#3f3f46',
            },
            table: {
              tbody: {
                tr: {
                  borderBottomColor: '#3f3f46',
                },
              },
              thead: {
                th: {
                  color: '#fff',
                },
              },
            },
          },
        },
      },
    },
    fontFamily: {
      montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      poppins: ["var(--font-poppins)", ...fontFamily.sans],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
