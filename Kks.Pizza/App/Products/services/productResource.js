(function () {
    'use strict';
    angular.module('pizzaApp')
        .factory('productResource', ['$resource', 'appSettings', function ($resource, appSettings) {
            return $resource(appSettings.serverPath + '/api/Products/:id', null);
        }]);
})();