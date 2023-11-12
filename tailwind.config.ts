import type { Config } from 'tailwindcss'
const tailwindMdBase = require('@geoffcodesthings/tailwind-md-base');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      markdownBase: {
        wrapperClass: 'markdown',
        img: {
          width: '100%',
          borderRadius: '5px'
        },
        li: {
          marginBottom: '6px',
          marginLeft: '20px',
          listStylePosition: 'outside',
          fontSize: '0.9rem'
        },
        blockquote: {
          fontSize: '0.8rem',
          paddingLeft: '20px'
        },
        p: {
          fontSize: '0.9rem'
        },
        strong: {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          fontWeight: 400,
          textAlign: 'center',
          img: {
            width: '30%',
            height: 'auto',
            borderRadius: '5px'
          }
        }
      },
      fontFamily: {
        'ubuntu': ['Ubuntu Mono']
      }
    },
  },
  plugins: [tailwindMdBase()],
}
export default config
