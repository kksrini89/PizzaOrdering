(function () {
    'use strict';
    angular.module('pizzaApp')
            .controller('productController', ['$scope', 'productResource', function ($scope, productResource) {
                $scope.products = [];
                $scope.products = productResource.getProducts();
                $scope.selectedItems = function (item) {

                }

                //productResource.query(function (data) {
                //    $scope.products = data;
                //});
            }]);
})();