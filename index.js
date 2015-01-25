var express = require('express');
var compression = require('compression');
var serveStatic = require('serve-static');
var app = express();
app.use(compression());
app.use(serveStatic(__dirname + '/app', {'index': ['index.html']}));
app.listen(process.env.PORT || 3000);
