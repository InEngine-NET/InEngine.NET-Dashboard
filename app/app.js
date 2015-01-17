(function (angular) {
    'use strict';
    var apiUrl = 'http://localhost:9001/api';
    function mainController ($resource) {
        $resource.get()
    }
    angular.module('inEngine', ['ngResource'])
    .controller('MainCtrl', mainController);
}(angular));