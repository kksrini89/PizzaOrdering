(function () {
    angular.module('pizzaApp')
    .controller('orderController', ['$scope', '$state', '$stateParams', 'orderResource', 'orderService', function ($scope, $state, $stateParams, orderResource, orderService) {
        //var viewModel = {
        //    customer: {
        //        name: "",
        //        mobileNumber: "",
        //        address: ""
        //    },
        //    products: []
        //};
        //viewModel.products = $stateParams.products;

        if (null != orderService)
            viewModel = orderService;
        $scope.entity = viewModel;

        $scope.remove = function (itemIndexTobeRemoved) {
            $scope.entity.products.splice(itemIndexTobeRemoved, 1);
        }

        $scope.cancel = function () {
            $state.go('Menu');
        }
        $scope.submit = function (order) {
            if (order != null) {
                //var currentdate = new Date();
                //var datetime = currentdate.getDate() + "/"
                //                + (currentdate.getMonth() + 1) + "/"
                //                + currentdate.getFullYear() + " @ "
                //                + currentdate.getHours() + ":"
                //                + currentdate.getMinutes() + ":"
                //                + currentdate.getSeconds();
                order.orderedDate = orderService.orderedDate = new Date();
                orderResource.saveItem(order)
                .$promise.then(function (data) {
                    //console.log("Success", data);
                    if (data.selectedPizzas.length > 1) {
                        toastr.success('Your orders are placed');
                    }
                    else if (data.selectedPizzas.length == 1)
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
                        "timeOut": "3000",
                        "extendedTimeOut": "4000",
                        //for animation
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        //for showing
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    }
                    //$state.go('End', { customer: order.customer, orderedDate: order.orderedDate });
                    $state.go('End');
                },
                function (failure) {
                    //console.log("failure", failure);
                    toastr.error("Try after sometime. Sorry for the inconvenience");
                });
            };
        }
    }]);
})();