module.exports = function (app,express) {
  var ejs = require('ejs').renderFile

  app.engine('html', ejs)
  app.set('view engine', 'html')
  app.use(express.static('public'))
}
