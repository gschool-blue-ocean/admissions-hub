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
  cohort TEXT NOT NULL,
  state TEXT DEFAULT 'TBD'
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
  code TEXT date TEXT,
  state TEXT DEFAULT 'TBD',
);

INSERT INTO
  interviewers (first_name, last_name, email, phash)
VALUES
  (
    'TempFirst',
    'TempLast',
    'danny@TEMP.com',
    crypt('TEMP', gen_salt('md5'))
  ),
  (
    'Gabe',
    'GOAT',
    'baaaa@gmail.com',
    crypt('GOAT', gen_salt('md5'))
  ),
  (
    'Jarrett',
    'Guyer',
    'guyer.jarrett@gmail.com',
    crypt('6535', gen_salt('md5'))
  );

INSERT INTO
  candidates (
    first_name,
    last_name,
    email,
    cohort
  )
VALUES
  (
    'Kevin',
    'Reaves',
    'Reaveskev@gmail.com',
    'MCSP-13'
  ),
  (
    'Baremy',
    'Linder',
    'jeremylinder2@gmail.com',
    'MCSP-13'
  ),
  (
    'Kyle',
    'Jones',
    'jones.kyle2893@gmail.com',
    'MCSP-13'
  ),
  (
    'Thanh',
    'Le',
    'huybenpro@gmail.com',
    'MCSP-13'
  ),
  (
    'Matthew',
    'Rust',
    'matthewrust21@gmail.com',
    'MCSP-13'
  ),
  (
    'Hung',
    'Nguyen',
    'hungnguyen1693@gmail.com',
    'MCSP-13'
  ),
  (
    'Trevin',
    'Reaves',
    'Reaveskev12@gmail.com',
    'MCSP-13'
  ),
  (
    'Jeremy',
    'Linder',
    'jeremylinder12@gmail.com',
    'MCSP-13'
  ),
  (
    'Thighle',
    'Jones',
    'jones.kyle28932@gmail.com',
    'MCSP-13'
  ),
  (
    'Thanhohss',
    'Le',
    'huybenpro12@gmail.com',
    'MCSP-13'
  ),
  (
    'Shmathew',
    'Rust',
    'matthewrust221@gmail.com',
    'MCSP-13'
  ),
  (
    'Flung',
    'Nguyen',
    'hungnguyen16931@gmail.com',
    'MCSP-13'
  );

INSERT INTO
  interviews (
    interviewer_id,
    candidate_id,
    notes_1,
    notes_2,
    notes_3,
    problem_1_rating,
    problem_2_rating,
    problem_3_rating,
    date,
    code,
    state
  )
VALUES
  (
    '3',
    '1',
    'Needs work with functions',
    'Good job here',
    'Nice work',
    '5',
    '5',
    '4',
    '2022-04-17',
    '//Write your code here',
    'pass'
  ),
  (
    '3',
    '1',
    '',
    '',
    '',
    '',
    '',
    '',
    '2023-06-25',
    '//Write your code here',
    'incomplete'
  );