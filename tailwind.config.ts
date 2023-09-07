import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        restauco: "#fe5f41",
      },
      backgroundColor: {
        restauco: "#fe5f41",
        restaucoIcon: "#ffeee9",
        jumbotron: "#fff4f2"
      },
      borderColor: {
        restauco: "#fe5f41"
      }
    },
  },
  plugins: [],
}
export default config
