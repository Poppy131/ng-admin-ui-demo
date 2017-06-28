app.controller('ShebaoListCtrl', ['$scope', '$http', 'WebConst', 'BlockUI', function ($scope, $http, WebConst, BlockUI) {
    vm = this, $ = angular.element;

    var WEB_URL = WebConst.WEB_URL;

    vm.searchOpts = {
        pageSize: WebConst.defaultQueryPageSize,
        maxSize: 5
    };

    vm.pageResult = [];
    vm.pageNumber = 1;
    vm.grid = {};

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
                {label: '编号', name: 'code', sortable: false, width:"10%"},
                {label: '城市名', name: 'name', sortable: false, width:"10%"},
                {label: '省份', name: 'pName', sortable: false, width:"5%"},
                {label: '状态', name: 'isActive', sortable: false, formatter : _statusFormatter, width:"5%"},
                {label: '官网网址', name: 'websiteUrl', sortable: false, width:"20%"}
            ],
            autowidth: true,
            shrinkToFit: true,
            height: 'auto',
            gridComplete: _onGridComplete
        };
        refreshGrid();
    }

    function _statusFormatter(cellvalue) {
        if(cellvalue == 1){
            return '正常';
        }
        if(cellvalue == 0){
            return '错误';
        }
        return '';
    }

    function _onGridComplete() {

    }

    function refreshGrid() {
        var url = WEB_URL + "/city/tree";
        $http.post(url).success(function (json) {
            if (json && json.success && json.data) {
                var data = json.data;
                vm.provinces = data;
            }
        });
    }

    function _getCitiesTree() {
        var url = WEB_URL + "/city/filter";
        $http.post(url).success(function (json) {
            if (json && json.success && json.data) {
                var data = json.data;
                vm.pageResult = data.pageData;
                vm.grid.reload(vm.pageResult);
            }
        });
    }

}]);