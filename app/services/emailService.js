(function() {
    'use strict';

    angular
        .module('app')
        .factory('emailService', Service);

    Service.$inject = ['$http', 'globalConfig'];

    function Service($http, globalConfig) {
        var url = "";
        return {
            getmails: function() {
                url = globalConfig.apiAddress + "/email";
                return $http.get(url);
            },
            getmail: function(id) {
                url = globalConfig.apiAddress + "/email/" + id;
                return $http.get(url);
            },
            createmail: function(email) {
                url = globalConfig.apiAddress + "/email";
                return $http.post(url, email);
            },
            updatemail: function(email) {
                url = globalConfig.apiAddress + "/email/" + email._id;
                return $http.put(url, email);
            },
            deletemail: function(id) {
                url = globalConfig.apiAddress + "/email/" + id;
                return $http.delete(url);
            }
        };
    }
})();