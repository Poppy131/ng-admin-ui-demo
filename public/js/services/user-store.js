'use strict';

/**
 * This is an in-memory Store, which is used to share data between controllers.
 *
 * 注意：一旦刷新页面，这个里面存放的数据都会被清空掉
 */
angular.module('app')
  .factory('UserStore', function() {
    var storeData = {};

    return {
      // get the data if value is not present, otherwise set the value
      data: function(key, value) {
        if (!key)
          return;
        if (typeof value !== 'undefined')
          storeData[key] = value;
        else
          return storeData[key];
      },

      // clear the whole user store
      clear: function() {
        storeData = [];
      }
    };
  });