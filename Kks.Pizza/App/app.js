(function () {
    "use strict";
    var app = angular.module('pizzaApp', ['ngResource', 'ui.router', 'ui.bootstrap']);
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
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
            params: {
                products: {
                    array: true,
                }
            },
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

    app.constant('appSettings', {
        serverPath: "http://localhost:29208"
    });
})();