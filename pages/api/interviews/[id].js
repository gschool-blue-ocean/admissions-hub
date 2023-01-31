import pool from '../../../lib/db';

export default function handler(req, res) {
  if (req.method == 'GET') {
    pool
      .query('SELECT * FROM interviews WHERE id = $1', [req.query.id])
      .then((result) => {
        res.send(result.rows[0]);
      })
      .catch((error) => {
        console.log(`interview GET by ID failed`);
        res.status(500);
        res.send(error);
      });
  } else if (req.method == 'patch') {
  }
}
