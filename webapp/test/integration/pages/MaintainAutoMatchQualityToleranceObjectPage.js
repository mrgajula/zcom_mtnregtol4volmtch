sap.ui.define(["sap/ui/test/Opa5", 'sap/fe/test/ObjectPage', 'sap/m/MessageToast', 'sap/ui/test/actions/Press', 'sap/ui/test/actions/EnterText'], function (Opa5, ObjectPage, MessageToast, Press, EnterText) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {
            iExecutePressOnRegTypeValueHelp: function () {
                this.waitFor({
                    id: "CreateDialog::MaintainAutoMatchQualityTolerance::regulationType_regulationType-inner-vhi",
                    searchOpenDialogs: true,
                    actions: new Press()
                });
            },
            iSelectRegType: function () {
                return this.waitFor({
                    controlType: "sap.m.ColumnListItem",
                    searchOpenDialogs: true,
                    success: function (aColumnListItems) {
                        var oFirstColumnListItem = aColumnListItems[0];
                        new Press().executeOn(oFirstColumnListItem);
                        Opa5.assert.ok(true, "Regulation type is selected");
                    },
                    errorMessage: "No Regulation type found in the value help dialog"
                });
            },
            iExecutePressOnDcodeValueHelp: function () {
                this.waitFor({
                    id: "CreateDialog::MaintainAutoMatchQualityTolerance::dCode_category-inner-vhi",
                    searchOpenDialogs: true,
                    actions: new Press()
                });
            },
            iSelectDcode: function () {
                return this.waitFor({
                    controlType: "sap.m.ColumnListItem",
                    searchOpenDialogs: true,
                    success: function (aColumnListItems) {
                        var oFirstColumnListItem = aColumnListItems[2];
                        new Press().executeOn(oFirstColumnListItem);
                        Opa5.assert.ok(true, "Dcode is selected");
                    },
                    errorMessage: "No found Dcode in the value help dialog"
                });
            },
            iExecutePressOnContinue: function () {
                this.waitFor({
                    controlType: "sap.m.Button",
                    viewName: "sap.fe.templates.ObjectPage.ObjectPage",
                    viewId: "zfemtnregtol4volmtch::MaintainAutoMatchQualityToleranceObjectPage",
                    properties: {
                        text: "Continue"
                    },
                    searchOpenDialogs: true,
                    actions: new Press()
                });
            },
            iEnterValueInRange: function () {
                this.waitFor({
                    id: "zfemtnregtol4volmtch::MaintainAutoMatchQualityToleranceObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::rangeInUnits::Field-edit",
                    actions: new EnterText({
                        text: "2"
                    })
                });
            },
            iExecutePressOnCreate: function () {
                this.waitFor({
                    id: "zfemtnregtol4volmtch::MaintainAutoMatchQualityToleranceObjectPage--fe::FooterBar::StandardAction::Save",
                    actions: new Press()
                });
            },
            iExecutePressOnEdit: function () {
                this.waitFor({
                    id: "zfemtnregtol4volmtch::MaintainAutoMatchQualityToleranceObjectPage--fe::StandardAction::Edit",
                    actions: new Press()
                });
            },
            iEditValueInRange: function () {
                this.waitFor({
                    id: "zfemtnregtol4volmtch::MaintainAutoMatchQualityToleranceObjectPage--fe::FormContainer::GeneratedFacet1::FormElement::DataField::rangeInUnits::Field-edit",
                    actions: new EnterText({
                        text: "3"
                    })
                });
            },
            iExecutePressOnSave: function () {
                this.waitFor({
                    id: "zfemtnregtol4volmtch::MaintainAutoMatchQualityToleranceObjectPage--fe::FooterBar::StandardAction::Save",
                    actions: new Press()
                });
            },
            iExecutePressOnDelete: function () {
                this.waitFor({
                    id: "zfemtnregtol4volmtch::MaintainAutoMatchQualityToleranceObjectPage--fe::StandardAction::Delete",
                    actions: new Press()
                });
            },
            iConfirmDelete: function () {
                this.waitFor({
                    controlType: "sap.m.Button",
                    properties: {
                        text: "Delete"
                    },
                    searchOpenDialogs: true,
                    actions: new Press()
                });
            }
        },
        assertions: {
            iSeeRecordCreated: function () {
                return this.waitFor({
                    autoWait: false,
                    check: function () {
                        return sap.ui.test.Opa5.getJQuery()(".sapMMessageToast").length > 0;
                    },
                    success: function () {
                        sap.ui.test.Opa5.assert.ok(true, "Record Created");
                    },
                    errorMessage: "Record Not Created"
                });
            },
            iSeeTheEditedObject: function () {
                return this.waitFor({
                    // Turn off autoWait
                    autoWait: false,
                    check: function () {
                        // Locate the message toast using its class name in a jQuery function
                        return sap.ui.test.Opa5.getJQuery()(".sapMMessageToast").length > 0;
                    },
                    success: function () {
                        sap.ui.test.Opa5.assert.ok(true, "Exsisting Object Edited");
                    },
                    errorMessage: "Exsisting Object Not Edited"
                });

            },
            iSeeTheDeletedObject: function () {
                return this.waitFor({
                    // Turn off autoWait
                    autoWait: false,
                    check: function () {
                        // Locate the message toast using its class name in a jQuery function
                        return sap.ui.test.Opa5.getJQuery()(".sapMMessageToast").length > 0;
                    },
                    success: function () {
                        sap.ui.test.Opa5.assert.ok(true, "Object Deleted");
                    },
                    errorMessage: "Object Not Deleted"
                });

            }
        }
    };

    return new ObjectPage(
        {
            appId: 'zfemtnregtol4volmtch',
            componentId: 'MaintainAutoMatchQualityToleranceObjectPage',
            contextPath: '/MaintainAutoMatchQualityTolerance'
        },
        CustomPageDefinitions
    );
});