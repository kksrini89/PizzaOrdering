(function () {
    angular.module('pizzaApp')
           .controller('loginController', ['$scope', '$state', function ($scope, $state) {
               var viewModel = {
                   userName: "",
                   password: "",
                   onSubmit: function () {
                       //Get the Previous ui route state to navigate. Logged In user will be displayed at the top of the screen.
                       //$state.go('previous state');
                   },
                   onCancel: function () {
                       //Get the Previous ui route state to navigate.
                       //$state.go('previous state');
                   }
               };

               //viewModel.OnSubmit = function () {

               //};
               //viewModel.OnCancel = function () {

               //};
               $scope.entity = viewModel;
           }]);
})();