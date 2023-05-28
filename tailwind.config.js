/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)']
      },
      colors: {
          primary: {
            DEFAULT: '#080e13',
            50: '#f2f4f5',
            100: '#e6eaeb',
            200: '#bfc7cb',
            300: '#99a4aa',
            400: '#4d5e66',
            500: '#080e13',
            600: '#070c10',
            700: '#05080d',
            800: '#03060a',
            900: '#010305',
          },
          secondary: {
            DEFAULT: '#23262e',
            50: '#f5f5f6',
            100: '#ebebec',
            200: '#cccfd2',
            300: '#adafb4',
            400: '#70757c',
            500: '#23262e',
            600: '#1f2228',
            700: '#191c21',
            800: '#14171b',
            900: '#0e1012',
          },
          white: '#fff',
          warning: {
            DEFAULT: '#ff9800',
            50: '#fff5e6',
            100: '#ffebcc',
            200: '#ffd699',
            300: '#ffc266',
            400: '#ffa833',
            500: '#ff9800',
            600: '#e68a00',
            700: '#b37000',
            800: '#805600',
            900: '#663d00',
          },
          info: {
            DEFAULT: '#2196f3',
            50: '#e3f2fd',
            100: '#bbdefb',
            200: '#90caf9',
            300: '#64b5f6',
            400: '#42a5f5',
            500: '#2196f3',
            600: '#1e88e5',
            700: '#1976d2',
            800: '#1565c0',
            900: '#0d47a1',
          },
          success: {
            DEFAULT: '#4caf50',
            50: '#e8f5e9',
            100: '#c8e6c9',
            200: '#a5d6a7',
            300: '#81c784',
            400: '#66bb6a',
            500: '#4caf50',
            600: '#43a047',
            700: '#388e3c',
            800: '#2e7d32',
            900: '#1b5e20',
          },
          gray: {
          DEFAULT: '#6B7280',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        limeBright: '#C1EF0B'
      },
     gridTemplateColumns: {
      sidebar: '256px auto',
      'sidebar-collapsed': '64px auto' //collapsed sidebar
     },
     transitionProperty: {
      height: 'height'
     } 
    },
  },
  plugins: [],
}