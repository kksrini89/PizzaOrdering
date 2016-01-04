(function () {
    angular.module('pizzaApp')
    .controller('orderController', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
        var products = [];
        products = $stateParams.products;
        $scope.customerName = "";
        $scope.mobileNumber = "";
        $scope.address = "";
        $scope.regexMobileNumber = "/^[0-9]{10,10}$/;";
        $scope.cancel = function () {
            $state.go('Menu');
        }
        $scope.submit = function (item) {

        }
    }]);
})();