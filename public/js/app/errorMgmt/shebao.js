app.controller('sbErrorMgmtCtrl', ['$scope', '$http', 'WebConst', 'BlockUI', 'MsgUtil', function ($scope, $http, WebConst, BlockUI, MsgUtil) {
    vm = this, $ = angular.element;

    var WEB_URL = WebConst.WEB_URL;

    vm.save = _save;

    _init();

    function _init() {
        $scope.provinces = [];
        $scope.province = {};
        $scope.city = {};
        $scope.settingJson = {
            isActive: -1,
            errorDescription: "",
            errorExample: "",
            websiteUrl: "",
            memo: ""
        };
        $scope.modifierInfoJson = {
            modifierName: "",
            updateTime: ""
        };
        _getCitiesTree();
    }


    function _save() {
        if (!$scope.city || !$scope.city.code) {
            //alert("请选择城市！");
            MsgUtil.toastWarn('请选择城市！');
            return;
        }
        if ($scope.settingJson.isActive != 1 && $scope.settingJson.isActive != 0) {
            //alert("请选择状态");
            MsgUtil.toastWarn('请选择状态！');
            return;
        }
        if ($scope.settingJson.isActive == 0 && !$scope.settingJson.errorDescription) {
            //alert("请输入错误原因");
            MsgUtil.toastWarn('请输入错误原因！');
            return;
        }
        var url = WEB_URL + "/city/save/" + $scope.city.code;
        BlockUI.mask({ animate: true });
        $http.post(url, $scope.settingJson).success(function (json) {
            BlockUI.unmask();
            if (json && json.success && json.data) {
                var data = json.data;
                alert(data);
            }
        });
    }

    function _getCitiesTree() {
        var url = WEB_URL + "/city/tree";
        BlockUI.mask({ animate: true });
        $http.post(url).success(function (json) {
            BlockUI.unmask();
            if (json && json.success && json.data) {
                var data = json.data;
                $scope.provinces = data;
            }
        });
    }

    function _getCityDetail(code) {
        var url = WEB_URL + "/city/view/" + code;
        BlockUI.mask({ animate: true });
        $http.post(url).success(function (json) {
            BlockUI.unmask();
            if (json && json.success && json.data) {
                var data = json.data;
                $scope.settingJson = {
                    isActive: data.isActive,
                    errorDescription: data.errorDescription,
                    errorExample: data.errorExample,
                    websiteUrl: data.websiteUrl,
                    memo: data.memo
                };
                $scope.modifierInfoJson = {
                    modifierName: data.modifierName,
                    updateTime: data.updateTime
                };
                if ($scope.settingJson.isActive != 0 && $scope.settingJson.isActive != 1) {
                    $scope.settingJson.isActive = -1;
                }
                if (!$scope.settingJson.errorDescription) {
                    $scope.settingJson.errorDescription = "";
                }
                if (!$scope.settingJson.errorExample) {
                    $scope.settingJson.errorExample = "";
                }
                if (!$scope.settingJson.websiteUrl) {
                    $scope.settingJson.websiteUrl = "";
                }
                if (!$scope.settingJson.memo) {
                    $scope.settingJson.memo = "";
                }
            } else {
                $scope.settingJson = {
                    isActive: -1,
                    errorDescription: "",
                    errorExample: "",
                    websiteUrl: "",
                    memo: ""
                };
                $scope.modifierInfoJson = {
                    modifierName: "",
                    updateTime: ""
                };
            }
        });
    }

    $scope.$watch(function () {
        return $scope.city;
    }, function () {
        if (!$scope.city || !$scope.city.code) {
            $scope.settingJson = {
                isActive: -1,
                errorDescription: "",
                errorExample: "",
                websiteUrl: "",
                memo: ""
            };
            $scope.modifierInfoJson = {
                modifierName: "",
                updateTime: ""
            };
            return;
        }
        _getCityDetail($scope.city.code);
    });

    $scope.$watch(function () {
        return $scope.province;
    }, function () {
        $scope.city = {};
        $scope.settingJson = {
            isActive: -1,
            errorDescription: "",
            errorExample: "",
            websiteUrl: "",
            memo: ""
        };
        $scope.modifierInfoJson = {
            modifierName: "",
            updateTime: ""
        };
    });

}]);