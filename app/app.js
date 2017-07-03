(function() {
    'use strict';

    angular.module('app', [
        "ui.router"
    ])
        .config(function($stateProvider, $urlRouterProvider)
        {
            $urlRouterProvider.otherwise("login.html");

            $stateProvider.state("login", {
                url: "/login.html",
                templateUrl: "/login.html"
            }).state("home", {
                url: "/home.html",
                templateUrl: "/home.html"
            }).state("users", {
                url: "/users",
                templateUrl: "/views/user/index.html",
                controller: "userController"
            }).state("add_user", {
                url: "/adduser",
                templateUrl: "/views/user/add_user.html",
                controller: "userController"
            }).state("edit", {
                url: "/edit/:id",
                templateUrl: "/views/user/create.html",
                controller: "userController"
            }).state("details", {
                url: "/details/:id",
                templateUrl: "/views/user/details.html",
                controller: "userController"
            }).state("prescriptions", {
                url: "/prescription",
                templateUrl: "/views/prescription/index.html",
                controller: "prescriptionController"
            }).state("createPrescription", {
                url: "/prescription/createPrescription",
                templateUrl: "/views/prescription/createPrescription.html",
                controller: "prescriptionController"
            }).state("editPrescription", {
                url: "/prescription/editPrescription/:id",
                templateUrl: "/views/prescription/createPrescription.html",
                controller: "prescriptionController"
            }).state("detailsPrescription", {
                url: "/prescription/detailsPrescription/:id",
                templateUrl: "/views/prescription/details.html",
                controller: "prescriptionController"

                //ashen
            }).state("drugs", {
                url: "/drugtable",
                templateUrl: "/views/drugAS/druglist.html",
                controller: "drugControllerAS"

            }).state("createDrug", {
                url: "/createDrug",
                templateUrl: "/views/drugAS/createDrug.html",
                controller: "drugControllerAS"

            }).state("editDrug", {
                url: "/drugtable/createDrug/:id",
                templateUrl: "/views/drugAS/createDrug.html",
                controller: "drugControllerAS"

            }).state("placeOrder", {
                url: "/drugtable/placeOrder/:id",
                templateUrl: "/views/drugAS/mailOrder.html",
                controller: "drugControllerAS"

            }).state("emails", {
                url: "/mailtable",
                templateUrl: "/views/drugAS/order.html",
                controller: "emailController"

            }).state("sendMail", {
                url: "/sendMail",
                templateUrl: "/views/drugAS/placeOrder.html",
                controller: "emailController"

            }).state("editMail", {
                url: "/editMail/:id",
                templateUrl: "/views/drugAS/placeOrder.html",
                controller: "emailController"


            }).state("suppliers", {
                url: "/supplierTable",
                templateUrl: "/views/drugAS/supplierTable.html",
                controller: "supplierController"

            }).state("addSupplier", {
                url: "/addSupplier",
                templateUrl: "/views/drugAS/addSupplier.html",
                controller: "supplierController"

            }).state("editSupplier", {
                url: "/editSupplier/:id",
                templateUrl: "/views/drugAS/addSupplier.html",
                controller: "supplierController"

            }).state("requests", {
                url: "/requests",
                templateUrl: "/views/drugAS/viewRequest.html",
                controller: "requestController"

            }).state("addrequests", {
                url: "/addrequests",
                templateUrl: "/views/drugAS/sendReq.html",
                controller: "requestController"

            }).state("editRequests", {
                url: "/editRequests/:id",
                templateUrl: "/views/drugAS/sendReq.html",
                controller: "requestController"

            //Ruki
            }).state("addDrug",{
                url:"/addDrug",
                templateUrl:"/views/Drug/add.html",
                controller:"drugController"
            });
        })
        .constant("globalConfig", {
            apiAddress: 'http://localhost:3000/api'
        });
})();