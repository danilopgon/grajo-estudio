import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5EDE3',
          light:   '#FAF6F1',
        },
        sand:  '#E8DDD0',
        earth: {
          DEFAULT: '#3D3229',
          mid:     '#5C4D3C',
        },
        orange: {
          DEFAULT:   '#E8724A',
          hover:     '#D4603A',
          soft:      '#F2A47C',
          accessible:       '#8B3A1E',
          'accessible-hover': '#6E2E16',
        },
        ochre: '#C4953A',
        black: '#1A1714',
        white: '#FFFDF9',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: '50px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
