(function () {
    angular.module('pizzaApp')
    .controller('orderController', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
        var products = [];
        products = $stateParams.products;
        $scope.cancel = function () {            
            $state.go('Menu');
        }
        $scope.submit = function (item) {

        }
    }]);
})();