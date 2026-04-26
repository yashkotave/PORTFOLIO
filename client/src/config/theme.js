/**
 * @file theme.js
 * @description Premium professional theme configuration with sophisticated colors
 * Modern, clean color palette designed for professional portfolios
 */

export const theme = {
  // Professional Primary Colors - Modern & Clean
  colors: {
    // Primary Colors - Modern Indigo/Cyan blend
    primary: '#3b82f6',          // Modern blue
    primaryLight: '#60a5fa',     // Light blue for hover states
    primaryDark: '#1e40af',      // Dark blue

    // Secondary Accent - Professional Cyan
    secondary: '#06b6d4',        // Cyan accent
    secondaryLight: '#22d3ee',   // Light cyan
    secondaryDark: '#0891b2',    // Dark cyan

    // Tertiary - Elegant Purple
    tertiary: '#8b5cf6',         // Purple accent
    tertiaryLight: '#a78bfa',    // Light purple
    tertiaryDark: '#6d28d9',     // Dark purple

    // Backgrounds - Sophisticated Dark
    bgDark: '#030712',           // Deep dark background
    bgCard: '#0f172a',           // Card background - slightly lighter
    bgHover: '#1e293b',          // Hover background - subtle lift
    bgAccent: '#0f172a',         // Accent background

    // Text Colors - Professional Contrast
    textPrimary: '#f8fafc',      // Primary text - almost white
    textSecondary: '#cbd5e1',    // Secondary text - light gray
    textTertiary: '#64748b',     // Tertiary text - muted gray

    // Borders & Dividers - Subtle but defined
    border: 'rgba(148, 163, 184, 0.12)',
    borderLight: 'rgba(148, 163, 184, 0.18)',
    borderAccent: 'rgba(59, 130, 246, 0.25)',
    borderAccentSecondary: 'rgba(6, 182, 212, 0.25)',

    // Semantic Colors - Professional palette
    success: '#10b981',          // Green
    error: '#ef4444',            // Red
    warning: '#f59e0b',          // Amber
    info: '#3b82f6',             // Blue
    pending: '#f59e0b',          // Orange for pending

    // Gradient Colors
    gradientPrimary: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    gradientSecondary: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    gradientAccent: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
  },

  // Spacing Scale - Consistent and proportional
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
  },

  // Font Sizes - Professional hierarchy
  fontSize: {
    xs: '0.75rem',   // 12px
    sm: '0.875rem',  // 14px
    base: '1rem',    // 16px
    lg: '1.125rem',  // 18px
    xl: '1.25rem',   // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '2rem',   // 32px
    '4xl': '2.5rem', // 40px
  },

  // Shadow Presets - Professional depth
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
    glow: '0 0 20px rgba(59, 130, 246, 0.3)',
    glowSecondary: '0 0 20px rgba(6, 182, 212, 0.3)',
  },

  // Transitions - Smooth and professional
  transition: {
    fast: '150ms cubic-bezier(0.4, 0, 1, 1)',
    base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
}
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
