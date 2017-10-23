(function () {
    'use strict';
    
    /* Register the component, along with its associated controller and template */
    angular
        .module('scheduler')
        .component('scheduler', {
            templateUrl: 'components/scheduler/scheduler.view.html',
            controller: schedulerController,
            controllerAs: 'vm',
            bindings: {
                redirectPath: '@'
            }
    });

    schedulerController.$inject = ['schedulerService','$location'];

    function schedulerController(schedulerService,$location) {
        var vm = this;
        vm.redirectPath = '';
        vm.timeSlots = {};
        vm.error = false;
        vm.availabletimeSlots = function() {
                                    schedulerService.getTimeSlotsByDate(vm.scheduledDate).then(
                                        function (data) {
                                        if (!angular.equals(data, {})) {
                                            vm.timeSlots = data;
                                            vm.error = false;
                                        } else {
                                            vm.timeSlots = {};
                                            vm.error = true;
                                            vm.message = "No time slots found for selected date, please choose another date";
                                        }
                                    });
                                };
        vm.addSchedule = function (){
                           if(schedulerService.setSchedule(vm.scheduledDate,vm.scheduledTime)){
                                $location.path('/'+vm.redirectPath);
                                vm.error = false;
                            } else {
                                vm.error = true;
                                vm.message = "Please enter schedule date and time";
                            }
                          };  
        
    }

})();
