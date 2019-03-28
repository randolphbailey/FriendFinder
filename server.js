const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

var app = express();

console.log(__dirname);

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => console.log('App listening on port: ' + PORT));