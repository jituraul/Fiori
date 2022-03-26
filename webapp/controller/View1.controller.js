sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sam.crud.controller.View1", {
            onInit: function () {

                console.log("1");

            },

            onSave: function (oEvent) {

            },
            onCancel: function (oEvent) {

            },
            onBeforeRendering: function () {
                console.log("2");
            },
            onAfterRendering: function () {
                console.log("3");
            },
            onExit: function () {
                console.log("4");
            }
        });
    });
