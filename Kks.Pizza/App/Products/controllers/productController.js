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
                            toastr.success('added', item.productName);
                            toastr.options = {
                                "closeButton": false,
                                "debug": false,
                                "newestOnTop": false,
                                "progressBar": false,
                                "positionClass": "toast-top-right",
                                "preventDuplicates": false,
                                "onclick": null,
                                "showDuration": "300",
                                "hideDuration": "1000",
                                "timeOut": "5000",
                                "extendedTimeOut": "1000",
                                "showEasing": "swing",
                                "hideEasing": "linear",
                                "showMethod": "fadeIn",
                                "hideMethod": "fadeOut"
                            }
                            $scope.selectedItemCount++;
                        }
                        else {
                            if ((temp.indexOf(item)) < 0) {
                                temp.push(item);
                                toastr.success('added', item.productName);
                                toastr.options = {
                                    "closeButton": false,
                                    "debug": false,
                                    "newestOnTop": false,
                                    "progressBar": false,
                                    "positionClass": "toast-top-right",
                                    "preventDuplicates": false,
                                    "onclick": null,
                                    "showDuration": "300",
                                    "hideDuration": "1000",
                                    "timeOut": "1000",
                                    "extendedTimeOut": "1000",
                                    "showEasing": "swing",
                                    "hideEasing": "linear",
                                    "showMethod": "fadeIn",
                                    "hideMethod": "fadeOut"
                                }
                                $scope.selectedItemCount++;
                            }
                            else {
                                toastr.error('Already added', item.productName);
                                toastr.options = {
                                    "closeButton": false,
                                    "debug": false,
                                    "newestOnTop": false,
                                    "progressBar": false,
                                    "positionClass": "toast-top-right",
                                    "preventDuplicates": false,
                                    "onclick": null,
                                    "showDuration": "10",
                                    "hideDuration": "10",
                                    "timeOut": "1000",
                                    "extendedTimeOut": "1000",
                                    "showEasing": "swing",
                                    "hideEasing": "linear",
                                    "showMethod": "fadeIn",
                                    "hideMethod": "fadeOut"
                                }
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