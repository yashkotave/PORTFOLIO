# 🚀 Quick Start - Update Your Portfolio

This is the fastest way to update your portfolio. Follow these steps to make common changes.

---

## 🎯 Most Common Updates

### 1️⃣ Update Your Name, Email & Bio

**File:** `client/src/config/data.js`

```javascript
export const personalInfo = {
  name: "YOUR NAME HERE",           // ← Your actual name
  title: "Your Job Title",           // ← e.g., "Full Stack Developer"
  tagline: "Your short tagline",     // ← One-liner about you
  
  summary: `Your full bio here...    // ← Your full professional summary
    Can be multiple lines...
    Make it about your background and skills`,
  
  location: "Your City, Country",    // ← Where you're based
  email: "your.email@example.com",   // ← Your email
  phone: "+91-XXXXXXXXXX",           // ← Optional
  resumeUrl: "/resume.pdf",          // ← Link to your resume
  
  socials: {
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    twitter: "https://x.com/yourhandle",
    instagram: "https://instagram.com/yourname"
  }
}
```

**Result:** Your info updates everywhere — Hero section, About, Contact, Footer, etc. ✨

---

### 2️⃣ Add/Remove Projects

**File:** `client/src/config/data.js`

#### Add a New Project
```javascript
export const projects = [
  // ... existing projects
  {
    id: 8,                           // ← Unique ID (increment)
    title: "Project Name",
    subtitle: "Short subtitle",
    description: "Brief 1-2 line description",
    longDescription: "Detailed description",
    imageUrl: "/projects/image.jpg", // ← Optional
    techStack: ["React", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/your/repo",
      live: "https://live-demo.com",
      demo: "https://demo-url.com"
    },
    featured: true,                  // ← true if featured, false otherwise
    category: "fullstack",           // ← fullstack, ai, realtime
    startDate: "2024-01",
    endDate: "2024-03",
    status: "completed"              // ← completed, in-progress, archived
  }
]
```

#### Remove a Project
- Find the project by `id` number
- Delete the entire project object
- Save file

**Result:** Project appears/disappears in Projects section instantly 🎨

---

### 3️⃣ Update Skills

**File:** `client/src/config/data.js`

```javascript
export const skills = {
  languages: ["Java", "JavaScript", "Python"],    // ← Add your languages
  frontend: ["React", "Vue", "Next.js", "HTML5"], // ← Add frontend skills
  backend: ["Node.js", "Express", "Django"],      // ← Add backend skills
  databases: ["MongoDB", "PostgreSQL"],           // ← Add databases
  ai: ["RAG", "LangChain", "OpenAI"],            // ← Optional - AI skills
  tools: ["Git", "Docker", "AWS"],               // ← Add tools/platforms
  core: ["DSA", "OOP", "System Design"]          // ← Core concepts
}
```

**Result:** Skills appear immediately in Skills section 🎯

---

### 4️⃣ Update Experience

**File:** `client/src/config/data.js`

```javascript
export const experience = [
  {
    id: 1,
    company: "Company Name",
    role: "Your Job Title",
    duration: "3 months",              // ← How long you worked
    startDate: "2024-01",
    endDate: "2024-04",
    description: "One-line summary",
    longDescription: "Detailed description of what you did",
    technologies: ["Tech1", "Tech2"],
    achievements: [
      "What you achieved",
      "Another achievement"
    ],
    location: "City, Country",
    type: "internship"                 // ← internship, full-time, freelance
  }
]
```

**Result:** Experience appears in Experience timeline section ⏱️

---

### 5️⃣ Update Education

**File:** `client/src/config/data.js`

```javascript
export const education = [
  {
    id: 1,
    degree: "B.Tech Computer Science",
    institution: "University Name",
    location: "City, Country",
    startDate: "2022-08",
    endDate: "2026-05",
    duration: "2022 - 2026",
    description: "Coursework: DSA, OOP, DB, etc.",
    longDescription: "Detailed description of your education",
    cgpa: "8.5",                       // ← Optional GPA
    achievements: ["Achievement 1", "Achievement 2"]
  }
]
```

**Result:** Education appears in Education section 🎓

---

### 6️⃣ Change Brand Color

**File:** `client/src/config/theme.js`

```javascript
colors: {
  primary: '#3366ff',     // ← Change from '#6366f1' to any color
  primaryLight: '#5080ff', // ← Lighter version for hover
  primaryDark: '#0d47a1',  // ← Darker version
  // All other colors remain same
}
```

**Result:** Every button, link, accent changes to new color automatically 🎨

---

### 7️⃣ Make Animations Faster/Slower

**File:** `client/src/config/animations.js`

```javascript
duration: {
  instant: 0,        // No animation
  fast: 0.1,         // Very fast
  base: 0.3,         // ← Change this for default speed
  slow: 0.8,         // ← Change this for slow animations  
  slower: 1.2,       // Even slower
  slowest: 1.5,      // Very slow
}
```

**Result:** All animations become faster or slower 🎬

---

### 8️⃣ Add Social Links

**File:** `client/src/config/data.js`

```javascript
socials: {
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
  twitter: "https://x.com/yourhandle",
  instagram: "https://instagram.com/yourname",
  // Add more if needed:
  behance: "https://behance.net/yourname",
  dribbble: "https://dribbble.com/yourname",
}
```

**Result:** Social links update in Hero, Footer, Contact sections 🔗

---

### 9️⃣ Update SEO Title & Description

**File:** `client/src/config/metadata.js`

```javascript
site: {
  title: "Your Name | Full Stack Developer",  // ← Browser tab title
  description: "Full Stack Developer specializing in MERN stack...",
  url: "https://yourportfolio.com",
  author: "Your Name",
  language: "en-US"
}
```

**Result:** Better Google search results, social media sharing preview 🔍

---

### 🔟 Set API Backend URL

**File:** `client/src/config/metadata.js`

```javascript
app: {
  name: "Your Portfolio",
  version: "1.0.0",
  environment: "production",
  apiUrl: "https://your-api.com"  // ← Your backend URL
}
```

**Result:** Contact form, API calls use correct backend 🔌

---

## ⚡ Super Quick Checklist

**Copy-paste this into your config and update with your info:**

```javascript
// ✅ MINIMAL UPDATE - Copy to personalInfo
{
  name: "YOUR NAME",
  email: "your@email.com",
  location: "Your City",
  socials: {
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
  }
}

// ✅ Add one project
{
  id: 1,
  title: "Project Name",
  subtitle: "What it does",
  description: "Brief description",
  techStack: ["Tech1", "Tech2"],
  links: { github: "url", live: "" },
  featured: true,
  category: "fullstack",
  status: "completed"
}

// ✅ Add your skills
{
  frontend: ["React", "HTML", "CSS"],
  backend: ["Node.js", "Express"],
  databases: ["MongoDB"],
  tools: ["Git"]
}
```

---

## 🎯 Update Priority Order

If just starting, update in this order:

1. **Priority 1 (Must Do):**
   - [ ] `personalInfo.name`
   - [ ] `personalInfo.email`
   - [ ] `personalInfo.socials`

2. **Priority 2 (Should Do):**
   - [ ] Update projects
   - [ ] Update skills
   - [ ] Update about/summary

3. **Priority 3 (Nice to Have):**
   - [ ] Add experience
   - [ ] Add education
   - [ ] Change theme colors
   - [ ] Update metadata for SEO

4. **Priority 4 (Polish):**
   - [ ] Adjust animation speeds
   - [ ] Add portfolio images
   - [ ] Update testimonials

---

## 🆘 Quick Troubleshooting

### Changes not showing up?
- [ ] Saved the file? (Ctrl+S)
- [ ] Stopped dev server? Try `npm run dev` again
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Check file path is correct

### Project not appearing?
- [ ] Check `id` is unique
- [ ] Check all required fields filled
- [ ] Verify JSON syntax (no trailing commas)

### Social links not working?
- [ ] Check URL format starts with https://
- [ ] Verify profile name is correct
- [ ] Test link in browser

---

## 📖 Next Steps

- **Read:** CONFIG_QUICK_REFERENCE.md for more options
- **Explore:** CONFIG_SYSTEM_GUIDE.md for deep dive
- **Reference:** CONFIG_USAGE_MAP.md to understand integration

---

## 🎉 You're All Set!

Your portfolio is now fully customizable with centralized config.

**Remember:**
- ✅ Update config files
- ✅ Changes reflect everywhere
- ✅ No manual component updates needed
- ✅ Single source of truth

**Happy updating!** 🚀

---

**Last tip:** After updating, take a screenshot of the config section you changed. That way if something breaks, you can easily reproduce it or debug.
