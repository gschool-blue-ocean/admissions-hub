const jwt = require('jsonwebtoken');
import pool from '../../../lib/db';

async function alterInterviewer(req, res) {
  if (req.method === 'PUT') {
    // retrieve the interviewer data from the request body
    const { firstName, lastName, email, password, currentPassword } = req.body;
    // check if the current password is correct
    try {
      // query the database for a user with the provided email
      // check if the current password matches the one in the database
      const currentPasswordMatch = await pool.query(
        'SELECT * FROM interviewers WHERE email = $1 AND phash = crypt($2, phash)',
        [email, currentPassword]
      );
      if (!currentPasswordMatch.rows[0]) {
        res.status(401).send({ valid: false });
        return;
      }
      // if the current password is correct, then proceed to update the interviewer's information
      // update the interviewer's information in the database
      const result = await pool.query(
        `UPDATE interviewers SET first_name = $1, last_name = $2, email = $3, phash = crypt($4, gen_salt('md5')) WHERE email = $5 RETURNING *`,
        [firstName, lastName, email, password, email]
      );
      //create and sign a new JWT
      let token = jwt.sign({ name: result.rows[0].first_name }, 'secret', { expiresIn: '1d' });
      let packet = {
        valid: true,
        token: token,
        id: result.rows[0].id,
        first_name: result.rows[0].first_name,
        last_name: result.rows[0].last_name
      };
      res.status(200).send(packet);
    } catch (err) {
      res.status(500).send('Error on the server.');
    }
  }
}

export default alterInterviewer;
