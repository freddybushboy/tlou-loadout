'use strict';

angular.module('loadoutApp')
  .controller('LoadoutCalcCtrl', function ($scope, $controller, SkillService) {
    $scope.skillSet = '';
    $scope.skillDetail = '';
    $scope.skills = SkillService.skills;

    $scope.slotName = 'Survival Skill 4';
    $scope.remainingPoints = '4';

    $scope.getRepeat = function(num) {
      return new Array(num);
    }
    $scope.setSkillSet = function(value) {
      $scope.skillSet = value;
      $scope.skillDetail = '';
    }
    $scope.getSkillSet = function(value) {
      return $scope.skillSet == value;
    }
    $scope.setSkillDetail = function(value) {
      $scope.skillDetail = value;
    }
    $scope.getSkillDetail = function(value) {
      return $scope.skillDetail == value;
    }
  })
  .directive('slot', [function () {
   return {
     restrict: 'E',
     replace: true,
     templateUrl: 'templates/slot.html'
   };
 }]);
