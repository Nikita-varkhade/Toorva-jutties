/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF7F0',
          50: '#FDFBF7',
          100: '#FAF7F0',
          200: '#F4EFE6',
          300: '#EDE4D4',
        },
        gold: {
          DEFAULT: '#C6A46A',
          light: '#DFCBB0',
          dark: '#A8844D',
          hover: '#B59357',
          50: '#FBF8F2',
          100: '#F5EEDF',
        },
        beige: {
          DEFAULT: '#E8DDCC',
          light: '#F2EDE4',
          dark: '#D5C3A9',
        },
        brown: {
          DEFAULT: '#1E1611', // Darker, rich deep espresso for ultra-clear readability
          light: '#2E221B',
          dark: '#140E0A',
          muted: '#3B2F27', // Significantly darkened from #6B584C for high contrast
        },
        charcoal: '#171717',
        // Royal Indian Ethnic Luxury Palette
        ruby: {
          DEFAULT: '#8B1E2D',
          dark: '#6E1421',
          light: '#FDF2F4',
          border: '#F3C5CD',
        },
        emeraldRoyal: {
          DEFAULT: '#1D4D40',
          dark: '#13352B',
          light: '#F0F7F4',
          border: '#BFE0D6',
        },
        saffron: {
          DEFAULT: '#C86B1E',
          dark: '#9F5012',
          light: '#FEF6EE',
          border: '#F9D8B5',
        },
        rani: {
          DEFAULT: '#B83259',
          dark: '#8C2241',
          light: '#FDF2F6',
          border: '#F7C6D8',
        },
        peacock: {
          DEFAULT: '#1B395E',
          dark: '#12253E',
          light: '#F0F5FA',
          border: '#BFD4EB',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest_luxury: '0.22em',
        subtle: '0.08em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(51, 39, 31, 0.08)',
        'luxury-hover': '0 25px 50px -12px rgba(51, 39, 31, 0.16)',
        'gold-glow': '0 0 25px rgba(198, 164, 106, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.92' },
        },
      },
    },
  },
  plugins: [],
}

