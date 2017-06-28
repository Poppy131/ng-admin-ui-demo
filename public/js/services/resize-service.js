'use strict';

/**
 * 处理window的resize事件，以及content区域因为侧边栏收缩引起的大小改变
 */
angular.module('app')
  .factory('resizeService', function($window, $timeout) {
    var resizeHandlers = [];

    // 监测window的resize事件
    var tid = null;
    angular.element($window).on('resize', function() {
      //console.log('window resized');
      if (tid) $timeout.cancel(tid);
      tid = $timeout(function() {
        _notifyResizeHandlers(true);
        tid = null;
      }, 50);
    });

    return {
      onResize: function(windowResized) {
        _notifyResizeHandlers(windowResized);
      },

      registerHandler: function(resizeHandler) {
        if (resizeHandlers.indexOf(resizeHandler) > -1)
          return;  // 已添加resizeHandler，无需重复添加
        resizeHandlers.push(resizeHandler);
      },

      unregisterHandler: function(resizeHandler) {
        var idx = resizeHandlers.indexOf(resizeHandler);
        if (idx < 0)
          return;  // 尚未添加过resizeHandler
        resizeHandlers.splice(idx, 1);
      }
    };

    // 通知resizeHandler，传入的参数：
    //   true: window大小调整了
    //   false: 侧边栏大小变化了
    function _notifyResizeHandlers(windowResized) {
      resizeHandlers.forEach(function(resizeHandler) {
        resizeHandler(windowResized);
      });
    }
  });