export const personalInfo = {
  name: "Yash Kotave",
  title: "Full Stack Developer",
  tagline: "Aspiring Full Stack Developer specializing in the MERN stack",
  summary: `Aspiring Full Stack Developer specializing in the MERN stack,
    with hands-on experience in building scalable web applications,
    real-time systems, and RESTful APIs. Proficient in Java, JavaScript,
    OOP, and Data Structures, with a strong passion for clean code,
    problem-solving, and delivering user-centric digital solutions
    that create real-world impact.`,
  location: "Bhopal, India",
  email: "yashkotave1007@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github:    "https://github.com/yashkotave",
    linkedin:  "https://linkedin.com/in/yashkotave10",
    twitter:   "https://x.com/yash_kotave",
    instagram: "https://www.instagram.com/yash_______1007"
  }
}

export const skills = {
  languages: ["Java","JavaScript (ES6+)"],
  frontend:  ["HTML5","CSS3","React.js","Tailwind CSS","EJS","Vite","Redux","React Hook Form","React Router"],
  backend:   ["Node.js","Express.js","Socket.io","REST APIs","Nodemon","JWT","FastAPI"],
  databases: ["MongoDB","MySQL"],
  ai:        ["RAG","LangChain","Gemini API"],
  tools:     ["Git","GitHub","VS Code","Postman","NPM","Cloudinary","Razorpay","Notion"],
  core:      ["DSA","OOP","Operating Systems","DBMS","Computer Networks"]
}

export const projects = [
  { id:1, title:"Aggrizzone", subtitle:"MERN E-Commerce for Agriculture",
    description:`Full-stack e-commerce with JWT auth, cart, wishlist, orders, reviews,
      Razorpay payment gateway, coupon system, admin dashboard, Cloudinary storage.`,
    techStack:["MongoDB","Express.js","React","Vite","Node.js","Tailwind CSS","Razorpay","Cloudinary","JWT"],
    githubUrl:"https://github.com/yashkotave", liveUrl:"", featured:true, category:"fullstack" },

  { id:2, title:"MiniGram-AI", subtitle:"AI-Powered Social Media Platform",
    description:`MERN social app — JWT HTTP-only cookies, bcrypt, Multer uploads,
      post creation, likes, comments, AI-powered caption generation.`,
    techStack:["MongoDB","Express.js","React.js","Node.js","JWT","bcrypt","Multer","Tailwind CSS","AI API"],
    githubUrl:"https://github.com/yashkotave", liveUrl:"", featured:true, category:"fullstack" },

  { id:3, title:"NyaySaathi", subtitle:"AI Legal Assistant (RAG-based)",
    description:`AI legal assistant using RAG — Google Gemini API + Pinecone vector DB
      for context-aware legal responses. Responsive React UI.`,
    techStack:["React.js","Tailwind CSS","Gemini API","Pinecone","RAG","LangChain"],
    githubUrl:"https://github.com/yashkotave", liveUrl:"", featured:true, category:"ai" },

  { id:4, title:"GoRide", subtitle:"Real-Time Cab Booking App",
    description:`Real-time cab booking with Google Maps live tracking, dynamic fare calc,
      WebSocket driver-user comms, ride scheduling, trip history.`,
    techStack:["React.js","Node.js","Express.js","MongoDB","Socket.io","Google Maps API"],
    githubUrl:"https://github.com/yashkotave", liveUrl:"", featured:false, category:"realtime" },

  { id:5, title:"Moody Player", subtitle:"AI Mood-Based Music Player",
    description:`Browser AI player using face-api.js — detects facial expressions via webcam,
      maps emotion states to dynamically curated music playlists.`,
    techStack:["React.js","face-api.js","Webcam API","HTML Audio API"],
    githubUrl:"https://github.com/yashkotave", liveUrl:"", featured:false, category:"ai" },

  { id:6, title:"VistaStay", subtitle:"Hotel Listing Platform",
    description:`Full-stack hotel listing with secure auth, host/guest dashboards,
      CRUD property management, advanced search, review system.`,
    techStack:["Node.js","Express.js","MongoDB","EJS"],
    githubUrl:"https://github.com/yashkotave", liveUrl:"", featured:false, category:"fullstack" },

  { id:7, title:"Ektask", subtitle:"Job Portal & Application Tracker",
    description:`Job portal with dynamic forms, Google Sheets backend, real-time admin
      search, role filtering, Excel export, status tracking system.`,
    techStack:["React.js","Node.js","Express.js","Google Sheets API"],
    githubUrl:"https://github.com/yashkotave", liveUrl:"", featured:false, category:"fullstack" }
]

export const experience = [
  { company:"Startup (90-day Internship)", role:"Full Stack Developer Intern",
    duration:"90 Days",
    description:`Built production-level projects Aggrizzone and Ektask during a
      hands-on startup internship — contributing to real-world scalable apps.`,
    technologies:["MERN Stack","Razorpay","Cloudinary","Google Sheets API"] }
]

export const education = [
  { degree:"B.Tech — Computer Science & Engineering",
    institution:"Your University Name",
    duration:"20XX – 20XX",
    description:"Coursework: DSA, OOP, DBMS, Operating Systems, Computer Networks" }
]

export const services = [
  { icon:"FiCode",      title:"Full Stack Development",    description:"End-to-end MERN apps — UI to RESTful APIs." },
  { icon:"FiServer",    title:"API Development",           description:"Scalable modular APIs with Node.js + Express." },
  { icon:"FiLayout",    title:"UI Design & Frontend",      description:"Responsive interfaces with React + Tailwind." },
  { icon:"FiZap",       title:"Real-Time Systems",         description:"WebSocket-powered apps using Socket.io." },
  { icon:"FiBriefcase", title:"Freelance Web Development", description:"Custom websites tailored to your needs." },
  { icon:"FiCpu",       title:"AI-Integrated Apps",        description:"Apps powered by RAG, LangChain, Gemini API." }
]

export const testimonials = []

export const blogPosts = []
