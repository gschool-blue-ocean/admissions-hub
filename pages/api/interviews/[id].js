import pool from '../../../lib/db';

export default function handler(req, res) {
  if (req.method == 'GET') {
    pool
      .query('SELECT * FROM interviews WHERE id = $1', [req.query.id])
      .then((result) => {
        res.send(result.rows[0]);
      })
      .catch((error) => {
        console.log(`interview GET by ID failed`);
        res.status(500);
        res.send(error);
      });
  } else if (req.method == 'PATCH') {
    let { notes_1, notes_2, notes_3, problem_1_rating, problem_2_rating, problem_3_rating, submission_1, submission_2, submission_3, date, state } = req.body;
    pool
      .query(
        `UPDATE interviews SET notes_1=$1, notes_2=$2, notes_3=$3, problem_1_rating=$4, problem_2_rating=$5, problem_3_rating=$6, submission_1=$7, submission_2=$8, submission_3=$9, date=$10, state=$11 WHERE id=${req.query.id} RETURNING *`,
        [notes_1, notes_2, notes_3, problem_1_rating, problem_2_rating, problem_3_rating, submission_1, submission_2, submission_3, date, state]
      )
      .then((result) => {
        res.send(result.rows[0]);
      })
      .catch((error) => {
        console.log(`interview UPDATE by ID failed`);
        res.status(500);
        res.send(error);
      });
  }
}
