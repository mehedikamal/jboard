
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

}
