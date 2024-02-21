/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#07f9a2', // '#F13024',
        redpinkAccent: '#fd0a54',
        lightblue: 'rgb(92,148,255)',
        blue: 'rgb(23,37,255)',
        darkblue: 'rgb(23,37,84)',

      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        ufo2: 'url("/ufo2.jpg")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
        kuriousLogo: 'url("/Kurious-Logo-Black-large.png")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        sora: [`var(--font-sora)`, 'sans-serif'],
        permanentMarker: [`var(--font-permanentMarker)`, 'sans-serif'],
        longCang: [`var(--font-longCang)`, 'sans-serif'],
        gothamBook: [`var(--font-gothamBook)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
