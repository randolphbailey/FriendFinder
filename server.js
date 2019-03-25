const express = require('express');
<<<<<<< HEAD
const path = require('path');
const port = process.env.PORT || 3000;
=======
const PORT = process.env.PORT || 3000;
>>>>>>> 2c9c9caf8fd5d9f354daf0332ab20478542a365b

var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

var app = express();

<<<<<<< HEAD
console.log(__dirname);

app.use(apiRoutes);
app.use(htmlRoutes);
=======
app.use('/api/friends', apiRoutes);
app.use('*', htmlRoutes);
>>>>>>> 2c9c9caf8fd5d9f354daf0332ab20478542a365b

app.listen(PORT, () => console.log('App listening on port: ' + PORT));