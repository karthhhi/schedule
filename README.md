Scheduler is a plug and play reusable component used for adding schedules
Place this inside components folder of the application.

Configuration:
1) Add 'scheduler' module to the application
2) Copy the "<scheduler redirect-path='{{Redirect path}}'></scheduler>" to view or route.

Working:
1) The scheduler populates a schedulesArray each time a new schedule is added. 
This can be accessed by injecting 'schedulerService' to the controller and the schedules will be available in 'schedulerService.schedulesArray'

Dependencies:
1) Bootstrap
2) angularjs-datepicker (720kb)