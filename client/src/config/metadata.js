/**
 * @file metadata.js
 * @description Centralized metadata configuration
 * SEO, OG tags, app metadata, and site-wide configurations
 */

export const metadata = {
  // Site Metadata
  site: {
    title: 'Yash Kotave | Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack. Building scalable web applications, real-time systems, and AI-integrated solutions.',
    url: 'https://yashkotave.com', // Update with your actual domain
    language: 'en-US',
    author: 'Yash Kotave',
  },

  // Open Graph (for social sharing)
  og: {
    title: 'Yash Kotave | Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack',
    image: '/og-image.jpg', // Add OG image to public folder
    type: 'website',
    locale: 'en_US',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    creator: '@yash_kotave',
    title: 'Yash Kotave | Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack',
    image: '/twitter-image.jpg', // Add Twitter image to public folder
  },

  // Analytics Configuration
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX', // Add your GA ID
    enabled: false, // Enable when ready
  },

  // App Configuration
  app: {
    name: 'Yash Kotave Portfolio',
    version: '1.0.0',
    environment: process.env.VITE_ENV || 'development',
    apiUrl: process.env.VITE_API_URL || 'http://localhost:5000',
  },

  // Features
  features: {
    darkMode: true,
    animations: true,
    parallax: true,
    scrollToTop: true,
    mobileMenu: true,
    formValidation: true,
    lazyLoading: true,
  },

  // Performance
  performance: {
    preloadFonts: true,
    imageOptimization: true,
    codeSpitting: true,
  },

  // Legal
  legal: {
    privacyUrl: '/privacy',
    termsUrl: '/terms',
    cookiePolicy: '/cookies',
  },

  // Contact Information
  contact: {
    email: 'yashkotave1007@gmail.com',
    phone: '+91-XXXXXXXXXX', // Optional
    responseTime: '24 hours', // Expected response time
  },

  // Keywords for SEO
  keywords: [
    'Full Stack Developer',
    'MERN Stack',
    'Web Developer',
    'React.js',
    'Node.js',
    'MongoDB',
    'Express.js',
    'JavaScript',
    'Web Development',
    'API Development',
    'UI/UX Design',
    'Bhopal',
  ],
}

export default metadata
