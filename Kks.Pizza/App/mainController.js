(function () {
    angular.module('pizzaApp')
    .controller('mainController', ['$scope', 'mainService', '$modal', function ($scope, mainService, $modal) {
        $scope.orders = mainService.getOrders();
        $scope.openOrder = function () {

        };
    }]);
})();