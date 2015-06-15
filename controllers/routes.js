
module.exports = function(app) {

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/test');

  app.get('/', function(req,res) {
    res.render('home')
  });

  app.get('/about', function(req,res) {
    res.render('about')
  });

  app.get('/create-posting', function(req,res) {
    res.render('create-posting')
  });

  app.get('/categories/all', function(req, res){

    res.end('hello world');

  });

}
