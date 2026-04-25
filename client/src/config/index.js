/**
 * @file index.js
 * @description Central export point for all configuration files
 * Import everything from this file to access all configs
 *
 * Usage:
 * import { personalInfo, theme, animations, navigation } from '@/config'
 * OR
 * import config from '@/config'
 * config.personalInfo.name
 */

// Import from all config files
import theme from './theme'
import animations from './animations'
import navigation from './navigation'
import metadata from './metadata'

import {
  personalInfo,
  skills,
  projects,
  experience,
  education,
  services,
  testimonials,
  blogPosts,
} from './data'

// Named exports (most common usage)
export {
  personalInfo,
  skills,
  projects,
  experience,
  education,
  services,
  testimonials,
  blogPosts,
  theme,
  animations,
  navigation,
  metadata,
}

// Default export (alternative usage)
export default {
  // Content
  personalInfo,
  skills,
  projects,
  experience,
  education,
  services,
  testimonials,
  blogPosts,

  // Design & Config
  theme,
  animations,
  navigation,
  metadata,
}
