(function () {
    angular.module('pizzaApp')
    .controller('orderController', ['$scope', '$state', function ($scope, $state) {
        $scope.cancel = function () {
            $state.go('Menu');
        }
        $scope.submit = function (item) {

        }
    }]);
})();