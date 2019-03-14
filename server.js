const express = require('express');
const path = require('path');
const port = 3000;

var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

var app = express();

console.log(__dirname);

app.use('/api/friends', apiRoutes);
app.use('/', htmlRoutes);

app.listen(port, () => console.log('App listening on port: ' + port));