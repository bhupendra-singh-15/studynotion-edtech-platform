# StudyNotion EdTech Platform

StudyNotion is a full-stack MERN (MongoDB, Express, React, Node.js) ed-tech web application where students can explore courses and instructors can create and manage learning content.

---

## 🚀 Tech Stack

- **Frontend:** React (Create React App), Redux Toolkit, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Deployment:** Vercel (Frontend), Render (Backend)

---

## 📁 Project Structure

```
studynotion-edtech-platform
│
├── src/                     # React frontend source
├── public/
├── study-notion-server/     # Express backend API
│   ├── controllers/
│   ├── config/
│   └── ...
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/bhupendra-singh-15/studynotion-edtech-platform.git
cd studynotion-edtech-platform
```

### 2️⃣ Install Frontend Dependencies

```
npm install
```

### 3️⃣ Install Backend Dependencies

```
cd study-notion-server
npm install
```

---

## ▶️ Run Locally

### Start Frontend

```
npm start
```

### Start Backend

```
cd study-notion-server
npm run dev
```

---

## 🔐 Environment Variables

Create `.env` files in both frontend and backend folders and add required keys such as:

```
MONGO_URI=
JWT_SECRET=
REACT_APP_API_URL=
```

---

## ✨ Features

- User authentication
- Course creation & management
- Student and Instructor dashboards
- Responsive UI with Tailwind CSS

---

## 📌 Author

Bhupendra singh
