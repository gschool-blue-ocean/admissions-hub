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
  const query = req.query;
  const { email } = query;
  console.log(req.query);
  console.log(email);
  if (req.method === "PATCH") {
    const { date, attempt, pass, notes_1, notes_2, notes_3 } = req.body;

    pool.query(
      "UPDATE candidates SET date = COALESCE($1, date), attempt = COALESCE($2, attempt), pass = COALESCE($3, pass), notes_1 = COALESCE($4, notes_1), notes_2 = COALESCE($5, notes_2), notes_3 = COALESCE($6, notes_3) WHERE email = $7 RETURNING *",
      [date, attempt, pass, notes_1, notes_2, notes_3, email],
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
