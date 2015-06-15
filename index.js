var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    views = require('./views/views'),
    routes = require("./controllers/routes");

var server = app.listen(port, function() {
  views(app,express)
  routes(app)
  console.log('Your app has started at port ' + port)
})

module.exports = server
