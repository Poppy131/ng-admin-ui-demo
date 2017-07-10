var express = require('express'),
    url = require("url");

var router = express.Router();

router.post('/admin/user/view', function (req, res) {
    res.json({
        success: true,
        data: {
            name: 'zcjcsl',
            realName: "aaaa"
        }
    });
});

router.post('/city/tree', function (req, res) {
    res.json({
        success: true,
        data: [
            {
                "cities": [
                    {
                        "code": "anhui_suzhou",
                        "isActive": 0,
                        "name": "宿州",
                        "pName": "安徽"
                    },
                    {
                        "code": "anqing",
                        "isActive": 0,
                        "name": "安庆",
                        "pName": "安徽"
                    },
                    {
                        "code": "bengbu",
                        "isActive": 0,
                        "name": "蚌埠",
                        "pName": "安徽"
                    },
                    {
                        "code": "chizhou",
                        "isActive": 0,
                        "name": "池州",
                        "pName": "安徽"
                    },
                    {
                        "code": "chuzhou",
                        "isActive": 0,
                        "name": "滁州",
                        "pName": "安徽"
                    },
                    {
                        "code": "fuyang",
                        "isActive": 0,
                        "name": "阜阳",
                        "pName": "安徽"
                    },
                    {
                        "code": "hefei",
                        "isActive": 0,
                        "name": "合肥",
                        "pName": "安徽"
                    },
                    {
                        "code": "huaibei",
                        "isActive": 0,
                        "name": "淮北",
                        "pName": "安徽"
                    },
                    {
                        "code": "huainan",
                        "isActive": 0,
                        "name": "淮南",
                        "pName": "安徽"
                    },
                    {
                        "code": "huangshan",
                        "isActive": 0,
                        "name": "黄山",
                        "pName": "安徽"
                    },
                    {
                        "code": "luan",
                        "isActive": 0,
                        "name": "六安",
                        "pName": "安徽"
                    },
                    {
                        "code": "maanshan",
                        "isActive": 0,
                        "name": "马鞍山",
                        "pName": "安徽"
                    },
                    {
                        "code": "wuhu",
                        "isActive": 0,
                        "name": "芜湖",
                        "pName": "安徽"
                    },
                    {
                        "code": "xuancheng",
                        "isActive": 0,
                        "name": "宣城",
                        "pName": "安徽"
                    }
                ],
                "name": "安徽"
            },
            {
                "cities": [
                    {
                        "code": "beijingjumin",
                        "isActive": 0,
                        "name": "北京城镇居民",
                        "pName": "北京"
                    },
                    {
                        "code": "beijingzhigong",
                        "isActive": 0,
                        "name": "北京城镇职工",
                        "pName": "北京"
                    }
                ],
                "name": "北京"
            },
            {
                "cities": [
                    {
                        "code": "fujian_shengzhi",
                        "isActive": 0,
                        "name": "福建省直",
                        "pName": "福建"
                    },
                    {
                        "code": "fuzhou",
                        "isActive": 0,
                        "name": "福州",
                        "pName": "福建"
                    },
                    {
                        "code": "longyan",
                        "isActive": 0,
                        "name": "龙岩",
                        "pName": "福建"
                    },
                    {
                        "code": "nanping",
                        "isActive": 0,
                        "name": "南平",
                        "pName": "福建"
                    },
                    {
                        "code": "ningde",
                        "isActive": 0,
                        "name": "宁德",
                        "pName": "福建"
                    },
                    {
                        "code": "putian",
                        "isActive": 0,
                        "name": "莆田",
                        "pName": "福建"
                    },
                    {
                        "code": "quanzhou",
                        "isActive": 0,
                        "name": "泉州",
                        "pName": "福建"
                    },
                    {
                        "code": "sanming",
                        "isActive": 0,
                        "name": "三明",
                        "pName": "福建"
                    },
                    {
                        "code": "xiamen",
                        "isActive": 0,
                        "name": "厦门",
                        "pName": "福建"
                    },
                    {
                        "code": "zhangzhou",
                        "isActive": 0,
                        "name": "漳州",
                        "pName": "福建"
                    }
                ],
                "name": "福建"
            },
            {
                "cities": [
                    {
                        "code": "jiayuguan",
                        "isActive": 0,
                        "name": "嘉峪关",
                        "pName": "甘肃"
                    },
                    {
                        "code": "lanzhou",
                        "isActive": 0,
                        "name": "兰州",
                        "pName": "甘肃"
                    },
                    {
                        "code": "linxia",
                        "isActive": 0,
                        "name": "临夏",
                        "pName": "甘肃"
                    },
                    {
                        "code": "qingyang",
                        "isActive": 0,
                        "name": "庆阳",
                        "pName": "甘肃"
                    }
                ],
                "name": "甘肃"
            },
            {
                "cities": [
                    {
                        "code": "chaozhou",
                        "isActive": 0,
                        "name": "潮州",
                        "pName": "广东"
                    },
                    {
                        "code": "dongguan",
                        "isActive": 0,
                        "name": "东莞",
                        "pName": "广东"
                    },
                    {
                        "code": "foshan",
                        "isActive": 0,
                        "name": "佛山",
                        "pName": "广东"
                    },
                    {
                        "code": "guangzhou",
                        "isActive": 0,
                        "name": "广州",
                        "pName": "广东"
                    },
                    {
                        "code": "heyuan",
                        "isActive": 0,
                        "name": "河源",
                        "pName": "广东"
                    },
                    {
                        "code": "huizhou",
                        "isActive": 0,
                        "name": "惠州",
                        "pName": "广东"
                    },
                    {
                        "code": "jiangmen",
                        "isActive": 0,
                        "name": "江门",
                        "pName": "广东"
                    },
                    {
                        "code": "jiangyang",
                        "isActive": 0,
                        "name": "阳江",
                        "pName": "广东"
                    },
                    {
                        "code": "jieyang",
                        "isActive": 0,
                        "name": "揭阳",
                        "pName": "广东"
                    },
                    {
                        "code": "maoming",
                        "isActive": 0,
                        "name": "茂名",
                        "pName": "广东"
                    },
                    {
                        "code": "meizhou",
                        "isActive": 0,
                        "name": "梅州",
                        "pName": "广东"
                    },
                    {
                        "code": "shantou",
                        "isActive": 0,
                        "name": "汕头",
                        "pName": "广东"
                    },
                    {
                        "code": "shanwei",
                        "isActive": 0,
                        "name": "汕尾",
                        "pName": "广东"
                    },
                    {
                        "code": "shaoguan",
                        "isActive": 0,
                        "name": "韶关",
                        "pName": "广东"
                    },
                    {
                        "code": "shenzhen",
                        "isActive": 0,
                        "name": "深圳",
                        "pName": "广东"
                    },
                    {
                        "code": "yunfu",
                        "isActive": 0,
                        "name": "云浮",
                        "pName": "广东"
                    },
                    {
                        "code": "zhanjiang",
                        "isActive": 0,
                        "name": "湛江",
                        "pName": "广东"
                    },
                    {
                        "code": "zhaoqing",
                        "isActive": 0,
                        "name": "肇庆",
                        "pName": "广东"
                    },
                    {
                        "code": "zhongshan",
                        "isActive": 0,
                        "name": "中山",
                        "pName": "广东"
                    },
                    {
                        "code": "zhuhai",
                        "isActive": 0,
                        "name": "珠海",
                        "pName": "广东"
                    }
                ],
                "name": "广东"
            },
            {
                "cities": [
                    {
                        "code": "baise",
                        "isActive": 0,
                        "name": "百色",
                        "pName": "广西"
                    },
                    {
                        "code": "beihai",
                        "isActive": 0,
                        "name": "北海",
                        "pName": "广西"
                    },
                    {
                        "code": "chongzuo",
                        "isActive": 0,
                        "name": "崇左",
                        "pName": "广西"
                    },
                    {
                        "code": "fangchenggang",
                        "isActive": 0,
                        "name": "防城港",
                        "pName": "广西"
                    },
                    {
                        "code": "guangxishengzhi",
                        "isActive": 0,
                        "name": "广西省直",
                        "pName": "广西"
                    },
                    {
                        "code": "guigang",
                        "isActive": 0,
                        "name": "贵港",
                        "pName": "广西"
                    },
                    {
                        "code": "guilin",
                        "isActive": 0,
                        "name": "桂林",
                        "pName": "广西"
                    },
                    {
                        "code": "hechi",
                        "isActive": 0,
                        "name": "河池",
                        "pName": "广西"
                    },
                    {
                        "code": "hezhou",
                        "isActive": 0,
                        "name": "贺州",
                        "pName": "广西"
                    },
                    {
                        "code": "laibin",
                        "isActive": 0,
                        "name": "来宾",
                        "pName": "广西"
                    },
                    {
                        "code": "liuzhou",
                        "isActive": 0,
                        "name": "柳州",
                        "pName": "广西"
                    },
                    {
                        "code": "nanning",
                        "isActive": 0,
                        "name": "南宁",
                        "pName": "广西"
                    },
                    {
                        "code": "qinzhou",
                        "isActive": 0,
                        "name": "钦州",
                        "pName": "广西"
                    },
                    {
                        "code": "wuzhou",
                        "isActive": 0,
                        "name": "梧州",
                        "pName": "广西"
                    },
                    {
                        "code": "yulin",
                        "isActive": 0,
                        "name": "玉林",
                        "pName": "广西"
                    }
                ],
                "name": "广西"
            },
            {
                "cities": [
                    {
                        "code": "anshun",
                        "isActive": 0,
                        "name": "安顺",
                        "pName": "贵州"
                    },
                    {
                        "code": "bijie",
                        "isActive": 0,
                        "name": "毕节",
                        "pName": "贵州"
                    },
                    {
                        "code": "liupanshui",
                        "isActive": 0,
                        "name": "六盘水",
                        "pName": "贵州"
                    },
                    {
                        "code": "qiandongnan",
                        "isActive": 0,
                        "name": "黔东南",
                        "pName": "贵州"
                    },
                    {
                        "code": "qinnan",
                        "isActive": 0,
                        "name": "黔南",
                        "pName": "贵州"
                    },
                    {
                        "code": "qinxinan",
                        "isActive": 0,
                        "name": "黔西南",
                        "pName": "贵州"
                    },
                    {
                        "code": "tongrendi",
                        "isActive": 0,
                        "name": "铜仁地",
                        "pName": "贵州"
                    },
                    {
                        "code": "zunyi",
                        "isActive": 0,
                        "name": "遵义",
                        "pName": "贵州"
                    }
                ],
                "name": "贵州"
            },
            {
                "cities": [
                    {
                        "code": "anding",
                        "isActive": 0,
                        "name": "定安",
                        "pName": "海南"
                    },
                    {
                        "code": "baisha",
                        "isActive": 0,
                        "name": "白沙",
                        "pName": "海南"
                    },
                    {
                        "code": "baoting",
                        "isActive": 0,
                        "name": "保亭",
                        "pName": "海南"
                    },
                    {
                        "code": "changjiang",
                        "isActive": 0,
                        "name": "昌江",
                        "pName": "海南"
                    },
                    {
                        "code": "chengmai",
                        "isActive": 0,
                        "name": "澄迈",
                        "pName": "海南"
                    },
                    {
                        "code": "danzhou",
                        "isActive": 0,
                        "name": "儋州",
                        "pName": "海南"
                    },
                    {
                        "code": "dongfang",
                        "isActive": 0,
                        "name": "东方",
                        "pName": "海南"
                    },
                    {
                        "code": "haikou",
                        "isActive": 0,
                        "name": "海口",
                        "pName": "海南"
                    },
                    {
                        "code": "ledong",
                        "isActive": 0,
                        "name": "乐东",
                        "pName": "海南"
                    },
                    {
                        "code": "lingao",
                        "isActive": 0,
                        "name": "临高",
                        "pName": "海南"
                    },
                    {
                        "code": "lingshui",
                        "isActive": 0,
                        "name": "陵水",
                        "pName": "海南"
                    },
                    {
                        "code": "nanshaqundao",
                        "isActive": 0,
                        "name": "南沙群岛",
                        "pName": "海南"
                    },
                    {
                        "code": "qionghai",
                        "isActive": 0,
                        "name": "琼海",
                        "pName": "海南"
                    },
                    {
                        "code": "qiongzhong",
                        "isActive": 0,
                        "name": "琼中",
                        "pName": "海南"
                    },
                    {
                        "code": "sanya",
                        "isActive": 0,
                        "name": "三亚",
                        "pName": "海南"
                    },
                    {
                        "code": "tunchang",
                        "isActive": 0,
                        "name": "屯昌",
                        "pName": "海南"
                    },
                    {
                        "code": "wenchang",
                        "isActive": 0,
                        "name": "文昌",
                        "pName": "海南"
                    },
                    {
                        "code": "wuzhishan",
                        "isActive": 0,
                        "name": "五指山",
                        "pName": "海南"
                    },
                    {
                        "code": "xishaqundao",
                        "isActive": 0,
                        "name": "西沙群岛",
                        "pName": "海南"
                    },
                    {
                        "code": "zhongshaqundao",
                        "isActive": 0,
                        "name": "中沙群岛",
                        "pName": "海南"
                    }
                ],
                "name": "海南"
            },
            {
                "cities": [
                    {
                        "code": "cangzhou",
                        "isActive": 0,
                        "name": "沧州",
                        "pName": "河北"
                    },
                    {
                        "code": "chengde",
                        "isActive": 0,
                        "name": "承德",
                        "pName": "河北"
                    },
                    {
                        "code": "handan",
                        "isActive": 0,
                        "name": "邯郸",
                        "pName": "河北"
                    },
                    {
                        "code": "hengshui",
                        "isActive": 0,
                        "name": "衡水",
                        "pName": "河北"
                    },
                    {
                        "code": "langfang",
                        "isActive": 0,
                        "name": "廊坊",
                        "pName": "河北"
                    },
                    {
                        "code": "qinhuangdao",
                        "isActive": 0,
                        "name": "秦皇岛",
                        "pName": "河北"
                    },
                    {
                        "code": "shijiazhuang",
                        "isActive": 0,
                        "name": "石家庄",
                        "pName": "河北"
                    },
                    {
                        "code": "tangshan",
                        "isActive": 0,
                        "name": "唐山",
                        "pName": "河北"
                    },
                    {
                        "code": "xingtai",
                        "isActive": 0,
                        "name": "邢台",
                        "pName": "河北"
                    }
                ],
                "name": "河北"
            },
            {
                "cities": [
                    {
                        "code": "anyang",
                        "isActive": 0,
                        "name": "安阳",
                        "pName": "河南"
                    },
                    {
                        "code": "hebi",
                        "isActive": 0,
                        "name": "鹤壁",
                        "pName": "河南"
                    },
                    {
                        "code": "jiaozuo",
                        "isActive": 0,
                        "name": "焦作",
                        "pName": "河南"
                    },
                    {
                        "code": "kaifeng",
                        "isActive": 0,
                        "name": "开封",
                        "pName": "河南"
                    },
                    {
                        "code": "luohe",
                        "isActive": 0,
                        "name": "漯河",
                        "pName": "河南"
                    },
                    {
                        "code": "luoyang",
                        "isActive": 0,
                        "name": "洛阳",
                        "pName": "河南"
                    },
                    {
                        "code": "nanyang",
                        "isActive": 0,
                        "name": "南阳",
                        "pName": "河南"
                    },
                    {
                        "code": "pingdingshan",
                        "isActive": 0,
                        "name": "平顶山",
                        "pName": "河南"
                    },
                    {
                        "code": "puyang",
                        "isActive": 0,
                        "name": "濮阳",
                        "pName": "河南"
                    },
                    {
                        "code": "sanmenxia",
                        "isActive": 0,
                        "name": "三门峡",
                        "pName": "河南"
                    },
                    {
                        "code": "shangqiu",
                        "isActive": 0,
                        "name": "商丘",
                        "pName": "河南"
                    },
                    {
                        "code": "xinxiang",
                        "isActive": 0,
                        "name": "新乡",
                        "pName": "河南"
                    },
                    {
                        "code": "xinyang",
                        "isActive": 0,
                        "name": "信阳",
                        "pName": "河南"
                    },
                    {
                        "code": "xuchang",
                        "isActive": 0,
                        "name": "许昌",
                        "pName": "河南"
                    },
                    {
                        "code": "zhengzhou",
                        "isActive": 0,
                        "name": "郑州",
                        "pName": "河南"
                    },
                    {
                        "code": "zhoukou",
                        "isActive": 0,
                        "name": "周口",
                        "pName": "河南"
                    },
                    {
                        "code": "zhumadian",
                        "isActive": 0,
                        "name": "驻马店",
                        "pName": "河南"
                    }
                ],
                "name": "河南"
            },
            {
                "cities": [
                    {
                        "code": "daqing",
                        "isActive": 0,
                        "name": "大庆",
                        "pName": "黑龙江"
                    },
                    {
                        "code": "daxinganlingdiqu",
                        "isActive": 0,
                        "name": "大兴安岭地区",
                        "pName": "黑龙江"
                    },
                    {
                        "code": "haerbin",
                        "isActive": 0,
                        "name": "哈尔滨",
                        "pName": "黑龙江"
                    },
                    {
                        "code": "hegang",
                        "isActive": 0,
                        "name": "鹤岗",
                        "pName": "黑龙江"
                    },
                    {
                        "code": "heihe",
                        "isActive": 0,
                        "name": "黑河",
                        "pName": "黑龙江"
                    },
                    {
                        "code": "heilongjiang_yichun",
                        "isActive": 0,
                        "name": "伊春",
                        "pName": "黑龙江"
                    },
                    {
                        "code": "jiamusi",
                        "isActive": 0,
                        "name": "佳木斯",
                        "pName": "黑龙江"
                    },
                    {
                        "code": "jixi",
                        "isActive": 0,
                        "name": "鸡西",
                        "pName": "黑龙江"
                    },
                    {
                        "code": "mudanjiang",
                        "isActive": 0,
                        "name": "牡丹江",
                        "pName": "黑龙江"
                    },
                    {
                        "code": "qiqihaer",
                        "isActive": 0,
                        "name": "齐齐哈尔",
                        "pName": "黑龙江"
                    },
                    {
                        "code": "qitaihe",
                        "isActive": 0,
                        "name": "七台河",
                        "pName": "黑龙江"
                    },
                    {
                        "code": "shuangyashan",
                        "isActive": 0,
                        "name": "双鸭山",
                        "pName": "黑龙江"
                    },
                    {
                        "code": "suihua",
                        "isActive": 0,
                        "name": "绥化",
                        "pName": "黑龙江"
                    }
                ],
                "name": "黑龙江"
            },
            {
                "cities": [
                    {
                        "code": "enshi",
                        "isActive": 0,
                        "name": "恩施",
                        "pName": "湖北"
                    },
                    {
                        "code": "ezhou",
                        "isActive": 0,
                        "name": "鄂州",
                        "pName": "湖北"
                    },
                    {
                        "code": "huanggang",
                        "isActive": 0,
                        "name": "黄冈",
                        "pName": "湖北"
                    },
                    {
                        "code": "huangshi",
                        "isActive": 0,
                        "name": "黄石",
                        "pName": "湖北"
                    },
                    {
                        "code": "hubeishengzhi",
                        "isActive": 0,
                        "name": "湖北省直",
                        "pName": "湖北"
                    },
                    {
                        "code": "jingmen",
                        "isActive": 0,
                        "name": "荆门",
                        "pName": "湖北"
                    },
                    {
                        "code": "jingzhou",
                        "isActive": 0,
                        "name": "荆州",
                        "pName": "湖北"
                    },
                    {
                        "code": "qianjiang",
                        "isActive": 0,
                        "name": "潜江",
                        "pName": "湖北"
                    },
                    {
                        "code": "shennongjialin",
                        "isActive": 0,
                        "name": "神农架林",
                        "pName": "湖北"
                    },
                    {
                        "code": "shiyan",
                        "isActive": 0,
                        "name": "十堰",
                        "pName": "湖北"
                    },
                    {
                        "code": "wuhan",
                        "isActive": 0,
                        "name": "武汉",
                        "pName": "湖北"
                    },
                    {
                        "code": "xiangfan",
                        "isActive": 0,
                        "name": "襄樊（襄阳）",
                        "pName": "湖北"
                    },
                    {
                        "code": "xianning",
                        "isActive": 0,
                        "name": "咸宁",
                        "pName": "湖北"
                    },
                    {
                        "code": "xiantao",
                        "isActive": 0,
                        "name": "仙桃",
                        "pName": "湖北"
                    },
                    {
                        "code": "xiaogan",
                        "isActive": 0,
                        "name": "孝感",
                        "pName": "湖北"
                    },
                    {
                        "code": "yichang",
                        "isActive": 0,
                        "name": "宜昌",
                        "pName": "湖北"
                    },
                    {
                        "code": "yichang_xin",
                        "isActive": 0,
                        "name": "宜昌（新）",
                        "pName": "湖北"
                    }
                ],
                "name": "湖北"
            },
            {
                "cities": [
                    {
                        "code": "changde",
                        "isActive": 0,
                        "name": "常德",
                        "pName": "湖南"
                    },
                    {
                        "code": "changsha",
                        "isActive": 0,
                        "name": "长沙",
                        "pName": "湖南"
                    },
                    {
                        "code": "chenzhou",
                        "isActive": 0,
                        "name": "郴州",
                        "pName": "湖南"
                    },
                    {
                        "code": "hengyang",
                        "isActive": 0,
                        "name": "衡阳",
                        "pName": "湖南"
                    },
                    {
                        "code": "huaihua",
                        "isActive": 0,
                        "name": "怀化",
                        "pName": "湖南"
                    },
                    {
                        "code": "loudi",
                        "isActive": 0,
                        "name": "娄底",
                        "pName": "湖南"
                    },
                    {
                        "code": "shaoyang",
                        "isActive": 0,
                        "name": "邵阳",
                        "pName": "湖南"
                    },
                    {
                        "code": "xiangtan",
                        "isActive": 0,
                        "name": "湘潭",
                        "pName": "湖南"
                    },
                    {
                        "code": "xiangxi",
                        "isActive": 0,
                        "name": "湘西",
                        "pName": "湖南"
                    },
                    {
                        "code": "yiyang",
                        "isActive": 0,
                        "name": "益阳",
                        "pName": "湖南"
                    },
                    {
                        "code": "yongzhou",
                        "isActive": 0,
                        "name": "永州",
                        "pName": "湖南"
                    },
                    {
                        "code": "yueyang",
                        "isActive": 0,
                        "name": "岳阳",
                        "pName": "湖南"
                    },
                    {
                        "code": "zhangjiajie",
                        "isActive": 0,
                        "name": "张家界",
                        "pName": "湖南"
                    },
                    {
                        "code": "zhuzhou",
                        "isActive": 0,
                        "name": "株洲",
                        "pName": "湖南"
                    }
                ],
                "name": "湖南"
            },
            {
                "cities": [
                    {
                        "code": "baicheng",
                        "isActive": 0,
                        "name": "白城",
                        "pName": "吉林"
                    },
                    {
                        "code": "baishan",
                        "isActive": 0,
                        "name": "白山",
                        "pName": "吉林"
                    },
                    {
                        "code": "changchun",
                        "isActive": 0,
                        "name": "长春",
                        "pName": "吉林"
                    },
                    {
                        "code": "jilin",
                        "isActive": 0,
                        "name": "吉林",
                        "pName": "吉林"
                    },
                    {
                        "code": "liaoyuan",
                        "isActive": 0,
                        "name": "辽源",
                        "pName": "吉林"
                    },
                    {
                        "code": "siping",
                        "isActive": 0,
                        "name": "四平",
                        "pName": "吉林"
                    },
                    {
                        "code": "songyuan",
                        "isActive": 0,
                        "name": "松原",
                        "pName": "吉林"
                    },
                    {
                        "code": "tonghua",
                        "isActive": 0,
                        "name": "通化",
                        "pName": "吉林"
                    },
                    {
                        "code": "yanbian",
                        "isActive": 0,
                        "name": "延边",
                        "pName": "吉林"
                    }
                ],
                "name": "吉林"
            },
            {
                "cities": [
                    {
                        "code": "changzhou",
                        "isActive": 0,
                        "name": "常州",
                        "pName": "江苏"
                    },
                    {
                        "code": "haian",
                        "isActive": 0,
                        "name": "海安",
                        "pName": "江苏"
                    },
                    {
                        "code": "huaian",
                        "isActive": 0,
                        "name": "淮安",
                        "pName": "江苏"
                    },
                    {
                        "code": "jiangsu-taizhou",
                        "isActive": 0,
                        "name": "泰州",
                        "pName": "江苏"
                    },
                    {
                        "code": "kunshan",
                        "isActive": 0,
                        "name": "昆山",
                        "pName": "江苏"
                    },
                    {
                        "code": "lianyungang",
                        "isActive": 0,
                        "name": "连云港",
                        "pName": "江苏"
                    },
                    {
                        "code": "nanjing",
                        "isActive": 0,
                        "name": "南京",
                        "pName": "江苏"
                    },
                    {
                        "code": "nantong",
                        "isActive": 0,
                        "name": "南通",
                        "pName": "江苏"
                    },
                    {
                        "code": "suqian",
                        "isActive": 0,
                        "name": "宿迁",
                        "pName": "江苏"
                    },
                    {
                        "code": "suzhou",
                        "isActive": 0,
                        "name": "苏州",
                        "pName": "江苏"
                    },
                    {
                        "code": "suzhou_changshu",
                        "isActive": 0,
                        "name": "苏州常熟",
                        "pName": "江苏"
                    },
                    {
                        "code": "suzhou_taicang",
                        "isActive": 0,
                        "name": "苏州太仓",
                        "pName": "江苏"
                    },
                    {
                        "code": "suzhouyuanqu",
                        "isActive": 0,
                        "name": "苏州园区",
                        "pName": "江苏"
                    },
                    {
                        "code": "wuxi",
                        "isActive": 0,
                        "name": "无锡",
                        "pName": "江苏"
                    },
                    {
                        "code": "xuzhou",
                        "isActive": 0,
                        "name": "徐州",
                        "pName": "江苏"
                    },
                    {
                        "code": "yancheng",
                        "isActive": 0,
                        "name": "盐城",
                        "pName": "江苏"
                    },
                    {
                        "code": "yangzhou",
                        "isActive": 0,
                        "name": "扬州",
                        "pName": "江苏"
                    },
                    {
                        "code": "zhangjiagang",
                        "isActive": 0,
                        "name": "张家港",
                        "pName": "江苏"
                    },
                    {
                        "code": "zhenjiang",
                        "isActive": 0,
                        "name": "镇江",
                        "pName": "江苏"
                    }
                ],
                "name": "江苏"
            },
            {
                "cities": [
                    {
                        "code": "ganzhou",
                        "isActive": 0,
                        "name": "赣州",
                        "pName": "江西"
                    },
                    {
                        "code": "jian",
                        "isActive": 0,
                        "name": "吉安",
                        "pName": "江西"
                    },
                    {
                        "code": "jiangxi-fuzhou",
                        "isActive": 0,
                        "name": "抚州",
                        "pName": "江西"
                    },
                    {
                        "code": "jingdezhen",
                        "isActive": 0,
                        "name": "景德镇",
                        "pName": "江西"
                    },
                    {
                        "code": "jiujiang",
                        "isActive": 0,
                        "name": "九江",
                        "pName": "江西"
                    },
                    {
                        "code": "nanchang",
                        "isActive": 0,
                        "name": "南昌",
                        "pName": "江西"
                    },
                    {
                        "code": "shangrao",
                        "isActive": 0,
                        "name": "上饶",
                        "pName": "江西"
                    },
                    {
                        "code": "xinyu",
                        "isActive": 0,
                        "name": "新余",
                        "pName": "江西"
                    },
                    {
                        "code": "yichun",
                        "isActive": 0,
                        "name": "宜春",
                        "pName": "江西"
                    },
                    {
                        "code": "yingtan",
                        "isActive": 0,
                        "name": "鹰潭",
                        "pName": "江西"
                    }
                ],
                "name": "江西"
            },
            {
                "cities": [
                    {
                        "code": "anshan",
                        "isActive": 0,
                        "name": "鞍山",
                        "pName": "辽宁"
                    },
                    {
                        "code": "benxi",
                        "isActive": 0,
                        "name": "本溪",
                        "pName": "辽宁"
                    },
                    {
                        "code": "chaoyang",
                        "isActive": 0,
                        "name": "朝阳",
                        "pName": "辽宁"
                    },
                    {
                        "code": "dalian",
                        "isActive": 0,
                        "name": "大连",
                        "pName": "辽宁"
                    },
                    {
                        "code": "fushun",
                        "isActive": 0,
                        "name": "抚顺",
                        "pName": "辽宁"
                    },
                    {
                        "code": "fuxin",
                        "isActive": 0,
                        "name": "阜新",
                        "pName": "辽宁"
                    },
                    {
                        "code": "huludao",
                        "isActive": 0,
                        "name": "葫芦岛",
                        "pName": "辽宁"
                    },
                    {
                        "code": "jinzhou",
                        "isActive": 0,
                        "name": "锦州",
                        "pName": "辽宁"
                    },
                    {
                        "code": "liaoyang",
                        "isActive": 0,
                        "name": "辽阳",
                        "pName": "辽宁"
                    },
                    {
                        "code": "panjin",
                        "isActive": 0,
                        "name": "盘锦",
                        "pName": "辽宁"
                    },
                    {
                        "code": "shenyang",
                        "isActive": 0,
                        "name": "沈阳",
                        "pName": "辽宁"
                    },
                    {
                        "code": "tieling",
                        "isActive": 0,
                        "name": "铁岭",
                        "pName": "辽宁"
                    },
                    {
                        "code": "yingkou",
                        "isActive": 0,
                        "name": "营口",
                        "pName": "辽宁"
                    }
                ],
                "name": "辽宁"
            },
            {
                "cities": [
                    {
                        "code": "alashanmeng",
                        "isActive": 0,
                        "name": "阿拉善盟",
                        "pName": "内蒙古"
                    },
                    {
                        "code": "baotou",
                        "isActive": 0,
                        "name": "包头",
                        "pName": "内蒙古"
                    },
                    {
                        "code": "bayanzhuoer",
                        "isActive": 0,
                        "name": "巴彦淖尔",
                        "pName": "内蒙古"
                    },
                    {
                        "code": "chifeng",
                        "isActive": 0,
                        "name": "赤峰",
                        "pName": "内蒙古"
                    },
                    {
                        "code": "eerduosi",
                        "isActive": 0,
                        "name": "鄂尔多斯",
                        "pName": "内蒙古"
                    },
                    {
                        "code": "huhehaote",
                        "isActive": 0,
                        "name": "呼和浩特",
                        "pName": "内蒙古"
                    },
                    {
                        "code": "hulunbeir",
                        "isActive": 0,
                        "name": "呼伦贝尔",
                        "pName": "内蒙古"
                    },
                    {
                        "code": "tongliao",
                        "isActive": 0,
                        "name": "通辽",
                        "pName": "内蒙古"
                    },
                    {
                        "code": "wuhai",
                        "isActive": 0,
                        "name": "乌海",
                        "pName": "内蒙古"
                    },
                    {
                        "code": "wulanchabu",
                        "isActive": 0,
                        "name": "乌兰察布",
                        "pName": "内蒙古"
                    },
                    {
                        "code": "xilinguolemeng",
                        "isActive": 0,
                        "name": "锡林郭勒盟",
                        "pName": "内蒙古"
                    },
                    {
                        "code": "xinganmeng",
                        "isActive": 0,
                        "name": "兴安盟",
                        "pName": "内蒙古"
                    }
                ],
                "name": "内蒙古"
            },
            {
                "cities": [
                    {
                        "code": "guyuan",
                        "isActive": 0,
                        "name": "固原",
                        "pName": "宁夏"
                    },
                    {
                        "code": "shizuishan",
                        "isActive": 0,
                        "name": "石嘴山",
                        "pName": "宁夏"
                    },
                    {
                        "code": "wuzhong",
                        "isActive": 0,
                        "name": "吴忠",
                        "pName": "宁夏"
                    },
                    {
                        "code": "yinchuan",
                        "isActive": 0,
                        "name": "银川",
                        "pName": "宁夏"
                    },
                    {
                        "code": "zhongwei",
                        "isActive": 0,
                        "name": "中卫",
                        "pName": "宁夏"
                    }
                ],
                "name": "宁夏"
            },
            {
                "cities": [
                    {
                        "code": "guoluo",
                        "isActive": 0,
                        "name": "果洛",
                        "pName": "青海"
                    },
                    {
                        "code": "haibei",
                        "isActive": 0,
                        "name": "海北",
                        "pName": "青海"
                    },
                    {
                        "code": "haidong",
                        "isActive": 0,
                        "name": "海东地",
                        "pName": "青海"
                    },
                    {
                        "code": "hainanzangzuzizhizhou",
                        "isActive": 0,
                        "name": "海南",
                        "pName": "青海"
                    },
                    {
                        "code": "haixi",
                        "isActive": 0,
                        "name": "海西",
                        "pName": "青海"
                    },
                    {
                        "code": "huangnan",
                        "isActive": 0,
                        "name": "黄南",
                        "pName": "青海"
                    },
                    {
                        "code": "xining",
                        "isActive": 0,
                        "name": "西宁",
                        "pName": "青海"
                    },
                    {
                        "code": "yushu",
                        "isActive": 0,
                        "name": "玉树",
                        "pName": "青海"
                    }
                ],
                "name": "青海"
            },
            {
                "cities": [
                    {
                        "code": "binzhou",
                        "isActive": 0,
                        "name": "滨州",
                        "pName": "山东"
                    },
                    {
                        "code": "dezhou",
                        "isActive": 0,
                        "name": "德州",
                        "pName": "山东"
                    },
                    {
                        "code": "dongying",
                        "isActive": 0,
                        "name": "东营",
                        "pName": "山东"
                    },
                    {
                        "code": "heze",
                        "isActive": 0,
                        "name": "荷泽",
                        "pName": "山东"
                    },
                    {
                        "code": "jinan",
                        "isActive": 0,
                        "name": "济南",
                        "pName": "山东"
                    },
                    {
                        "code": "jining",
                        "isActive": 0,
                        "name": "济宁",
                        "pName": "山东"
                    },
                    {
                        "code": "laiwu",
                        "isActive": 0,
                        "name": "莱芜",
                        "pName": "山东"
                    },
                    {
                        "code": "linyi",
                        "isActive": 0,
                        "name": "临沂",
                        "pName": "山东"
                    },
                    {
                        "code": "qingdao",
                        "isActive": 0,
                        "name": "青岛",
                        "pName": "山东"
                    },
                    {
                        "code": "rizhao",
                        "isActive": 0,
                        "name": "日照",
                        "pName": "山东"
                    },
                    {
                        "code": "taian",
                        "isActive": 0,
                        "name": "泰安",
                        "pName": "山东"
                    },
                    {
                        "code": "weifang",
                        "isActive": 0,
                        "name": "潍坊",
                        "pName": "山东"
                    },
                    {
                        "code": "weihai",
                        "isActive": 0,
                        "name": "威海",
                        "pName": "山东"
                    },
                    {
                        "code": "yantai",
                        "isActive": 0,
                        "name": "烟台",
                        "pName": "山东"
                    },
                    {
                        "code": "zaozhuang",
                        "isActive": 0,
                        "name": "枣庄",
                        "pName": "山东"
                    },
                    {
                        "code": "zibo",
                        "isActive": 0,
                        "name": "淄博",
                        "pName": "山东"
                    }
                ],
                "name": "山东"
            },
            {
                "cities": [
                    {
                        "code": "changzhi",
                        "isActive": 0,
                        "name": "长治",
                        "pName": "山西"
                    },
                    {
                        "code": "datong",
                        "isActive": 0,
                        "name": "大同",
                        "pName": "山西"
                    },
                    {
                        "code": "jincheng",
                        "isActive": 0,
                        "name": "晋城",
                        "pName": "山西"
                    },
                    {
                        "code": "jinzhong",
                        "isActive": 0,
                        "name": "晋中",
                        "pName": "山西"
                    },
                    {
                        "code": "lvliang",
                        "isActive": 0,
                        "name": "吕梁",
                        "pName": "山西"
                    },
                    {
                        "code": "shuozhou",
                        "isActive": 0,
                        "name": "朔州",
                        "pName": "山西"
                    },
                    {
                        "code": "taiyuan",
                        "isActive": 0,
                        "name": "太原",
                        "pName": "山西"
                    },
                    {
                        "code": "xinzhou",
                        "isActive": 0,
                        "name": "忻州",
                        "pName": "山西"
                    },
                    {
                        "code": "yangquan",
                        "isActive": 0,
                        "name": "阳泉",
                        "pName": "山西"
                    },
                    {
                        "code": "yuncheng",
                        "isActive": 0,
                        "name": "运城",
                        "pName": "山西"
                    }
                ],
                "name": "山西"
            },
            {
                "cities": [
                    {
                        "code": "ankangjumin",
                        "isActive": 0,
                        "name": "安康城乡居民",
                        "pName": "陕西"
                    },
                    {
                        "code": "ankangzhigong",
                        "isActive": 0,
                        "name": "安康城镇职工",
                        "pName": "陕西"
                    },
                    {
                        "code": "baojijumin",
                        "isActive": 0,
                        "name": "宝鸡城乡居民",
                        "pName": "陕西"
                    },
                    {
                        "code": "baojizhigong",
                        "isActive": 0,
                        "name": "宝鸡城镇职工",
                        "pName": "陕西"
                    },
                    {
                        "code": "hanzhongjumin",
                        "isActive": 0,
                        "name": "汉中城乡居民",
                        "pName": "陕西"
                    },
                    {
                        "code": "hanzhongzhigong",
                        "isActive": 0,
                        "name": "汉中城镇职工",
                        "pName": "陕西"
                    },
                    {
                        "code": "shangluojumin",
                        "isActive": 0,
                        "name": "商洛城乡居民",
                        "pName": "陕西"
                    },
                    {
                        "code": "shangluozhigong",
                        "isActive": 0,
                        "name": "商洛城镇职工",
                        "pName": "陕西"
                    },
                    {
                        "code": "tongchuanjumin",
                        "isActive": 0,
                        "name": "铜川城乡居民",
                        "pName": "陕西"
                    },
                    {
                        "code": "tongchuanzhigong",
                        "isActive": 0,
                        "name": "铜川城镇职工",
                        "pName": "陕西"
                    },
                    {
                        "code": "weinanjumin",
                        "isActive": 0,
                        "name": "渭南城乡居民",
                        "pName": "陕西"
                    },
                    {
                        "code": "weinanzhigong",
                        "isActive": 0,
                        "name": "渭南城镇职工",
                        "pName": "陕西"
                    },
                    {
                        "code": "xianjumin",
                        "isActive": 0,
                        "name": "西安城乡居民",
                        "pName": "陕西"
                    },
                    {
                        "code": "xianyangjumin",
                        "isActive": 0,
                        "name": "咸阳城乡居民",
                        "pName": "陕西"
                    },
                    {
                        "code": "xianyangzhigong",
                        "isActive": 0,
                        "name": "咸阳城镇职工",
                        "pName": "陕西"
                    },
                    {
                        "code": "xianzhigong",
                        "isActive": 0,
                        "name": "西安城镇职工",
                        "pName": "陕西"
                    },
                    {
                        "code": "yananjumin",
                        "isActive": 0,
                        "name": "延安城乡居民",
                        "pName": "陕西"
                    },
                    {
                        "code": "yananzhigong",
                        "isActive": 0,
                        "name": "延安城镇职工",
                        "pName": "陕西"
                    },
                    {
                        "code": "yulinjumin",
                        "isActive": 0,
                        "name": "榆林城乡居民",
                        "pName": "陕西"
                    },
                    {
                        "code": "yulinzhigong",
                        "isActive": 0,
                        "name": "榆林城镇职工",
                        "pName": "陕西"
                    }
                ],
                "name": "陕西"
            },
            {
                "cities": [
                    {
                        "code": "shanghai",
                        "isActive": 0,
                        "name": "上海",
                        "pName": "上海"
                    }
                ],
                "name": "上海"
            },
            {
                "cities": [
                    {
                        "code": "aba",
                        "isActive": 0,
                        "name": "阿坝",
                        "pName": "四川"
                    },
                    {
                        "code": "bazhong",
                        "isActive": 0,
                        "name": "巴中",
                        "pName": "四川"
                    },
                    {
                        "code": "chengdu",
                        "isActive": 0,
                        "name": "成都",
                        "pName": "四川"
                    },
                    {
                        "code": "chengdulao",
                        "isActive": 0,
                        "name": "成都（新）",
                        "pName": "四川"
                    },
                    {
                        "code": "dazhou",
                        "isActive": 0,
                        "name": "达州",
                        "pName": "四川"
                    },
                    {
                        "code": "deyang",
                        "isActive": 0,
                        "name": "德阳",
                        "pName": "四川"
                    },
                    {
                        "code": "ganzi",
                        "isActive": 0,
                        "name": "甘孜",
                        "pName": "四川"
                    },
                    {
                        "code": "guangan",
                        "isActive": 0,
                        "name": "广安",
                        "pName": "四川"
                    },
                    {
                        "code": "guangyuan",
                        "isActive": 0,
                        "name": "广元",
                        "pName": "四川"
                    },
                    {
                        "code": "leshan",
                        "isActive": 0,
                        "name": "乐山",
                        "pName": "四川"
                    },
                    {
                        "code": "luzhou",
                        "isActive": 0,
                        "name": "泸州",
                        "pName": "四川"
                    },
                    {
                        "code": "meishan",
                        "isActive": 0,
                        "name": "眉山",
                        "pName": "四川"
                    },
                    {
                        "code": "mianyang",
                        "isActive": 0,
                        "name": "绵阳",
                        "pName": "四川"
                    },
                    {
                        "code": "nanchong",
                        "isActive": 0,
                        "name": "南充",
                        "pName": "四川"
                    },
                    {
                        "code": "neijiang",
                        "isActive": 0,
                        "name": "内江",
                        "pName": "四川"
                    },
                    {
                        "code": "panzhihua",
                        "isActive": 0,
                        "name": "攀枝花",
                        "pName": "四川"
                    },
                    {
                        "code": "suining",
                        "isActive": 0,
                        "name": "遂宁",
                        "pName": "四川"
                    },
                    {
                        "code": "yaan",
                        "isActive": 0,
                        "name": "雅安",
                        "pName": "四川"
                    },
                    {
                        "code": "yibin",
                        "isActive": 0,
                        "name": "宜宾",
                        "pName": "四川"
                    },
                    {
                        "code": "zigong",
                        "isActive": 0,
                        "name": "自贡",
                        "pName": "四川"
                    },
                    {
                        "code": "ziyang",
                        "isActive": 0,
                        "name": "资阳",
                        "pName": "四川"
                    }
                ],
                "name": "四川"
            },
            {
                "cities": [
                    {
                        "code": "tianjin",
                        "isActive": 0,
                        "name": "天津",
                        "pName": "天津"
                    }
                ],
                "name": "天津"
            },
            {
                "cities": [
                    {
                        "code": "changdu",
                        "isActive": 0,
                        "name": "昌都地",
                        "pName": "西藏"
                    },
                    {
                        "code": "lasa",
                        "isActive": 0,
                        "name": "拉萨",
                        "pName": "西藏"
                    }
                ],
                "name": "西藏"
            },
            {
                "cities": [
                    {
                        "code": "akesu",
                        "isActive": 0,
                        "name": "阿克苏",
                        "pName": "新疆"
                    }
                ],
                "name": "新疆"
            },
            {
                "cities": [
                    {
                        "code": "baoshanjumin",
                        "isActive": 0,
                        "name": "保山城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "baoshanzhigong",
                        "isActive": 0,
                        "name": "保山城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "chuxiongjumin",
                        "isActive": 0,
                        "name": "楚雄城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "chuxiongzhigong",
                        "isActive": 0,
                        "name": "楚雄城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "dalijumin",
                        "isActive": 0,
                        "name": "大理城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "dalizhigong",
                        "isActive": 0,
                        "name": "大理城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "dehongjumin",
                        "isActive": 0,
                        "name": "德宏城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "dehongzhigong",
                        "isActive": 0,
                        "name": "德宏城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "diqingjumin",
                        "isActive": 0,
                        "name": "迪庆城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "diqingzhigong",
                        "isActive": 0,
                        "name": "迪庆城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "honghejumin",
                        "isActive": 0,
                        "name": "红河城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "honghezhigong",
                        "isActive": 0,
                        "name": "红河城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "kunmingjumin",
                        "isActive": 0,
                        "name": "昆明城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "kunmingzhigong",
                        "isActive": 0,
                        "name": "昆明城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "lijiangjumin",
                        "isActive": 0,
                        "name": "丽江城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "lijiangzhigong",
                        "isActive": 0,
                        "name": "丽江城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "lincangjumin",
                        "isActive": 0,
                        "name": "临沧城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "lincangzhigong",
                        "isActive": 0,
                        "name": "临沧城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "nujiangjumin",
                        "isActive": 0,
                        "name": "怒江城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "nujiangzhigong",
                        "isActive": 0,
                        "name": "怒江城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "puerjumin",
                        "isActive": 0,
                        "name": "普洱城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "puerzhigong",
                        "isActive": 0,
                        "name": "普洱城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "qujingjumin",
                        "isActive": 0,
                        "name": "曲靖城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "qujingzhigong",
                        "isActive": 0,
                        "name": "曲靖城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "shaotongjumin",
                        "isActive": 0,
                        "name": "邵通城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "shaotongzhigong",
                        "isActive": 0,
                        "name": "邵通城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "wenshanjumin",
                        "isActive": 0,
                        "name": "文山城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "wenshanzhigong",
                        "isActive": 0,
                        "name": "文山城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "xishuangbannajumin",
                        "isActive": 0,
                        "name": "西双版纳城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "xishuangbannazhigong",
                        "isActive": 0,
                        "name": "西双版纳城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "yunnanshengzhizhigong",
                        "isActive": 0,
                        "name": "云南省直城镇职工",
                        "pName": "云南"
                    },
                    {
                        "code": "yuxijumin",
                        "isActive": 0,
                        "name": "玉溪城乡居民",
                        "pName": "云南"
                    },
                    {
                        "code": "yuxizhigong",
                        "isActive": 0,
                        "name": "玉溪城镇职工",
                        "pName": "云南"
                    }
                ],
                "name": "云南"
            },
            {
                "cities": [
                    {
                        "code": "hangzhou",
                        "isActive": 0,
                        "name": "杭州",
                        "pName": "浙江"
                    },
                    {
                        "code": "hangzhou_xiaoshan",
                        "isActive": 0,
                        "name": "杭州萧山",
                        "pName": "浙江"
                    },
                    {
                        "code": "huzhou",
                        "isActive": 0,
                        "name": "湖州",
                        "pName": "浙江"
                    },
                    {
                        "code": "jiaxing",
                        "isActive": 0,
                        "name": "嘉兴",
                        "pName": "浙江"
                    },
                    {
                        "code": "jiaxinghaiyan",
                        "isActive": 0,
                        "name": "嘉兴海盐",
                        "pName": "浙江"
                    },
                    {
                        "code": "jiaxingpinghu",
                        "isActive": 0,
                        "name": "嘉兴平湖",
                        "pName": "浙江"
                    },
                    {
                        "code": "jiaxingtongxiang",
                        "isActive": 0,
                        "name": "嘉兴桐乡",
                        "pName": "浙江"
                    },
                    {
                        "code": "jinhua",
                        "isActive": 0,
                        "name": "金华",
                        "pName": "浙江"
                    },
                    {
                        "code": "lishui",
                        "isActive": 0,
                        "name": "丽水",
                        "pName": "浙江"
                    },
                    {
                        "code": "ningbo",
                        "isActive": 0,
                        "name": "宁波",
                        "pName": "浙江"
                    },
                    {
                        "code": "quzhou",
                        "isActive": 0,
                        "name": "衢州",
                        "pName": "浙江"
                    },
                    {
                        "code": "shaoxing",
                        "isActive": 0,
                        "name": "绍兴",
                        "pName": "浙江"
                    },
                    {
                        "code": "taizhou",
                        "isActive": 0,
                        "name": "台州",
                        "pName": "浙江"
                    },
                    {
                        "code": "wenzhou",
                        "isActive": 0,
                        "name": "温州",
                        "pName": "浙江"
                    },
                    {
                        "code": "zhejiangshengzhi",
                        "isActive": 0,
                        "name": "浙江省直",
                        "pName": "浙江"
                    },
                    {
                        "code": "zhoushan",
                        "isActive": 0,
                        "name": "舟山",
                        "pName": "浙江"
                    }
                ],
                "name": "浙江"
            },
            {
                "cities": [
                    {
                        "code": "chongqing",
                        "isActive": 0,
                        "name": "重庆",
                        "pName": "重庆"
                    }
                ],
                "name": "重庆"
            }
        ]
    });
});

router.post('/city/save/:code', function (req, res) {
    res.json({
        success: true,
        data: "保存成功"
    });
});

router.post('/city/view/:code', function (req, res) {
    res.json({
        "data": {
            "code": "anqing",
            "errorDescription": "测试",
            "errorExample": "{\"name\":\"XXX\",\"idCard\":\"XXXXXXXXXXXXXXXXX\",\"password\":\"xxxxxxxx\"}",
            "errorLogModifierName": "test",
            "errorLogUpdateTime": 1498482044000,
            "helpJson": "{\"tips\":{\"title\":\"是滴是滴\",\"content\":[{\"txt\":\"撒啊啊啊啊啊啊啊qewqet54yyjkiujykkkkkk8i78i8888i8i8i8i8i8i\"},{\"txt\":\"asdadasdasd\",\"location\":\"http://localhost:1000/#/app/helpSetting/shebao\"},{\"txt\":\"adasd\"},{\"txt\":\"adasdasfasf\"}]},\"problems\":{\"fb_pwd\":\"1\",\"call_help\":\"1\",\"fb_pwd_location\":\"https://www.sdwfhrss.gov.cn/rsjwz/self/regPage\"}}",
            "helpModifierName": "test",
            "helpUpdateTime": 1498477479000,
            "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"用户名\",\"name\":\"name\"},{\"desc\":\"密码\",\"name\":\"password\"},{\"desc\":\"验证码\",\"name\":\"vcode\"}]}]}",
            "isActive": 0,
            "isOpen": 1,
            "memo": "test",
            "name": "安庆",
            "pName": "安徽",
            "spiderOk": 1,
            "websiteUrl": "http://220.179.13.107/webeps/logon/logon.jsp"
        }, "success": true
    });
});

router.post('/city/error/view/:code', function (req, res) {
    res.json({
        success: true,
        data: {
            "code": "anqing",
            "errorDescription": "测试",
            "errorExample": "{\"name\":\"XXX\",\"idCard\":\"XXXXXXXXXXXXXXXXX\",\"password\":\"xxxxxxxx\"}",
            "isActive": 0,
            "memo": "test",
            "modifierName": "test",
            "name": "安庆",
            "pName": "安徽",
            "updateTime": 1498482044000,
            "websiteUrl": "http://220.179.13.107/webeps/logon/logon.jsp"
        }
    });
});

router.post('/help/view/shebao', function (req, res) {
    res.json({
        "data": "{\"tips\":{\"title\":\"如何查询？\",\"content\":[{\"txt\":\"若您尚未登录过请点击新用户注册，按新用户帮助其中的步骤完成登录密码的设置。\"},{\"txt\":\"新用户注册\",\"location\":\"http://www.bjrbj.gov.cn/csibiz/urbmi/gerenreg1.jsp\"}]},\"problems\":{\"fb_pwd\":\"1\",\"call_help\":\"1\",\"fb_pwd_location\":\"http://www.bjrbj.gov.cn/csibiz/urbmi/reset_password.jsp\"}}",
        "success": true
    });
});

router.post('/help/save/shebao', function (req, res) {
    res.json({
        success: true,
        data: "保存成功"
    });
});

router.post('/city/filter', function (req, res) {
    res.json(
        {
            "data": {
                "pageData": [{
                    "code": "aba",
                    "errorDescription": "测试",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"用户名\",\"name\":\"name\"},{\"desc\":\"密码\",\"name\":\"password\"},{\"desc\":\"验证码\",\"name\":\"vcode\"}]}]}",
                    "isActive": 0,
                    "name": "阿坝",
                    "pName": "四川",
                    "websiteUrl": "http://119.6.84.89:7001/scwssb/login.jsp"
                }, {
                    "code": "akesu",
                    "helpJson": "{\"tips\":{\"title\":\"大师\",\"content\":[{\"txt\":\"是滴是滴\",\"location\":\"实打实大师\"},{\"txt\":\"啊啊啊啊啊啊啊啊啊啊\"}]},\"problems\":{\"fb_pwd\":\"1\",\"call_help\":\"1\",\"fb_pwd_location\":\"http://localhost:8082/app/shebaoMgmt/list\"}}",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"身份证号\",\"name\":\"idcard\"}]}]}",
                    "isActive": 1,
                    "memo": "啊啊啊啊",
                    "name": "阿克苏",
                    "pName": "新疆",
                    "websiteUrl": "http://218.84.217.117/search/index_zhigong.jsp"
                }, {
                    "code": "alaer",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"姓名\",\"name\":\"name\"},{\"desc\":\"身份证号\",\"name\":\"idCard\"},{\"desc\":\"社保号\",\"name\":\"socialCard\"},{\"desc\":\"密码\",\"name\":\"password\"}]}]}",
                    "isActive": 1,
                    "memo": "网上查询未开通",
                    "name": "阿拉尔",
                    "pName": "新疆"
                }, {
                    "code": "alashanmeng",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"身份证号\",\"name\":\"idcard\"},{\"desc\":\"密码\",\"name\":\"password\"},{\"desc\":\"验证码\",\"name\":\"vcode\"}]}]}",
                    "isActive": 1,
                    "name": "阿拉善盟",
                    "pName": "内蒙古",
                    "websiteUrl": "http://login.12333k.cn/Cas/login"
                }, {
                    "code": "aletaidi",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"姓名\",\"name\":\"name\"},{\"desc\":\"身份证号\",\"name\":\"idCard\"},{\"desc\":\"社保号\",\"name\":\"socialCard\"},{\"desc\":\"密码\",\"name\":\"password\"}]}]}",
                    "isActive": 1,
                    "name": "阿勒泰地",
                    "pName": "新疆"
                }, {
                    "code": "alidiqu",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"用户名\",\"name\":\"name\"},{\"desc\":\"密码\",\"name\":\"password\"}]}]}",
                    "isActive": 1,
                    "name": "阿里地",
                    "pName": "西藏"
                }, {
                    "code": "anding",
                    "inputJson": "{\"forms\":[{\"group\":\"idcard\",\"inputs\":[{\"desc\":\"姓名\",\"name\":\"name\"},{\"desc\":\"身份证号\",\"name\":\"idcard\"},{\"desc\":\"密码\",\"name\":\"password\"},{\"desc\":\"验证码\",\"name\":\"vcode\"}],\"desc\":\"身份证登录\"},{\"group\":\"socialcard\",\"inputs\":[{\"desc\":\"姓名\",\"name\":\"name\"},{\"desc\":\"个人编号\",\"name\":\"idcard\"},{\"desc\":\"密码\",\"name\":\"password\"},{\"desc\":\"验证码\",\"name\":\"vcode\"}],\"desc\":\"个人编号登录\"}]}",
                    "isActive": 1,
                    "name": "定安",
                    "pName": "海南",
                    "websiteUrl": "http://www.hi.si.gov.cn/"
                }, {
                    "code": "anhui_suzhou",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"姓名\",\"name\":\"name\"},{\"desc\":\"身份证号\",\"name\":\"idcard\"},{\"desc\":\"验证码\",\"name\":\"vcode\"}]}]}",
                    "isActive": 1,
                    "memo": "asd",
                    "name": "宿州",
                    "pName": "安徽",
                    "websiteUrl": "http://www.ahsz.hrss.gov.cn/sitefiles/services/cms/page.aspx?s=1&n=30&c=3229"
                }, {
                    "code": "ankangjumin",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"公民身份证号码\",\"name\":\"idcard\"},{\"desc\":\"姓名\",\"name\":\"name\"}]}]}",
                    "isActive": 1,
                    "name": "安康城乡居民",
                    "pName": "陕西",
                    "websiteUrl": "http://117.36.52.39/sxxnbLogin.jsp"
                }, {
                    "code": "ankangzhigong",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"公民身份证号码\",\"name\":\"idcard\"},{\"desc\":\"姓名\",\"name\":\"name\"}]}]}",
                    "isActive": 1,
                    "name": "安康城镇职工",
                    "pName": "陕西",
                    "websiteUrl": "http://117.36.52.39/sxlssLogin.jsp"
                }, {
                    "code": "anqing",
                    "errorDescription": "测试",
                    "errorExample": "{\"name\":\"XXX\",\"idCard\":\"XXXXXXXXXXXXXXXXX\",\"password\":\"xxxxxxxx\"}",
                    "helpJson": "{\"tips\":{\"title\":\"是滴是滴\",\"content\":[{\"txt\":\"撒啊啊啊啊啊啊啊qewqet54yyjkiujykkkkkk8i78i8888i8i8i8i8i8i\"},{\"txt\":\"asdadasdasd\",\"location\":\"http://localhost:1000/#/app/helpSetting/shebao\"},{\"txt\":\"adasd\"},{\"txt\":\"adasdasfasf\"}]},\"problems\":{\"fb_pwd\":\"1\",\"call_help\":\"1\",\"fb_pwd_location\":\"https://www.sdwfhrss.gov.cn/rsjwz/self/regPage\"}}",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"用户名\",\"name\":\"name\"},{\"desc\":\"密码\",\"name\":\"password\"},{\"desc\":\"验证码\",\"name\":\"vcode\"}]}]}",
                    "isActive": 0,
                    "memo": "test",
                    "name": "安庆",
                    "pName": "安徽",
                    "websiteUrl": "http://220.179.13.107/webeps/logon/logon.jsp"
                }, {
                    "code": "anshan",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"社保号\",\"name\":\"account\"},{\"desc\":\"身份证号\",\"name\":\"idcard\"}]}]}",
                    "isActive": 1,
                    "name": "鞍山",
                    "pName": "辽宁",
                    "websiteUrl": "http://www.asshbx.gov.cn/asweb/cxlog1.jsp"
                }, {
                    "code": "anshun",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"身份证号\",\"name\":\"idCard\"},{\"desc\":\"密码\",\"name\":\"password\"}]}]}",
                    "isActive": 1,
                    "memo": "没有账号",
                    "name": "安顺",
                    "pName": "贵州",
                    "websiteUrl": "http://220.197.219.121/"
                }, {
                    "code": "anyang",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"用户名\",\"name\":\"name\"},{\"desc\":\"密码\",\"name\":\"password\"},{\"desc\":\"验证码\",\"name\":\"vcode\"}]}]}",
                    "isActive": 1,
                    "name": "安阳",
                    "pName": "河南",
                    "websiteUrl": "http://www.aysmzj.gov.cn/"
                }, {
                    "code": "baicheng",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"用户名\",\"name\":\"name\"},{\"desc\":\"密码\",\"name\":\"password\"},{\"desc\":\"验证码\",\"name\":\"vcode\"}]}]}",
                    "isActive": 1,
                    "name": "白城",
                    "pName": "吉林",
                    "websiteUrl": "https://wssb.jlsi.gov.cn:8443/login.jsp"
                }, {
                    "code": "baise",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"身份证号\",\"name\":\"idcard\"},{\"desc\":\"密码\",\"name\":\"password\"},{\"desc\":\"验证码\",\"name\":\"vcode\"}]}]}",
                    "isActive": 1,
                    "name": "百色",
                    "pName": "广西",
                    "websiteUrl": "http://gx.si.gov.cn:8001/siweb/login.do?method=person"
                }, {
                    "code": "baisha",
                    "inputJson": "{\"forms\":[{\"group\":\"idcard\",\"inputs\":[{\"desc\":\"姓名\",\"name\":\"name\"},{\"desc\":\"身份证号\",\"name\":\"idcard\"},{\"desc\":\"密码\",\"name\":\"password\"},{\"desc\":\"验证码\",\"name\":\"vcode\"}],\"desc\":\"身份证登录\"},{\"group\":\"socialcard\",\"inputs\":[{\"desc\":\"姓名\",\"name\":\"name\"},{\"desc\":\"个人编号\",\"name\":\"idcard\"},{\"desc\":\"密码\",\"name\":\"password\"},{\"desc\":\"验证码\",\"name\":\"vcode\"}],\"desc\":\"个人编号登录\"}]}",
                    "isActive": 1,
                    "name": "白沙",
                    "pName": "海南",
                    "websiteUrl": "http://www.hi.si.gov.cn/"
                }, {
                    "code": "baishan",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"用户名\",\"name\":\"name\"},{\"desc\":\"密码\",\"name\":\"password\"},{\"desc\":\"验证码\",\"name\":\"vcode\"}]}]}",
                    "isActive": 1,
                    "name": "白山",
                    "pName": "吉林",
                    "websiteUrl": "https://wssb.jlsi.gov.cn:8443/login.jsp"
                }, {
                    "code": "baiyin",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"姓名\",\"name\":\"name\"},{\"desc\":\"身份证号\",\"name\":\"idCard\"},{\"desc\":\"社保号\",\"name\":\"socialCard\"},{\"desc\":\"密码\",\"name\":\"password\"}]}]}",
                    "isActive": 1,
                    "name": "白银",
                    "pName": "甘肃"
                }, {
                    "code": "baoding",
                    "inputJson": "{\"forms\":[{\"group\":\"base\",\"inputs\":[{\"desc\":\"姓名\",\"name\":\"name\"},{\"desc\":\"身份证号\",\"name\":\"idCard\"},{\"desc\":\"社保号\",\"name\":\"socialCard\"},{\"desc\":\"密码\",\"name\":\"password\"}]}]}",
                    "isActive": 1,
                    "name": "保定",
                    "pName": "河北"
                }], "pageNumber": 1, "pageSize": 20, "totalCount": 428, "totalPages": 22
            }, "success": true
        }
    );
});

module.exports = router;