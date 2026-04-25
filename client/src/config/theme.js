/**
 * @file theme.js
 * @description Centralized theme configuration including colors, spacing, and design tokens
 * All UI colors and spacing values are managed here for consistency across the project
 */

export const theme = {
  // Primary Colors
  colors: {
    primary: '#6366f1',      // Main indigo color
    primaryLight: '#818cf8',  // Lighter indigo for hover states
    primaryDark: '#4f46e5',   // Darker indigo

    // Backgrounds
    bgDark: '#0a0a0f',        // Main dark background
    bgCard: '#111117',        // Card background
    bgHover: '#111117',       // Hover background

    // Text Colors
    textPrimary: '#f1f5f9',   // Main text
    textSecondary: '#94a3b8', // Secondary text
    textTertiary: '#475569',  // Tertiary text

    // Borders & Dividers
    border: 'rgba(255,255,255,0.07)',
    borderLight: 'rgba(255,255,255,0.12)',
    borderAccent: 'rgba(99, 102, 241, 0.3)',

    // Semantic Colors
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
  },

  // Spacing Scale
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
  },

  // Font Sizes
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: '0 0 20px rgba(99, 102, 241, 0.3)',
  },

  // Border Radius
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },

  // Z-index scale
  zIndex: {
    hide: -1,
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    backdrop: 40,
    offcanvas: 50,
    modal: 60,
    navbar: 70,
    tooltip: 80,
  },

  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out',
    slower: '500ms ease-in-out',
  },

  // Max Content Width
  maxWidth: {
    container: '1280px', // 6xl
  },
}

export default theme
