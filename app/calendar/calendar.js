(function (angular) {
    'use strict';
    function calendarController($scope, eehInEngineApi, moment) {
        $scope.eventSources = [];

        var eventSourceModel = {
            events: [],
            color: '#2196f3',
            textColor: '#ffffff'
        };

        eehInEngineApi.getCronTriggers().then(function (data) {
            data.forEach(function (item) {
                var eventSource = angular.copy(eventSourceModel);
                var schedule = later.parse.cron(item.CronExpressionString, true);
                var dates = later.schedule(schedule).next(10, new Date(), moment().add(1, 'year').toDate());
                if (!angular.isArray(dates)) {
                    return;
                }
                eventSource.events = dates.map(function (cronEvent) {
                    return {
                        title: item.CronExpressionString + ': ' + item.JobType,
                        start: cronEvent
                    }
                });
                $scope.eventSources.push(eventSource);
            });
        });

        eehInEngineApi.getSimpleTriggers().then(function (data) {
            var eventSource = angular.copy(eventSourceModel);
            eventSource.events = data.map(function (item) {
                return {
                    title: item.JobType,
                    start: item.StartTimeUtc
                }
            });
            $scope.eventSources.push(eventSource);
        });

        $scope.uiConfig = {
            calendar:{
                height: '700',
                editable: false,
                header: {
                    left: 'title',
                    center: '',
                    right: 'month,basicWeek,basicDay today prev,next'
                }
            }
        };
    }
    angular.module('inEngine').controller('CalendarController', calendarController);
}(angular));
