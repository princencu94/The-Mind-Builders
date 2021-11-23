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
      clientId: process.