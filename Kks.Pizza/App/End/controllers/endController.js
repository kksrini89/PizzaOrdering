(function () {
    angular.module('pizzaApp')
    .controller('endController', ['$scope', '$stateParams', 'orderService', function ($scope, $stateParams, orderService) {
        var customerEntry = {};
        customerEntry = $stateParams.customer;
        //if (orderService !== null)
        //    customerEntry = orderService.customer;
        var viewmodel = {};
        if (customerEntry != null) {            
            viewmodel.orderedDate = Date.parse($stateParams.orderedDate) || 0; //null check for date time
            viewmodel.customerName = customerEntry.name;
            viewmodel.mobileNumber = customerEntry.mobileNumber;
            viewmodel.address = customerEntry.address;
        }
        $scope.model = viewmodel;
    }]);
})();