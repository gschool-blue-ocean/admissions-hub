import jwt from 'jsonwebtoken';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pool from '../../lib/db';

export default function handler(req, res) {
  const { email, password } = req.body;

  console.log(email, password);
  pool
    .query(`SELECT (phash = crypt($2, phash)) AS valid, first_name, last_name FROM interviewers WHERE email = $1`, [
      email,
      password
    ])
    .then((result) => {
      if (result.rows[0].valid) {
        let token = jwt.sign({ email: email }, 'secret', { expiresIn: '1d' });
        let packet = {
          valid: true,
          token: token,
          id: result.rows[0].id,
          first_name: result.rows[0].first_name,
          last_name: result.rows[0].last_name
        };
        res.send(packet);
      } else {
        res.send({ valid: false });
      }
    })
    .catch((err) => {
      res.status(404).send(err);
    });
}

// verification: did I built it
// validate: did I build the right thing
