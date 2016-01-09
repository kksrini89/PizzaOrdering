﻿(function () {
    'use strict';
    angular.module('pizzaApp')
            .controller('productController', ['$scope', 'productResource', '$state', function ($scope, productResource, $state) {
                $scope.products = [];
                $scope.products = productResource.getProducts();
                $scope.selectedItemCount = 0;
                var temp = [];
                $scope.selectedItems = function (item) {
                    if (item != null) {
                        if (temp !== undefined) {
                            if ((temp.indexOf(item)) < 0) {
                                temp.push(item);
                                toastr.info('added', item.productName);
                                toastr.options = {
                                    "closeButton": false,
                                    "debug": false,
                                    "newestOnTop": true,
                                    "progressBar": false,
                                    "positionClass": "toast-top-right",
                                    "preventDuplicates": false,
                                    "onclick": null,
                                    "showDuration": "10000",
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
                                $scope.selectedItemCount++;
                            }
                            else {
                                toastr.options = {
                                    "closeButton": false,
                                    "closeHtml": '<button><i class="icon-off"></i></button>',
                                    "debug": false,
                                    "newestOnTop": true,
                                    "progressBar": false,
                                    "positionClass": "toast-top-right",
                                    "preventDuplicates": true,
                                    "onclick": null,
                                    "showDuration": "10",
                                    "hideDuration": "10",
                                    "timeOut": "600",
                                    "extendedTimeOut": "1000",
                                    "showEasing": "swing",
                                    "hideEasing": "linear",
                                    "showMethod": "fadeIn",
                                    "hideMethod": "fadeOut"
                                }
                                toastr.error('Already added');
                            }
                        }
                    }
                }

                $scope.OnNextClick = function () {
                    if (angular.isDefined(temp) && temp.length > 0 && $scope.selectedItemCount > 0)
                        $state.go('CustomerDetails', { products: temp });
                };

                //productResource.query(function (data) {
                //    $scope.products = data;
                //});
            }]);
})();