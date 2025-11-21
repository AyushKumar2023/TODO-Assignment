import prisma from "../config/prismaClient.js";

// GET ALL TASKS OF USER
export const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      where: { userId: req.user.userId },
    });

    res.json({ success: true, tasks });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Failed to fetch tasks" });
  }
};

// CREATE NEW TASK
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description)
      return res.json({ success: false, message: "All fields are required" });

    await prisma.task.create({
      data: {
        title,
        description,
        userId: req.user.userId,
      },
    });

    res.json({ success: true, message: "Task created successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Failed to create task" });
  }
};

// DELETE TASK → NOW VIA POST
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.body;

    await prisma.task.delete({
      where: { id },
    });

    res.json({ success: true, message: "Task deleted" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Failed to delete task" });
  }
};

// TOGGLE COMPLETED STATUS → NOW VIA POST
export const toggleTaskCompletion = async (req, res) => {
  try {
    const { id } = req.body;

    const task = await prisma.task.findUnique({
      where: { id }
    });

    if (!task)
      return res.json({ success: false, message: "Task not found" });

    const updated = await prisma.task.update({
      where: { id },
      data: { completed: !task.completed }
    });

    res.json({
      success: true,
      message: updated.completed
        ? "Task marked as completed"
        : "Task marked as pending",
      task: updated,
    });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Failed to toggle status" });
  }
};

// UPDATE DESCRIPTION ONLY → NEW LOGIC
export const updateDescription = async (req, res) => {
  try {
    const { id, description } = req.body;

    if (!id || !description)
      return res.json({ success: false, message: "Id & description required" });

    const updated = await prisma.task.update({
      where: { id },
      data: { description }
    });

    res.json({
      success: true,
      message: "Description updated successfully",
      task: updated,
    });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Failed to update description" });
  }
};
