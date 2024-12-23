sap.ui.define(['sap/fe/test/ListReport', 'sap/ui/test/actions/Press'], function (ListReport, Press) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {
            iClickOnCreateOnListPage: function () {
                this.waitFor({
                    id: "zfemtnregtol4volmtch::MaintainAutoMatchQualityToleranceList--fe::table::MaintainAutoMatchQualityTolerance::LineItem::StandardAction::Create",
                    actions: new Press({
                        idSuffix: "BDI-content"
                    })
                });
            }
        },
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zfemtnregtol4volmtch',
            componentId: 'MaintainAutoMatchQualityToleranceList',
            contextPath: '/MaintainAutoMatchQualityTolerance'
        },
        CustomPageDefinitions
    );
});