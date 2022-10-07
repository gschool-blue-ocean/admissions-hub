
CREATE EXTENSION pgcrypto;
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC', 'ADMIN');

-- CreateTable
-- CREATE TABLE "Candidates" (
--     "id" TEXT NOT NULL,
--     "firstName" TEXT NOT NULL,
--     "lastName" TEXT NOT NULL,
--     "email" TEXT NOT NULL,
--     "cohort" TEXT NOT NULL,
--     "notes" TEXT NOT NULL,
--     "role" "Role" NOT NULL DEFAULT 'BASIC',

--     CONSTRAINT "Candidates_pkey" PRIMARY KEY ("id")
-- );

-- CreateTable
CREATE TABLE "interviewers" (
    "id" serial,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
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

insert into "interviewers" ("firstName", "lastName", "email", "password") values ('Danny', 'Andrew', 'danny@gmail.com',  crypt('johnspassword', gen_salt('md5')));

