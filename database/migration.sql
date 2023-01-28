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
  pass TEXT NOT NULL DEFAULT 'TBD'
);

-- CreateTable
CREATE TABLE interviews (
  id SERIAL PRIMARY KEY,
  interviewers_id INT REFERENCES interviewers(id),
  candidates_id INT REFERENCES candidates(id),
  notes_1 TEXT,
  notes_2 TEXT,
  notes_3 TEXT,
  problem_1_rating INT DEFAULT NULL,
  problem_2_rating INT DEFAULT NULL,
  problem_3_rating INT DEFAULT NULL,
  attempt INT,
  pass BOOLEAN,
  date TEXT,
  complete BOOLEAN,
  code TEXT
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
    cohort,
    pass
  )
VALUES
  (
    'Kevin',
    'Reaves',
    'Reaveskev@gmail.com',
    'MCSP-13',
    'false'
  ),
  (
    'Baremy',
    'Linder',
    'jeremylinder2@gmail.com',
    'MCSP-13',
    'true'
  );

INSERT INTO
  interviews (
    interviewers_id,
    candidates_id,
    notes_1,
    notes_2,
    notes_3,
    problem_1_rating,
    problem_2_rating,
    problem_3_rating,
    date,
    attempt,
    pass,
    code,
    complete
  )
VALUES
  (
    '3',
    '1',
    'Needs work with functions',
    'Good job here',
    'Nice work',
    '2',
    '2',
    '2',
    '2022-06-17',
    '1',
    'false',
    '//Write your code here',
    false
  ),
  (
    '3',
    '1',
    'Needs work with functions',
    'Good job here',
    'Nice work',
    '2',
    '2',
    '2',
    '2022-06-27',
    '2',
    'false',
    '//Write your code here',
    TRUE
  ),
  (
    '2',
    '2',
    'Needs work with functions',
    'Good job here',
    'Nice work',
    '2',
    '2',
    '2',
    '2022-06-17',
    '1',
    'true',
    '//Write your code here',
    false
  ),
  (
    '2',
    '3',
    'Needs work with functions',
    'Good job here',
    'Nice work',
    '2',
    '2',
    '2',
    '2022-06-17',
    '1',
    'true',
    '//Write your code here',
    TRUE
  ),
  (
    '2',
    '4',
    'Needs work with functions',
    'Good job here',
    'Nice work',
    '2',
    '2',
    '2',
    '2022-06-17',
    '1',
    'true',
    '//Write your code here',
    false
  ),
  (
    '2',
    '5',
    'Needs work with functions',
    'Good job here',
    'Nice work',
    '2',
    '2',
    '2',
    '2022-06-17',
    '1',
    'true',
    '//Write your code here',
    TRUE
  ),
  (
    '2',
    '6',
    'Needs work with functions',
    'Good job here',
    'Nice work',
    '2',
    '2',
    '2',
    '2022-06-17',
    '1',
    'true',
    '//Write your code here',
    false
  ),
  (
    '3',
    '7',
    'Needs work with functions',
    'Good job here',
    'Nice work',
    '2',
    '2',
    '2',
    '2022-06-17',
    '1',
    'true',
    '//Write your code here',
    TRUE
  ),
  (
    '3',
    '8',
    'Needs work with functions',
    'Good job here',
    'Nice work',
    '2',
    '2',
    '2',
    '2022-06-17',
    '1',
    'true',
    '//Write your code here',
    false
  ),
  (
    '3',
    '9',
    'Needs work with functions',
    'Good job here',
    'Nice work',
    '2',
    '2',
    '2',
    '2022-06-17',
    '1',
    'true',
    '//Write your code here',
    TRUE
  ),
  (
    '3',
    '10',
    'Needs work with functions',
    'Good job here',
    'Nice work',
    '2',
    '2',
    '2',
    '2022-06-17',
    '1',
    'true',
    '//Write your code here',
    false
  ),
  (
    '2',
    '11',
    'Needs work with functions',
    'Good job here',
    'Nice work',
    '2',
    '2',
    '2',
    '2022-06-17',
    '1',
    'true',
    '//Write your code here',
    TRUE
  ),
  (
    '2',
    '12',
    'Needs work with functions',
    'Good job here',
    'Nice work',
    '2',
    '2',
    '2',
    '2022-06-17',
    '1',
    'true',
    '//Write your code here',
    false
  );