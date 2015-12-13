(function () {
    'use strict';
    angular.module('pizzaApp')
            .controller('productController', ['$scope', 'productResource', function ($scope, productResource) {
                $scope.products = [];
                productResource.query(function (data) {
                    $scope.products = data;
                });
            }]);
})();