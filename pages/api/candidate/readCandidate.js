const { Pool } = require("pg");

const pool = new Pool({
  // Format: postgres://user:password@host:5432/database
  connectionString: process.env.DATABASE_URL,
  //   ...(process.env.NODE_ENV === "production"
  //     ? { ssl: { rejectUnauthorized: false } }
  //     : {}),
});

pool.connect((err) => {
  //Connected Database
  if (err) {
    console.log(err);
  } else {
    console.log("PostgresSQL Connected");
  }
});

export default function handler(req, res) {
  pool.query("SELECT * FROM candidates", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error");
    } else {
      res.status(200).json(result.rows);
    }
  });
}
