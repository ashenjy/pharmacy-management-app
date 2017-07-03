(function() {
    'use strict';

    angular
        .module('app')
        .controller('supplierController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'supplierService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, supplierService, $state, $stateParams) {
        $scope.suppliers = [];

        if ($state.current.name == "suppliers") {
            $rootScope.Title = "supplier Listing";
            supplierService.getsuppliers().then(function(res) {
                $scope.suppliers = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.deletesupplier = function(id) {
                if (confirm('Are you sure to delete?')) {
                    supplierService.deletesupplier(id).then(function(res) {
                        if (res.data == "deleted") {
                            $state.go("suppliers", {}, { reload: true });
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "editSupplier") {
            $rootScope.Title = "Edit supplier";
            var id = $stateParams.id;
            supplierService.getsupplier(id).then(function(res) {
                $scope.supplier = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.saveData = function(supplier) {
                if ($scope.supplierForm.$valid) {
                    supplierService.updatesupplier(supplier).then(function(res) {
                        if (res.data == "updated") {
                            $state.go("suppliers");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "addSupplier") {
            $rootScope.Title = "Add supplier";
            $scope.saveData = function(supplier) {
                $scope.IsSubmit = true;
                if ($scope.supplierForm.$valid) {
                    supplierService.addsupplier(supplier).then(function(res) {
                        if (res.data == "created") {
                            $state.go("suppliers");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        }
    }
})();
