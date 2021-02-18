const mongoose = require('mongoose');
const SignupSchema = mongoose.Schema;

const EmailSignupSchema = new SignupSchema({
    fullname: {
        type:String,
        required:true
    },
    newemail: {
        type:String,
        required:true
    },
    newpassword: {
        type:String,
        required:true
    },
    dob: {
        type:String,
        required:true
    }

})
module.exports = EmailSignup = mongoose.model('EmailSignup', EmailSignupSchema);