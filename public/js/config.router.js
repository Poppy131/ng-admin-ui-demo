'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(['$rootScope', '$state', '$stateParams', 'authService',
    function ($rootScope, $state, $stateParams, authService) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.authService = authService;
    }
  ])
  .config(['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
    function ($stateProvider, $urlRouterProvider, JQ_CONFIG) {
      //var popup = getUrlParam('popup'), isDefaultSet = false;
      //if (!isDefaultSet) {
      //  // Set the default page
      //  $urlRouterProvider.otherwise('/app/page/profile');
      //}

      // Configure states
      $stateProvider
        .state('app', {
          abstract: true,
          url: '/app',
          templateUrl: 'tpl/app.html'
        })
        // 帮助配置
        .state('app.helpSetting', {
          url: '/helpSetting',
          template: '<div ui-view class="h-full"></div>'
        })
        .state('app.helpSetting.shebao', {
          url: '/shebao',
          templateUrl: 'tpl/helpSetting/shebao.html',
          resolve: {
            deps: ['uiLoad',
              function(uiLoad) {
                return uiLoad.load(['js/app/helpSetting/shebao.js']);
              }
            ]
          }
        })
        .state('app.helpSetting.gjj', {
          url: '/gjj',
          templateUrl: 'tpl/helpSetting/gjj.html',
          resolve: {
            deps: ['uiLoad',
              function(uiLoad) {
                return uiLoad.load(['js/app/helpSetting/gjj.js']);
              }
            ]
          }
        })

        // 个人中心
        .state('app.page', {
          url: '/page',
          template: '<div ui-view></div>'
        })
        .state('app.page.profile', {
          url: '/profile',
          templateUrl: 'tpl/profile/profile.html',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load('ngImgCrop').then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/profile.js');
                  }
                );
              }
            ]
          }
        });


      // Helper function to get parameters from the query string.
      function getUrlParam(paramName) {
        var reParam = new RegExp('(?:[\?&]|&)' + paramName + '=([^&]+)', 'i');
        var match = window.location.search.match(reParam);

        return (match && match.length > 1) ? match[1] : null;
      }
    }
  ]);