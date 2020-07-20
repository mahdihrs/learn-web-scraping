const express = require('express');
const Xray = require('x-ray');
const x = Xray();
const app = express();
const http = require('http');
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.get('/dci-corps-list', (req, res) => {
  x('https://www.dci.org/corps?sort=name&type=Corps,%20World%20Class', 'div .item', [{
    corps_name: '.item h4',
    corps_url: '.item a@href',
    logo: '.item .corps-logo img@src',
    city: '.item .city',
    website: '.item .info a@href'
  }])((err, data) => {
    res.json(data);
  })
});

server.listen(PORT, function() {
  console.log('Server listening on port '+  server.address().port);
});

module.exports = app;