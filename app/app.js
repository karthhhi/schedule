(function () {
    'use strict';
    angular
        .module('schedule', [
            'ngRoute',
            'scheduler'
        ]).config(config);
    
    config.$inject = ['$routeProvider', '$locationProvider'];
    
    function config($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
        /* Reusable schedule adding component */
        .when("/", {
            template : "<scheduler redirect-path='schedules'></scheduler>"
        })
        .when('/schedules', {
            controller: 'listScheduleController',
            templateUrl: 'list_schedules/list_schedules.view.html',
            controllerAs: 'vm'
        })
        .otherwise({ redirectTo: '/' });
    }
    
})();
