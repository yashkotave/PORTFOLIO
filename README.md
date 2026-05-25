# Yash Kotave — MERN Portfolio

A production-ready, fully responsive portfolio showcasing Full Stack Development skills. Built with the MERN stack (MongoDB, Express, React, Node.js) with a dark minimal professional theme.

**Live:** https://yashkotaveportfolio.vercel.app/  
**GitHub:** https://github.com/yashkotave/PORTFOLIO

---

## Tech Stack

| Layer      | Technology                                |
|------------|-------------------------------------------|
| **Frontend**  | React.js (Vite), Tailwind CSS, Framer Motion |
| **Backend**   | Node.js, Express.js                       |
| **Database**  | MongoDB Atlas                            |
| **Deployment** | Frontend → Vercel \| Backend → Render    |
| **Email**     | Nodemailer (SMTP)                        |

---

## Project Structure

```
portfolio/
├── client/
│   ├── public/
│   │   └── resume.pdf
│   ├── src/
│   │   ├── config/
│   │   │   └── data.js          ⭐ ALL content here
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── .env.example
│   ├── vite.config.js
│   └── package.json
├── server/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contact.js
│   ├── .env
│   ├── .env.example
│   ├── index.js
│   └── package.json
├── .gitignore
└── README.md
```

---

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/yashkotave/PORTFOLIO.git
cd PORTFOLIO

# Frontend
cd client
npm install

# Backend (in another terminal)
cd ../server
npm install
```

### 2. Environment Variables

**client/.env:**
```
VITE_API_URL=http://localhost:5000
```

**server/.env:**
```

PORT=5000
FRONTEND_URL=http://localhost:5173
```

### 3. Run Locally

```bash
# Terminal 1 — Frontend (port 5173)
cd client && npm run dev

# Terminal 2 — Backend (port 5000)
cd server && node index.js
```

Visit `http://localhost:5173`

---

## Deployment

### Frontend → Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repo: `yashkotave/PORTFOLIO`
3. Root directory: `client`
4. Environment variable: `VITE_API_URL=<your-render-backend-url>`
5. Build command: `npm run build`
6. Auto-deploys on every push

### Backend → Render

1. Go to [render.com](https://render.com)
2. New Web Service → Connect GitHub repo: `yashkotave/PORTFOLIO`
3. Root directory: `server`
4. Environment variables:
   - `MONGO_URI=mongodb+srv://yashcs23228_db_user:XgacweEsOUZj83jU@cluster0.gfp1q8y.mongodb.net/portfolio`
   - `PORT=5000`
   - `FRONTEND_URL=<your-vercel-url>`
5. Start command: `node index.js`

---

## Featured Projects

### 1. **DevSync AI Workspace** — Agile Project Management Platform
- **Tech:** MongoDB, Express.js, React.js, Node.js, Tailwind CSS, Framer Motion, Google Gemini API
- **Features:** AI-powered sprint automation, complexity scoring engine, RBAC with JWT, zero-dependency Kanban UI
- **Links:** [GitHub](https://github.com/yashkotave/DevSync-AI-Workspace) | [Live Demo](https://dev-sync-ai-workspace.vercel.app/)

### 2. **Aggrizzone** — E-Commerce for Agriculture
- **Tech:** MERN Stack, Razorpay, Cloudinary
- **Features:** JWT auth, shopping cart, payment gateway, admin dashboard
- **Links:** [GitHub](https://github.com/yashkotave/aggrizzone)

### 3. **NyaySaathi** — AI Legal Assistant (RAG-based)
- **Tech:** React.js, Gemini API, Pinecone, LangChain
- **Features:** Context-aware legal responses using RAG
- **Links:** [GitHub](https://github.com/yashkotave/nyaysaathi) | [Live](https://nyay-saathi.vercel.app/)

### 4. **GoRide** — Real-Time Cab Booking App
- **Tech:** MERN Stack, Socket.io, Google Maps API
- **Features:** Live driver tracking, dynamic fare calculation, real-time communication
- **Links:** [GitHub](https://github.com/yashkotave/goride) | [Live](https://go-ride-nu.vercel.app/)

**Full project list in [data.js](client/src/config/data.js)**

---

All content is centralized in **`client/src/config/data.js`**. Future edits require **zero code changes** — just update this file:

- Edit personal info, skills, projects
- Add testimonials
- Add blog posts
- Push to GitHub → Auto-deploy

---

## Features

✅ **Responsive Design** — Mobile-first (1-col → 2-col → 3-col)  
✅ **Dark Minimal Theme** — Indigo accent (#6366f1) throughout  
✅ **Smooth Animations** — Framer Motion stagger effects  
✅ **Contact Form** — POST /api/contact → MongoDB save  
✅ **Production Ready** — Environment-based config, error handling  

---

## TODO (Future)

- [ ] Add project thumbnails to `/client/public/projects/` folder
- [ ] Add email notifications via Nodemailer
- [ ] Expand testimonials section
- [ ] Add blog posts and articles
- [ ] Custom domain integration

---

## Author

**Yash Kotave** — Full Stack Developer  
📧 yashkotave1007@gmail.com  
🔗 [GitHub](https://github.com/yashkotave) | [LinkedIn](https://linkedin.com/in/yashkotave10)

---

**Built with ❤️ and the MERN stack**
