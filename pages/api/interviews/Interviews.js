const { Pool } = require("pg");
import connectionStrings from "../../../lib/connection";

const pool = new Pool({
  // Format: postgres://user:password@host:5432/database
  connectionString: process.env.NODE_ENV === "production" ? connectionStrings.production : connectionStrings.dev,
  ...(process.env.NODE_ENV === "production"
    ? { ssl: { rejectUnauthorized: false } }
    : {}),
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
      interviewers_id,
      candidates_id,
      pass,
      notes_1,
      notes_2,
      notes_3,
      problem_1_rating,
      problem_2_rating,
      problem_3_rating,
      attempt,
      date,
    } = req.body;

    pool.query(
      "INSERT INTO interviews( interviewers_id, candidates_id, pass , notes_1 , notes_2 , notes_3 , problem_1_rating , problem_2_rating , problem_3_rating , attempt, date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 ) RETURNING *;",
      [
        interviewers_id,
        candidates_id,
        pass,
        notes_1,
        notes_2,
        notes_3,
        problem_1_rating,
        problem_2_rating,
        problem_3_rating,
        attempt,
        date,
      ],
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Error");
        } else {
          return res.status(200).send(result.rows);
        }
      }
    );
  } else if (method === "GET") {
    pool.query("SELECT * FROM interviews", (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error");
      } else {
        return res.status(200).send(result.rows);
      }
    });
  }
}
