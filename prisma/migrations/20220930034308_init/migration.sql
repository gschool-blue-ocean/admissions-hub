
CREATE EXTENSION pgcrypto;
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC', 'ADMIN');

DROP TABLE IF EXISTS candidates;
DROP TABLE IF EXISTS interviewers;
-- DROP TABLE IF EXISTS interviews;

-- CreateTable
CREATE TABLE "candidates" (
    "id" serial,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cohort" TEXT NOT NULL,
    "date" TEXT,
    "attempt" TEXT,
    "pass" TEXT,
    "notes_1" TEXT,
    "notes_2" TEXT,
    "notes_3" TEXT,
    "problem_1_rating" INT DEFAULT NULL,
    "problem_2_rating" INT DEFAULT NULL,
    "problem_3_rating" INT DEFAULT NULL,
    "role" "Role" NOT NULL DEFAULT 'BASIC',

    CONSTRAINT "candidates_pkey" PRIMARY KEY ("id")
);

  

-- CreateTable
CREATE TABLE "interviewers" (
    "id" serial,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'ADMIN',

    CONSTRAINT "interviewers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
-- CREATE TABLE "Interviews" (
--     "id" TEXT NOT NULL,
--     "candidatesId" TEXT NOT NULL,

--     CONSTRAINT "Interviews_pkey" PRIMARY KEY ("id")
-- );

-- AddForeignKey
-- ALTER TABLE "Interviews" ADD CONSTRAINT "Interviews_candidatesId_fkey" FOREIGN KEY ("candidatesId") REFERENCES "Candidates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

insert into "interviewers" ("first_name", "last_name", "email", "password") values ('Danny', 'Andrews', 'danny@gmail.com',  crypt('johnspassword', gen_salt('md5')));


insert into "candidates" ("first_name", "last_name", "email", "cohort", "date", "attempt", "pass", "notes_1", "notes_2", "notes_3") values 
('Kevin', 'Reaves', 'Reaveskev@gmail.com', 'MCSP-13','27-JUN-22', '2', 'false', 'Add Notes', 'Add Notes', 'Add Notes'),
('Jeremy', 'Linder', 'jeremylinder2@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes'),
('Kyle', 'Jones', 'jones.kyle2893@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes'),
('Thanh', 'Le', 'huybenpro@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes'),
('Matthew', 'Rust', 'matthewrust21@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes'),
('Hung', 'Nguyen', 'hungnguyen1693@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes'),
('Kevin', 'Reaves', 'Reaveskev12@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes'),
('Jeremy', 'Linder', 'jeremylinder12@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes'),
('Kyle', 'Jones', 'jones.kyle28932@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes'),
('Thanh', 'Le', 'huybenpro12@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes'),
('Matthew', 'Rust', 'matthewrust221@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes'),
('Hung', 'Nguyen', 'hungnguyen16931@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes');

