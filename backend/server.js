import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import 'dotenv/config';
import { connectDB } from "./config/prismaClient.js";

const app = express();
connectDB()

app.use(cors({
  origin: [
    "http://localhost:5173",        // Vite local
    "https://todo-65uy.onrender.com" // Your frontend URL
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Todo API is running...");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
