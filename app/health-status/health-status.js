(function (angular) {
    'use strict';

    function healthStatusDirective () {
        return {
            restrict: 'A',
            scope: { healthStatus: '=healthStatus' },
            templateUrl: 'health-status/health-status.html',
            link: function (scope) {
                if (angular.isUndefined(scope.healthStatus)) {
                    return;
                }
                scope.servers = [
                    {
                        name: 'Mail Server',
                        isAvailable: scope.healthStatus.IsMailServerAvailable
                    },
                    {
                        name: 'Message Queue Server',
                        isAvailable: scope.healthStatus.IsMessageQueueServerAvailable
                    },
                    {
                        name: 'Elasticsearch Server',
                        isAvailable: scope.healthStatus.IsElasticsearchServerAvailable
                    }
                ];
            }
        }
    }

    angular.module('inEngine')
    .directive('healthStatus', healthStatusDirective);
})(angular);
