import jwt from 'jsonwebtoken';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pool from '../../lib/db';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    const { email, password } = req.body;
    const data = req.body;
    const accessToken = jwt.sign(data, 'teamA+', { expiresIn: '30s' });
    pool.query(
      'SELECT * FROM interviewers WHERE email = $1 and password = crypt($2, password)',
      [email, password],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error');
        } else {
          if (result.rows.length > 0) {
            res.status(200).json({ connect: true, ...result.rows[0], accessToken });
          } else {
            res.status(200).send({ connect: false });
          }
        }
      }
    );
  } else {
    // Handle any other HTTP method
    res.status(405).send('Method not allowed');
  }
}
