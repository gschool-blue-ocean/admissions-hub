import pool from '../../../lib/db';

export default function handler(req, res) {
  let { interviewer_id, candidate_id } = req.body;
  pool
    .query('SELECT * FROM interviews WHERE interviewer_id=$1 AND candidate_id=$2 ORDER BY date DESC LIMIT 1', [
      interviewer_id,
      candidate_id
    ])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((err) => {
      console.log(`resume Interview POST failure`);
      res.status(404).send(err);
    });
}
