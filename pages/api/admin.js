import jwt from 'jsonwebtoken';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pool from '../../lib/db';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { email, password } = req.body;
    pool
      .query('SELECT (phash = crypt($2, phash)) AS valid FROM interviewers WHERE email=$1', [email, password])
      .then((result) => {
        if (result.rows[0].valid) {
          let token = jwt.sign();
        }
      });
  } else {
    // Handle any other HTTP method
    res.status(405).send('Method not allowed');
  }
}
