// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Pool } = require("pg");

const pool = new Pool({
  // Format: postgres://user:password@host:5432/database
  connectionString: process.env.DATABASE_URL
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
  pool.query(
    "select * from interviewers WHERE email = 'test@gmail.com' AND password = crypt('danny', password)",
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error");
      }
      if (result.rows.length === 0) {
        res.status(404).send("Wrong username or password");
      } else {
        res.status(200).json(result.rows[0]);
      }
    }
  );
}
