(function() {
    'use strict';

    angular
        .module('app')
        .factory('requestService', Service);

    Service.$inject = ['$http', 'globalConfig'];

    function Service($http, globalConfig) {
        var url = "";
        return {
            getrequests: function() {
                url = globalConfig.apiAddress + "/request";
                return $http.get(url);
            },
            getrequest: function(id) {
                url = globalConfig.apiAddress + "/request/" + id;
                return $http.get(url);
            },
            add_request: function(request) {
                url = globalConfig.apiAddress + "/request";
                return $http.post(url, request);
            },
            updaterequest: function(request) {
                url = globalConfig.apiAddress + "/request/" + request._id;
                return $http.put(url, request);
            },
            deleterequest: function(id) {
                url = globalConfig.apiAddress + "/request/" + id;
                return $http.delete(url);
            }
        };
    }
})();