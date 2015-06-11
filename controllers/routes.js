
module.exports = function(app) {

  app.get('/', function(req,res) {
    res.render('home')
  })

  app.get('/about', function(req,res) {
    res.render('about')
  })

  app.get('/create-posting', function(req,res) {
    res.render('create-posting')
  })

  app.get('/payment', function(req,res) {
    res.render('payment')
  })



  app.get('*', function(req,res) {
    res.render('404')
  });  //this route should ALWAYS be last

}
