var express = require('express'),
    url = require("url");

var router = express.Router();
router.post('/config/freight/template/filter', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({
        success: true,
        data: {
            "pageData": [
                {
                    'id': '1',
                    'name': 'avdsddas',
                    'initialWeight': 'a啊啊大随碟附送',
                    'initialPrice': '大富大贵恢复好方法和法国方法'
                }
            ],
            "pageNumber": 1,
            "pageSize": 20,
            "totalCount": 1,
            "totalPages": 1
        }
    });
});

module.exports = router;