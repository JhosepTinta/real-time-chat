
var express = 
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(cors());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','DELETE,PUT');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static())

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/app/folder'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/app/folder/app.component.html'));
});

app.listen(process.env.PORT || 8080);