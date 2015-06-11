var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    ejs = require('ejs').renderFile,
    routes = require("./controllers/routes");

app.engine('html', ejs)
app.set('view engine', 'html')
app.use(express.static('public'))


routes(app);

var server = app.listen(port, function() {
  console.log('Your app has started at port ' + port)
})


module.exports = server
