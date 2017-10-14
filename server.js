const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 
const http = require('http').Server(app);
app.use(bodyParser.urlencoded({extended: true}));


var mongoUri = 'mongodb://localhost/foodalert';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;

var db = MongoClient.connect(mongoUri, function(err, databaseConnection) {
    if (err) {
        console.log(err);
    }
    db = databaseConnection;
});

app.use(express.static('public'));


app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname});
});


app.get('/menu', function(req, res) {
    res.sendFile('menu.json', {root: __dirname});
});

http.listen(3000, function() {
    console.log('Node app is running on port 3000');
});

/*
app.get('/menu', function(req, res) {
    db.collection("names", function(err, coll) {
        if (err) {
            res.send(500);
        } else {
            coll.find().toArray(
*/

