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
            templateUrl: 'tpl/shebaoMgmt/popup_edit_sb_error.html',
            controller: 'sbCityErrorEditController as vm',
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
            windowClass: 'shebaoList-popup',
            resolve: {
                cityCode: function () {
                    return angular.copy(code);
                }
            }
        });
        modalInstance.result.then(function (status) {
            if(status == 1){
                refreshGrid();
            }
        });
    }

}]);

app.controller('sbCityErrorEditController', ['$compile', '$sce', '$http', '$timeout', '$modalInstance', '$modal', 'cityCode', 'MsgUtil', 'WebConst', 'BlockUI',
    function ($compile, $sce, $http, $timeout, $modalInstance, $modal, cityCode, MsgUtil, WebConst, BlockUI) {
        var WEB_URL = WebConst.WEB_URL;
        var vm = this, $ = angular.element;

        vm.cityCode = cityCode;

        vm.ok = ok;
        vm.cancel = cancel;

        _init();

        function _init() {
            vm.settingJson = {
                isActive: -1,
                errorDescription: "",
                errorExample: "",
                websiteUrl: "",
                memo: ""
            };
            vm.modifierInfoJson = {
                modifierName: "",
                updateTime: ""
            };
            _getCityDetail(vm.cityCode);
        }

        function _getCityDetail(code) {
            var url = WEB_URL + "/city/view/" + code;
            BlockUI.mask({animate: true});
            $http.post(url).success(function (json) {
                BlockUI.unmask();
                if (json && json.success && json.data) {
                    var data = json.data;
                    vm.settingJson = {
                        isActive: data.isActive,
                        errorDescription: data.errorDescription,
                        errorExample: data.errorExample,
                        websiteUrl: data.websiteUrl,
                        memo: data.memo
                    };
                    vm.modifierInfoJson = {
                        modifierName: data.modifierName,
                        updateTime: data.updateTime
                    };
                    if (vm.settingJson.isActive != 0 && vm.settingJson.isActive != 1) {
                        vm.settingJson.isActive = -1;
                    }
                    if (!vm.settingJson.errorDescription) {
                        vm.settingJson.errorDescription = "";
                    }
                    if (!vm.settingJson.errorExample) {
                        vm.settingJson.errorExample = "";
                    }
                    if (!vm.settingJson.websiteUrl) {
                        vm.settingJson.websiteUrl = "";
                    }
                    if (!vm.settingJson.memo) {
                        vm.settingJson.memo = "";
                    }
                } else {
                    vm.settingJson = {
                        isActive: -1,
                        errorDescription: "",
                        errorExample: "",
                        websiteUrl: "",
                        memo: ""
                    };
                    vm.modifierInfoJson = {
                        modifierName: "",
                        updateTime: ""
                    };
                }
            });
        }

        function ok() {
            if (vm.settingJson.isActive != 1 && vm.settingJson.isActive != 0) {
                MsgUtil.toastWarn('请选择状态！');
                return;
            }
            if (vm.settingJson.isActive == 0 && !vm.settingJson.errorDescription) {
                MsgUtil.toastWarn('请输入错误原因！');
                return;
            }
            var url = WEB_URL + "/city/save/" + vm.cityCode;
            BlockUI.mask({ animate: true });
            $http.post(url, vm.settingJson).success(function (json) {
                BlockUI.unmask();
                if (json && json.success && json.data) {
                    var data = json.data;
                    MsgUtil.toastSuccess(data);
                    $modalInstance.close(1);
                } else {
                    MsgUtil.alert("保存失败！")
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