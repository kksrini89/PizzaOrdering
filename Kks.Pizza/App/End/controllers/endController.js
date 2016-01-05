(function () {
    angular.module('pizzaApp')
    .controller('endController', ['$scope', '$stateParams', function ($scope, $stateParams) {
        var customerEntry = {};
        customerEntry = $stateParams.customer;
        var viewmodel = {};
        if (customerEntry != null) {
            viewmodel.customerName = customerEntry.customerName;
            viewmodel.mobileNumber = customerEntry.mobileNumber;
            viewmodel.address = customerEntry.address;
        }
        $scope.model = viewmodel;
    }]);
})();