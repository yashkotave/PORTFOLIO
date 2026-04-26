/**
 * @file data.js
 * @description Centralized content data for the portfolio
 * All text content, project details, skills, experience, and education are managed here
 * Update these values to reflect your portfolio across the entire application
 */

// ============================================================================
// PERSONAL INFORMATION
// ============================================================================
export const personalInfo = {
  // Basic Information
  name: "Yash Kotave",
  title: "Full Stack Developer",
  tagline: "Aspiring Full Stack Developer specializing in the MERN stack",

  // Bio/Summary
  summary: `Aspiring Full Stack Developer specializing in the MERN stack,
    with hands-on experience in building scalable web applications,
    real-time systems, and RESTful APIs. Proficient in Java, JavaScript,
    OOP, and Data Structures, with a strong passion for clean code,
    problem-solving, and delivering user-centric digital solutions
    that create real-world impact.`,

  // Contact & Location
  location: "Bhopal, India",
  email: "yashkotave1007@gmail.com",
  phone: "+91 9165324126",
  resumeUrl: "https://drive.google.com/file/d/1Gtij2xW0tOLzk04gJYooqbtse1cDdWVb/view?usp=drivesdk",

  // Social Media Links
  socials: {
    github: "https://github.com/yashkotave",
    linkedin: "https://linkedin.com/in/yashkotave10",
    twitter: "https://x.com/yash_kotave",
    instagram: "https://www.instagram.com/yash_______1007"
  },

  // Additional Links
  links: {
    portfolio: "https://yashkotave.com",
    blog: "https://blog.yashkotave.com",
  }
}

// ============================================================================
// SKILLS
// ============================================================================
export const skills = {
  languages: ["Java", "JavaScript (ES6+)"],
  frontend: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "EJS", "Vite", "Redux", "React Hook Form", "React Router"],
  backend: ["Node.js", "Express.js", "Socket.io", "REST APIs", "Nodemon", "JWT", "FastAPI"],
  databases: ["MongoDB", "MySQL", "SQL"],
  ai: ["RAG", "LangChain", "Gemini API", "Gen AI", "Agentic AI"],
  tools: ["Git", "GitHub", "VS Code", "Postman", "NPM", "Cloudinary", "Razorpay", "Notion"],
  core: ["DSA", "OOP", "Operating Systems", "DBMS", "Computer Networks"]
}

// ============================================================================
// PROJECTS
// ============================================================================
export const projects = [
  {
    id: 1,
    title: "Aggrizzone",
    subtitle: "MERN E-Commerce for Agriculture",
    description: `Full-stack e-commerce with JWT auth, cart, wishlist, orders, reviews,
      Razorpay payment gateway, coupon system, admin dashboard, Cloudinary storage.`,
    longDescription: `Aggrizzone is a comprehensive e-commerce platform designed for agricultural products.
      Features include secure JWT authentication, shopping cart with wishlist, order management,
      customer reviews, integrated Razorpay payment gateway, coupon system, and a full admin dashboard
      for inventory and order management. Images are managed via Cloudinary.`,
    imageUrl: "/projects/aggrizzone.jpg",
    techStack: ["MongoDB", "Express.js", "React", "Vite", "Node.js", "Tailwind CSS", "Razorpay", "Cloudinary", "JWT"],
    links: {
      github: "https://github.com/yashkotave/aggrizzone",
      live: "",
      demo: "",
    },
    featured: true,
    category: "fullstack",
    startDate: "2024-01",
    endDate: "2024-03",
    status: "completed",
  },

  {
    id: 2,
    title: "MiniGram-AI",
    subtitle: "AI-Powered Social Media Platform",
    description: `MERN social app — JWT HTTP-only cookies, bcrypt, Multer uploads,
      post creation, likes, comments, AI-powered caption generation.`,
    longDescription: `MiniGram-AI is a modern social media platform with AI-powered features.
      Built with the MERN stack, it includes secure authentication with HTTP-only cookies,
      password hashing with bcrypt, file uploads via Multer, and AI-generated caption suggestions for posts.
      Users can create posts, like, comment, and discover content from other users.`,
    imageUrl: "/projects/minigram-ai.jpg",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "bcrypt", "Multer", "Tailwind CSS", "AI API"],
    links: {
      github: "https://github.com/yashkotave/minigram-ai",
      live: "",
      demo: "",
    },
    featured: true,
    category: "ai",
    startDate: "2024-01",
    endDate: "2024-02",
    status: "completed",
  },

  {
    id: 3,
    title: "NyaySaathi",
    subtitle: "AI Legal Assistant (RAG-based)",
    description: `AI legal assistant using RAG — Google Gemini API + Pinecone vector DB
      for context-aware legal responses. Responsive React UI.`,
    longDescription: `NyaySaathi is an intelligent legal assistant powered by Retrieval-Augmented Generation (RAG).
      It uses Google's Gemini API combined with Pinecone vector database for context-aware legal advice.
      The responsive React interface provides users an easy way to ask legal questions and receive accurate answers.`,
    imageUrl: "/projects/nyaysaathi.jpg",
    techStack: ["React.js", "Tailwind CSS", "Gemini API", "Pinecone", "RAG", "LangChain"],
    links: {
      github: "https://github.com/yashkotave/nyaysaathi",
      live: "https://nyay-saathi.vercel.app/",
      demo: "https://nyay-saathi.vercel.app/",
    },
    featured: true,
    category: "ai",
    startDate: "2024-02",
    endDate: "2024-03",
    status: "completed",
  },

  {
    id: 4,
    title: "GoRide",
    subtitle: "Real-Time Cab Booking App",
    description: `Real-time cab booking with Google Maps live tracking, dynamic fare calc,
      WebSocket driver-user comms, ride scheduling, trip history.`,
    longDescription: `GoRide is a real-time cab booking application similar to Uber/Ola.
      Features include Google Maps integration for live driver tracking, dynamic fare calculation,
      real-time communication between drivers and users via WebSocket, ride scheduling,
      and complete trip history with ratings.`,
    imageUrl: "/projects/goride.jpg",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Google Maps API"],
    links: {
      github: "https://github.com/yashkotave/goride",
      live: "https://go-ride-nu.vercel.app/",
      demo: "https://go-ride-nu.vercel.app/",
    },
    featured: false,
    category: "realtime",
    startDate: "2024-01",
    endDate: "2024-02",
    status: "completed",
  },

  {
    id: 5,
    title: "Moody Player",
    subtitle: "AI Mood-Based Music Player",
    description: `Browser AI player using face-api.js — detects facial expressions via webcam,
      maps emotion states to dynamically curated music playlists.`,
    longDescription: `Moody Player is an innovative music player that uses machine learning to detect your mood
      from your face. Using face-api.js library and webcam access, it analyzes your facial expressions
      and recommends music playlists based on your detected emotional state.`,
    imageUrl: "/projects/moody-player.jpg",
    techStack: ["React.js", "face-api.js", "Webcam API", "HTML Audio API"],
    links: {
      github: "https://github.com/yashkotave/moody-player",
      live: "",
      demo: "",
    },
    featured: false,
    category: "ai",
    startDate: "2024-01",
    endDate: "2024-01",
    status: "completed",
  },

  {
    id: 6,
    title: "VistaStay",
    subtitle: "Hotel Listing Platform",
    description: `Full-stack hotel listing with secure auth, host/guest dashboards,
      CRUD property management, advanced search, review system.`,
    longDescription: `VistaStay is a comprehensive hotel listing platform where hosts can list properties
      and guests can discover accommodations. Features include secure authentication, separate dashboards
      for hosts and guests, full CRUD operations for property management, advanced search and filtering,
      and a detailed review and rating system.`,
    imageUrl: "/projects/vistastay.jpg",
    techStack: ["Node.js", "Express.js", "MongoDB", "EJS", "Tailwind CSS"],
    links: {
      github: "https://github.com/yashkotave/vistastay",
      live: "https://vistastay-3rtnr.ondigitalocean.app/listings",
      demo: "https://vistastay-3rtnr.ondigitalocean.app/listings",
    },
    featured: false,
    category: "fullstack",
    startDate: "2024-01",
    endDate: "2024-01",
    status: "completed",
  },

  {
    id: 7,
    title: "Ektask",
    subtitle: "Job Portal & Application Tracker",
    description: `Job portal with dynamic forms, Google Sheets backend, real-time admin
      search, role filtering, Excel export, status tracking system.`,
    longDescription: `Ektask is a comprehensive job portal and application tracking system.
      Built during an internship, it features dynamic form generation, Google Sheets backend integration,
      real-time admin search capabilities, role-based filtering, Excel export functionality,
      and a complete application status tracking system.`,
    imageUrl: "/projects/ektask.jpg",
    techStack: ["React.js", "Node.js", "Express.js", "Google Sheets API", "Tailwind CSS"],
    links: {
      github: "https://github.com/yashkotave/ektask",
      live: "https://ektask.vercel.app/",
      demo: "https://ektask.vercel.app/",
    },
    featured: false,
    category: "fullstack",
    startDate: "2024-01",
    endDate: "2024-01",
    status: "completed",
  },
]

// ============================================================================
// EXPERIENCE
// ============================================================================
export const experience = [
  {
    id: 1,
    company: "Startup (90-day Internship)",
    role: "Full Stack Developer Intern",
    duration: "90 Days",
    startDate: "2024-01",
    endDate: "2024-03",
    description: `Built production-level projects Aggrizzone and Ektask during a
      hands-on startup internship — contributing to real-world scalable apps.`,
    longDescription: `During this intensive 90-day internship, I worked on multiple production projects,
      gaining hands-on experience with real-world development challenges. Collaborated with experienced developers,
      learned best practices, and contributed significantly to the success of multiple applications.`,
    technologies: ["MERN Stack", "Razorpay", "Cloudinary", "Google Sheets API"],
    achievements: [
      "Built 2 production-level applications from scratch",
      "Implemented complex features like payment gateway integration",
      "Worked in agile environment with daily standups",
      "Mentored by senior developers",
    ],
    location: "Bhopal, India",
    type: "internship",
  },
]

// ============================================================================
// EDUCATION
// ============================================================================
export const education = [
  {
    id: 1,
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Lakshmi Narain College of Technology Excellence, Bhopal",
    location: "Bhopal, India",
    startDate: "2023",
    endDate: "2027",
    duration: "2023 – 2027",
    description: "B.Tech in CSE with focus on software engineering, system design, and AI-enabled applications.",
    longDescription: `Pursuing a B.Tech in Computer Science & Engineering at LNCT Excellence.
      Coursework covers core computing disciplines, modern web development, and AI/ML fundamentals.`,
    cgpa: "8.4",
    achievements: [
      "Participated in coding competitions",
      "Active member of coding club",
    ],
  },
]

// ============================================================================
// SERVICES
// ============================================================================
export const services = [
  {
    id: 1,
    icon: "FiCode",
    title: "Full Stack Development",
    description: "End-to-end MERN apps — UI to RESTful APIs.",
    longDescription: `I build complete web applications from frontend to backend using the MERN stack.
      From responsive user interfaces to scalable server architecture, I handle the entire development process.`,
  },
  {
    id: 2,
    icon: "FiServer",
    title: "API Development",
    description: "Scalable modular APIs with Node.js + Express.",
    longDescription: `I design and develop robust, scalable RESTful APIs using Node.js and Express.
      Each API is built following best practices for security, performance, and maintainability.`,
  },
  {
    id: 3,
    icon: "FiLayout",
    title: "UI Design & Frontend",
    description: "Responsive interfaces with React + Tailwind.",
    longDescription: `I create beautiful, responsive user interfaces using React and Tailwind CSS.
      Every design is optimized for user experience across all devices.`,
  },
  {
    id: 4,
    icon: "FiZap",
    title: "Real-Time Systems",
    description: "WebSocket-powered apps using Socket.io.",
    longDescription: `I build real-time applications using WebSocket technology and Socket.io,
      enabling instant communication between clients and servers.`,
  },
  {
    id: 5,
    icon: "FiBriefcase",
    title: "Freelance Web Development",
    description: "Custom websites tailored to your needs.",
    longDescription: `I offer freelance web development services for custom projects,
      from branding portals to e-commerce solutions tailored to your specific requirements.`,
  },
  {
    id: 6,
    icon: "FiCpu",
    title: "AI-Integrated Apps",
    description: "Gen AI and agentic AI solutions with RAG, LangChain, Gemini API.",
    longDescription: `I integrate next-generation AI into web applications using Gen AI and agentic AI workflows.
      My work combines RAG, LangChain, and Gemini API to deliver intelligent automation and adaptive user experiences.`,
  },
]

// ============================================================================
// TESTIMONIALS (Empty for now, can be populated with client feedback)
// ============================================================================
export const testimonials = [
  // {
  //   id: 1,
  //   name: "Client Name",
  //   role: "Position at Company",
  //   image: "/testimonials/client1.jpg",
  //   content: "Great work and fast delivery!",
  //   rating: 5,
  // }
]

// ============================================================================
// BLOG POSTS (Empty for now, can be populated with articles)
// ============================================================================
export const blogPosts = [
  // {
  //   id: 1,
  //   title: "Getting Started with MERN",
  //   slug: "getting-started-with-mern",
  //   excerpt: "A comprehensive guide to building MERN applications",
  //   content: "...",
  //   author: "Yash Kotave",
  //   date: "2024-01-15",
  //   category: "Tutorial",
  //   tags: ["MERN", "Web Development"],
  //   image: "/blog/mern-guide.jpg",
  // }
]

export default {
  personalInfo,
  skills,
  projects,
  experience,
  education,
  services,
  testimonials,
  blogPosts,
}
