import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  getTasks,
  createTask,
  deleteTask,
  toggleTaskCompletion,
  updateDescription
} from "../controllers/taskController.js";

const router = express.Router();

// ONLY GET route
router.get("/", authMiddleware, getTasks);

// ALL other operations use POST
router.post("/create", authMiddleware, createTask);
router.post("/delete", authMiddleware, deleteTask);
router.post("/toggle", authMiddleware, toggleTaskCompletion);
router.post("/update-description", authMiddleware, updateDescription);

export default router;
