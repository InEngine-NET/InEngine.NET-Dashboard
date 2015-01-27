(function (angular) {
    'use strict';

    function healthStatusDirective () {
        return {
            restrict: 'A',
            scope: { healthStatus: '=healthStatus' },
            templateUrl: 'health-status/health-status.html',
            link: function (scope) {
                scope.$watch('healthStatus', function (healthStatus) {
                    if (angular.isUndefined(healthStatus)) {
                        return;
                    }
                    scope.servers = [
                        {
                            name: 'Mail Server',
                            isAvailable: healthStatus.isMailServerAvailable
                        },
                        {
                            name: 'Message Queue Server',
                            isAvailable: healthStatus.isMessageQueueServerAvailable
                        },
                        {
                            name: 'Elasticsearch Server',
                            isAvailable: healthStatus.isElasticsearchServerAvailable
                        }
                    ];
                });
            }
        }
    }

    angular.module('inEngine')
    .directive('healthStatus', healthStatusDirective);
})(angular);
