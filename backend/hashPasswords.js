import bcrypt from "bcrypt";
import pg from "pg";

const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "company",
  password: "khul1997.",
  port: 5432,
});

async function hashExistingPasswords() {
  try {
    // Get users with unhashed passwords
    const result = await pool.query("SELECT id, user_password FROM login WHERE LENGTH(user_password) < 30");

    for (let row of result.rows) {
      const hashedPassword = await bcrypt.hash(row.user_password, 10);

      // Update the hashed password in PostgreSQL
      await pool.query("UPDATE login SET user_password = $1 WHERE id = $2", [hashedPassword, row.id]);
      console.log(`Updated password for user ID: ${row.id}`);
    }

    console.log("All passwords hashed successfully!");
  } catch (error) {
    console.error("Error hashing passwords:", error);
  } finally {
    pool.end();
  }
}

hashExistingPasswords();
