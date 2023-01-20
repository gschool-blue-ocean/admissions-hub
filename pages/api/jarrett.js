import pool from '../../lib/db';

export default function handler(req, res) {
  console.log('Request to Jarrett');
  const query = 'SELECT * FROM interviewers LIMIT 1';
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows[0]);
      console.log(result.rows[0]);
    })
    .catch((err) => res.status(404).send(err));
}
