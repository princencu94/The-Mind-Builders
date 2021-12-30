const express = require('express'),
    path = require("path"),
    nodemailer = require("nodemailer"),
    cors = require("cors"),
    formidable = require('formidable');




if(process.env.NODE_ENV !== "production" ) require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

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
          from: `"${req.body.assignJobDetails.fullname}" '<${req.body.assignJobDetails.email}>'`,
          to: "princencu94@gmail.com",
          subject: "Intercom Contact Form",
          text: `${req.body.assignJobDetails.message}`,
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

    app.post("/sendresume", function (req, res) {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            // `file` is the name of the <input> field of type `file`
            var old_path = files.file.path,
                file_size = files.file.size,
                file_ext = files.file.name.split('.').pop(),
                index = old_path.lastIndexOf('/') + 1,
                file_name = old_path.substr(index),
                new_path = path.join(process.env.PWD, '/uploads/', file_name + '.' + file_ext);
        

        var mailOptions = {
          from: `"${req.body.data.firstname}" '<${req.body.data.email}>'`,
          to: "princencu94@gmail.com",
          subject: "Intercom Contact Form With Resume",
          text: `${req.body.data.firstname}`,
          attachments:[
              {
                  filename:file_name,
                  content:new_path
              }
          ]
        }


       
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            res.json({
            status: "fail",
            });
        } else {
            console.log("== Message With Resume Sent ==");
            res.json({
            status: "success",
            });
        }
            });
    })

});

app.listen(port, error => {
    if(error) throw console.error;
    console.log('Server running on Port ' + port);
})