(function () {
    'use strict';
    angular.module('pizzaApp')
           .factory('orderService', ['$rootScope', function ($rootScope) {
               var orderModel = {
                   customer: {
                       name: "",
                       mobileNumber: "",
                       address: ""
                   },
                   selectedPizzas: [],
                   //orderedDate: null                  
               };

               function SaveState() {
                   sessionStorage.customerDetail = angular.toJson(orderModel.customer);
                   console.log(sessionStorage.customerDetail);
                   sessionStorage.selectedPizzas = angular.toJson(orderModel.selectedPizzas);
                   console.log(sessionStorage.selectedPizzas);
               }
               function RestoreState() {
                   orderModel.customer = angular.fromJson(sessionStorage.customerDetail);
                   console.log(orderModel.customer);
                   orderModel.selectedPizzas = angular.fromJson(sessionStorage.selectedPizzas);
                   console.log(orderModel.selectedPizzas);
               }

               $rootScope.$on('saveState', SaveState);
               $rootScope.$on('restoreState', RestoreState);

               return orderModel;
           }]);
})();