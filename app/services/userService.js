(function() {
    'use strict';

    angular
        .module('app')
        .factory('userService', Service);

    Service.$inject = ['$http', 'globalConfig'];

    function Service($http, globalConfig) {
        var url = "";
        return {
            getUsers: function() {
                url = globalConfig.apiAddress + "/user";
                return $http.get(url);
            },
            getUser: function(id) {
                url = globalConfig.apiAddress + "/user/" + id;
                return $http.get(url);
            },
            add_user: function(user) {
                url = globalConfig.apiAddress + "/user";
                return $http.post(url, user);
            },
            updateUser: function(user) {
                url = globalConfig.apiAddress + "/user/" + user._id;
                return $http.put(url, user);
            },
            deleteUser: function(id) {
                url = globalConfig.apiAddress + "/user/" + id;
                return $http.delete(url);
            }
        };
    }
})();