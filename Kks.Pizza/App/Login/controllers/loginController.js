(function () {
    angular.module('pizzaApp')
           .controller('loginController', ['$scope', function ($scope) {
               var viewModel = {
                   userName: "",
                   password: ""
               };

               viewModel.OnSubmit = function () {

               };
               viewModel.OnCancel = function () {

               };
               $scope.entity = viewModel;
           }]);
})();