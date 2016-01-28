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
                   if (typeof (Storage) !== 'undefined') {
                       localStorage.setItem("customerDetail", angular.toJson(orderModel.customer));
                       console.log(sessionStorage.customerDetail);
                       localStorage.setItem("selectedPizzas", angular.toJson(orderModel.selectedPizzas));
                       console.log(sessionStorage.selectedPizzas);
                   }
               }
               function RestoreState() {
                   if (typeof (Storage) !== 'undefined') {
                       orderModel.customer = angular.fromJson(localStorage.getItem("customerDetail"));
                       console.log(orderModel.customer);
                       orderModel.selectedPizzas = angular.fromJson(localStorage.getItem("selectedPizzas"));
                       console.log(orderModel.selectedPizzas);
                   }
               }

               $rootScope.$on('saveState', SaveState);
               if (localStorage.getItem("customerDetail") || localStorage.getItem("selectedPizzas")) {
                   RestoreState();
               }
               //$rootScope.$on('restoreState', RestoreState);

               return orderModel;
           }]);
})();