'use strict';

function homeController($scope, $resource) {
    var apiUrl = 'http://localhost:9001/api';
    $resource(apiUrl + '/CronTrigger').query()
    .$promise
    .then(function (data) {
        $scope.cronTriggers = data;
    });

    $resource(apiUrl + '/SimpleTrigger').query()
    .$promise
    .then(function (data) {
        $scope.simpleTriggers = data;
    });

    $resource(apiUrl + '/Job').query()
    .$promise
    .then(function (data) {
        $scope.jobTypes = data;
    });
}

angular.module('inEngine').controller('HomeController', homeController);
