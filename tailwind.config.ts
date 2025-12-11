import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        border: 'rgb(39 39 42)',
        background: 'rgb(9 9 11)',
        foreground: 'rgb(250 250 250)',
        primary: {
          DEFAULT: 'rgb(139 92 246)',
          foreground: 'rgb(250 250 250)',
        },
        tier: {
          bronze: '#d97706',
          silver: '#a1a1aa',
          gold: '#facc15',
          platinum: '#22d3ee',
          diamond: '#8b5cf6',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
};

export default config;
