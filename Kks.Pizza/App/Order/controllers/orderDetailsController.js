(function () {
    angular.module('pizzaApp')
           .controller('orderDetailsController', ['$scope', 'orderedItems', function ($scope, orderedItems) {
               var viewModel = {};
               if (null != orderedItems) {
                   viewModel.orderedProducts = orderedItems.products;
                   $scope.model = viewModel;
               }
           }]);
})();