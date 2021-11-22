const express = require('express')
const app = express();


const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.WORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
    tls: {
        rejectUnauthorized: false
    }
   });

   transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
    });

    app.post("/send", function (req, res) {
        let mailOptions = {
          from: "princencu@yahoo.com",
          to: `${req.body.assignJobDetails.email}`,
          subject: "Job Assignment",
          text: "Hi You are getting this email as you have been assigned for this job please follow this link http://localhost:3000/sign-up",
        };
       
        transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
              res.json({
                status: "fail",
              });
            } else {
              console.log("== Message Sent ==");
              res.json({
                status: "success",
              });
            }
            });
        });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});