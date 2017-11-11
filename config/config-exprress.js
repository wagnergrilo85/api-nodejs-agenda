//*** import of libraries
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var cors = require('cors');

module.exports = function () {

    var app = express();

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(cors({credentials: true}));

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(expressValidator());

    consign()
        .include('controllers')
        .then('model')
        .into(app);

    return app;
}

