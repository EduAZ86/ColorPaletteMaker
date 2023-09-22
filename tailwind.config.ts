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
      boxShadow:{
        'press-button': 'inset 2px 2px 6px #b5bfc6',
        'dark-press-button': 'inset 2px 2px 6px #000000',
        'button':'2px 2px 6px #b5bfc6',
        'dark-button':'2px 2px 6px #000000',
        
        'current-button':'inset 1px 1px 3px #b5bfc6',
        'dark-current-button':'inset 1px 1px 3px  #000000',

        'bar':'5px -5px 8px #b5bfc6',
        'dark-bar':'5px -5px 8px #000000',

        'subMenu':'inset 1px 1px 1px #b5bfc6',
        'dark-subMenu':'inset 1px 1px 1px  #000000'
        
      },
      colors:{
        light:{
          'background':'#eff2f9',
          'secundary':'#e4ebf1',
          'shadow':'#b5bfc6',
          'font':'#423F3E'

        },
        dark:{
          'background':'#363636',
          'secundary':'#a7a6a6',
          'shadow':'#000000',
          'font':'#eeeeee'  
        }
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize:{
        'xxs':'0.6rem'
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
