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
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider) {
        var popup = getUrlParam('popup'), isDefaultSet = false;
        if (popup) {
          if (popup === 'categoryImgViewer') {
            $urlRouterProvider.otherwise('/popup/categoryImgViewer');
            isDefaultSet = true;
          } else if (popup === 'productImgViewer') {
            $urlRouterProvider.otherwise('/popup/productImgViewer');
            isDefaultSet = true;
          }else if (popup === 'productBatchImgViewer') {
            $urlRouterProvider.otherwise('/popup/productBatchImgViewer');
            isDefaultSet = true;
          }
        }
        if (!isDefaultSet) {
          // Set the default page
          $urlRouterProvider.otherwise('/toLogin');
        }

        $locationProvider.html5Mode(true);

        // Configure states
        $stateProvider
            .state('toLogin', {
              url: '/toLogin',
              templateUrl: 'tpl/login.html',
              resolve: {
                deps: ['uiLoad',
                  function (uiLoad) {
                    return uiLoad.load(['/js/app/login.js']);
                  }
                ]
              }
            })

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
                  function (uiLoad) {
                    return uiLoad.load(['/js/app/helpSetting/shebao.js']);
                  }
                ]
              }
            })
            .state('app.helpSetting.gjj', {
              url: '/gjj',
              templateUrl: 'tpl/helpSetting/gjj.html',
              resolve: {
                deps: ['uiLoad',
                  function (uiLoad) {
                    return uiLoad.load(['/js/app/helpSetting/gjj.js']);
                  }
                ]
              }
            })

            // 异常管理
            .state('app.errorMgmt', {
              url: '/errorMgmt',
              template: '<div ui-view class="h-full"></div>'
            })
            .state('app.errorMgmt.shebao', {
              url: '/shebao',
              templateUrl: 'tpl/errorMgmt/shebao.html',
              resolve: {
                deps: ['uiLoad',
                  function (uiLoad) {
                    return uiLoad.load(['/js/app/errorMgmt/shebao.js']);
                  }
                ]
              }
            })
            .state('app.errorMgmt.gjj', {
              url: '/gjj',
              templateUrl: 'tpl/errorMgmt/gjj.html',
              resolve: {
                deps: ['uiLoad',
                  function (uiLoad) {
                    return uiLoad.load(['/js/app/errorMgmt/gjj.js']);
                  }
                ]
              }
            })

            // 列表
            .state('app.shebaoMgmt', {
              url: '/shebaoMgmt',
              template: '<div ui-view class="h-full"></div>'
            })
            .state('app.shebaoMgmt.shebaoList', {
              url: '/list',
              templateUrl: 'tpl/shebaoMgmt/shebaoList.html',
              resolve: {
                deps: ['uiLoad',
                  function (uiLoad) {
                    return uiLoad.load(['/js/app/shebaoMgmt/shebaoList.js']);
                  }
                ]
              }
            })
            // .state('app.reportMgmt.gjj', {
            //     url: '/gjj',
            //     templateUrl: 'tpl/reportMgmt/gjj.html',
            //     resolve: {
            //         deps: ['uiLoad',
            //             function (uiLoad) {
            //                 return uiLoad.load(['/js/app/errorMgmt/gjj.js']);
            //             }
            //         ]
            //     }
            // })

            // 个人中心
            .state('app.profile', {
              url: '/profile',
              templateUrl: 'tpl/profile.html',
              resolve: {
                deps: ['$ocLazyLoad',
                  function ($ocLazyLoad) {
                    return $ocLazyLoad.load('ngImgCrop').then(
                        function () {
                          return $ocLazyLoad.load('/js/app/profile.js');
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