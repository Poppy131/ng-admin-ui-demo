'use strict';

/* Controllers */
angular.module('app')
  .controller('AppCtrl', ['$scope', '$rootScope', '$localStorage', '$http', '$window', '$state', 'authService', 'WebConst',
    function ($scope, $rootScope, $localStorage, $http, $window, $state, authService, WebConst) {
      $scope.app = {
        name: '',
        version: '',
        copyright: '',
        // for chart colors
        color: {
          primary: '#7266ba',
          info: '#23b7e5',
          success: '#27c24c',
          warning: '#fad733',
          danger: '#f05050',
          light: '#e8eff0',
          dark: '#3a3f51',
          black: '#1c2b36'
        },
        settings: {
          themeID: 1,
          navbarHeaderColor: 'bg-info dker',
          navbarCollapseColor: 'bg-info dk',
          asideColor: 'bg-dark',
          headerFixed: true,
          asideFixed: true,
          asideFolded: false,
          asideDock: false,
          container: false
        }
      };
    }
  ]);