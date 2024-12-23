sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zfemtnregtol4volmtch/test/integration/FirstJourney',
		'zfemtnregtol4volmtch/test/integration/pages/MaintainAutoMatchQualityToleranceList',
		'zfemtnregtol4volmtch/test/integration/pages/MaintainAutoMatchQualityToleranceObjectPage'
    ],
    function(JourneyRunner, opaJourney, MaintainAutoMatchQualityToleranceList, MaintainAutoMatchQualityToleranceObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zfemtnregtol4volmtch') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMaintainAutoMatchQualityToleranceList: MaintainAutoMatchQualityToleranceList,
					onTheMaintainAutoMatchQualityToleranceObjectPage: MaintainAutoMatchQualityToleranceObjectPage
                }
            },
            opaJourney.run
        );
    }
);