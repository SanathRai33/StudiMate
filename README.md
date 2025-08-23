# 🎓 Student Dashboard - Frontend

This is the **frontend** of the Student Dashboard web app, built using **Next.js (React)**.  
It provides students with a personal dashboard to manage notes, timetable, goals, and chat with AI.

---

## 🚀 Features
- 🏠 Dashboard with quick navigation
- 📝 Notes page
- 📅 Timetable page
- 🎯 Goal setting page
- 🤖 AI Chat integration (Cohere AI)

---

## 🛠️ Tech Stack
- [Next.js](https://nextjs.org/) – React framework
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [Axios](https://axios-http.com/) – API requests
- [Redux Toolkit](https://redux-toolkit.js.org/) – State management (if needed)
- [Framer Motion](https://www.framer.com/motion/) – Animations

---

## ⚙️ Installation

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Run dev server
npm run dev
````

Open 👉 [http://localhost:3000](http://localhost:3000)

---

## 📂 Folder Structure

```
frontend/
 ├── components/   # Reusable UI components
 ├── pages/        # Next.js pages (/, /notes, /goals, /timetable)
 ├── styles/       # Tailwind/global styles
 ├── utils/        # Helper functions
 ├── public/       # Static files
 └── README.md
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the `frontend/` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 🧪 Scripts

* `npm run dev` – Start development server
* `npm run build` – Build for production
* `npm start` – Run production build

---

<!--## 📸 Preview

(👉 Add screenshot of dashboard here)-->
---
