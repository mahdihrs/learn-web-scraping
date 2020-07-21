const express = require('express');
const router = express.Router();
const Xray = require('x-ray');
const x = Xray();

router.get('/corps', (req, res) => {
  x('https://www.dci.org/corps?sort=name&type=Corps,%20World%20Class', 'div .item', [{
    corps_name: '.item h4',
    corps_url: '.item a@href',
    logo: '.item .corps-logo img@src',
    city: '.item .city',
    website: '.item .info a@href'
  }])((err, data) => {
    res.json(data);
  })
})

router.get('*', (req, res) => {
  res.status(404).send('Oh dear, you lost ☹️');
})

module.exports = router;