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
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname});
});


app.get('/menu', function(req, res) {
    res.sendFile('menu.json', {root: __dirname});
});

app.post('/submit', function(req, res) {
    // where the data is actually stored
    req.body
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

