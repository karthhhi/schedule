(function () {
    'use strict';

    angular
        .module('scheduler')
        .factory('schedulerService', schedulerService);

    schedulerService.$inject = ['$http'];
    
    function schedulerService($http) {
        // Create a service object to pass to controller
        var service = {};
        service.schedulesArray = [];
        service.getTimeSlotsByDate = getTimeSlotsByDate;
        service.setSchedule = setSchedule;
        return service;
        
        // Service methods
        
        function setSchedule(scheduledDate,scheduledTime){            
            if(scheduledDate && scheduledTime){
                service.schedulesArray.push({date:scheduledDate,time:scheduledTime});
                return true;
            } else {
                return false;
            }
        }
        
        /*
         * Dummy json data is used to populate the time slots,
         * this can later be changed to actual API call after integrating with backend service calls
         */
        function getTimeSlotsByDate(scheduledDate){
            return $http.get('mocks/available-schedules.json')
                .then(function success(res){
                        if (res.data[scheduledDate] != undefined) {
                            return res.data[scheduledDate];
                        } else {
                            return {};
                        }
            });
        }
    }
      
})();