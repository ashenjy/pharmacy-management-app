(function() {
    'use strict';

    angular
        .module('app')
        .controller('drugController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'drugService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, drugService, $state, $stateParams) {
        $scope.drugs = [];

        if ($state.current.name == "getDrug") {
            $rootScope.Title = "Drug Listing";
            drugService.getDrugs().then(function(res) {
                $scope.drugs = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.deleteDrug = function(id) {
                if (confirm('Are you sure to delete?')) {
                    drugService.deleteDrug(id).then(function(res) {
                        if (res.data == "deleted") {
                            $state.go("drugs", {}, { reload: true });
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "edit") {
            $rootScope.Title = "Edit Drug";
            var id = $stateParams.id;
            drugService.getDrug(id).then(function(res) {
                $scope.drug = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.saveData = function(drug) {
                if ($scope.drugForm.$valid) {
                    drugService.updateDrug(drug).then(function(res) {
                        if (res.data == "updated") {
                            $state.go("drug");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "addDrug") {
            $rootScope.Title = "Add Drug";
            $scope.saveData = function(drug) {
                $scope.IsSubmit = true;
                if ($scope.drugForm.$valid) {
                    drugService.addDrug(drug).then(function(res) {
                        if (res.data == "added") {
                            $state.go("addDrug");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        }
    }
})();
