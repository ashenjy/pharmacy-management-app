(function() {
    'use strict';

    angular
        .module('app')
        .factory('drugServiceAS', Service);

    Service.$inject = ['$http', 'globalConfig'];

    function Service($http, globalConfig) {
        var url = "";
        return {
            getDrugs: function() {
                url = globalConfig.apiAddress + "/drugAS";
                return $http.get(url);
            },
            getDrug: function(id) {
                url = globalConfig.apiAddress + "/drugAS/" + id;
                return $http.get(url);
            },
            createDrug: function(drug) {
                url = globalConfig.apiAddress + "/drugAS";
                return $http.post(url, drug);
            },
            updateDrug: function(drug) {
                url = globalConfig.apiAddress + "/drugAS/" + drug._id;
                return $http.put(url, drug);
            },
            deleteDrug: function(id) {
                url = globalConfig.apiAddress + "/drugAS/" + id;
                return $http.delete(url);
            }
        };
    }
})();