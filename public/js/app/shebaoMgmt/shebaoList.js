app.controller('ShebaoListCtrl', ['$scope', '$http', 'WebConst', 'BlockUI', '$compile', '$modal', 'MsgUtil', function ($scope, $http, WebConst, BlockUI, $compile, $modal, MsgUtil) {
    vm = this, $ = angular.element;

    var WEB_URL = WebConst.WEB_URL;

    vm.searchOpts = {
        pageSize: WebConst.defaultQueryPageSize,
        maxSize: 5,
        txt: ""
    };

    vm.pageResult = [];
    vm.pageNumber = 1;
    vm.grid = {};

    vm.editSbCityErrorTemplate = _editSbCityErrorTemplate;
    vm.editSbCityHelpTemplate = _editSbCityHelpTemplate;
    vm.viewDetail = _viewDetail;

    vm.refreshGrid = _refreshGrid;

    _init();

    function _init() {
        vm.provinces = [];
        vm.province = {};
        vm.city = {};
        vm.isActive = -1;
        vm.isOpen = -1;
        vm.spiderOk = -1;
        vm.inputJson = "";
        _getCitiesTree();
        vm.jqGridConfig = {
            datatype: 'local',
            colModel: [
                {key: true, name: 'code', hidden: true, align: 'center'},
                {label: '编号', name: 'code', sortable: false, width: 105},
                {label: '城市名', name: 'name', sortable: false, width: 125},
                {label: '省份', name: 'pName', sortable: false, width: 100},
                {label: '是否正常', name: 'isActive', sortable: false, formatter: _isOrNotFormatter, width: 100},
                {label: '是否开通', name: 'isOpen', sortable: false, formatter: _isOrNotFormatter, width: 100},
                {label: '是否抓取', name: 'spiderOk', sortable: false, formatter: _isOrNotFormatter, width: 100},
                {label: '官网网址', name: 'websiteUrl', sortable: false, width: 180},
                {label: '查询参数', name: 'inputJson', sortable: false, formatter: _inputJsonFormatter, width: 180},
                {label: '帮助提示', name: 'helpJson', sortable: false, width: 100},
                {label: '错误描述', name: 'errorDescription', sortable: false, width: 100},
                {label: '错误账户', name: 'errorExample', sortable: false, width: 100},
                {label: '备注', name: 'memo', sortable: false, width: 100},
                {label: '操作', name: 'act', align: 'center', sortable: false, width: 270}
            ],
            autowidth: true,
            shrinkToFit: false,
            height: 'auto',
            gridComplete: _onGridComplete
        };
        _refreshGrid();
    }

    function _inputJsonFormatter(cellvalue) {
        if (!cellvalue) {
            return '';
        }
        var obj = JSON.parse(cellvalue);
        if (!obj || !obj.forms || !obj.forms[0] || !obj.forms[0].inputs || !obj.forms[0].inputs.length) {
            return "";
        }
        var arr = obj.forms[0].inputs;
        var str = "";
        arr.forEach(function (data, index) {
            if (data.desc && data.name) {
                if (index == 0) {
                    str += data.desc;
                } else {
                    str += ", " + data.desc;
                }
            }
        });
        return str;
    }

    function _isOrNotFormatter(cellvalue) {
        if (cellvalue == 1) {
            return '是';
        }
        if (cellvalue == 0) {
            return '否';
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
                $compile('<button type="button" class="btn btn-sm btn-success m-r-xs" ng-click="vm.editSbCityHelpTemplate(\'' + code + '\')"> 帮助编辑</button>')($scope)
                    .appendTo(jqTds.eq(13));
                $compile('<button type="button" class="btn btn-sm btn-danger m-r-xs" ng-click="vm.editSbCityErrorTemplate(\'' + code + '\')"> 异常编辑</button>')($scope)
                    .appendTo(jqTds.eq(13));
                $compile('<button type="button" class="btn btn-sm btn-primary m-r-xs" ng-click="vm.viewDetail(\'' + code + '\')"> 查看详情</button>')($scope)
                    .appendTo(jqTds.eq(13));
            });
    }

    function _refreshGrid() {
        vm.searchOpts = {
            pageSize: vm.searchOpts.pageSize,
            maxSize: 5,
            txt: vm.searchOpts.txt
        };
        if (vm.isOpen == 1 || vm.isOpen == 0) {
            vm.searchOpts.isOpen = vm.isOpen;
        }
        if (vm.spiderOk == 1 || vm.spiderOk == 0) {
            vm.searchOpts.spiderOk = vm.spiderOk;
        }
        if (vm.province && vm.province.name) {
            vm.searchOpts.province = vm.province.name;
        }
        if (vm.city && vm.city.code) {
            vm.searchOpts.code = vm.city.code;
        }
        if (vm.isActive == 1 || vm.isActive == 0) {
            vm.searchOpts.isActive = vm.isActive;
        }
        vm.searchOpts.pageNumber = vm.pageNumber;
        if (!vm.searchOpts.pageNumber) {
            vm.searchOpts.pageNumber = 1;
        }
        if (!vm.searchOpts.pageSize) {
            vm.searchOpts.pageSize = WebConst.defaultQueryPageSize;
        }
        if (!vm.searchOpts.txt) {
            vm.searchOpts.txt = "";
        }
        var url = WEB_URL + "/city/filter";
        BlockUI.mask({animate: true});
        $http.post(url, vm.searchOpts).success(function (json) {
            BlockUI.unmask();
            if (json && json.success && json.data) {
                var data = json.data;
                vm.pageResult = data;
                vm.sbCities = data.pageData;
                vm.grid.reload(vm.sbCities);
            } else {
                vm.pageResult = {
                    pageNumber: 1,
                    pageSize: 20,
                    totalCount: 0,
                    totalPages: 1,
                    pageData: []
                };
                vm.sbCities = vm.pageResult.pageData;
                vm.grid.reload(vm.sbCities);
                MsgUtil.toastInfo("无符合搜索条件结果");
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

    function _editSbCityHelpTemplate(code) {
        if (!code) {
            console.log('code不存在');
            return;
        }
        var modalInstance = $modal.open({
            templateUrl: 'tpl/shebaoMgmt/popup_edit_sb_help.html',
            controller: 'sbCityHelpEditController as vm',
            size: 'lg',
            backdrop: 'static',
            keyboard: false,
            resolve: {
                cityCode: function () {
                    return angular.copy(code);
                }
            }
        });
        modalInstance.result.then(function (status) {
            if (status == 1) {
                _refreshGrid();
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
            resolve: {
                cityCode: function () {
                    return angular.copy(code);
                }
            }
        });
        modalInstance.result.then(function (status) {
            if (status == 1) {
                _refreshGrid();
            }
        });
    }

    function _viewDetail(code) {
        if (!code) {
            console.log('code不存在');
            return;
        }
        var modalInstance = $modal.open({
            templateUrl: 'tpl/shebaoMgmt/popup_edit_sb_details.html',
            controller: 'sbCityDetailsEditController as vm',
            size: 'lg',
            backdrop: 'true',
            keyboard: false,
            resolve: {
                cityCode: function () {
                    return angular.copy(code);
                }
            }
        });
        modalInstance.result.then(function (res) {
            console.info(res);
        });
    }

}]);

//社保异常配置
app.controller('sbCityErrorEditController', ['$compile', '$sce', '$http', '$timeout', '$modalInstance', '$modal', 'cityCode', 'MsgUtil', 'WebConst', 'BlockUI',
    function ($compile, $sce, $http, $timeout, $modalInstance, $modal, cityCode, MsgUtil, WebConst, BlockUI) {
        var vm = this, $ = angular.element;
        var WEB_URL = WebConst.WEB_URL;

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
            var url = WEB_URL + "/city/error/view/" + code;
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
            BlockUI.mask({animate: true});
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

//社保帮助配置
app.controller('sbCityHelpEditController', ['$compile', '$sce', '$http', '$timeout', '$modalInstance', '$modal', 'cityCode', 'MsgUtil', 'WebConst', 'BlockUI',
    function ($compile, $sce, $http, $timeout, $modalInstance, $modal, cityCode, MsgUtil, WebConst, BlockUI) {
        var vm = this, $ = angular.element;
        var WEB_URL = WebConst.WEB_URL;

        vm.cityCode = cityCode;

        vm.ok = ok;
        vm.cancel = cancel;

        vm.addTxtTip = _addTxtTip;
        vm.addHrefTip = _addHrefTip;
        vm.deleteTip = _deleteTip;

        _init();

        function _init() {
            vm.helpJson = {
                tips: {
                    title: "",
                    content: []
                },
                problems: {
                    fb_pwd: false,
                    call_help: false
                }
            };
            _getCityDetail(vm.cityCode);
        }

        function _getCityDetail(code) {
            var url = WEB_URL + "/help/view/shebao";
            BlockUI.mask({animate: true});
            $http.post(url, {"cityCode": code}).success(function (json) {
                BlockUI.unmask();
                if (json && json.success && json.data) {
                    var dataJson = JSON.parse(json.data);
                    _initHelpJson(dataJson);
                } else {
                    vm.helpJson = {
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
                    vm.helpJson.problems.fb_pwd = true;
                    vm.helpJson.problems.fb_pwd_location = json.problems.fb_pwd_location;
                } else {
                    vm.helpJson.problems.fb_pwd = false;
                }
                if (json.problems.call_help == "1") {
                    vm.helpJson.problems.call_help = true;
                } else {
                    vm.helpJson.problems.call_help = false;
                }
            }
            if (!json.tips) {
                return;
            }
            if (json.tips.title) {
                vm.helpJson.tips.title = json.tips.title;
            }
            if (json.tips.content) {
                vm.helpJson.tips.content = json.tips.content;
                vm.helpJson.tips.content.forEach(function (tip, i) {
                    tip.index = i;
                });
            }
        }

        function _addHrefTip() {
            var tip = {
                txt: "",
                location: "",
                index: vm.helpJson.tips.content.length
            };
            vm.helpJson.tips.content.push(tip);
        }

        function _addTxtTip() {
            var tip = {
                txt: "",
                index: vm.helpJson.tips.content.length
            };
            vm.helpJson.tips.content.push(tip);
        }

        function _deleteTip(index) {
            vm.helpJson.tips.content.splice(index, 1);
            vm.helpJson.tips.content.forEach(function (tip, i) {
                tip.index = i;
            })
        }

        function ok() {
            if (vm.helpJson.problems.fb_pwd && !vm.helpJson.problems.fb_pwd_location) {
                MsgUtil.toastWarn("忘记密码链接不能为空");
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
            if (vm.helpJson.problems.call_help) {
                json.problems.call_help = "1";
            } else {
                json.problems.call_help = "0";
            }

            if (vm.helpJson.problems.fb_pwd) {
                json.problems.fb_pwd = "1";
                json.problems.fb_pwd_location = vm.helpJson.problems.fb_pwd_location;
            } else {
                json.problems.fb_pwd = "0";
            }
            if (vm.helpJson.tips.content.length < 1 && !vm.helpJson.tips.title) {
                _savHelpJson(json);
                return;
            }

            if (!vm.helpJson.tips.title) {
                MsgUtil.toastWarn("请输入标题");
                return;
            }
            json.tips.title = vm.helpJson.tips.title;
            if (vm.helpJson.tips.content.length < 1) {
                MsgUtil.toastWarn("请输入至少一条提示");
                return;
            }
            for (var i = 0; i < vm.helpJson.tips.content.length; i++) {
                var tip = vm.helpJson.tips.content[i];
                if (!tip.txt) {
                    MsgUtil.toastWarn("提示" + (i + 1) + "内容不能为空");
                    return;
                }
                if (tip.location == "") {
                    MsgUtil.toastWarn("提示" + (i + 1) + "链接不能为空");
                    return;
                }
            }

            vm.helpJson.tips.content.forEach(function (data, i) {
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
                cityCode: vm.cityCode,
                helpJson: helpStr
            };
            var url = WEB_URL + "/help/save/shebao";
            $http.post(url, params).success(function (json) {
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

//社保详情
app.controller('sbCityDetailsEditController', ['$compile', '$sce', '$http', '$timeout', '$modalInstance', '$modal', 'cityCode', 'MsgUtil', 'WebConst', 'BlockUI',
    function ($compile, $sce, $http, $timeout, $modalInstance, $modal, cityCode, MsgUtil, WebConst, BlockUI) {
        var vm = this, $ = angular.element;
        var WEB_URL = WebConst.WEB_URL;

        vm.cityCode = cityCode;

        vm.inputJson = {};
        vm.helpJson = {};

        vm.close = _close;

        _init();

        function _init() {
            vm.city = {};
            _getCityDetail(vm.cityCode);
        }

        function _getCityDetail(code) {
            var url = WEB_URL + "/city/view/" + code;
            BlockUI.mask({animate: true});
            $http.post(url).success(function (json) {
                BlockUI.unmask();
                if (json && json.success && json.data) {
                    vm.city = json.data;
                    _initJson(json.data);
                } else {
                    vm.city = {};
                }
            });
        }

        function _initJson(data) {
            _initInputJson(data.inputJson);
            _initHelpJson(data.helpJson);
        }

        function _initHelpJson(_inputJson) {
            vm.helpJson = {
                tips: {},
                problems: {},
                closed: true
            };
            if (!_inputJson) {
                return;
            }
            _inputJson = JSON.parse(_inputJson);
            if (!_inputJson || !(_inputJson.tips || _inputJson.problems)) {
                return;
            }
            if (_inputJson.tips) {
                vm.helpJson.tips = _inputJson.tips;
            }
            if (_inputJson.problems) {
                vm.helpJson.problems = _inputJson.problems;
            }
        }

        function _initInputJson(_inputJson) {
            vm.inputJson = {
                forms: [],
                closed: true
            };
            if (!_inputJson) {
                return;
            }
            _inputJson = JSON.parse(_inputJson);
            if (!_inputJson || !_inputJson.forms || !_inputJson.forms.length) {
                return;
            }
            vm.inputJson.forms = _inputJson.forms;
        }

        function _close() {
            $modalInstance.dismiss('cancel');
        }

    }
]);