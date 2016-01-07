(function () {
    'use strict';
    angular.module('pizzaApp')
            .controller('productController', ['$scope', 'productResource', '$state', function ($scope, productResource, $state) {
                $scope.products = [];
                $scope.products = productResource.getProducts();
                $scope.selectedItemCount = 0;
                var temp = [];
                $scope.selectedItems = function (item) {
                    if (item != null) {
                        if (temp.length == 0) {
                            temp.push(item);
                            $scope.selectedItemCount++;
                        }
                        else {
                            if ((temp.indexOf(item)) < 0) {
                                temp.push(item);
                                $scope.selectedItemCount++;
                            }
                        }
                    }
                };
                $scope.OnNextClick = function () {
                    if (angular.isDefined(temp) && temp.length > 0 && $scope.selectedItemCount > 0)
                        $state.go('CustomerDetails', { products: temp });
                };

                //productResource.query(function (data) {
                //    $scope.products = data;
                //});
            }]);
})();