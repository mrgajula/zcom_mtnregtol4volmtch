sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function () {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheMaintainAutoMatchQualityToleranceList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data

                When.onTheMaintainAutoMatchQualityToleranceList.onFilterBar().iExecuteSearch();

                Then.onTheMaintainAutoMatchQualityToleranceList.onTable().iCheckRows();

                When.onTheMaintainAutoMatchQualityToleranceList.onTable().iPressRow(0);
                Then.onTheMaintainAutoMatchQualityToleranceObjectPage.iSeeThisPage();

            });

            opaTest("Creating new record", function (Given, When, Then) {

                When.onTheMaintainAutoMatchQualityToleranceList.iClickOnCreateOnListPage();
                When.onTheMaintainAutoMatchQualityToleranceObjectPage.iExecutePressOnRegTypeValueHelp();
                When.onTheMaintainAutoMatchQualityToleranceObjectPage.iSelectRegType();
                When.onTheMaintainAutoMatchQualityToleranceObjectPage.iExecutePressOnDcodeValueHelp();
                When.onTheMaintainAutoMatchQualityToleranceObjectPage.iSelectDcode();
                When.onTheMaintainAutoMatchQualityToleranceObjectPage.iExecutePressOnContinue();
                When.onTheMaintainAutoMatchQualityToleranceObjectPage.iEnterValueInRange();
                When.onTheMaintainAutoMatchQualityToleranceObjectPage.iExecutePressOnCreate();

                Then.onTheMaintainAutoMatchQualityToleranceObjectPage.iSeeRecordCreated();

            });

            opaTest("Editing Exsisting Object", function (Given, When, Then) {

                When.onTheMaintainAutoMatchQualityToleranceObjectPage.iExecutePressOnEdit();
                When.onTheMaintainAutoMatchQualityToleranceObjectPage.iEditValueInRange();
                When.onTheMaintainAutoMatchQualityToleranceObjectPage.iExecutePressOnSave();

                Then.onTheMaintainAutoMatchQualityToleranceObjectPage.iSeeTheEditedObject();

            });

            opaTest("Deleting the Object", function (Given, When, Then) {

                When.onTheMaintainAutoMatchQualityToleranceObjectPage.iExecutePressOnDelete();
                When.onTheMaintainAutoMatchQualityToleranceObjectPage.iConfirmDelete();

                Then.onTheMaintainAutoMatchQualityToleranceObjectPage.iSeeTheDeletedObject();

            });

            opaTest("Teardown", function (Given, When, Then) {
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    };

    return Journey;
});