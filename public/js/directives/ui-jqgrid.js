angular.module('app')
.directive('uiJqgrid', function($compile, $timeout) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      config: '=',
      //data: '=',
      api: '=?',
      // for pagination -->
      pageNumber: '=?',
      pageSize: '=?',
      maxSize: '=?',
      pageResult: '=?',
      pageChange: '&?'
      // <--
    },
    link: function(scope, element, attrs) {
      var table, pager;
      // watch for config change
      scope.$watch('config', function(newVal) {
        element.children().empty();
        table = angular.element('<table id="' + attrs.gridid + '"></table>');
        element.append(table);
        if (newVal.pager) delete newVal.pager;  // 我们自己实现分页栏
        table.jqGrid(newVal);

        // Exposes grid api's to the controller. Usage:
        //   view:  <ng-jqgrid … api="grid">
        //   ctrl:  $scope.grid.clear();
        scope.api = {
          clear: function() {
            table.jqGrid('clearGridData').trigger('reloadGrid');
          },
          reload: function(data) {
            table.jqGrid('clearGridData')
                 .jqGrid('setGridParam', { data: data ,rowNum:scope.pageSize},true).trigger('reloadGrid');
          },
          getRowData: function(rowid) {
            return table.jqGrid('getRowData', rowid);
          },
          setRowData: function(rowid, data, cssprop) {
            table.jqGrid('setRowData', rowid, data, cssprop);
          },
          delRowData: function(rowid) {
            table.jqGrid('delRowData', rowid);
          },
          getGridParam: function(name) {
            return table.jqGrid('getGridParam', name);
          },
          setGridParam: function(object) {
            table.jqGrid('setGridParam', object);
          },
          jqGrid: function() {
            return table.jqGrid.apply(table, arguments);
          }
        };

        // 自己实现分页栏
        if (scope.pageNumber || scope.pageSize || scope.pageResult || scope.pageChange) {
          if (!(scope.pageNumber && scope.pageSize && scope.pageResult && scope.pageChange)) {
            console.error('The following attributes are required for pagination: page-number, page-size, page-result, page-change, max-size [optional]');
            return;
          }
          if (!scope.maxSize) scope.maxSize = 5;
          scope.Math = Math;
          /*jshint multistr:true */
          $compile('\
            <div class="m-t" style="line-height:28px">\
              <div class="pull-left">每页显示:\
                <select ng-model="pageSize" ng-change="handlePageChange()">\
                  <option value="10">10</option>\
                  <option value="20">20</option>\
                  <option value="30">30</option>\
                  <option value="50">50</option>\
                </select>\
              </div>\
              <div class="pull-right">当前显示第 {{ (pageResult.pageNumber - 1) * pageResult.pageSize + 1 }}-{{ Math.min(pageResult.pageNumber * pageResult.pageSize, pageResult.totalCount) }} 条 (共{{ pageResult.totalCount }}条)</div>\
              <div class="text-center">\
                <pagination total-items="pageResult.totalCount" ng-model="pageNumber" items-per-page="pageSize" max-size="maxSize" boundary-links="true" rotate="false" class="pagination-sm m-t-none m-b-none" previous-text="&lsaquo;" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;" ng-change="handlePageChange()"></pagination>\
              </div>\
            </div>')(scope).appendTo(element);
          // functions for pagination
          scope.handlePageChange = function() {
            $timeout(scope.pageChange, 0);
          };
        }
      });
      // watch for data change
      // LxC: 改成手动添加/刷新数据
      // scope.$watch('data', function(newVal) {
      //   table.jqGrid('setGridParam', { data: newVal }).trigger('reloadGrid');
      // });
    }
  };
});
