var express = require('express');
var router = express.Router();
var connection = require('../mysqlConnection');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  const query = 'select * from score';
  connection.query(query, function(err, rows) {
    res.render('index', {
      title: 'SoundToy',
      defaultTitle: 'notitle',
      scoreList: rows
    });
  });

});

router.post('/', function(req, res, next) {

  const title = req.body.title;
  const score = req.body.score;
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const query = 'INSERT INTO score ( title, score) VALUES ("'+ title +'", '+ '"'+ score +'")';
  console.log(query)
  connection.query(query, function(err, rows) {
    res.redirect('/');
  });
});

module.exports = router;
