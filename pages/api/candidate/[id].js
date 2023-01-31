import pool from '../../../lib/db';

export default function handler(req, res) {
  pool
    .query('SELECT * FROM candidates WHERE id = $1', [req.query.id])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log(`candidate GET by ID failed`);
      res.status(500);
      res.send(error);
    });
}
