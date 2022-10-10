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
  const { method } = req;

  if (method === "POST") {
    let {
      first_name,
      last_name,
      email,
      cohort,
      date,
      attempt,
      pass,
      notes_1,
      notes_2,
      notes_3,
    } = req.body;

    pool.query(
      "INSERT INTO candidates( first_name, last_name, email, cohort, date, attempt, pass, notes_1, notes_2, notes_3 ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 ) RETURNING *;",
      [
        first_name,
        last_name,
        email,
        cohort,
        date,
        attempt,
        pass,
        notes_1,
        notes_2,
        notes_3,
      ],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error");
        } else {
          res.status(200).json(result.rows);
        }
      }
    );
  } else if (method === "GET") {
    pool.query("SELECT * FROM candidates", (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error");
      } else {
        res.status(200).json(result.rows);
      }
    });
  }
}
