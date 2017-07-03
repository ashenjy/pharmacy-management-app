(function() {
    'use strict';

    angular
        .module('app')
        .factory('drugService', Service);

    Service.$inject = ['$http', 'globalConfig'];

    function Service($http, globalConfig) {
        var url = "";
        return {
            getDrugs: function() {
                url = globalConfig.apiAddress + "/drug";
                return $http.get(url);
            },
            getDrug: function(id) {
                url = globalConfig.apiAddress + "/drug/" + id;
                return $http.get(url);
            },
            addDrug: function(drug) {
                url = globalConfig.apiAddress + "/drug";
                return $http.post(url, drug);
            },
            updateDrug: function(drug) {
                url = globalConfig.apiAddress + "/drug/" + drug._id;
                return $http.put(url, drug);
            },
            deleteDrug: function(id) {
                url = globalConfig.apiAddress + "/drug/" + id;
                return $http.delete(url);
            }
        };
    }
})();
