(function () {
    angular.module('pizzaApp')
    .controller('endController', ['$scope', '$stateParams', function ($scope, $stateParams) {
        var customerEntry = {};
        customerEntry = $stateParams.customer;
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