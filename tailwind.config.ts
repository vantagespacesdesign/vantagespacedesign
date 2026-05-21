import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#F5F1EB',
        ink: '#111111',
        sand: '#D6C6B8',
        dusk: '#8C7B6B'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(17,17,17,0.08)',
        lifted: '0 18px 60px rgba(17,17,17,0.09)'
      },
      fontFamily: {
        serif: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(245,241,235,0.15), transparent 45%), radial-gradient(circle at bottom, rgba(140,123,107,0.1), transparent 30%)'
      },
      borderRadius: {
        xl: '1.5rem'
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
};

export default config;
