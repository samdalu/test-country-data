var express = require('express');
var app = express();

app.use(express.static(__dirname + "/index"));

app.listen(process.env.PORT || 5000);
console.log("Server running wooooo");
