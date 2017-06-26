// Intercepting HTTP calls with AngularJS.
angular.module('app')
  .config(function($provide, $httpProvider) {
    // Make AngularJS $http service behave like jQuery.ajax()
    // http://victorblog.com/2012/12/20/make-angularjs-http-service-behave-like-jquery-ajax/
    // -->
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    var param = function(obj) {
      var query = '',
        name, value, fullSubName, subName, subValue, innerObj, i;

      for (name in obj) {
        value = obj[name];

        if (angular.isArray(value)) {
          for (i = 0; i < value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        } else if (angular.isDate(value)) {
          // 日期转化成毫秒值
          query += encodeURIComponent(name) + '=' + value.getTime() + '&';
        } else if (angular.isObject(value)) {
          for (subName in value) {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        } else if (value !== undefined && value !== null) {
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

      }

      return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function(data) {
      return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
    // <--


    // Intercept http calls.
    $provide.factory('responseInterceptor', function($q, $window, BlockUI) {
      return {
        // On request success
        request: function(config) {
          // console.log('$http request', config); // Contains the data about the request before it is sent.

          // Pass cookies to server when requesting CORS
          // see: http://stackoverflow.com/questions/21455045/angularjs-http-cors-and-http-authentication
          // -->
          //
          // LxC: Not working, see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
          // Important note: when responding to a credentialed request,  server must specify a domain,
          // and cannot use wild carding.  The above example would fail if the header was wildcarded as:
          // Access-Control-Allow-Origin: *.
          // Since the Access-Control-Allow-Origin explicitly mentions http://foo.example,
          // the credential-cognizant content is returned to the invoking web content.
          //
          //config.withCredentials = true;
          // <--

          _doMask(config.blockUI);

          // Return the config or wrap it in a promise if blank.
          return config;
        },

        // On request failure
        /*
        requestError: function(rejection) {
          // console.log('$http requestError', rejection); // Contains the data about the error on the request.

          // Return the promise rejection.
          return $q.reject(rejection);
        },
        */

        // On response success
        response: function(response) {
          // console.log('$http response', response); // Contains the data from the response.

          var config = response.config || {};
          _undoMask(config.blockUI);

          // Do alert error message
          var data = response.data;
          if (data&&angular.isObject(data)&&!(data instanceof ArrayBuffer)) {
            if (!data.success) {
              var err = data.error;
              if (typeof err.code !== 'number')
                $window.alert(err.message);
              // 带code的错误消息留给业务逻辑自己处理
              return $q.reject(response);
            }
          }

          // Return the response or promise.
          return response || $q.when(response);
        },

        // On response failture
        responseError: function(response) {
          //console.log('$http responseError', response); // Contains the data about the error.

          var config = response.config || {};
          _undoMask(config.blockUI);

          // Return the promise response.
          return $q.reject(response);
        }
      };
      
      function _doMask(opts) {
        if (typeof opts === 'boolean') {
          if (opts)
            BlockUI.mask({ animate: true });
        } else if (angular.isObject(opts)) {
          BlockUI.mask(opts);
        } else {
          // 默认全局蒙版
          BlockUI.mask({ animate: true });
        }
      }

      function _undoMask(opts) {
        if (typeof opts === 'boolean') {
          if (opts)
            BlockUI.unmask();
        } else if (angular.isObject(opts)) {
          BlockUI.unmask(opts.target);
        } else {
          // 取消默认的全局蒙版
          BlockUI.unmask();
        }
      }
    });

    // Add auth interceptor
    //$httpProvider.interceptors.push('authInterceptor');
    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('responseInterceptor');

  });