import express from "express";
import pool from "./db.js"; // Ensure the correct path to your db file

const router = express.Router();

// Check-in route
router.post('/check-in', async (req, res) => {
    const { id } = req.body;
    
    try {
        const result = await pool.query(
            `INSERT INTO attendance (id, check_in_time, date) 
            VALUES ($1, NOW(), CURRENT_DATE) 
            ON CONFLICT (id, date) 
            DO UPDATE SET check_in_time = EXCLUDED.check_in_time 
            RETURNING *`, 
            [id]
        );
        
        res.status(200).json({ message: "Checked in successfully", data: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

// Check-out route
router.post('/check-out', async (req, res) => {
    const { id } = req.body;
    
    try {
        const result = await pool.query(
            `UPDATE attendance 
            SET check_out_time = NOW() 
            WHERE employee_id = $1 AND date = CURRENT_DATE 
            RETURNING *`, 
            [id]
        );

        if (result.rowCount === 0) {
            return res.status(400).json({ error: "No check-in record found for today" });
        }
        
        res.status(200).json({ message: "Checked out successfully", data: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

export default router; // Default export
