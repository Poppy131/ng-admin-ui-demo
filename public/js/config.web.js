// lazyload config

angular.module('app')
    .constant('WebConst', {
        // API接口的基地址
        WEB_URL: 'http://localhost:8082',
        // 登录/注销，etc
        URI_LOGIN: '/login',
        URI_LOGOUT: '/logout',
        // 登录页面的state
        STATE_LOGIN: 'access.login',
        // 登录/注销，etc
        URI_LOGIN: '/login',
        URI_LOGOUT: '/logout',
        // 登录页面的state
        STATE_LOGIN: 'access.login',
        // 浏览器关闭后是否保持session
        keepSessionIfBrowserClosed: true,
        // 预先配置的图片分类
        ImageCategoryDef: {
            ID_CARD_PIC: {
                id: 2,
                name: '身份证'
            },
            QR_CODE: {
                id: 3,
                name: '二维码'
            },
            AVATAR_IMAGE: {
                id: 4,
                name: '个人头像'
            },
            PAY_VOUCHER: {
                id:9,
                name: '用户凭证'
            }
        },
        'cnzz' : {
            'siteId': '1258464213',
            'password': '4648033887'
        },
        // 默认查询分页记录数量
        defaultQueryPageSize: 20,

        //首页分类专题默认sku数量
        defaultSkuSizeInHomeTopicCategory : 4,

        momentDateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
        momentDateFormat: 'YYYY-MM-DD',
        //配置文件是否已经加载
        CONFIG_LOADED: 'false'
    });

