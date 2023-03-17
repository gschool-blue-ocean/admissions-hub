# Galvanize Student Admissions Hub

Galvanize is a company that conducts coding immersive courses and must determine if potential students possess the aptitude required to make it through the curriculum by conducting a live coding interview. This is a Full-Stack Application using the NextJS framework to unite Front and Back-End codebases. Features of this application is to create a hub that interviewers can log into to add/delete/update student data and conduct live coding interviews with them using socket.io. Stats regarding interview pass rate and other items are collected and displayed to the current interviewer account that is logged in.

## Tech Stack

![NextJS](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white!)![React](https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642)![Javascript](https://camo.githubusercontent.com/93c855ae825c1757f3426f05a05f4949d3b786c5b22d0edb53143a9e8f8499f6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d463744463145)![CSS](https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465)![HTML5](https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)![PostgresQL](https://camo.githubusercontent.com/29e7fc6c62f61f432d3852fbfa4190ff07f397ca3bde27a8196bcd5beae3ff77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465)![Docker](https://camo.githubusercontent.com/63350538fde994bc287ccd4908809301e157980e6564bf78d2c5cec22c0a5914/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f636b65722d3243413545303f7374796c653d666f722d7468652d6261646765266c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465)

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)![Puppeteer](https://img.shields.io/badge/Puppeteer-40B5A4.svg?style=for-the-badge&logo=Puppeteer&logoColor=white)

![Discord](https://camo.githubusercontent.com/f868f43f3c084669121e55e633ca5c3e11d382872ab7db663789f5c736c71a43/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446973636f72642d3538363546323f7374796c653d666f722d7468652d6261646765266c6f676f3d646973636f7264266c6f676f436f6c6f723d7768697465)![Slack](https://camo.githubusercontent.com/870d2945e15dde83583f64ea1f3f4471702e45bf30fa884412da74cb7731ae42/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536c61636b2d3441313534423f7374796c653d666f722d7468652d6261646765266c6f676f3d736c61636b266c6f676f436f6c6f723d7768697465)![Zoom](https://camo.githubusercontent.com/c6c90c4d74d5fad08da3e2c31c556ea8a8b45a6bd5756b6e49111d9825cde56f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5a6f6f6d2d3244384346463f7374796c653d666f722d7468652d6261646765266c6f676f3d7a6f6f6d266c6f676f436f6c6f723d7768697465)

## Getting Started

```
$ npm install
$ docker-compose up
$ npm run dev
```
Once these commands have been run you will need to create a file named 'env.local' in the directory where this project lives.
NextJS has built in env recognition. Adding "NEXT_PUBLIC_" prefix makes the variable available to the web page.The 2 required variables are:

NEXT_PUBLIC_SLACK_WEBHOOK=*your slack api web hook goes here*;
NEXT_PUBLIC_CONNECTION_STRING=*your database address goes here*;


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

#
## Navigation
**LOGIN PAGE**

At the login page, you will see a form to enter your email and password. Emails and passwords can be found in the migration file within the database folder.
To get you started, here is the email and password.

 ![Imgur](https://i.imgur.com/KOugM0P.gif)


 **EDIT PROFILE PAGE**

 Once you login, it will bring you to the main dashboard. In the top right corner, you will see a drop down that says Welcome.... followed by whatever first name is associated with your user information (can be found in localstorage in chrome dev tools or look in your migration file)
Once you click on that a dropdown will appear click on view profile.

![Imgur](https://i.imgur.com/dajiCiZ.gif)

- Click on the galvanize button in the top left corner to bring you back to the dashboard page.
- Click logout in the dropdown menu to log you out.
- Edit your fields if you want to change your profile information once you click update account a paragraph tag will pop up underneath the button letting you know that the update was successful.
#
## Dashboard

***ADD STUDENT***

Click "Add Student" to add a student. Once you click on the button, a custom modal will appear with form data that needs to be filled out. Once you are done, submit and the new data will show up on the list of students in the dashboard.

![Imgur](https://i.imgur.com/nFPLxif.gif)

***EDIT OR DELETE STUDENT***

Once you click on a student from the list, two more buttons will appear for editing and deleting.

![Imgur](https://i.imgur.com/mn9ujbJ.gif)

***EXPORT STUDENT INFO***

Click on the "Export Current Info" (previously "Export Student Info"). A custom modal will show with two buttons: one to download and another to email.

![Imgur](https://i.imgur.com/dm7YW0J.gif)

- the email button does not work yet we did not have time to incorporate it.

***ARCHIVE STUDENT***

Select a student and click "Archive Student" to move the student to the archived log. From there, you have the option of viewing their interview or deleting them permanently. When viewing an archived student's interview. The export feature works as well for the archived log.

![Imgur](https://i.imgur.com/r6LCD1U.gif)

***SELECT A CANDIDATE TO GET STARTED***

- If a student has not conducted a test, when you click on their info, you will see a button pop up that says "Launch Interview". Click it to navigate to the testing suite.
- If a student has already conducted a test, then two buttons will show: either "Resume Interview" or, if passed, "View Interview", or, if failed, "Launch New Interview" and "View Notes"

![Imgur](https://i.imgur.com/Bqxu5Am.gif)

#
## Interview Page

***GRADING STUDENTS***

After clicking on the launch interview button it will bring you to the interview page. Here you can grade students based on there performance and how they interviewed. You can add notes as well as give them a star rating based on how well they completed the task. After inputing all of your notes and ratings for each question push the submit button and it will bring you back to the dashboard page.

![Imgur](https://i.imgur.com/HIqWagJ.gif)

***SHARING INTERVIEW ROOM WITH STUDENT***

Copy the interview link and send to the prospective student so that you and the student can share a code space. The student will not be able to see your notes nor the example answer in the notepad. Although not it's not shown in the example below, students will be provided the question pre-written on the code editor and also will be available to switch between problems.

![Imgur](https://i.imgur.com/Np6TkHr.gif)


***SLACK INTEGRATION***

- admissions-hub/src/interview/NotePad.js

Whenever you click "Submit" on the interview, a Slack bot will send a status message of Pass/Fail/Incomplete along with the student's name to a Slack channel (intended to be the Admissions Team's chat group) configured in the environment variable below. Integration takes place via a POST request to the Slack API in the NotePad.js file. This feature can be expanded upon in a few different ways.

- NEXT_PUBLIC_SLACK_WEBHOOK

#
## Misc
***LEARN MORE - NEXT.JS***

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Free Tutorial Project for Next.js](https://www.youtube.com/watch?v=MFuwkrseXVE) - basic project tutorial to get you familiar with Next.js
- [The Ultimate NEXT.JS 13 Tutorial (Complete Walkthrough w/ Examples)](https://www.youtube.com/watch?v=6aP9nyTcd44&t=292s) - by Sonny Sangha

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

***DEPLOYING ON VERCEL***

Deploying this project will require a web application project on Vercel to be created. In order to do this, you must have access to the GitHub repo and create an account on Vercel. Old deployment iterations from different accounts will
not be affected. A PostgreSQL database is required for full functionality as well. Deploying the DB on Render is recommended. You will deploy the DB, then run the migration.sql file against that DB. Once it has been migrated, you will
set the DB on your Vercel project to your render database via the environment variable below.

- NEXT_PUBLIC_CONNECTION_STRING

NOTE:

- WebSockets are not available in Vercel deployments; this means that you will not be able to share a codespace while in an interview in the deployed website.
- WebSockets and deploying to Render works, but the free plan does not have enough memory or speed to function.
- We challenge you to find and implement a solution.

<!-- ## Features

- Enabled secure authentication/authorization for user account login
- Profile page with info about each user and ability to modify account settings
- Major reorganization of code architecture and implemented industry standard practices for extensible, readible code reducing the overall techincal debt of the project
- Fixed dozens of bugs that caused application to crash, expedited and streamlined data transfer between the database and back-end, cleaned up various CSS styling issues, and updated the ui elements related to statistical tracking to reflect current and any future events
- Implemented Puppeteer test suite to automate testing of the application -->



<!-- #### MailHog 
##### Overview
MailHog is an email testing tool for developers:
* Configure your application to use MailHog for SMTP delivery
* View messages in the web UI, or retrieve them with the JSON API
* Optionally release messages to real SMTP servers for delivery -->

<!-- ##### Installation
MacOS

    $   brew update && brew install mailhog

Then, start MailHog by running 

    $   mailhog 

in the command line. -->

<!-- ##### Nodemailer
- is a module for Node.js applications to allow easy  email sending. -->

<!-- ##### Getting Started
1. Install mailhog
2. Run mailhog by typing $ mailhog in CLI
3. Go to http://0.0.0.0:8025/ , you should see Web UI

![Mailhog](https://github.com/mailhog/MailHog/raw/master/docs/MailHog.png)

4. Run express server by going to express directory and running node Express.mjs  in CLI
5. Go to login page
6. Click on Forgot button
7. Write your email
8. Press submit
9. You should see an email on mailhog UI

![Mailhog](https://media0.giphy.com/media/hOctYIGvFKaKDZxvLA/giphy.gif) -->



***PUPPETEER***

Puppeteer is a Node.js library that provides a high-level API for controlling headless Chrome or Chromium over the DevTools Protocol.

It allows you to automate tasks that would otherwise be time-consuming and repetitive, such as:

- Generating screenshots and PDFs of pages

- Crawlin websites to extract data

- Automating form submissions and UI testing

We have incorporated several tests utilizing Puppeteer see the wiki for more information: https://github.com/gschool-blue-ocean/admissions-hub/wiki

#
## Additional Info

***ARCHIVED VIDEO PRESENTATIONS***:

MCSP-13 Video Link

https://drive.google.com/file/d/19QuyGSSvIyi1YNiG9edoqgczmRQngQzu/view?usp=share_link


MCSP-16 Video Link

[Insert Link Here]

***ARCHIVED WORK BOARDS***

MCSP-17: https://trello.com/b/OrAgjLiH/admission-hub

MCSP-13: https://trello.com/b/xNiAGpH3/blue-ocean

***TO-DO / FUTURE FEATURES***

- Test suite for every feature to make sure the application doesnt't contain any bugs.
- Incorporate Jest with Puppeteer.
- Add the email .csv functionality to the .csv file for exporting student info
- Refactor the code for forgot password on the login page. Note* CURRENTLY IT WORKS BUT ONLY SENDS THE EMAIL TO MAILHOG.
- Link to third-party services under account update (Auth0)
- Implement Auth0 to allow login with Google/GitHub/ whatever you want
- Create a way for the instructor to open up an interview session so that students can go on it only if the instructor has it open.
- Create an admin token and admin dashboard that have administrative privileges. Some admin powers they may can have can be that they can allow instructors to sign up only if they are given a special internal sign up link from the website administrator or delete an instructor.