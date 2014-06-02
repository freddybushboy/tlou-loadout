'use strict';

angular.module('loadoutApp')
  .controller('LoadoutCalcCtrl', function ($scope, $controller, SkillService) {

    $scope.skillSlot = '';
    $scope.skillSet = '';
    $scope.skillDetail = '';
    $scope.skillLevel = 0;

    $scope.slots = [
      {
        'name': 'Revolver',
        'level': 1,
        'cost': 0,
      },
      {
        'name': 'Nothing',
        'level': 0,
        'cost': 0,
      },
      {
        'name': 'Nothing',
        'level': 0,
        'cost': 0,
      },
      {
        'name': 'Nothing',
        'level': 0,
        'cost': 0,
      },
      {
        'name': 'Nothing',
        'level': 0,
        'cost': 0,
      },
      {
        'name': 'Nothing',
        'level': 0,
        'cost': 0,
      },
      {
        'name': 'Nothing',
        'level': 0,
        'cost': 0,
      }];
    $scope.skills = SkillService.skills;

    $scope.slotName = 'Survival Skill 4';
    $scope.remainingPoints = '13';

    $scope.getRepeat = function(num) {
      return new Array(num);
    }
    $scope.setSkillSet = function(value, slot) {
      $scope.skillSlot = slot;
      $scope.skillSet = value;
      $scope.skillDetail = '';
      $scope.skillLevel = 0;
    }
    $scope.getSkillSet = function(value) {
      return $scope.skillSet == value;
    }
    $scope.setSkillDetail = function(value) {
      $scope.skillDetail = value;
      $scope.skillLevel = 0;
    }
    $scope.getSkillDetail = function(value) {
      return $scope.skillDetail == value;
    }
    $scope.setSkillLevel = function(value) {
      $scope.skillLevel = value;
    }
    $scope.getSkillLevel = function(value) {
      return $scope.skillLevel == value;
    }
    $scope.setSkill = function(skill, key) {
      $scope.slots[$scope.skillSlot - 1].cost = skill.levels[$scope.skillLevel].cost;
      $scope.slots[$scope.skillSlot - 1].name = skill.name;
      $scope.slots[$scope.skillSlot - 1].level = $scope.skillLevel + 1;

      $scope.updatePoints();
      $scope.skillSlot = '';
      $scope.skillSet = '';
      $scope.skillDetail = '';
      $scope.skillLevel = 0;
    }

    $scope.updatePoints = function() {
      var remaining = 13;
      $scope.slots.forEach(function(slot) {
        remaining = remaining - slot.cost;
      });
      $scope.remainingPoints = remaining;
    }
  })
  .directive('slot', [function () {
   return {
     restrict: 'E',
     replace: true,
     templateUrl: 'templates/slot.html'
   };
 }]);
