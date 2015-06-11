var express = require('express'),
    app = express(),
    bodyParser     = require('body-parser'),
    mongoose = require('mongoose'),
    ejs = require('ejs').renderFile;

app.engine('html', ejs)
app.set('view engine', 'html')
app.use(express.static('public'))

app.get('/', function(req,res) {
  res.render('home')
})


var server = app.listen(3000, '127.0.0.1', function(){
  var host = server.address().address;
  var port = server.address().port; // why not use process.env.PORT here?

  console.log('Example app listening at http://%s:%s', host, port);


});


module.exports = server
