(function (angular) {
    'use strict';
    function homeController($scope, eehInEngineApi) {
        eehInEngineApi.getCronTriggers()
        .then(function (cronTriggers) {
            $scope.cronTriggers = cronTriggers;
        });

        eehInEngineApi.getSimpleTriggers()
        .then(function (simpleTriggers) {
            $scope.simpleTriggers = simpleTriggers;
        });

        eehInEngineApi.getJobTypes()
        .then(function (jobTypes) {
            $scope.jobTypes = jobTypes;
        });

        function removeItemById (collection, id) {
            angular.forEach(collection, function(item, index) {
                if (item.Id == id){
                    collection.splice(index, 1);
                }
            });
        }

        $scope.deleteCronTriggerById = function (id) {
            eehInEngineApi.deleteCronTriggerById(id)
            .then(function (trigger) {
                removeItemById($scope.cronTriggers, trigger.Id)
            });
        };

        $scope.deleteSimpleTriggerById = function (id) {
            eehInEngineApi.deleteSimpleTriggerById(id)
            .then(function (trigger) {
                removeItemById($scope.simpleTriggers, trigger.Id)
            });
        };

        $scope.pauseCronTrigger = function (trigger) {
            eehInEngineApi.updateCronTriggerById(trigger.Id, trigger)
            .then(function (trigger) {
                    console.log(trigger);
                angular.forEach($scope.cronTriggers, function(item, index) {
                    if (item.Id == id){
                        item = trigger;
                    }
                });
            });
        };
    }
    angular.module('inEngine').controller('HomeController', homeController);
}(angular));
