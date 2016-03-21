(function () {
    'use strict';
    angular.module('pizzaApp')
           .controller('rootController', ['$location', '$scope', 'auth', 'store', function ($location, $scope, auth, store) {

               var introCall = function () {
                   var intro = introJs();
                   intro.setOptions({
                       steps: [{
                           element: document.querySelector('#menu'),
                           intro: '<p>Yay!!!Varities of Pizzas..</p>'
                       },
                       {
                           element: document.querySelector('#order'),
                           intro: '<p>Contact details</p>'
                       },
                       {
                           element: document.querySelector('#end'),
                           intro: '<p>Yay!!!Deliver Details</p>'
                       }],
                       showStepNumbers: true,
                       showBullets: true,
                       exitOnOverlayClick: false,
                       exitOnEsc: true,
                       tooltipPosition: 'auto',
                       nextLabel: 'NEXT',
                       prevLabel: 'PREV',
                       skipLabel: 'SKIP',
                       doneLabel: '<strong style="color:green">DONE</strong>'
                   });
                   intro.start();
               };

               introCall();

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