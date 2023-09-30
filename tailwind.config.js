/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0B0D17',
        'light-purple': '#D0D6F9',
        'white': '#FFFFFF'
      },
      fontFamily: {
        'sans': ['Barlow', ...defaultTheme.fontFamily.sans],
        'sans-heading': ['Barlow Condensed', ...defaultTheme.fontFamily.sans],
        'serif': ['Bellefair', ...defaultTheme.fontFamily.serif]
      },
      backgroundImage: {
        'home-desktop': "url('/src/assets/home/background-home-desktop.jpg')",
        'home-tablet': "url('/src/assets/home/background-home-tablet.jpg')",
        'home-mobile': "url('/src/assets/home/background-home-mobile.jpg')",
        'destination-desktop': "url('/src/assets/destination/background-destination-desktop.jpg')",
        'destination-tablet': "url('/src/assets/destination/background-destination-tablet.jpg')",
        'destination-mobile': "url('/src/assets/destination/background-destination-mobile.jpg')",
        'crew-desktop': "url('/src/assets/crew/background-crew-desktop.jpg')",
        'crew-tablet': "url('/src/assets/crew/background-crew-tablet.jpg')",
        'crew-mobile': "url('/src/assets/crew/background-crew-mobile.jpg')",
        'technology-desktop': "url('/src/assets/technology/background-technology-desktop.jpg')",
        'technology-tablet': "url('/src/assets/technology/background-technology-tablet.jpg')",
        'technology-mobile': "url('/src/assets/technology/background-technology-mobile.jpg')"
      },
      keyframes: {
        rotate: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        fadeInSlow: {
          '0%': {opacity: '0'},
          '30%': {opacity: '0'},
          '100%': {opacity: '1'},
        }
      },
      animation: {
        'rotate-loop': 'rotate 360s linear infinite',
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-in-slow': 'fadeInSlow 1s  ease-in-out forwards'
      },
      aspectRatio: {
        '3/4': '3 / 4'
      }
    },
  },
  plugins: [],
}

