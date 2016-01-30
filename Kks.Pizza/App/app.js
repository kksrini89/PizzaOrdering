(function () {
    "use strict";
    var app = angular.module('pizzaApp', ['ngResource', 'ui.router', 'ui.bootstrap', 'angular-loading-bar']);
    app.config(['$stateProvider', '$urlRouterProvider', 'cfpLoadingBarProvider', function ($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
        $urlRouterProvider.otherwise('/');
        cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><img src="images/loader.gif" id="loading-Image" alt="Loading"/></div>'

        $stateProvider.state('Login', {
            url: '/login',
            templateUrl: 'App/Login/partials/login.html',
            controller: 'loginController'
        })

        $stateProvider.state('Home', {
            url: '/',
            templateUrl: 'App/MainPage.html'
        })
        .state('Menu', {
            url: '/menu',
            templateUrl: 'App/Menu/partials/menu.html',
            controller: 'menuController',
            resolve: {
                productResource: "productResource",
                products: function (productResource) {
                    return productResource.getProducts();
                }
            }
        })
        .state('OrderEntry', {
            url: '/orderentry',
            //params: {
            //    products: {
            //        array: true,
            //    }
            //},
            templateUrl: 'App/Order/partials/order.html',
            controller: 'orderController'
        })
        .state('End', {
            url: '/end',
            params: {
                customer: null,
                orderedDate: null
            },
            templateUrl: 'App/End/partials/end.html',
            controller: 'endController'
        })
        .state('OrderDetails', {
            url: '/orderDetails',
            templateUrl: 'App/Order/partials/orderDetails.html',
            controller: 'orderDetailsController',
            resolve: {
                orderResource: "orderResource",
                orderedItems: function (orderResource) {
                    return orderResource.getOrders();
                }
            }
        });
    }]);

    app.run(['$rootScope', '$location', '$state', '$stateParams', function ($rootScope, $location, $state, $stateParams) {
        console.log("app run");

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.prevState = fromState;
            $rootScope.currentState = toState;
            //if (toState.name === 'Menu' || toState.name === 'OrderEntry') {
            //if (sessionStorage.restorestate == "true") {
            //$rootScope.$broadcast('restoreState'); //let everything know we need to restore state
            //sessionStorage.restorestate = false;
            //}
            //}
            console.log('State Change Start From: ' + fromState.name + ' To ' + toState.name);
        });
        window.onbeforeunload = function (event) {
            $rootScope.$broadcast('saveState');
            console.log('window.onbeforeunload method fired');
        };

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

        });

        //$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {          
        //    $rootScope.prevState = fromState;
        //    $rootScope.currentState = toState;            
        //    console.log('should be loading:' + toState + " - " + fromState);
        //});

        //$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {            

        //});
    }]);

    app.constant('appSettings', {
        serverPath: "http://localhost:29208"
    });
})();