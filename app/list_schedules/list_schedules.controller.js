(function () {
    'use strict';
    
    angular
        .module('schedule')
        .controller('listScheduleController',listScheduleController);

    listScheduleController.$inject = ['schedulerService','$location'];

    function listScheduleController(schedulerService,$location) {
        var vm = this;
        vm.schedules = schedulerService.schedulesArray;
        vm.goBack = function (){
                            $location.path('/');
                        }; 
    }

})();
