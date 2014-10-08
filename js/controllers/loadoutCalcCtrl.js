'use strict';

angular.module('loadoutApp')
  .controller('LoadoutCalcCtrl', function ($scope, $controller, SkillService, $location, $resource, AuthService) {

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
    $scope.dlc = [
      'enforcer',
      'spectre',
      'double',
      'launcher',
      'full',
      'scoped-semi',
      'scoped-full',
      'scoped-burst',
      'variable',
      'executioner',
      'scavenger',
      'damage',
      'awareness',
      'fortitude',
      'gunslinger',
      'bomb',
      'agility'
    ];

    $scope.hideDlc = false;

    // Declare user object.
    $scope.user = AuthService.getCurrent();

    $scope.login = function() {
      AuthService.login();
      $scope.user = AuthService.getCurrent();
      $scope.getUserLoadouts();
      console.log($scope.user);
    }
    $scope.logout = function() {
      AuthService.logout();
      $scope.user = AuthService.getCurrent();
      $scope.getUserLoadouts();
      console.log($scope.user);
    }

    $scope.setupSlots = function() {
      if ($scope.presets[0] !== undefined) {
        $scope.presets.forEach(function(preset) {
          $scope.slots.push({
            'id': preset.substr(0, preset.length - 1),
            'level': preset.substr(preset.length - 1),
          });
        });
        $scope.updatePoints();
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
        $scope.updatePoints();
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
      // Clear this once we are finished.
      //$location.url('');
      //$location.url($location.path());
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

      // If we didnt find a skill.
      if (ret.id == undefined) {
        if (type == 'small') {
          ret = {
            id: 'revolver',
            level: 1,
          };
        }
        else {
          ret = {
            id: 'nothing',
            level: 1,
          };
        }
      }

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
    $scope.hideSkillList = function(value) {
      $scope.skillSlot = '';
      $scope.skillSet = '';
      $scope.skillDetail = '';
      $scope.skillLevel = 0;
    }
    $scope.hideDetails = function(value) {
      $scope.skillDetail = '';
      $scope.skillLevel = 0;
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

    $scope.getRandomSkill = function(skills) {
      var skill = skills[Math.floor(Math.random() * skills.length)];
      $scope.slots.forEach(function(slot, key) {
        if (slot.id == skill.id && skill.id != 'nothing' && key != 0 && key != 6) {
          skill = $scope.getRandomSkill(skills);
        }
        else if ($scope.hideDlc && $scope.dlc.indexOf(skill.id) != -1) {
          skill = $scope.getRandomSkill(skills);
        }
      });
      return skill;
    }
    $scope.randomLoadout = function() {
      $scope.resetLoadout();
      var arr = [0,1,2,3,6,4,5]
      arr.forEach(function(slot) {
        var type = $scope.getSlotType(slot);
        var skills = $scope.skills[type];
        var skill = $scope.getRandomSkill(skills);
        var levels = [];
        skill.levels.forEach(function(data, key) {
          if (data.cost <= $scope.remainingPoints) {
            levels.push(key);
          }
        });

        if (levels.length > 0) {
          var level = levels[Math.floor(Math.random() * levels.length)] + 1;
          $scope.slots[slot] = {
            'id': skill.id,
            'level': level,
          };
        }

        $scope.updatePoints();
      });

      if ($scope.remainingPoints > 0) {
        $scope.slots.forEach(function(slot, key) {
          if ($scope.remainingPoints > 0) {
            if (slot.id == 'nothing') {
              var type = $scope.getSlotType(key);
              var skills = $scope.skills[type];
              var levels = [];
              while (levels.length == 0) {
                levels = [];
                var skill = $scope.getRandomSkill(skills);
                if (skill.id == 'nothing') {
                  skill = $scope.getRandomSkill(skills);
                }
                skill.levels.forEach(function(data, key) {
                  if (data.cost <= $scope.remainingPoints) {
                    levels.push(key);
                  }
                });
                if (levels.length > 0) {
                  var level = levels[Math.floor(Math.random() * levels.length)] + 1;
                  $scope.slots[key] = {
                    'id': skill.id,
                    'level': level,
                  };
                  $scope.updatePoints();
                }
              }
            }
          }
        });
      }
      // There are still some points left!
      if ($scope.remainingPoints > 0) {
        $scope.randomLoadout();
      }
      $scope.updatePoints();
    }

    $scope.updatePoints();
    $scope.setupSlots();


    $scope.getUserLoadouts = function() {
      if ($scope.user.id) {
        var userId = $scope.user.id;
        var loadouts = $resource('/api/loadouts/:uid',{ uid: userId });
        loadouts.query(function(data) {
          $scope.loadouts = data;
        });
      }
      else {
        // Unset loadouts.
        $scope.loadouts = [];
      }
    }
    $scope.addLoadout = function() {
      if ($scope.user.id) {
        var loadoutData = {
          uid: $scope.user.id,
          key: "fdfdfdfd",
          name: "manuallyoadout"
        };
        var loadout = $resource('/api/loadout/add');
        loadout.save(loadoutData);
      }
    }
    $scope.getUserLoadouts();
    //$scope.addLoadout();
  });
