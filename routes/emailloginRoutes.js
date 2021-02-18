const mongoose = require('mongoose');
const express = require('express');
const EmailLogin = require('../models/EmailLoginSchema');
const route1 = express.Router();
mongoose.set('useFindAndModify', false);

route1.post('/', async (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let newEmailLogin = new EmailLogin({
            email:email,
            password:password

        })
        let result = await newEmailLogin.save();
        if(result) throw result;
        else{
            console.log('No Result');
        }
    } catch (error) {
        console.log(error);
    }
})

route1.post('/find', async (req, res) => {
    try {
        let result = await EmailLogin.find({});
        if(result) throw result;
        else{
            console.log('No Result')
        }
    } catch (error) {
        console.log(error);
    }
});


route1.post('/update/:id', async (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let result = await EmailLogin.findByIdAndUpdate(
            {_id: req.params.id},
            {
                $set: {
                    email:email,
                    password:password
                }
            }
        )
        if(result) throw result;
        else{
            console.log('Not Found');
        }

    } catch (error) {
        console.log(error);
    }
});

route1.post('/delete/:id', async (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.paswword;
        let result = await EmailLogin.findByIdAndDelete(
            {_id: req.params.id}
        )
        if(result) throw result;
        else{
            console.log(result);
        }
    } catch (error) {
        console.log(error);
    }
})


module.exports = route1;



