import pool from "../../../lib/db";

export default function handler(req, res) {
  if (req.method === "GET") {
    pool
      .query("SELECT * FROM candidates WHERE id = $1", [req.query.id])
      .then((result) => {
        res.send(result.rows[0]);
      })
      .catch((error) => {
        console.log(`candidate GET by ID failed`);
        res.status(500);
        res.send(error);
      });
  } else if (req.method === "DELETE") {
    pool
      .query("DELETE FROM candidates WHERE id = $1 RETURNING *", [req.query.id])
      .then((result) => {
        const deleted = result.rows[0];
        res.send(deleted);
        pool
          .query(
            "INSERT INTO candidatesHistory (id, first_name, last_name, email, cohort) VALUES ($1, $2, $3, $4, $5)",
            [
              deleted.id,
              deleted.first_name,
              deleted.last_name,
              deleted.email,
              deleted.cohort,
            ]
          )
          .then((result) => {
            res.send(result);
          })
          .catch((error) => {
            console.log(`candidate INSERT INTO candidatesHistory by ID failed`);
            res.status(500);
            res.send(error);
          });
      })
      .catch((error) => {
        console.log(`candidate DELETE by ID failed`);
        res.status(500);
        res.send(error);
      });
  } else if (req.method === "PATCH") {
    pool
      .query(
        "UPDATE candidates SET first_name=$1, last_name=$2, email=$3, cohort=$4 WHERE id=$5",
        [
          req.body.first_name,
          req.body.last_name,
          req.body.email,
          req.body.cohort,
          req.query.id,
        ]
      )
      .then((result) => {
        res.send(result.rows[0]);
      })
      .catch((error) => {
        console.log(`candidate PATCH by ID failed`);
        res.status(500);
        res.send(error);
      });
  }
}
