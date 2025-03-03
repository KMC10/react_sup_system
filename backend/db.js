import pg from "pg";

const pool = new pg.Pool({
    user: "postgres",
    host: "localhost", 
    database: "company",
    password: "khul1997.",
    port: 5432
});

// Check if the database connection is successful
pool.connect((err) => {
    if (err) {
        console.error("Couldn't connect to database", err);
    } else {
        console.log("Connected to database");

        // Run a test query
        pool.query("SELECT * FROM login", (err, res) => {
            if (err) {
                console.error("Query failed:", err);
            } else if (res.rows.length > 0) {
                console.log("Connection is on. Retrieved rows:", res.rows);
            } else {
                console.log("No data found in login table.");
            }
        });
    }
});


export default pool;