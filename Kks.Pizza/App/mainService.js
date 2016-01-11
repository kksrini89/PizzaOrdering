(function () {
    angular.module('pizzaApp')
    .factory('mainService', ['$resource', 'appSettings', function ($resource, appSettings) {
        var resource = appSettings.serverPath;
        return {
            getOrders: function () {
                return resource + "/api/order"
            }
        };
    }]);
})();