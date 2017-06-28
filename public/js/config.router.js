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
                } else if (popup === 'productBatchImgViewer') {
                    $urlRouterProvider.otherwise('/popup/productBatchImgViewer');
                    isDefaultSet = true;
                }
            }
            if (!isDefaultSet) {
                // Set the default page
                //$urlRouterProvider.otherwise('/toLogin');
            }

            $locationProvider.html5Mode(true);

            // Configure states
            $stateProvider

                .state('app', {
                    abstract: true,
                    url: '/app',
                    templateUrl: 'tpl/app.html'
                })

                // 社保管理
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

                // 公积金管理
                .state('app.gjjMgmt', {
                    url: '/gjjMgmt',
                    template: '<div ui-view class="h-full"></div>'
                })
                .state('app.gjjMgmt.helpSetting', {
                    url: '/helpSetting',
                    templateUrl: 'tpl/gjjMgmt/helpSetting.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['/js/app/gjjMgmt/helpSetting.js']);
                            }
                        ]
                    }
                })
                .state('app.gjjMgmt.errorMgmt', {
                    url: '/errorMgmt',
                    templateUrl: 'tpl/gjjMgmt/errorMgmt.html',
                    resolve: {
                        deps: ['uiLoad',
                            function (uiLoad) {
                                return uiLoad.load(['/js/app/gjjMgmt/errorMgmt.js']);
                            }
                        ]
                    }
                })

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