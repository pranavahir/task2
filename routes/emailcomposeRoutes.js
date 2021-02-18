const express = require('express');
const mongoose = require('mongoose');
const EmailCompose = require('../models/EmailComposeSchema');
const route3 = express.Router();

route3.post('/compose', (req, res) => {
    res.send('Compose Email');
    let to = req.body.to;
    let subject = req.body.subject;
    let entermail = req.body.entermail;
    const newEmailCompose = new EmailCompose({
        to:to,
        subject:subject,
        entermail:entermail
    });
    newEmailCompose.save()
    .then((response3) => console.log(response3))
    .catch((err3) => console.log(err3))
})
module.exports = route3;