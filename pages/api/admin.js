import jwt from 'jsonwebtoken';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pool from '../../lib/db';

export default function handler(req, res) {
  console.log(req.body);
  const { email, password } = req.body;
  pool
    .query(`SELECT (phash = crypt($2, phash)) AS valid, first_name, last_name, id FROM interviewers WHERE email = $1`, [
      email,
      password
    ])
    .then((result) => result.rows[0])
    .then((data) => {
      if (data.valid) {
        let token = jwt.sign({ email: email }, 'secret', { expiresIn: '1d' });
        let packet = {
          valid: true,
          token: token,
          id: data.id,
          first_name: data.first_name,
          last_name: data.last_name
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
