'use strict';

angular.module('loadoutApp')
  .controller('LoadoutCalcCtrl', function ($scope, $controller, SkillService, $location) {

    $scope.skillSlot = '';
    $scope.skillSet = '';
    $scope.skillDetail = '';
    $scope.skillLevel = 0;
    $scope.q = $location.search()['q'];
    $scope.slots = [];
    $scope.presets = [
      $location.search()['s1'],
      $location.search()['s2'],
      $location.search()['s3'],
      $location.search()['s4'],
      $location.search()['s5'],
      $location.search()['s6'],
      $location.search()['s7']
    ];

    $scope.setupSlots = function() {
      if ($scope.presets[0] !== undefined) {
        $scope.presets.forEach(function(preset) {
          $scope.slots.push({
            'id': preset.substr(0, preset.length - 1),
            'level': preset.substr(preset.length - 1),
          });
        });
      }
      else if ($scope.q !== undefined && $scope.q.length == 14) {
        $scope.qs = $scope.q.match(/.{1,2}/g);

        $scope.qs.forEach(function(code, key) {
          var slotDetails = $scope.getSlotDetailsFromCode(code, key);
          $scope.slots.push({
            'id': slotDetails.id,
            'level': slotDetails.level,
          });
        });
      }
      else {
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
      }
    }


    $scope.skills = SkillService.skills;

    $scope.getRepeat = function(num) {
      return new Array(num);
    }
    $scope.getSlotDetailsFromCode = function(code, slot) {
      var type = $scope.getSlotType(slot);
      var arr = $scope.skills[type];
      var ret = {};
      arr.forEach(function(skill) {
        skill.levels.forEach(function(data, level) {
          if (data.code == code) {
            ret = {
              id: skill.id,
              level: level + 1,
            };
          }
        });
      });

      return ret;
    }
    $scope.getSkillFromId = function(id, type) {
      var arr = $scope.skills[type];
      var ret = {};
      arr.forEach(function(skill) {
        if (skill.id == id) {
          ret = skill;
        }
      });
      return ret;
    }

    $scope.share = function() {
      var url = 'http://tlou-loadout.com/?q=';
      $scope.slots.forEach(function(slot, key) {
        var type = $scope.getSlotType(key);
        var skill = $scope.getSkillFromId(slot.id, type);
        url += skill.levels[slot.level - 1].code;
      });
      return url;
    }

    $scope.setSkillSet = function(value, slot) {
      $scope.skillSlot = slot;
      $scope.skillSet = value;
      $scope.skillLevel = 0;
      if ($scope.slots[slot - 1].id != 'nothing') {
        $scope.skillDetail = $scope.slots[slot - 1].id;
        $scope.skillLevel = $scope.slots[slot - 1].level - 1;
      }
      else {
        $scope.skillDetail = '';
        $scope.skillLevel = 0;
      }
    }
    $scope.getSkillSet = function(value) {
      return $scope.skillSet == value;
    }
    $scope.activeSkillClass = function(value) {
      if (value == 'nothing') {
        return '';
      }
      if ($scope.skillDetail == value) {
        return 'active';
      }
      if ($scope.skillSlot != '' && $scope.slots[$scope.skillSlot - 1].id == value) {
        return 'active';
      }
      return '';
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

    $scope.getSlotName = function(slot) {
      var type = $scope.getSlotType(slot);
      var skill = $scope.getSkillFromId($scope.slots[slot].id, type);
      var level = $scope.slots[slot].level;
      var name = skill.name;

      if (name == 'Nothing') {
        return name;
      }
      if (type != 'skill') {
        return $scope.weaponName(name, level);
      }
      else {
        return skill.name + ' ' + level;
      }
    }
    $scope.getSlotCost = function(slot) {
      var type = $scope.getSlotType(slot);
      var skill = $scope.getSkillFromId($scope.slots[slot].id, type);
      var level = $scope.slots[slot].level;
      return skill.levels[level - 1].cost;
    }
    $scope.getSlotType = function(slot) {
      if (slot == 0) {
        return 'small';
      }
      if (slot == 1) {
        return 'large';
      }
      if (slot == 6) {
        return 'purchase';
      }
      else {
        return 'skill';
      }
    }

    $scope.setSkill = function(skill) {
      var clash = false;
      if (skill.id != 'nothing') {
        $scope.slots.forEach(function(slot, key) {
          if (slot.id == skill.id) {
            if ((key + 1) != $scope.skillSlot) {
              clash = true;
            }
          }
        });
        if (clash) {
          return false;
        }
      }
      $scope.slots[$scope.skillSlot - 1].id = skill.id;
      $scope.slots[$scope.skillSlot - 1].level = $scope.skillLevel + 1;
      $scope.updatePoints();

      $scope.skillSlot = '';
      $scope.skillSet = '';
      $scope.skillDetail = '';
      $scope.skillLevel = 0;
    }

    $scope.updatePoints = function() {
      var remaining = 13;
      $scope.slots.forEach(function(slot, key) {
        var cost = $scope.getSlotCost(key);
        remaining = remaining - cost;
      });
      $scope.remainingPoints = remaining;
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

    $scope.fillSlots = function() {
      $scope.slots.forEach(function(slot, key) {
        var type = $scope.getSlotType(key);
        var skills = $scope.skills[type];
        var skill = skills[Math.floor(Math.random() * skills.length)];
        var levels = [];

        skill.levels.forEach(function(data, key) {
          if (data.cost < $scope.remainingPoints) {
            levels.push(key);
          }
        });

        if (levels.length > 0) {
          var level = levels[Math.floor(Math.random() * levels.length)] + 1;
          $scope.slots[key] = {
            'id': skill.id,
            'level': level,
          };
        }

        $scope.updatePoints();
      });
      $scope.updatePoints();
    }
    $scope.randomLoadout = function() {
      $scope.resetLoadout();
      $scope.fillSlots();
    }

    $scope.updatePoints();
    $scope.setupSlots();
  });
