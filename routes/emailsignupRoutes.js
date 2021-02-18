const mongoose = require('mongoose');
const express = require('express');
const EmailSignup = require('../models/EmailSignupSchema');
const route2 = express.Router();

route2.post('/signup', (req, res) => {
    res.send('Signup to Email');
    let fullname = req.body.fullname;
    let newemail = req.body.newemail;
    let newpassword = req.body.newpassword;
    let dob = req.body.dob;
    const newEmailSignup = new EmailSignup({
        fullname:fullname,
        newemail:newemail,
        newpassword:newpassword,
        dob:dob
    });
    newEmailSignup.save()
    .then((response2) => console.log(response2))
    .catch((err2) => console.log(err2));
})

module.exports = route2;