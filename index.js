var express = require('express'),
    app = express();

app.get('/', function(req,res) {
  res.send('hello world')
})


var server = app.listen(3000, '127.0.0.1')


module.exports = server
