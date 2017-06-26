app.controller('sbHelpSettingCtrl', ['$scope', '$http', 'WebConst', 'BlockUI', function ($scope, $http, WebConst, BlockUI) {
    vm = this, $ = angular.element;

    var WEB_URL = WebConst.WEB_URL;

    _init();

    function _init() {
        $scope.provinces = [];
        $scope.province = {};
        $scope.city = {};
        $scope.helpJson = {
            tips: {
                title: "",
                content: []
            },
            problems: {
                fb_pwd: false,
                call_help: false
            }
        };
        vm.addTxtTip = _addTxtTip;
        vm.addHrefTip = _addHrefTip;
        vm.save = _save;
        vm.deleteTip = _deleteTip;
        _getCitiesTree();
    }

    function _deleteTip(index) {
        $scope.helpJson.tips.content.splice(index, 1);
        $scope.helpJson.tips.content.forEach(function (tip, i) {
            tip.index = i;
        })
    }

    function _save() {
        if (!$scope.city || !$scope.city.code) {
            alert("请先选择城市");
            return;
        }
        if ($scope.helpJson.problems.fb_pwd && !$scope.helpJson.problems.fb_pwd_location) {
            alert("忘记密码链接不能为空");
            return;
        }
        var json = {
            tips: {
                title: "",
                content: []
            },
            problems: {
                fb_pwd: "0",
                call_help: "0"
            }
        };
        if ($scope.helpJson.problems.call_help) {
            json.problems.call_help = "1";
        } else {
            json.problems.call_help = "0";
        }

        if ($scope.helpJson.problems.fb_pwd) {
            json.problems.fb_pwd = "1";
            json.problems.fb_pwd_location = $scope.helpJson.problems.fb_pwd_location;
        } else {
            json.problems.fb_pwd = "0";
        }
        if ($scope.helpJson.tips.content.length < 1 && !$scope.helpJson.tips.title) {
            _savHelpJson(json);
            return;
        }

        if (!$scope.helpJson.tips.title) {
            alert("请输入标题");
            return;
        }
        json.tips.title = $scope.helpJson.tips.title;
        if ($scope.helpJson.tips.content.length < 1) {
            alert("请输入至少一条提示");
            return;
        }
        for (var i = 0; i < $scope.helpJson.tips.content.length; i++) {
            var tip = $scope.helpJson.tips.content[i];
            if (!tip.txt) {
                alert("提示" + (i + 1) + "内容不能为空");
                return;
            }
            if (tip.location == "") {
                alert("提示" + (i + 1) + "链接不能为空");
                return;
            }
        }

        $scope.helpJson.tips.content.forEach(function (data, i) {
            var tip = {
                txt: data.txt
            };
            if (data.location) {
                tip.location = data.location;
            }
            if (data.txt || data.location) {
                json.tips.content.push(tip);
            }
        });

        _savHelpJson(json);
    }

    function _savHelpJson(json) {
        var helpStr = JSON.stringify(json);
        var params = {
            cityCode: $scope.city.code,
            helpJson: helpStr
        };
        var url = WEB_URL + "/help/save/shebao";
        $http.post(url, params).success(function (response) {
            if (response && response.success && response.data) {
                alert("保存成功");
                _getCityDetail($scope.city.code);
            }
        });
    }

    function _addHrefTip() {
        if (!$scope.city || !$scope.city.code) {
            alert("请先选择城市");
            return;
        }
        var tip = {
            txt: "",
            location: "",
            index: $scope.helpJson.tips.content.length
        };
        $scope.helpJson.tips.content.push(tip);
    }

    function _addTxtTip() {
        if (!$scope.city || !$scope.city.code) {
            alert("请先选择城市");
            return;
        }
        var tip = {
            txt: "",
            index: $scope.helpJson.tips.content.length
        };
        $scope.helpJson.tips.content.push(tip);
    }

    function _getCitiesTree() {
        var url = WEB_URL + "/city/tree";
        $http.post(url).success(function (json) {
            if (json && json.success && json.data) {
                var data = json.data;
                $scope.provinces = data;
            }
        });
    }

    function _getCityDetail(code) {
        var url = WEB_URL + "/help/view/shebao";
        $http.post(url, {"cityCode": code}).success(function (json) {
            if (json && json.success && json.data) {
                var dataJson = JSON.parse(json.data);
                _initHelpJson(dataJson);
            } else {
                $scope.helpJson = {
                    tips: {
                        title: "",
                        content: []
                    },
                    problems: {
                        fb_pwd: false,
                        call_help: false
                    }
                };
            }
        });
    }

    function _initHelpJson(json) {
        if (!json) {
            return;
        }
        if (json.problems) {
            if (json.problems.fb_pwd == "1") {
                $scope.helpJson.problems.fb_pwd = true;
                $scope.helpJson.problems.fb_pwd_location = json.problems.fb_pwd_location;
            } else {
                $scope.helpJson.problems.fb_pwd = false;
            }
            if (json.problems.call_help == "1") {
                $scope.helpJson.problems.call_help = true;
            } else {
                $scope.helpJson.problems.call_help = false;
            }
        }
        if (!json.tips) {
            return;
        }
        if (json.tips.title) {
            $scope.helpJson.tips.title = json.tips.title;
        }
        if (json.tips.content) {
            $scope.helpJson.tips.content = json.tips.content;
            $scope.helpJson.tips.content.forEach(function (tip, i) {
                tip.index = i;
            });
        }
    }

    $scope.$watch(function () {
        return $scope.city;
    }, function () {
        if (!$scope.city || !$scope.city.code) {
            $scope.helpJson = {
                tips: {
                    title: "",
                    content: []
                },
                problems: {
                    fb_pwd: false,
                    call_help: false
                }
            };
            return;
        }
        _getCityDetail($scope.city.code);
    });

    $scope.$watch(function () {
        return $scope.province;
    }, function () {
        $scope.city = {};
        $scope.helpJson = {
            tips: {
                title: "",
                content: []
            },
            problems: {
                fb_pwd: false,
                call_help: false
            }
        };
    });

}]);