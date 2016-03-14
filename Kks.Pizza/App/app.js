(function () {
    "use strict";
    var app = angular.module('pizzaApp', ['auth0', 'ngResource', 'ui.router', 'ui.bootstrap', 'angular-loading-bar', 'angular-storage', 'angular-jwt']);
    app.config(['authProvider', '$stateProvider', '$urlRouterProvider', 'jwtInterceptorProvider', 'cfpLoadingBarProvider', function (authProvider, $stateProvider, $urlRouterProvider, jwtInterceptorProvider, cfpLoadingBarProvider) {
        $urlRouterProvider.otherwise('/');
        //cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><img src="images/loader.gif" id="loading-Image" alt="Loading"/></div>'

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
            },
            requiresLogin: true
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

        //Auth0 Related.
        authProvider.init({
            domain: DOMAIN,
            clientId: CLIENT_ID,
            loginUrl: '/login'
        });

        jwtInterceptorProvider.tokenGetter = function (store) {
            return store.get('token');
        }
    }]);

    app.run(['$rootScope', 'auth', 'store', 'jwtHelper', '$location', '$state', '$stateParams', function ($rootScope, auth, store, jwtHelper, $location, $state, $stateParams) {
        console.log("app run");

        $rootScope.$on('$locationChangeStart', function () {
            if (!auth.isAuthenticated) {
                var token = store.get('token');
                if (token) {
                    if (!jwtHelper.isTokenExpired(token)) {
                        auth.authenticate(store.get('profile'), token);
                    }
                    else {
                        $location.path('/');
                    }
                }
            }
        });

        $rootScope.$on('$stateChangeStart', function () {
            //$rootScope.prevState = fromState;
            //$rootScope.currentState = toState;
            //if (toState.name === 'Menu' || toState.name === 'OrderEntry') {
            //if (sessionStorage.restorestate == "true") {
            //$rootScope.$broadcast('restoreState'); //let everything know we need to restore state
            //sessionStorage.restorestate = false;
            //}
            //}
            //console.log('State Change Start From: ' + fromState.name + ' To ' + toState.name);


        });

        // Reload or Refresh - Data Persistence logic
        window.onbeforeunload = function (event) {
            $rootScope.$broadcast('saveState');
            console.log('window.onbeforeunload method fired');
        };

        auth.hookEvents(); //Auth0 related.
    }]);

    app.constant('appSettings', {
        serverPath: "http://localhost:29208"
    });
})();