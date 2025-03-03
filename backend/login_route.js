import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "./db.js";
import dotenv from "dotenv";

dotenv.config();

const log_router = express.Router();

// Register Route
// router.post("/register", async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await pool.query(
//       "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
//       [username, email, hashedPassword]
//     );

//     res.status(201).json({ message: "User registered!", user: newUser.rows[0] });
//   } catch (error) {
//     res.status(500).json({ error: "User registration failed" });
//   }
// });

// Login Route
log_router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await pool.query("SELECT * FROM login WHERE email = $1", [email]);
  
      if (user.rows.length === 0) 
        return res.status(400).json({ error: "User not found" });
  
      const validPassword = await bcrypt.compare(password, user.rows[0].user_password);
      if (!validPassword) 
        return res.status(401).json({ error: "Invalid password" });
  
      const token = jwt.sign(
        { id: user.rows[0].id }, 
        process.env.JWT_SECRET, 
        { expiresIn: "1h" }
      );
  
      res.json({ token, user: user.rows[0] });
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  });
  

export default log_router;
