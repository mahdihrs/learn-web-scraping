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
  }])
  .then((corps) => {
    res.json(corps);
  })
  .catch((err) => {
    console.log(err);
    res.send('Something wrong');
  })
})

router.get('/top-stories', (req, res) => {
  x('https://www.dci.org/news', 'div .news-list', [{
    title: '.item .news-title',
    author: '.item p',
    news_link: '.item .link@href'
  }])
  .then((scores) => {
    console.log(scores)
    res.json(scores);
  })
  .catch((err) => {
    console.log(err);
    res.send('Something wrong');
  })
})

router.get('*', (req, res) => {
  res.status(404).send('Oh dear, you lost ☹️');
})

module.exports = router;