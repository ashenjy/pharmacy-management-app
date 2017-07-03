(function() {
    'use strict';

    angular
        .module('app')
        .controller('emailController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'emailService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, emailService, $state, $stateParams) {
        $scope.emails = [];

        if ($state.current.name == "emails") {
            $rootScope.Title = "email Listing";
            emailService.getmails().then(function(res) {
                $scope.emails = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.deletemail = function(id) {
                if (confirm('Are you sure to delete?')) {
                    emailService.deletemail(id).then(function(res) {
                        if (res.data == "deleted") {
                            $state.go("emails", {}, { reload: true });
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "editMail") {
            $rootScope.Title = "Edit Mail";
            var id = $stateParams.id;
            emailService.getmail(id).then(function(res) {
                $scope.email = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.saveData = function(email) {

                    emailService.updatemail(email).then(function (res) {
                        if (res.data == "updated") {
                            $state.go("emails");
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });


            };
        } else if ($state.current.name == "sendMail") {
            $rootScope.Title = "Create email";
            $scope.saveData = function(email) {
                $scope.IsSubmit = true;

                    emailService.createmail(email).then(function (res) {
                        if (res.data == "created") {
                            $state.go("emails");
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });


            };


        }

    }
})();