angular.module('alarmapp.controllers', [])

.controller('AlarmCtrl', function($scope, $ionicModal) {
  $scope.alarms = [
    {
      name: 'Alarm 1',
      time: '2016/01/01 22:00',
      status: false,
      snooze: false
    },
    {
      name: 'Alarm 2',
      time: '2016/01/02 22:00',
      status: false,
      snooze: false
    },
    {
      name: 'Alarm 3',
      time: '2016/01/03 22:00',
      status: true,
      snooze: false
    },
    {
      name: 'Alarm 4',
      time: '2016/01/04 22:00',
      status: true,
      snooze: false
    }
  ];

  $scope.currentAlarm = {};

  $scope.alarmOnAirNow = 0;

  // Create the alarm add modal
  $ionicModal.fromTemplateUrl('templates/alarm.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalAlarm = modal;
  });

   // Create the alarm modal
  $ionicModal.fromTemplateUrl('templates/alarmShow.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.snoozeAlarm = modal;
  });

  $scope.edit = function(alarm) {
    $scope.editing = true;
    $scope.currentAlarm = alarm;

    $scope.modalAlarm.show();
  };

  $scope.closeModal = function() {
    $scope.modalAlarm.hide();
  };

  $scope.alarmOnAir = function() {
    $scope.snoozeAlarm.show();
  };

  $scope.Snooze = function(snoozeTime) {
    $scope.SnoozeAlarmHide();
    var alarmAfter = snoozeTime * 60 * 1000;
    console.log('Alarm is set after ' + alarmAfter + ' Mili seconds or ' + (alarmAfter / 1000) + ' seconds');
    setTimeout($scope.alarmOnAir, alarmAfter);
  };

  $scope.SnoozeAlarmHide = function() {
    $scope.snoozeAlarm.hide();
  };

  $scope.addNew = function() {
    $scope.editing = false;
    $scope.currentAlarm = {
      status: true
    };

    $scope.modalAlarm.show();
  };

  $scope.saveData = function() {
    if($scope.currentAlarm.name === undefined  && $scope.currentAlarm.time === undefined ) {
      console.log('set error in inputs');
    }
    else {
      if($scope.editing == true) {
        var alarmIndex = $scope.alarms.indexOf($scope.currentAlarm);
        $scope.alarms[alarmIndex] = $scope.currentAlarm;
      }
      else {
        $scope.alarms.push($scope.currentAlarm);
      }

      setTimeout($scope.closeModal, 400);
    }
  };

  setTimeout($scope.alarmOnAir, 6000);
});
