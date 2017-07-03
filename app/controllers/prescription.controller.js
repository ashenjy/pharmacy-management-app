(function() {
    'use strict';

    angular
        .module('app')
        .controller('prescriptionController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'prescriptionService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, prescriptionService, $state, $stateParams) {
        $scope.prescriptions = [];

        if ($state.current.name == "prescriptions") {
            $rootScope.Title = "Prescription Listing";
            prescriptionService.getPrescriptions().then(function(res) {
                $scope.prescriptions = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.deletePrescription = function(id) {
                if (confirm('Are you sure to delete?')) {
                    prescriptionService.deletePrescription(id).then(function(res) {
                        if (res.data == "deleted") {
                            $state.go("prescriptions", {}, { reload: true });
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "editPrescription") {
            $rootScope.Title = "Edit prescription";
            var id = $stateParams.id;
            prescriptionService.getPrescription(id).then(function(res) {
                $scope.prescription = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.saveData = function(prescription) {
                if ($scope.prescriptionForm.$valid) {
                    prescriptionService.updatePrescription(prescription).then(function(res) {
                        if (res.data == "updated") {
                            $state.go("prescriptions");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "createPrescription") {
            $rootScope.Title = "Create Prescription";
            $scope.saveData = function(prescription) {
                $scope.IsSubmit = true;
                if ($scope.prescriptionForm.$valid) {
                    prescriptionService.createPrescription(prescription).then(function(res) {
                        if (res.data == "created") {
                            $state.go("prescriptions");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        }
    }
})();