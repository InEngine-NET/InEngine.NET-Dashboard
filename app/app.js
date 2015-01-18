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
        });
    }

    angular.module('inEngine', [
        'angularMoment',
        'eehNavigation',
        'eehInEngine.api',
        'ngResource',
        'ui.bootstrap',
        'ui.router'
    ]).config(inEngineConfig);
}(angular));