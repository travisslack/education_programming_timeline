var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// two different servers so you need this
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./controllers'));
app.use(express.static('.'))


app.listen(3000, function(){
    console.log("listening on port "+ this.address().port + '...........')
});
