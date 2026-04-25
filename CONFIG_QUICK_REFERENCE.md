# ⚡ Configuration Quick Reference

## 📂 File Location Legend

| File | Purpose | Update When |
|------|---------|------------|
| `config/data.js` | Content (projects, skills, bio) | Adding projects, updating bio, changing links |
| `config/theme.js` | Colors, spacing, typography | Rebranding, design changes |
| `config/animations.js` | Animation timings, easing | Changing animation speed/feel |
| `config/navigation.js` | Menu items, routes | Adding menu items, changing navigation |
| `config/metadata.js` | SEO, OG tags, app config | SEO updates, API URL, analytics |

---

## 🎨 Common Configuration Changes

### Change Brand Color (Everywhere!)
```javascript
// config/theme.js
colors: {
  primary: '#3b82f6',  // Change this one value
}
```
**Impact:** Buttons, links, accents, hover states all change 🎨

---

### Add a New Project
```javascript
// config/data.js - Add to projects array
{
  id: 8,
  title: "My New Project",
  subtitle: "Short description",
  description: "Long description",
  techStack: ["Tech1", "Tech2"],
  links: { github: "...", live: "..." },
  featured: true,
  category: "fullstack",
  status: "completed"
}
```
**Impact:** Appears in Projects section, filters work automatically ✨

---

### Make All Animations Slower
```javascript
// config/animations.js
duration: {
  slow: 1.0,    // ← Increase from 0.6
}
```
**Impact:** All slow animations globally slower 🎬

---

### Update Your Social Links
```javascript
// config/data.js
socials: {
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
  twitter: "https://x.com/yourhandle",
  instagram: "https://instagram.com/yourprofile"
}
```
**Impact:** Hero, Footer, Contact sections update 🔗

---

### Add Navigation Menu Item
```javascript
// config/navigation.js
mainMenu: [
  ...existing items,
  {
    id: 'portfolio',
    label: 'Portfolio',
    path: '#portfolio',
    icon: 'FiFolder',
    order: 9
  }
]
```
**Impact:** New menu item appears in navbar 📱

---

### Update Skills
```javascript
// config/data.js
skills: {
  languages: ["JavaScript", "TypeScript", "Python"],  // ← Add new skills
  frontend: ["React", "Vue", "Next.js"],              // ← Update
}
```
**Impact:** Skills section displays instantly 🎯

---

### Change SEO Title
```javascript
// config/metadata.js
site: {
  title: "Your New Title | Developer",
  description: "Your new description"
}
```
**Impact:** Browser tab title, social sharing 🔍

---

## 🚀 Import Quick Reference

```javascript
// Option 1: From index (recommended)
import { personalInfo, theme, animations } from '@/config'

// Option 2: Specific file
import { personalInfo } from '@/config/data'
import { theme } from '@/config/theme'

// Option 3: Deconstructed
import { colors, spacing } from '@/config/theme'

// Option 4: Entire config
import config from '@/config'
config.personalInfo.name
```

---

## 🎯 Most Used Values

```javascript
// Colors
theme.colors.primary          // Main brand color (#6366f1)
theme.colors.textPrimary      // Main text color
theme.colors.bgCard           // Card background

// Spacing
theme.spacing.md              // 1rem (standard padding)
theme.spacing.lg              // 1.5rem (larger padding)
theme.spacing.xl              // 2rem (large gaps)

// Animation Duration
animations.duration.base      // 0.3s (standard)
animations.duration.slow      // 0.6s (slow)
animations.duration.slower    // 0.8s (very slow)

// Easing
animations.gsapEasing.out     // "power2.out"
animations.stagger.md         // 0.1 (between items)
```

---

## ✅ Pre-flight Checklist

Before deploying, verify:
- [ ] `personalInfo.email` is correct
- [ ] All social links are correct
- [ ] `metadata.app.apiUrl` points to correct backend
- [ ] `metadata.site.title` is your name/brand
- [ ] All project links work
- [ ] No hardcoded colors override theme
- [ ] Feature flags in `metadata.features` are set correctly

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Color not changing | Check if component imports theme correctly |
| Animation too fast/slow | Adjust duration in animations.js |
| Project not showing | Ensure all required fields are filled & id is unique |
| Menu item not appearing | Check navigation.js mainMenu array & path format |
| Links broken | Verify socials and externalLinks in config/data.js |

---

## 📈 Scalability Tips

As your portfolio grows:
1. Add new sections by creating config entries in `data.js`
2. Organize related items in the respective config files
3. Keep naming consistent (use camelCase, lowercase categories)
4. Document custom additions with inline comments
5. Consider separating very large config objects into separate files

---

**Remember:** Change once → Update everywhere! 🎉
