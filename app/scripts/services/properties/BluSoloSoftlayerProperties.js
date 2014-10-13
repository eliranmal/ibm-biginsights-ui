'use strict';

angular.module('ibmBiginsightsUiApp')
    .service('BluSoloSoftlayerProperties', function BluSoloSoftlayerProperties( $log ) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.toProperties = function (execution) {
            var result = [];
            $log.info('turning to properties');
            if ( !!execution.softlayer ){
                if ( !!execution.softlayer.dataCenter ){
                    result.push({'key' : 'locationId' , 'value' : execution.softlayer.dataCenter });
                }

                var hardwareIds = [];
                if ( !!execution.softlayer.core ){
                    hardwareIds.push(execution.softlayer.core);
                }

                if ( !!execution.softlayer.ram ){
                    hardwareIds.push(execution.softlayer.ram);
                }

                if ( !!execution.softlayer.disk ){
                    hardwareIds.push(execution.softlayer.disk);
                }

                result.push({'key' : 'hardwareId' , 'value' : hardwareIds.join(',') });
            }

            return result;
        };
    });