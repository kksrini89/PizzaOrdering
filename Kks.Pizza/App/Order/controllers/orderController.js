(function () {
    angular.module('pizzaApp')
    .controller('orderController', ['$scope', '$state', '$stateParams', 'orderResource', function ($scope, $state, $stateParams, orderResource) {
        //var products = [];
        //products = $stateParams.products;
        //var viewmodel = {};
        //viewmodel.customerName = "";
        //viewmodel.mobileNumber = "";
        //viewmodel.address = "";
        //$scope.model = viewmodel;        

        var viewModel = {
            customer: {
                name: "",
                mobileNumber: "",
                address: ""
            },
            products: []
        };
        viewModel.products = $stateParams.products;
        $scope.entity = viewModel;

        $scope.cancel = function () {
            $state.go('Menu');
        }
        $scope.submit = function (order) {
            if (order != null) {
                orderResource.saveItem(order)
                .$promise.then(function (data) { console.log("Success", data) },
                function (failure) { console.log("failure", failure) });
                $state.go('End', { customer: order.customer });
            };
        }
    }]);
})();