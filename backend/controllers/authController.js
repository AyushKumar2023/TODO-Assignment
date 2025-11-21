import prisma from "../config/prismaClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.json({ success: false, message: "All fields are required" });

    const existing = await prisma.user.findUnique({ where: { email } });

    if (existing)
      return res.json({ success: false, message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });

    res.json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Registration failed" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.json({ success: false, message: "All fields are required" });

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user)
      return res.json({ success: false, message: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword)
      return res.json({ success: false, message: "Incorrect password" });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Login failed" });
  }
};
