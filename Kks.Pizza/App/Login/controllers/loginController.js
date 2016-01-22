(function () {
    angular.module('pizzaApp')
           .controller('loginController', ['$scope', '$state', '$rootScope', function ($scope, $state, $rootScope) {
               var viewModel = {
                   userName: "",
                   password: "",
                   onSubmit: function () {
                       var prevState = $rootScope.prevState;
                       var currentState = $rootScope.currentState;

                       //Get the Previous ui route state to navigate. Logged In user will be displayed at the top of the screen.
                       $state.go(prevState.name);
                   },
                   onCancel: function () {
                       var prevState = $rootScope.prevState;
                       var currentState = $rootScope.currentState;

                       //Get the Previous ui route state to navigate.
                       $state.go(prevState.name);
                   }
               };

               //viewModel.OnSubmit = function () {

               //};
               //viewModel.OnCancel = function () {

               //};
               $scope.entity = viewModel;
           }]);
})();