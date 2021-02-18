const mongoose = require('mongoose');
const LoginSchema = mongoose.Schema;

const EmailLoginSchema = new LoginSchema({
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
})

module.exports = EmailLogin = mongoose.model('EmailLogin', EmailLoginSchema);