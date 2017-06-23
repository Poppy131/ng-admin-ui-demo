angular.module('app')
  .factory('authService', ['$rootScope', '$http', '$state', '$window', 'WebConst',
    function($rootScope, $http, $state, $window, WebConst) {

      function login(username, password) {
      }

      function logout() {

      }

      return {
        login: login,
        logout: logout
      };
    }
  ]);