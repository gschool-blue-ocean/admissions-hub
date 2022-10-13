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
    const {
      date,
      attempt,
      pass,
      notes_1,
      notes_2,
      notes_3,
      problem_1_rating,
      problem_2_rating,
      problem_3_rating,
    } = req.body;

    pool.query(
      "UPDATE candidates SET date = COALESCE($1, date), attempt = COALESCE($2, attempt), pass = COALESCE($3, pass), notes_1 = COALESCE($4, notes_1), notes_2 = COALESCE($5, notes_2), notes_3 = COALESCE($6, notes_3), problem_1_rating = COALESCE($7,  problem_1_rating), problem_2_rating = COALESCE($8,  problem_2_rating), problem_3_rating = COALESCE($9,  problem_3_rating) WHERE email = $10 RETURNING *",
      [
        date,
        attempt,
        pass,
        notes_1,
        notes_2,
        notes_3,
        problem_1_rating,
        problem_2_rating,
        problem_3_rating,
        email,
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
  } else if (req.method === "DELETE") {
    pool.query(
      "DELETE FROM candidates WHERE email = $1",
      [email],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error");
        } else {
          res.status(200).json(result.rows);
        }
      }
    );
  }
}
