
CREATE EXTENSION pgcrypto;
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC', 'ADMIN');


DROP TABLE IF EXISTS candidates;
DROP TABLE IF EXISTS interviewers;


CREATE TABLE "interviewers" (
    "id" SERIAL PRIMARY KEY ,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'ADMIN'
);

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
    "interviewers_id" INT REFERENCES "interviewers"("id")
);

  




-- CreateTable
-- CREATE TABLE "interviews" (
--     "id" SERIAL,
--     "candidatesId" REFERENCES FOREIGN KEY "candidates_pkey" FROM TABLE "candidates"  ,
--     FOREIGN KEY(candidatesId) REFERENCES candidates_pkey(candidates));
--     "interviewersId" REFERENCES FOREIGN KEY "interviewers_pkey" FROM "interviews" TABLE 

--     CONSTRAINT "Interviews_pkey" PRIMARY KEY ("id")
-- );

-- AddForeignKey
-- ALTER TABLE "Interviews" ADD CONSTRAINT "Interviews_candidatesId_fkey" FOREIGN KEY ("candidatesId") REFERENCES "Candidates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;



insert into "candidates" ("first_name", "last_name", "email", "cohort", "date", "attempt", "pass", "notes_1", "notes_2", "notes_3", "interviewers_id") values 
('Kevin', 'Reaves', 'Reaveskev@gmail.com', 'MCSP-13','27-JUN-22', '2', 'false', 'Add Notes', 'Add Notes', 'Add Notes', '2'),
('Jeremy', 'Linder', 'jeremylinder2@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes', '1'),
('Kyle', 'Jones', 'jones.kyle2893@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes', '1'),
('Thanh', 'Le', 'huybenpro@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes', '1'),
('Matthew', 'Rust', 'matthewrust21@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes', '1'),
('Hung', 'Nguyen', 'hungnguyen1693@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes', '1'),
('Kevin', 'Reaves', 'Reaveskev12@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes', '1'),
('Jeremy', 'Linder', 'jeremylinder12@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes', '1'),
('Kyle', 'Jones', 'jones.kyle28932@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes', '2'),
('Thanh', 'Le', 'huybenpro12@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes', '2'),
('Matthew', 'Rust', 'matthewrust221@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes', '2'),
('Hung', 'Nguyen', 'hungnguyen16931@gmail.com', 'MCSP-13','27-JUN-22', '1', 'true', 'Add Notes', 'Add Notes', 'Add Notes', '2');

insert into "interviewers" ("first_name", "last_name", "email", "password") values ('Danny', 'Andrews', 'danny@gmail.com',  crypt('johnspassword', gen_salt('md5')));


-- SELECT candidates.*, interviews.date, interviews.attempt FROM 
-- candidates INNER JOIN interviews ON candidates.id = interviews.candidates_id ORDER BY date GROUP BY candidate.last_name;