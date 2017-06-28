app.controller('ShebaoListCtrl', ['$scope', '$http', 'WebConst', 'BlockUI', '$compile', '$modal', function ($scope, $http, WebConst, BlockUI, $compile, $modal) {
    vm = this, $ = angular.element;

    var WEB_URL = WebConst.WEB_URL;

    vm.searchOpts = {
        pageSize: WebConst.defaultQueryPageSize,
        maxSize: 5
    };

    vm.pageResult = [];
    vm.pageNumber = 1;
    vm.grid = {};

    vm.editSbCityErrorTemplate = _editSbCityErrorTemplate;

    _init();

    function _init() {
        vm.provinces = [];
        vm.province = {};
        vm.city = {};
        _getCitiesTree();
        vm.jqGridConfig = {
            datatype: 'local',
            colModel: [
                {key: true, name: 'code', hidden: true, align: 'center'},
                {label: '编号', name: 'code', sortable: false},
                {label: '城市名', name: 'name', sortable: false},
                {label: '省份', name: 'pName', sortable: false},
                {label: '官网网址', name: 'websiteUrl', sortable: false},
                {label: '状态', name: 'isActive', sortable: false, formatter: _statusFormatter},
                {label: '错误描述', name: 'errorDescription', sortable: false},
                {label: '错误账户', name: 'errorExample', sortable: false},
                {label: '备注', name: 'memo', sortable: false},
                {label: '操作', name: 'act', align: 'center', sortable: false}
            ],
            autowidth: true,
            shrinkToFit: true,
            height: 'auto',
            gridComplete: _onGridComplete
        };
        refreshGrid();
    }

    function _statusFormatter(cellvalue) {
        if (cellvalue == 1) {
            return '正常';
        }
        if (cellvalue == 0) {
            return '错误';
        }
        return '';
    }

    function _onGridComplete() {
        var grid = $(this);
        grid.find("tbody>tr.jqgrow")
            .each(function () {
                var jqTr = $(this),
                    code = jqTr.attr('id'),
                    jqTds = jqTr.find('td');
                $compile('<button type="button" class="btn btn-sm btn-default m-r-xs" ng-click="vm.editSbCityHelpTemplate(\'' + code + '\')"> 帮助编辑</button>')($scope)
                    .appendTo(jqTds.eq(9));
                $compile('<button type="button" class="btn btn-sm btn-danger m-r-xs" ng-click="vm.editSbCityErrorTemplate(\'' + code + '\')"> 异常编辑</button>')($scope)
                    .appendTo(jqTds.eq(9));
            });
    }

    function refreshGrid() {
        var url = WEB_URL + "/city/filter";
        BlockUI.mask({animate: true});
        $http.post(url).success(function (json) {
            BlockUI.unmask();
            if (json && json.success && json.data) {
                var data = json.data;
                vm.pageResult = data;
                vm.sbCities = data.pageData;
                vm.grid.reload(vm.sbCities);
            }
        });
    }

    function _getCitiesTree() {
        var url = WEB_URL + "/city/tree";
        $http.post(url).success(function (json) {
            if (json && json.success && json.data) {
                var data = json.data;
                vm.provinces = data;
            }
        });
    }

    function _editSbCityErrorTemplate(code) {
        if (!code) {
            console.log('code不存在');
            return;
        }

        var modalInstance = $modal.open({
            templateUrl: 'tpl/reportMgmt/popup_edit_sb_error.html',
            controller: 'sbCityErrorEditController as vm',
            size: 'lg',
            backdrop: 'true',
            keyboard: false,
            resolve: {
                code: function () {
                    return angular.copy(code);
                }
            }
        });
        modalInstance.result.then(function (code) {
            console.log(code);
        });
    }

}]);

app.controller('sbCityErrorEditController', ['$scope', '$compile', '$sce', '$http', '$timeout', '$modalInstance', '$modal', 'code', 'MsgUtil', 'WebConst', 'BlockUI',
    function ($scope, $compile, $sce, $http, $timeout, $modalInstance, $modal, code, MsgUtil, WebConst, BlockUI) {
        var WEB_URL = WebConst.WEB_URL;
        var vm = this, $ = angular.element;

        // vm.ok = ok;
        vm.cancel = cancel;

        _init();

        function _init() {
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
            _getCityDetail(code);
        }

        function _getCityDetail(code) {
            var url = WEB_URL + "/city/view/" + code;
            BlockUI.mask({animate: true});
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

        function cancel() {
            if (!MsgUtil.confirm("确定要放弃本次编辑吗？")) {
                return;
            }
            $modalInstance.dismiss('cancel');
        }

    }
]);