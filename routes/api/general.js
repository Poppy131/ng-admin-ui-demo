var express = require('express'),
    url = require("url"),
    request = require('request'),
    redis = require("redis"),
    client = redis.createClient(6379, '120.27.92.9');

var router = express.Router();

router.post('/topic/read/:id', function (req, res) {
    var path = url.parse(req.url).path;
    req.pipe(request(topicUrl + path)).pipe(res);
});


module.exports = router;