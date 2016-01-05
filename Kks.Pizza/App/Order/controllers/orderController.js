(function () {
    angular.module('pizzaApp')
    .controller('orderController', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
        var products = [];
        products = $stateParams.products;
        var viewmodel = {};
        viewmodel.customerName = "";
        viewmodel.mobileNumber = "";
        viewmodel.address = "";
        $scope.model = viewmodel;
        //$scope.customerName = "";
        //$scope.mobileNumber = "";
        //$scope.address = "";
        //$scope.regexMobileNumber = "/^[0-9]{10,10}$/;";
        $scope.cancel = function () {
            $state.go('Menu');
        }
        $scope.submit = function (customer) {
            if (customer != null)
                $state.go('End', { customer: customer });
        }
    }]);
})();