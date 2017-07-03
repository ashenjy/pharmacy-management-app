(function() {
    'use strict';

    angular
        .module('app')
        .controller('requestController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'requestService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, requestService, $state, $stateParams) {
        $scope.requests = [];
        $scope.today = new Date();

        if ($state.current.name == "requests") {
            $rootScope.Title = "request Listing";
            requestService.getrequests().then(function(res) {
                $scope.requests = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.deleterequest = function(id) {
                if (confirm('Are you sure to delete?')) {
                    requestService.deleterequest(id).then(function(res) {
                        if (res.data == "deleted") {
                            $state.go("requests", {}, { reload: true });
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "editRequests") {
            $rootScope.Title = "Edit request";
            var id = $stateParams.id;
            requestService.getrequest(id).then(function(res) {
                $scope.request = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.saveData = function(request) {
               // console.log("saveData 1");
                if ($scope.requestForm.$valid) {
                    requestService.updaterequest(request).then(function(res) {
                        if (res.data == "updated") {
                            $state.go("requests");
                         //   console.log("saveData 2");

                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "addrequests") {
            $rootScope.Title = "Add request";
            $scope.saveData = function(request) {


                $scope.IsSubmit = true;

                    requestService.add_request(request).then(function(res) {
                        if (res.data == "created") {
                            $state.go("requests");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });

            };
        }
    }
})();