(function () {
    'use strict';
    
    /* Register the component, along with its associated controller and template */
    angular
        .module('scheduler')
        .component('scheduler', {
            templateUrl: 'components/scheduler/scheduler.view.html',
            controller: schedulerController,
            bindings: {
                redirectPath: '@'
            }
    });

    schedulerController.$inject = ['schedulerService','$location'];

    function schedulerController(schedulerService,$location) {
        var vm = this;
        vm.redirectPath = '';
        vm.timeSlots = {};
        vm.error = 0;
        vm.availabletimeSlots = function() {
                                    schedulerService.getTimeSlotsByDate(vm.scheduledDate).then(function (data) {
                                        if (!angular.equals(data, {})) {
                                            vm.timeSlots = data;
                                            vm.error = 0;
                                        } else {
                                            vm.timeSlots = {};
                                            vm.error = 1;
                                            vm.message = "No time slots found for selected date";
                                        }
                                    });
                                };
        vm.addSchedule = function (){
                            if(vm.scheduledDate && vm.scheduledTime){
                                schedulerService.setSchedule(vm.scheduledDate,vm.scheduledTime);
                                $location.path('/'+vm.redirectPath);
                                vm.error = 0;
                            } else {
                                vm.error = 1;
                                vm.message = "Please enter schedule date and time";
                            }
                          };  
        
    }

})();
