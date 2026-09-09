/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030014",
        surface: {
          50: "rgba(255, 255, 255, 0.03)",
          100: "rgba(255, 255, 255, 0.05)",
          200: "rgba(255, 255, 255, 0.08)",
          card: "rgba(13, 8, 28, 0.65)",
          cardHover: "rgba(22, 12, 46, 0.8)",
        },
        purpleTheme: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#2e1065",
          deep: "#120626",
          darker: "#090317",
          accent: "#bf5af2",
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'gradient-x': 'gradientX 12s ease infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(168, 85, 247, 0.2), inset 0 0 15px rgba(168, 85, 247, 0.1)' },
          '100%': { boxShadow: '0 0 35px rgba(168, 85, 247, 0.5), inset 0 0 25px rgba(168, 85, 247, 0.25)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        }
      },
      boxShadow: {
        'purple-glow': '0 0 25px -5px rgba(168, 85, 247, 0.3)',
        'purple-glow-lg': '0 0 50px -10px rgba(168, 85, 247, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
