(function() {
    'use strict';

    angular
        .module('app')
        .factory('supplierService', Service);

    Service.$inject = ['$http', 'globalConfig'];

    function Service($http, globalConfig) {
        var url = "";
        return {
            getsuppliers: function() {
                url = globalConfig.apiAddress + "/supplier";
                return $http.get(url);
            },
            getsupplier: function(id) {
                url = globalConfig.apiAddress + "/supplier/" + id;
                return $http.get(url);
            },
            addsupplier: function(supplier) {
                url = globalConfig.apiAddress + "/supplier";
                return $http.post(url, supplier);
            },
            updatesupplier: function(supplier) {
                url = globalConfig.apiAddress + "/supplier/" + supplier._id;
                return $http.put(url, supplier);
            },
            deletesupplier: function(id) {
                url = globalConfig.apiAddress + "/supplier/" + id;
                return $http.delete(url);
            }
        };
    }
})();
