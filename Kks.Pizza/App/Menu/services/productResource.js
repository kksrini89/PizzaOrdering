(function () {
    'use strict';
    //angular.module('pizzaApp')
    //    .factory('productResource', ['$resource', 'appSettings', function ($resource, appSettings) {
    //        return $resource(appSettings.serverPath + '/api/Products/:id', null);
    //    }]);
    angular.module('pizzaApp')
       .factory('productResource', ['$resource', 'appSettings', function ($resource, appSettings) {
           var resource = $resource(appSettings.serverPath + '/api/Products/:id', null);
           return {
               getProducts: function () {
                   return resource.query();
               }
           };
       }]);
})();