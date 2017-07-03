(function() {
    'use strict';

    angular
        .module('app')
        .controller('userController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'userService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, userService, $state, $stateParams) {
        $scope.users = [];

        if ($state.current.name == "users") {
            $rootScope.Title = "User Listing";
            userService.getUsers().then(function(res) {
                $scope.users = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.deleteUser = function(id) {
                if (confirm('Are you sure to delete?')) {
                    userService.deleteUser(id).then(function(res) {
                        if (res.data == "deleted") {
                            $state.go("users", {}, { reload: true });
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "edit") {
            $rootScope.Title = "Edit User";
            var id = $stateParams.id;
            userService.getUser(id).then(function(res) {
                $scope.user = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.saveData = function(user) {
               // console.log("saveData 1");
                if ($scope.userForm.$valid) {
                    userService.updateUser(user).then(function(res) {
                        if (res.data == "updated") {
                            $state.go("users");
                         //   console.log("saveData 2");

                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "add_user") {
            $rootScope.Title = "Add User";
            $scope.saveData = function(user) {
               // console.log("saveData 3");

                $scope.IsSubmit = true;
                if ($scope.userForm.$valid) {
                    userService.add_user(user).then(function(res) {
                        if (res.data == "created") {
                            $state.go("users");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        }
    }
})();