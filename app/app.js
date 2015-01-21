(function (angular) {
    'use strict';
    function inEngineConfig($stateProvider, $urlRouterProvider, eehNavigationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('inEngine', {
            abstract: true,
            templateUrl: 'app.html'
        })
        .state('inEngine.home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'home/home.html'
        })
        .state('inEngine.calendar', {
            url: '/calendar',
            controller: 'CalendarController',
            templateUrl: 'calendar/calendar.html'
        });

        eehNavigationProvider.searchIsVisible(false);
        eehNavigationProvider.sidebarTextCollapseIsCollapsed(true);
        eehNavigationProvider.navbarBrand.text = 'InEngine.NET Dashboard';
        eehNavigationProvider.navbarBrand.state = 'inEngine.home';

        eehNavigationProvider
        .sidebarMenuItem('home', {
            text: 'Home',
            iconClass: 'fa-home',
            state: 'inEngine.home'
        })
        .sidebarMenuItem('calendar', {
            text: 'Calendar',
            iconClass: 'fa-calendar',
            state: 'inEngine.calendar'
        });
    }

    function serverStatusDirective () {
        return {
            restrict: 'A',
            scope: { serverStatus: '=serverStatus' },
            link: function (scope, element) {
                var statusClass = scope.serverStatus ? 'text-success' : 'text-danger';
                element.addClass(statusClass);
            }
        }
    }

    angular.module('inEngine', [
        'angularMoment',
        'eehNavigation',
        'eehInEngine.api',
        'ngResource',
        'ui.bootstrap',
        'ui.calendar',
        'ui.router'
    ])
    .config(inEngineConfig)
    .directive('serverStatus', serverStatusDirective);
}(angular));