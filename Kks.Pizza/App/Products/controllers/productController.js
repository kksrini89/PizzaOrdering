(function () {
    'use strict';
    angular.module('pizzaApp')
            .controller('productController', ['$scope', 'productResource', '$state', function ($scope, productResource, $state) {
                $scope.products = [];
                $scope.products = productResource.getProducts();
                $scope.selectedItemCount = 0;
                $scope.selectedItems = function (item) {
                    var temp = [];
                    if (item != null)
                        temp.push(item);
                };
                $scope.OnNextClick = function () {
                    $state.go('CustomerDetails', {});
                };

                //productResource.query(function (data) {
                //    $scope.products = data;
                //});
            }]);
})();