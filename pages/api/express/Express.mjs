import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/send-email", (req, res) => {
  const { to, subject, text } = req.body;

  async function sendEmail() {
    let transporter = nodemailer.createTransport({
      host: "localhost",
      port: 1025,
      secure: false,
    });

    let info = await transporter.sendMail({
      
        from: "mcsp15admissions@gmail.com",
        to: 'danny@TEMP.com',
        subject: "Test Email",
        text: "Hello, this is a test email sent from MailHog.",
        html: "<b>Hello, this is a test email sent from MailHog.</b>",
      
    });

    console.log("Message sent: %s", info.messageId);
  }

  sendEmail().catch(console.error);
  res.status(200).send("Email sent");
});

app.listen(8888, () => {
  console.log("App listening on port 8888!");
});