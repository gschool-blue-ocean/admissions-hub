CREATE EXTENSION pgcrypto;

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC', 'ADMIN');

DROP TABLE IF EXISTS interviewers CASCADE;

DROP TABLE IF EXISTS candidates CASCADE;

DROP TABLE IF EXISTS interviews CASCADE;

-- CreateTable
CREATE TABLE "interviewers" (
  "id" SERIAL,
  "first_name" TEXT NOT NULL,
  "last_name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "role" TEXT NOT NULL DEFAULT 'ADMIN',
  PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidates" (
  "id" SERIAL,
  "first_name" TEXT NOT NULL,
  "last_name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "cohort" TEXT NOT NULL,
  "pass" TEXT,
  "role" "Role" NOT NULL DEFAULT 'BASIC',
  PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interviews" (
  "id" SERIAL,
  "interviewers_id" INT REFERENCES "interviewers"("id") ON DELETE CASCADE ON UPDATE CASCADE DEFAULT 0,
  "candidates_id" INT REFERENCES "candidates"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  "notes_1" TEXT,
  "notes_2" TEXT,
  "notes_3" TEXT,
  "problem_1_rating" INT DEFAULT NULL,
  "problem_2_rating" INT DEFAULT NULL,
  "problem_3_rating" INT DEFAULT NULL,
  "attempt" TEXT,
  "pass" TEXT,
  "date" DATE,
  "complete" BOOLEAN,
  "code" TEXT
);

-- AddForeignKey
-- ALTER TABLE "Interviews" ADD CONSTRAINT "Interviews_candidatesId_fkey" FOREIGN KEY ("candidatesId") REFERENCES "Candidates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
INSERT INTO
  "interviewers" ("first_name", "last_name", "email", "password")
VALUES
  (
    'Jarrett',
    'Guyer',
    'guyer.jarrett@gmail.com',
    crypt('6535', gen_salt('md5'))
  ),
  (
    'TEMP',
    'TEMP',
    'danny@TEMP.com',
    crypt('TEMP', gen_salt('md5'))
  ),
  (
    'Danny',
    'Andrews',
    'danny@gmail.com',
    crypt('johnspassword', gen_salt('md5'))
  ),
  (
    'Kevin',
    'Reaves',
    'reaveskev@gmail.com',
    crypt('password', gen_salt('md5'))
  );

INSERT INTO
  "candidates" (
    "first_name",
    "last_name",
    "email",
    "cohort",
    "pass"
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
  ),
  (
    'Kyle',
    'Jones',
    'jones.kyle2893@gmail.com',
    'MCSP-13',
    'true'
  ),
  (
    'Thanh',
    'Le',
    'huybenpro@gmail.com',
    'MCSP-13',
    'true'
  ),
  (
    'Matthew',
    'Rust',
    'matthewrust21@gmail.com',
    'MCSP-13',
    'true'
  ),
  (
    'Hung',
    'Nguyen',
    'hungnguyen1693@gmail.com',
    'MCSP-13',
    'true'
  ),
  (
    'Trevin',
    'Reaves',
    'Reaveskev12@gmail.com',
    'MCSP-13',
    'true'
  ),
  (
    'Jeremy',
    'Linder',
    'jeremylinder12@gmail.com',
    'MCSP-13',
    'true'
  ),
  (
    'Thighle',
    'Jones',
    'jones.kyle28932@gmail.com',
    'MCSP-13',
    'true'
  ),
  (
    'Thanhohss',
    'Le',
    'huybenpro12@gmail.com',
    'MCSP-13',
    'true'
  ),
  (
    'Shmathew',
    'Rust',
    'matthewrust221@gmail.com',
    'MCSP-13',
    'true'
  ),
  (
    'Flung',
    'Nguyen',
    'hungnguyen16931@gmail.com',
    'MCSP-13',
    'true'
  );

INSERT INTO
  "interviews" (
    "interviewers_id",
    "candidates_id",
    "notes_1",
    "notes_2",
    "notes_3",
    "problem_1_rating",
    "problem_2_rating",
    "problem_3_rating",
    "date",
    "attempt",
    "pass",
    "code",
    "complete"
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