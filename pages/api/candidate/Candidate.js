import pool from '../../../lib/db';

export default function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    let { first_name, last_name, email, cohort, pass } = req.body;

    return pool
      .query(
        'INSERT INTO candidates( first_name, last_name, email, cohort, pass) VALUES ($1, $2, $3, $4, $5) RETURNING *;', //,
        [first_name, last_name, email, cohort, pass]
      )
      .then((data) => {
        res.send(data.rows);
      })
      .catch((error) => {
        console.log(error);
        res.send(error);
      });
  } else if (method === 'GET') {
    return pool
      .query(
        'SELECT candidates.*, interviews.* FROM candidates LEFT JOIN interviews ON candidates.id = interviews.candidates_id ORDER BY date DESC;' //,
      )
      .then((data) => {
        res.send(data.rows);
        //console.log(data)
      })
      .catch((error) => {
        console.log(error);
        res.send(error);
      });
  }
}

// SELECT candidates.*, interviews.*, MAX(interviews.date) FROM candidates INNER JOIN interviews ON candidates.id = interviews.candidates_id GROUP BY candidates.id;

// SELECT candidates.* FROM candidates INNER JOIN (SELECT candidates_id, pass, notes_1, notes_2, notes_3, problem_1_rating, problem_2_rating, problem_3_rating, attempt, MAX(date) AS MaxDateTime FROM interviews) AS interviewsdates ON candidate.id = interviewsdates.candidates_id;

// SELECT candidates.*
// FROM candidates
// INNER JOIN
//     (SELECT candidates_id, MAX(date) AS MaxDateTime
//     FROM interviews
//     GROUP BY candidates_id) groupedtt
// ON candidates.id = groupedtt.candidates_id;

// SELECT candidates.*, interviews.*
// FROM candidates
// JOIN interviews ON (candidates.id = interviews.candidates_id)
// LEFT OUTER JOIN purchase p2 ON (c.id = p2.customer_id AND
//     (p1.date < p2.date OR (p1.date = p2.date AND p1.id < p2.id)))
// WHERE p2.id IS NULL;
