var express = require('express');
var router = express.Router();
var connection = require('../mysqlConnection');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'SoundToy',
        defaultTitle: 'notitle'
    });
});

router.post('/getScoreList', function(req, res, next) {

    const query = 'select * from score where isdelete < 1';

    connection.query(query, function(err, rows) {
        res.render('index', {
            scoreList: rows
        });
        // res.append('Access-Control-Allow-Origin', '*');
    });
});

module.exports = router;
