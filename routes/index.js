var express = require('express'),
    request = require('request');

var router = express.Router();

/**
 * 配合ng ui.router
 */
router.get(/^(?!.*?api).*$/,
    function (req, res) {
        req.pipe(request('http://' + req.headers.host + '/index.html')).pipe(res);
    }
);

module.exports = router;