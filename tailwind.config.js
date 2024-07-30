const headlessuiPlugin = require('@headlessui/tailwindcss')
const formsPlugin = require('@tailwindcss/forms')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-ubuntu)',
      },
      maxWidth: {
        '2xl': '40rem',
      },

      colors: {
        'cruise': '#9333ea',
        'crm': '#2563eb',
        'socials': '#4f46e5',
        'marketing': '#db2777',
        'unified': '#0891b2',
        'ia': '#0a0a0a',
        'callcenter': '#3b82f6',
        'voip': '#16a34a',


        'helpdesk-lighter': '#EEE8F1',

        'voip-light': '#01AF9A',
        'voip-lighter': '#DCF1EE',
        'contact-dark': '#006FB0',
        'unified-dark': '#1D96B9',
        'unified-light': '#E6F5FD',
      }

    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
}
