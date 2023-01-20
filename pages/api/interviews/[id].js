const { Client } = require('pg');
import pool from '../../../lib/db';

export default function handler(req, res) {
  const query = req.query;
  const { id } = query;

  if (req.method === 'GET') {
    pool
      .query('SELECT * FROM interviews WHERE id = $1', [id])
      //.then(results => results.json())
      .then((data) => {
        res.status(200);
        res.send(data.rows);
      })
      .catch((error) => {
        res.status(500);
        res.send(error);
      });
  }
}
