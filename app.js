const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const routes = require('./routes');
const PORT = process.env.PORT ?? 3000;

app.use('/', routes);

server.listen(PORT, function() {
  console.log('Server listening on port '+  server.address().port);
});

module.exports = app;
