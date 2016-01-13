(function () {
    angular.module('pizzaApp')
        .factory('orderResource', ['$resource', 'appSettings', function ($resource, appSettings) {
            var resource = $resource(appSettings.serverPath + "/api/order/:id", null);
            return {
                getOrders: function () {
                    return resource.get({ id: 1 }).$promise;
                },
                saveItem: function (item) {
                    return resource.save(item);
                }
                //saveItem: $resource(appSettings.serverPath + "/api/order/:id", null)
            };
            //return $resource(appSettings.serverPath + '/api/order/:id');
        }]);
})();