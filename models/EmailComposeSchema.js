const mongoose = require('mongoose');
const ComposeSchema = mongoose.Schema;

const EmailComposeSchema = new ComposeSchema({
    to: {
        type:String,
        required:true
    },
    subject: {
        type:String,
        required:true
    },
    entermail: {
        type:String,
        required:true
    }
})
module.exports = EmailCompose = mongoose.model('EmailCompose', EmailComposeSchema);