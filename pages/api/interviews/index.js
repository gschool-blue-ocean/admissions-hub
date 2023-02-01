import pool from '../../../lib/db';

export default function handler(req, res) {
  pool
    .query('SELECT * FROM interviews ORDER BY date DESC')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(` Interview GET failure`);
      res.status(404).send(err);
    });
}
