//Modulo per gestire le varie chiamate
var express = require('express');
var app = express();

//Importo il mio modulo dove effettuo le azioni sui team e sui match 
var mondiali = require("./team.js");

//handle get req on /
app.get('/team/:id', function (req, res) {
    res.send(mondiali.teams[id]);
});


app.listen(process.env.port || 3000);
console.log("Server running at http://127.0.0.1:3000");
