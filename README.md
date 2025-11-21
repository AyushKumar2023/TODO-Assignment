# 📝 Todo App Backend (Node.js + Express + Prisma + MongoDB)

A secure and scalable backend for a Todo Manager application.  
Built using **Node.js**, **Express**, **Prisma ORM**, **MongoDB**, **JWT Authentication**, and **bcrypt**.

This backend powers a modern Todo App frontend built with React + Redux + Tailwind CSS.https://todo-backend-dfml.onrender.com/

## 🚀 Live Demo
https://todo-backend-dfml.onrender.com/
---

## 🚀 Features

- 🔐 User Authentication (Register + Login)
- 🔑 JWT-based Authorization
- 🔒 Fully Protected Routes
- 🗂 Task CRUD (Create, Read, Update, Delete)
- ✔ Toggle Task Completion
- ✏ Update Task Description
- 🧵 Prisma ORM with MongoDB Driver
- 🧩 Clean Modular Architecture

---

## 📦 Tech Stack

| Tech | Purpose |
|------|---------|
| Node.js | Backend runtime |
| Express.js | API routing |
| Prisma | ORM for MongoDB |
| MongoDB | Database |
| JWT | Authentication |
| bcrypt | Password hashing |
| dotenv | Environment config |

---

## 📁 Folder Structure

backend/
│── prisma/
│ └── schema.prisma
│
│── src/
│ ├── config/
│ │ └── prismaClient.js
│ ├── controllers/
│ │ ├── authController.js
│ │ └── taskController.js
│ ├── middlewares/
│ │ └── authMiddleware.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ └── taskRoutes.js
│ ├── app.js
│ └── server.js
│
│── .env
│── .gitignore
│── package.json
│── README.md

Base URL:

http://localhost:5000/api

🛠️ Installation & Local Setup for Backend

1️⃣ Clone the repository
git clone <your-repo-url>
cd backend

2️⃣ Install dependencies
npm install

3️⃣ Generate Prisma Client
npx prisma generate

4️⃣ Start development server
npm run dev

🔐 Authentication Routes

📌 POST /auth/register
📌 POST /auth/login

🧾 Task Routes

📌 GET /tasks
📌 POST /tasks/create
📌 POST /tasks/delete
📌 POST /tasks/toggle
📌 POST /tasks/update-description

🛠️ Installation & Local Setup for Frontend

cd frontend

1️⃣ npm install
2️⃣ npm run dev
