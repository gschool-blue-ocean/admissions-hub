const { Pool } = require('pg');
import pool from '../../../lib/db';

export default function handler(req, res) {
  const query = req.query;
  const { email } = query;
  // console.log(req.query);
  // console.log(email);
  if (req.method === 'PATCH') {
    const { pass } = req.body;

    pool.query(
      'UPDATE candidates SET  pass = COALESCE($1, pass) WHERE email = $2 RETURNING *',
      [pass, email],
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error');
        } else {
          return res.status(200).send(result.rows);
        }
      }
    );
  } else if (req.method === 'DELETE') {
    pool.query('DELETE FROM candidates WHERE email = $1', [email], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error');
      } else {
        return res.status(200).send(result.rows);
      }
    });
  }
}
