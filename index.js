const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
// const config = require('./config/database');
const path = require('path');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
/*
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could not connect to database: ', err);
    } else {
        // console.log('Secret: ' + config.secret);
        console.log('Connected to database: ' + config.db);
    }
});
*/

app.use(express.static(__dirname + '/angular-client/dist/angular-client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/authentication', authentication);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/angular-client/dist/angular-client/index.html'));
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
