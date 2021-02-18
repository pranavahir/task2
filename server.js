const express = require('express');
const port = 111;
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) throw err;
    console.log('MongoDB Connected');
})
const login = require('./routes/emailloginRoutes');
const signup = require('./routes/emailsignupRoutes');
const compose = require('./routes/emailcomposeRoutes');
app.use('/', login, signup, compose);

app.listen(port, (req, res) => console.log(`Server is running on http://localhost:${port}`) );

