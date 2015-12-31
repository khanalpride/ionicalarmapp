angular.module('alarmapp.controllers', [])

.controller('AlarmCtrl', function($scope, $ionicModal) {
  $scope.alarms = [
    {
      name: 'Alarm 1',
      time: '2016/01/01 22:00',
      status: false
    },
    {
      name: 'Alarm 2',
      time: '2016/01/02 22:00',
      status: false
    },
    {
      name: 'Alarm 3',
      time: '2016/01/03 22:00',
      status: true
    },
    {
      name: 'Alarm 4',
      time: '2016/01/04 22:00',
      status: true
    }
  ];

  $scope.currentAlarm = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/alarm.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.edit = function(alarm) {
    $scope.currentAlarm = {
      name: alarm.name,
      time: alarm.time,
      editing: true
    }

    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.addNew = function() {
    $scope.currentAlarm = {
      editing: false
    };

    $scope.modal.title = title;

    $scope.modal.show();
  };

  $scope.saveData = function() {
    if($scope.currentAlarm.editing) {

    }
  };
});
