(function (angular) {
    'use strict';
    function homeController($scope, eehInEngineApi) {
        eehInEngineApi.getCronTriggers()
        .then(function (data) {
            $scope.cronTriggers = data;
        });

        eehInEngineApi.getSimpleTriggers()
        .then(function (data) {
            $scope.simpleTriggers = data;
        });

        eehInEngineApi.getJobTypes()
        .then(function (data) {
            $scope.jobTypes = data;
        });
    }
    angular.module('inEngine').controller('HomeController', homeController);
}(angular));