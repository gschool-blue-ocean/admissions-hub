import pool from '../../../../lib/db';

export default function handler(req, res) {
  let { notes_1, notes_2, notes_3, problem_1_rating, problem_2_rating, attempt, pass, date, complete, code, id } =
    req.body;
  return pool
    .query(
      `UPDATE interviews SET 
      notes_1 = $1, 
      notes_2 =$2,
      notes_3 = $3,
      problem_1_rating = $4,
      problem_2_rating = $5,
      attempt = $6,
      pass = $7,
      date = $8,
      complete = $9,
      code = $10

      WHERE id = $11 `,
      [notes_1, notes_2, notes_3, problem_1_rating, problem_2_rating, attempt, pass, date, complete, code, id]
    )
    .then(() => {
      console.log('updated everything');
      res.send('updated everything');
    })
    .catch(console.log);
}
