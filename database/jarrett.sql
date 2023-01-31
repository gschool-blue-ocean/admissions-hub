CREATE EXTENSION pgcrypto;

DROP TABLE IF EXISTS interviewers CASCADE;

DROP TABLE IF EXISTS candidates CASCADE;

DROP TABLE IF EXISTS interviews CASCADE;

-- CreateTable
CREATE TABLE interviewers (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phash TEXT NOT NULL
);

-- CreateTable
CREATE TABLE candidates (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  cohort TEXT NOT NULL
);

-- CreateTable
CREATE TABLE interviews (
  id SERIAL PRIMARY KEY,
  interviewer_id INT REFERENCES interviewers(id),
  candidate_id INT REFERENCES candidates(id),
  notes_1 TEXT,
  notes_2 TEXT,
  notes_3 TEXT,
  problem_1_rating INT,
  problem_2_rating INT,
  problem_3_rating INT,
  code TEXT,
  date TEXT,
  state TEXT DEFAULT 'incomplete'
);

INSERT INTO
  interviewers (first_name, last_name, email, phash)
VALUES
  (
    'Jarrett',
    'Guyer',
    'guyer.jarrett@gmail.com',
    crypt('6535', gen_salt('md5'))
  );

INSERT INTO
  candidates (first_name, last_name, email, cohort)
VALUES
  ('Lug', 'Nug', 'nug.lug@gugmug.edu', 'MCSP-01'),
  ('Jon', 'Paul', 'JPNA@gmail.com', 'MCSP-15');

INSERT INTO
  interviews (interviewer_id, candidate_id, date, state)
VALUES
  (1, 1, '2023-01-24', 'incomplete'),
  (1, 2, '2022-03-15', 'pass'),
  (1, 1, '2023-01-20', 'fail');