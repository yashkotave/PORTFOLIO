# 📍 Configuration Usage Map

This document shows which configuration values are used in which components.

## 🎯 data.js - Content Usage

### personalInfo
- **Hero.jsx** — name, tagline, socials
- **Navbar.jsx** — name (logo)
- **About.jsx** — summary, location, email
- **Contact.jsx** — email, location, socials
- **Footer.jsx** — socials, email

### skills
- **Skills.jsx** — displays all skill categories

### projects
- **Projects.jsx** — displays project grid with filtering
- **Project Detail pages** (future) — individual project pages

### experience
- **Experience.jsx** — timeline of work experience

### education
- **Education.jsx** — education history display

### services
- **Services.jsx** — service cards grid

### testimonials
- **Testimonials.jsx** — testimonial cards (currently empty)

### blogPosts
- **Blog.jsx** — blog post list (currently empty)

---

## 🎨 theme.js - Design Usage

### colors.primary
- Hero buttons background
- Links hover color
- Accent colors throughout
- Card borders on hover
- Icon colors

### colors.textPrimary
- All main headings
- Primary text content

### colors.textSecondary
- Secondary text
- Descriptions
- Metadata

### colors.bgDark
- Main page background
- Navbar background

### colors.bgCard
- Card backgrounds
- Component backgrounds

### spacing
- Padding in all components
- Margins between sections
- Gap between grid items

### shadows
- Card shadows on hover
- Glowing effects with GSAP

### borderRadius
- Button border radius
- Card border radius
- All rounded corners

### zIndex
- Navbar fixed positioning
- Mobile menu backdrop
- Modals (if added)

---

## ⏱️ animations.js - Animation Usage

### duration
- **Hero.jsx** — text reveal duration
- **About.jsx** — counter animation, stat cards
- **Projects.jsx** — card stagger animations
- **Skills.jsx** — skill badge animations
- **Footer.jsx** — link animations

### stagger
- **Projects.jsx** — project card staggered entry
- **Skills.jsx** — skill tags staggered entry
- **Experience.jsx** — experience items staggered
- **Education.jsx** — education items staggered

### hover effect settings
- **Projects.jsx** — card hover scale
- **Services.jsx** — service card hover
- **About.jsx** — stat box hover

### gsapEasing
- All GSAP animations use these values

---

## 🔗 navigation.js - Navigation Usage

### mainMenu
- **Navbar.jsx** — main menu items
- **Footer.jsx** — quick links

### sections
- **Navbar.jsx** — section IDs for linking
- **Footer.jsx** — section IDs for linking

### logo
- **Navbar.jsx** — logo text and styling
- **Footer.jsx** — footer branding

---

## 🔍 metadata.js - Metadata Usage

### site
- **index.html** — page title
- SEO metadata tags

### app.apiUrl
- API calls throughout the app (Contact form, etc.)

### features
- Feature flags to enable/disable functionality

### analytics
- Google Analytics setup (when enabled)

---

## 📝 Implementation Status

### ✅ Currently Using Config

Components that are properly using centralized config:
- ✅ Hero.jsx
- ✅ About.jsx
- ✅ Skills.jsx
- ✅ Projects.jsx
- ✅ Services.jsx
- ✅ Experience.jsx
- ✅ Education.jsx
- ✅ Footer.jsx
- ✅ Navbar.jsx

### 🔄 Components to Verify

Components that should verify they're using config:
- Contact.jsx — uses metadata.app.apiUrl
- Blog.jsx — uses blogPosts from config
- Testimonials.jsx — uses testimonials from config

---

## 🎯 Usage Statistics

| Config File | Used By (components) | Values Used | Importance |
|-------------|-------------------|------------|------------|
| data.js | 9 components | All content | 🔴 Critical |
| theme.js | 10 components | Colors, spacing, shadows | 🔴 Critical |
| animations.js | 8 components | Duration, stagger, easing | 🟡 High |
| navigation.js | 2 components | Menu items, sections | 🟡 High |
| metadata.js | 3+ components | SEO, API URL, features | 🟡 High |

---

## 🚀 Adding New Config Values

When you add a new configuration value:

1. **Add it to appropriate config file**
   ```javascript
   // config/theme.js, config/animations.js, etc.
   newValue: "value"
   ```

2. **Export it from config/index.js**
   ```javascript
   export { newValue } from './theme'
   ```

3. **Use it in component**
   ```javascript
   import { newValue } from '@/config'
   ```

4. **Document it in this file**
   ```markdown
   ### newValue
   - **Component.jsx** — usage description
   ```

---

## 🔄 How Changes Propagate

```
Update config/data.js
        ↓
config/index.js exports new values
        ↓
Components import from @/config
        ↓
All components using that config auto-update
        ↓
Portfolio automatically reflects changes ✨
```

---

## 📊 Key Integration Points

### Content Flow
```
config/data.js
    ↓
Components (Hero, About, Projects, etc.)
    ↓
User sees updated content instantly
```

### Design Flow
```
config/theme.js
    ↓
Component imports (colors, spacing)
    ↓
Inline styles or Tailwind classes use theme values
    ↓
Consistent design across portfolio
```

### Animation Flow
```
config/animations.js
    ↓
Components use duration, stagger, easing
    ↓
GSAP and Framer Motion use these values
    ↓
Smooth, consistent animations
```

---

## 💡 Best Practices for Component Integration

### ✅ DO: Import from Config
```javascript
import { theme, animations, personalInfo } from '@/config'

function MyComponent() {
  return (
    <div style={{ color: theme.colors.primary }}>
      {personalInfo.name}
    </div>
  )
}
```

### ❌ DON'T: Hardcode Values
```javascript
// ❌ Bad
function MyComponent() {
  return <div style={{ color: '#6366f1' }}>Content</div>
}

// ✅ Good
function MyComponent() {
  return <div style={{ color: theme.colors.primary }}>Content</div>
}
```

---

## 🎓 Learning Path

1. **Start here:** CONFIG_QUICK_REFERENCE.md
2. **Then read:** This file (CONFIG_USAGE_MAP.md)
3. **Deep dive:** CONFIG_SYSTEM_GUIDE.md
4. **Reference:** Individual config files with JSDoc comments

---

**Last Updated:** 2024
**Version:** 1.0
**Status:** Production Ready ✅
