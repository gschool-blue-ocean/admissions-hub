const jwt = require("jsonwebtoken");
import pool from '../../../lib/db'


async function alterInterviewer(req, res) {
    if (req.method === 'PUT') {
      // retrieve the interviewer data from the request body
      const { firstName, lastName, email, password, currentPassword } = req.body;
      // check if the current password is correct
      try {
        // query the database for a user with the provided email
        const result = await pool.query('SELECT * FROM interviewers WHERE email = $1', [email]);
        if (!result.rows[0]) return res.status(404).send("No interviewer found."); // if no interviewer is found, return a 404 error
        const interviewer = result.rows[0];
        // check if the current password matches the one in the database
        const currentPasswordMatch = await pool.query('SELECT * FROM interviewers WHERE email = $1 AND password = crypt($2, password)', [email, currentPassword]);
        if (!currentPasswordMatch.rows[0]) return res.status(401).send({ auth: false, token: null });
        // if the current password is correct, then proceed to update the interviewer's information
        // update the interviewer's information in the database
        await pool.query(`UPDATE interviewers SET first_name = $1, last_name = $2, email = $3, password = crypt($4, gen_salt('md5')) WHERE email = $5`, [firstName, lastName, email, password, email]);
        //create and sign a new JWT
        const token = jwt.sign({ id: interviewer.id }, 'secret', {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
      } catch (err) {
        res.status(500).send("Error on the server.");
      }
    }
  }
  
export default alterInterviewer

         
  