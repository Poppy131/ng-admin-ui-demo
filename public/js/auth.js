angular.module('app')
    .factory('authService', ['$rootScope', '$http', '$state', '$window', 'WebConst',
        function ($rootScope, $http, $state, $window, WebConst) {

            function login(username, password) {
            }

            function logout() {

            }

            return {
                login: login,
                logout: logout
            };
        }
    ])
    .factory('authInterceptor', ['$q', '$injector', '$window', '$timeout', 'authToken', 'WebConst',
        function ($q, $injector, $window, $timeout, authToken, WebConst) {
            var STATE_LOGIN = WebConst.STATE_LOGIN;

            return {
                // On request success
                request: function (config) {
                    // console.log('$http request', config); // Contains the data about the request before it is sent.

                    var token = authToken.getToken();
                    // if the token exists, add it to the header as X-Access-Token
                    if (token)
                        config.headers['X-Access-Token'] = token;

                    // Return the config or wrap it in a promise if blank.
                    return config;
                },

                // On response failture
                responseError: function (response) {
                    //console.log('$http responseError', response); // Contains the data about the error.

                    // 下面这个flag主要用于authService.getSelfProfileHttp里面
                    var responseErrorNoAlert = response.config ? response.config.responseErrorNoAlert : false;

                    // 特殊处理
                    // 0: 没有网络连接
                    // 401：认证失败，需要重新登录
                    // 403：权限不够，提示用户
                    if (!response.status) {
                        if (!responseErrorNoAlert) $window.alert('连接错误，请检查您的网络！');
                    } else if (response.status == 401) {
                        if (!responseErrorNoAlert && authToken.getToken()) $window.alert('您的会话已过期，请重新登录！');
                        authToken.setToken('');  // 重置保存的token
                        $injector.get('$state').go(STATE_LOGIN);
                    } else if (response.status == 403) {
                        if (!responseErrorNoAlert) $window.alert('您没有权限执行当前操作！');
                    }

                    // Return the promise response.
                    return $q.reject(response);
                }
            };
        }
    ]);