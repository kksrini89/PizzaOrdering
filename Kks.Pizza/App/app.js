(function () {
    "use strict";
    var app = angular.module('pizzaApp', ['ngResource', 'ui.router', 'ui.bootstrap']);
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('Home', {
            url: '/',
            templateUrl: 'App/MainPage.html'
        })
        .state('Menu', {
            url: '/menu',
            templateUrl: 'App/Products/partials/product.html',
            controller: 'productController'
        })
        .state('CustomerDetails', {
            url: '/customerdetails',
            params: {
                value: {
                    array: true,
                }
            },
            templateUrl: 'App/Order/partials/order.html',
            controller: 'orderController'
        })
        .state('End', {
            url: '/end',
            templateUrl: 'App/End/partials/end.html',
            controller: 'endController'
        });
    }]);

    app.constant('appSettings', {
        serverPath: "http://localhost:29208"
    });
})();