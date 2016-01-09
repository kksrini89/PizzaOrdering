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
                .$promise.then(function (data) {
                    console.log("Success", data);
                    if (data.products.length > 1) {
                        toastr.success('Your orders are placed');
                    }
                    else if (data.products.length == 1)
                        toastr.success('Your order is placed');

                    toastr.options = {
                        "closeButton": false,
                        "debug": false,
                        "newestOnTop": true,
                        "progressBar": false,
                        "positionClass": "toast-top-right",
                        "preventDuplicates": false,
                        "onclick": null,
                        "showDuration": "300",
                        "hideDuration": "1000",
                        "timeOut": "1000",
                        "extendedTimeOut": "2000",
                        //for animation
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        //for showing
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    }
                    $state.go('End', { customer: order.customer });
                },
                function (failure) { console.log("failure", failure) });
            };
        }
    }]);
})();