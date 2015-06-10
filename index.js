var express = require('express'),
    app = express(),
    bodyParser     = require('body-parser'),
    mongoose = require('mongoose');

app.get('/', function(req,res) {
  res.send('hello world')
})


var server = app.listen(3000, '127.0.0.1', function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);


});


module.exports = server
