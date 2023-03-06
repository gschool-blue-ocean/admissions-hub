CREATE EXTENSION pgcrypto;

DROP TABLE IF EXISTS interviewers CASCADE;

DROP TABLE IF EXISTS candidates CASCADE;

DROP TABLE IF EXISTS interviews CASCADE;

CREATE TABLE interviewers (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phash TEXT NOT NULL
);

CREATE TABLE candidates (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  cohort TEXT NOT NULL
);

CREATE TABLE candidatesHistory (
  id INTEGER,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  cohort TEXT NOT NULL
);

CREATE TABLE interviews (
  id SERIAL PRIMARY KEY,
  interviewer_id INT NOT NULL,
  candidate_id INT NOT NULL,
  notes_1 TEXT,
  notes_2 TEXT,
  notes_3 TEXT,
  problem_1_rating INT DEFAULT 0,
  problem_2_rating INT DEFAULT 0,
  problem_3_rating INT DEFAULT 0,
  attempts_1 TEXT[],
  attempts_2 TEXT[],
  attempts_3 TEXT[],
  date TEXT,
  state TEXT DEFAULT 'Incomplete'
);


INSERT INTO
  interviewers (first_name, last_name, email, phash)
VALUES
  (
    'Timmy',
    'McGee',
    'TimTamGee@gmail.com',
    crypt('secretPass420', gen_salt('md5'))
  ),
  (
    'tempFirst',
    'tempLast',
    'temp@temp.com',
    crypt('temp', gen_salt('md5'))
  );

INSERT INTO
  candidates (first_name, last_name, email, cohort)
VALUES
  ('Lug', 'Nug', 'nug.lug@gugmug.edu', 'MCSP-01'),
  ('Jon', 'Paul', 'JPNA@gmail.com', 'MCSP-15');

INSERT INTO
  interviews (interviewer_id, candidate_id, date, state)
VALUES
  (1, 1, '2023-01-24', 'Incomplete'),
  (1, 2, '2022-03-15', 'Pass'),
  (2, 2, '2020-03-15', 'Pass'),
  (1, 1, '2023-01-20', 'Fail');
