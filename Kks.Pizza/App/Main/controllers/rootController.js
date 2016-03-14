(function () {
    'use strict';
    angular.module('pizzaApp')
           .controller('rootController', ['$location', '$scope', 'auth', 'store', function ($location, $scope, auth, store) {
               $scope.auth = {};
               $scope.isUserLoggedIn = false;
               $scope.login = function () {
                   auth.signin({}, function (profile, token) {
                       store.set('profile', profile);
                       store.set('token', token);
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
                   store.remove('profile');
                   store.remove('token');
                   $location.path('/');
                   $scope.isUserLoggedIn = false;
               }
           }]);
})();