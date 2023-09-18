import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'light-background':'#eff2f9',
        'light-secundary':'#e4ebf1',
        'light-shadow':'#b5bfc',
        'light-font':'#6e7f8d'
      },
      dark:{
        'dark-background':'#6e7f8d',
        'dark-secundary':'#b5bfc',
        'dark-shadow':'#e4ebf1',
        'dark-font':'#eff2f9'

      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
