import type { Config } from 'tailwindcss';

import { colors } from './src/shared/lib/colors';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors,
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0', padding: '0 24px' },
          to: {
            height: 'var(--radix-accordion-content-height)',
            padding: '17px 24px',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
            padding: '17px 24px',
          },
          to: { height: '0', padding: '0 24px' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
