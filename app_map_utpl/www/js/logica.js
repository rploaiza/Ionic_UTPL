var logic = angular.module('starter', ['ionic','starter.services'])

logic.controller('Ctrl', function($scope, $ionicModal, $ionicPopup, SQLService) {
  
  SQLService.setup();
    
  $scope.loadTask = function() {
    SQLService.all().then(function (results) {
      $scope.tasks = results;
    }); 
  }

  $scope.loadTask(); 

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };
  

  // Called when the form is submitted
  $scope.createTask = function(task) {
  SQLService.set(task.title);
  $scope.loadTask();
    $scope.taskModal.hide();
    task.title = "";
  };
  

  




  
});

