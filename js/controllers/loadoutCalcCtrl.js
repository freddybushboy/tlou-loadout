'use strict';

angular.module('loadoutApp')
  .controller('LoadoutCalcCtrl', function ($scope, $controller, SkillService) {

    $scope.skillSlot = '';
    $scope.skillSet = '';
    $scope.skillDetail = '';
    $scope.skillLevel = 0;
    $scope.activeSlots = [];

    $scope.slots = [
      {
        'name': 'Revolver',
        'id': 'revolver',
        'level': 1,
        'cost': 0,
      },
      {
        'name': 'No Large Firearm',
        'id': 'nothing',
        'level': 1,
        'cost': 0,
      },
      {
        'name': 'Nothing',
        'id': 'nothing',
        'level': 1,
        'cost': 0,
      },
      {
        'name': 'Nothing',
        'id': 'nothing',
        'level': 1,
        'cost': 0,
      },
      {
        'name': 'Nothing',
        'id': 'nothing',
        'level': 1,
        'cost': 0,
      },
      {
        'name': 'Nothing',
        'id': 'nothing',
        'level': 1,
        'cost': 0,
      },
      {
        'name': 'No Purchasable',
        'id': 'nothing',
        'level': 1,
        'cost': 0,
      }];
    $scope.skills = SkillService.skills;

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
      if (value == 'nothing') {
        $scope.skillDetail = '';
        $scope.setSkill($scope.skills[$scope.skillSet][0]);
      }
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
    $scope.setSkill = function(skill) {
      $scope.slots[$scope.skillSlot - 1].name = skill.name;
      $scope.slots[$scope.skillSlot - 1].id = skill.id;
      $scope.slots[$scope.skillSlot - 1].level = $scope.skillLevel + 1;
      $scope.slots[$scope.skillSlot - 1].cost = skill.levels[$scope.skillLevel].cost;

      $scope.updatePoints();
      $scope.updateActive();

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

    $scope.updateActive = function() {
      var active = [];
      $scope.slots.forEach(function(slot) {
        active.push({
          id: slot.id,
          level: slot.level
        });
      });
      $scope.activeSlots = active;
    }

    $scope.skillName = function(name, level, cat) {
      if (name == 'Nothing') {
        return name;
      }
      if (cat != 'skill') {
        return $scope.weaponName(name, level);
      }
      return name + ' ' + level;
    }

    $scope.weaponName = function(name, level) {
      if (level > 1) {
        name = 'Silenced ' + name;
      }
      return name;
    }

    $scope.resetLoadout = function() {
      $scope.skillSlot = '';
      $scope.skillSet = '';
      $scope.skillDetail = '';
      $scope.skillLevel = 0;
      $scope.activeSlots = [];

      $scope.slots = [
        {
          'name': 'Revolver',
          'id': 'revolver',
          'level': 1,
          'cost': 0,
        },
        {
          'name': 'No Large Firearm',
          'id': 'nothing',
          'level': 1,
          'cost': 0,
        },
        {
          'name': 'Nothing',
          'id': 'nothing',
          'level': 1,
          'cost': 0,
        },
        {
          'name': 'Nothing',
          'id': 'nothing',
          'level': 1,
          'cost': 0,
        },
        {
          'name': 'Nothing',
          'id': 'nothing',
          'level': 1,
          'cost': 0,
        },
        {
          'name': 'Nothing',
          'id': 'nothing',
          'level': 1,
          'cost': 0,
        },
        {
          'name': 'No Purchasable',
          'id': 'nothing',
          'level': 1,
          'cost': 0,
        }];

      $scope.remainingPoints = '13';
    }

    $scope.updateActive();
  });
