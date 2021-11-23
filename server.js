const express = require('express');
const path = require("path");
const nodemailer = require("nodemailer");

if(process.env.NODE_ENV !== "production" ) require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;



if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'indexe.html'));
    })
}


let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.WORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      expires: 1484314697598
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
app.listen(port, error => {
    if(error) throw console.error;
    console.log('Server running on Port ' + port);
})