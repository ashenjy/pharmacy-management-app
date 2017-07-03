(function() {
    'use strict';

    angular
        .module('app')
        .factory('prescriptionService', Service);

    Service.$inject = ['$http', 'globalConfig'];

    function Service($http, globalConfig) {
        var url = "";
        return {
            getPrescriptions: function() {
                url = globalConfig.apiAddress + "/prescription";
                return $http.get(url);
            },
            getPrescription: function(id) {
                url = globalConfig.apiAddress + "/prescription/" + id;
                return $http.get(url);
            },
            createPrescription: function(prescription) {
                url = globalConfig.apiAddress + "/prescription";
                return $http.post(url, prescription);
            },
            updatePrescription: function(prescription) {
                url = globalConfig.apiAddress + "/prescription/" + prescription._id;
                return $http.put(url, prescription);
            },
            deletePrescription: function(id) {
                url = globalConfig.apiAddress + "/prescription/" + id;
                return $http.delete(url);
            }
        };
    }
})();