# 🚀 Misinformation Detector

An **AI-powered web application** that detects potential misinformation in text and educates users on identifying credible, trustworthy content.

## ✨ Features
- ✅ Detects whether a given statement is likely **true or misinformation**.  
- 📊 Provides a **summary** and **confidence score** for transparency.  
- 📚 Educates users on **how to fact-check** and find reliable sources.  
- 🌐 Built with **React (frontend)** + **Express/Node.js (backend)** + **OpenRouter AI API**.  
- ☁️ Hosted online (Frontend + Backend).  

---

## 🎥 Demo Video
👉 [Watch the demo](https://drive.google.com/your-demo-link-here) (3 min)

---

## 🖼️ Screenshots
![Home Page](./screenshots/home.png)  
![Result Page](./screenshots/result.png)  

---

## 🛠️ Tech Stack
- **Frontend:** React, Axios, Vite  
- **Backend:** Node.js, Express  
- **AI API:** [OpenRouter](https://openrouter.ai/) (Gemini model)  
- **Hosting:** Vercel (frontend), Render (backend)  

---

## 🚀 How It Works
1. User enters a claim or text.  
2. Backend sends it to **OpenRouter AI** for analysis.  
3. AI responds with:  
   - ✅ Misinformation detected or not  
   - 📝 Summary of reasoning  
   - 📊 Confidence score  
4. User sees results instantly in the web app.  

---

## ⚡ Local Setup

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/misinfo-detector.git
cd misinfo-detector

📌 Project Structure
misinfo-detector/
│── backend/       # Express server + API routes
│   ├── server.js
│   ├── routes/analyze.js
│   └── .env
│
│── frontend/      # React app
│   ├── src/App.jsx
│   ├── src/main.jsx
│   └── package.json
│
│── README.md

---

💡 Future Improvements

🌍 Multilingual misinformation detection

🔍 Integration with fact-checking APIs (Snopes, PolitiFact, etc.)

📱 Mobile-friendly UI

---
👨‍💻 Team:MindMorphs
Akansha(Developer)
---

