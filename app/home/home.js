(function (angular) {
    'use strict';
    function homeController($scope, eehInEngineApi) {
        eehInEngineApi.getCronTriggers().then(function (data) {
            $scope.cronTriggers = data;
        });
        eehInEngineApi.getSimpleTriggers().then(function (data) {
            $scope.simpleTriggers = data;
        });
        eehInEngineApi.getJobTypes().then(function (data) {
            $scope.jobTypes = data;
        });
        eehInEngineApi.getHealthStatus().then(function (data) {
            $scope.healthStatus = data;
        });

        function removeItemById(collection, id) {
            angular.forEach(collection, function(item, index) {
                if (item.id === id){
                    collection.splice(index, 1);
                }
            });
        }

        $scope.deleteCronTrigger = function (trigger) {
            eehInEngineApi.deleteCronTrigger(trigger)
            .then(function (trigger) {
               removeItemById($scope.cronTriggers, trigger.id);
            });
        };

        $scope.deleteSimpleTrigger = function (trigger) {
            eehInEngineApi.deleteSimpleTrigger(trigger)
            .then(function (trigger) {
                removeItemById($scope.simpleTriggers, trigger.id);
            });
        };

        function replaceItemById(collection, id, replacementItem) {
            angular.forEach(collection, function(item, index) {
                if (item.id === id){
                    collection[index] = replacementItem;
                }
            });
        }

        $scope.pauseCronTrigger = function (trigger) {
            eehInEngineApi.pauseCronTrigger(trigger)
            .then(function (updatedTrigger) {
                console.log(updatedTrigger);
                replaceItemById($scope.cronTriggers, updatedTrigger.id, updatedTrigger)
            });
        };

        $scope.pauseSimpleTrigger = function (trigger) {
            eehInEngineApi.pauseSimpleTrigger(trigger)
            .then(function (updatedTrigger) {
                replaceItemById($scope.simpleTriggers, updatedTrigger.id, updatedTrigger)
            });
        };
    }
    angular.module('inEngine').controller('HomeController', homeController);
}(angular));
