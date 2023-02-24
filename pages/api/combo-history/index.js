import pool from '../../../lib/db';

export default function handler(req, res) {
  pool
    .query(
      'SELECT candidatesHistory.*, interviews.date, interviews.state, interviews.id AS interview_id, (SELECT COUNT(*) FROM interviews WHERE candidatesHistory.id = interviews.candidate_id) AS attempts FROM candidatesHistory LEFT JOIN interviews ON candidatesHistory.id = interviews.candidate_id ORDER BY date DESC'
    )
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Combination GET query failed`);
      console.log(error);
      res.status(500).send(error);
    });
}

// SELECT candidates.*, interviews.date, interviews.state, (SELECT COUNT(*) FROM interviews WHERE candidates.id = interviews.candidate_id) AS attempts FROM candidates LEFT JOIN interviews ON candidates.id = interviews.candidate_id ORDER BY date DESC;
