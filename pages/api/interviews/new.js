import pool from '../../../lib/db';

export default function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    let { interviewer_id, candidate_id, date } = req.body;
    pool
      .query('INSERT INTO interviews( interviewer_id, candidate_id, date ) VALUES ($1, $2, $3) RETURNING *;', [
        interviewer_id,
        candidate_id,
        date
      ])
      .then((result) => {
        res.send(result.rows[0]);
      })
      .catch((err) => {
        console.log(`New Interview POST failure`);
        res.status(404).send(err);
      });
  }
}
