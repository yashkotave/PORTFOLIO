/**
 * @file navigation.js
 * @description Centralized navigation configuration
 * Menu items, routes, and navigation-related data
 */

export const navigation = {
  // Main Navigation Menu Items
  mainMenu: [
    {
      id: 'about',
      label: 'About',
      path: '#about',
      icon: 'FiUser',
      order: 1,
    },
    {
      id: 'skills',
      label: 'Skills',
      path: '#skills',
      icon: 'FiCode',
      order: 2,
    },
    {
      id: 'projects',
      label: 'Projects',
      path: '#projects',
      icon: 'FiLayers',
      order: 3,
    },
    {
      id: 'experience',
      label: 'Experience',
      path: '#experience',
      icon: 'FiBriefcase',
      order: 4,
    },
    {
      id: 'education',
      label: 'Education',
      path: '#education',
      icon: 'FiAward',
      order: 5,
    },
    {
      id: 'services',
      label: 'Services',
      path: '#services',
      icon: 'FiTrendingUp',
      order: 6,
    },
    {
      id: 'blog',
      label: 'Blog',
      path: '#blog',
      icon: 'FiBook',
      order: 7,
    },
    {
      id: 'contact',
      label: 'Contact',
      path: '#contact',
      icon: 'FiMail',
      order: 8,
    },
  ],

  // Section IDs for scroll targeting
  sections: {
    hero: 'hero',
    about: 'about',
    skills: 'skills',
    projects: 'projects',
    experience: 'experience',
    education: 'education',
    services: 'services',
    testimonials: 'testimonials',
    blog: 'blog',
    contact: 'contact',
    footer: 'footer',
  },

  // Logo Configuration
  logo: {
    text: 'YK',
    url: '/',
    clickable: true,
    scrollToTop: true,
  },

  // Mobile Menu
  mobile: {
    breakpoint: 768, // md breakpoint
    menuDuration: 0.3,
    overlayDuration: 0.3,
  },

  // External Links
  externalLinks: {
    resume: '/resume.pdf',
    blog: 'https://blog.example.com',
    portfolio: 'https://portfolio.example.com',
  },

  // Navigation Styles
  styles: {
    blur: true,
    fixed: true,
    transparent: true,
    scrollChangeColor: 50, // Change color after scrolling 50px
  },
}

export default navigation
