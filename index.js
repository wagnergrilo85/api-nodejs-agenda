var express = require('./config/config-exprress');
var app = express();

var portServer = 3003;

app.listen(portServer, function () {
    console.log("Server is running at port " + portServer);
})