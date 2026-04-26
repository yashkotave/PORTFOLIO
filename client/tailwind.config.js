export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Professional Blue
        'primary': '#3b82f6',
        'primary-light': '#60a5fa',
        'primary-dark': '#1e40af',
        
        // Secondary - Cyan Accent
        'secondary': '#06b6d4',
        'secondary-light': '#22d3ee',
        'secondary-dark': '#0891b2',
        
        // Tertiary - Purple
        'tertiary': '#8b5cf6',
        'tertiary-light': '#a78bfa',
        'tertiary-dark': '#6d28d9',
        
        // Background Colors
        'bg-primary': '#030712',
        'bg-secondary': '#0f172a',
        'bg-tertiary': '#1e293b',
        'bg-hover': '#1e293b',
        
        // Text Colors
        'text-primary': '#f8fafc',
        'text-secondary': '#cbd5e1',
        'text-muted': '#64748b',
        
        // Accent and utility
        'accent': '#3b82f6',
        'accent-hover': '#60a5fa',
        'accent-secondary': '#06b6d4',
        'accent-muted': 'rgba(59, 130, 246, 0.12)',
        'accent-border': 'rgba(59, 130, 246, 0.25)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-secondary': '0 0 20px rgba(6, 182, 212, 0.3)',
        'smooth': '0 10px 40px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'smooth-fade': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-slide': 'slideIn 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
