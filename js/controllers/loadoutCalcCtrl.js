'use strict';

angular.module('loadoutApp')
  .controller('LoadoutCalcCtrl', function ($scope, $controller, SkillService, $location) {

    $scope.skillSlot = '';
    $scope.skillSet = '';
    $scope.skillDetail = '';
    $scope.skillLevel = 0;
    $scope.activeSlots = [];

    $scope.preset = [
      $location.search()['s1'],
      $location.search()['s2'],
      $location.search()['s3'],
      $location.search()['s4'],
      $location.search()['s5'],
      $location.search()['s6'],
      $location.search()['s7']
    ];

    $scope.slots = [
      {
        'id': 'revolver',
        'level': 1,
      },
      {
        'id': 'nothing',
        'level': 1,
      },
      {
        'id': 'nothing',
        'level': 1,
      },
      {
        'id': 'nothing',
        'level': 1,
      },
      {
        'id': 'nothing',
        'level': 1,
      },
      {
        'id': 'nothing',
        'level': 1,
      },
      {
        'id': 'nothing',
        'level': 1,
      }];

    $scope.skills = SkillService.skills;

    $scope.remainingPoints = '13';

    $scope.getRepeat = function(num) {
      return new Array(num);
    }
    function getSkillFromId(id, type) {
      var arr = $scope.skills[type];
      arr.forEach(function(skill) {
        if (skill.id == id) {
          return skill;
        }
      });
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

    $scope.getSlotName = function(slot, type) {
      var skill = getSkillFromId($scope.slots[slot].id, type);
      if (slot == 0 || slot == 1) {
        return $scope.weaponName(skill.name, $scope.slots[slot].level);
      }
    }
    $scope.getSlotCost = function(slot, type) {
      var skill = getSkillFromId($scope.slots[slot].id, type);
    }


    $scope.setSkill = function(skill) {
      $scope.slots[$scope.skillSlot - 1].id = skill.id;
      $scope.slots[$scope.skillSlot - 1].level = $scope.skillLevel + 1;

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
          'id': 'revolver',
          'level': 1,
        },
        {
          'id': 'nothing',
          'level': 1,
        },
        {
          'id': 'nothing',
          'level': 1,
        },
        {
          'id': 'nothing',
          'level': 1,
        },
        {
          'id': 'nothing',
          'level': 1,
        },
        {
          'id': 'nothing',
          'level': 1,
        },
        {
          'id': 'nothing',
          'level': 1,
        }];

      $scope.remainingPoints = '13';
    }

    $scope.updateActive();
  });
