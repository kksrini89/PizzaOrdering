(function () {
    'use strict';
    angular.module('pizzaApp')
           .controller('rootController', ['$location', '$scope', 'auth', function ($location, $scope, auth) {
               $scope.auth = {};
               $scope.isUserLoggedIn = false;
               $scope.login = function () {
                   auth.signin({}, function (profile, token) {
                       $location.path('/menu');
                       $scope.auth = auth;
                       $scope.isUserLoggedIn = true;
                   }, function (error) {
                       console.log(error);
                       $scope.isUserLoggedIn = false;
                   });
               }
               $scope.logout = function () {
                   auth.signout();
                   $location.path('/');
                   $scope.isUserLoggedIn = false;
               }
           }]);
})();