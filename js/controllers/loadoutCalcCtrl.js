'use strict';

angular.module('loadoutApp')
  .controller('LoadoutCalcCtrl', function ($scope, $controller) {
    $scope.slotName = 'Survival Skill 4';
    $scope.remainingPoints = '4';

    $scope.getRepeat = function(num) {
      return new Array(num);
    }
  })
  .directive('slot', [function () {
   return {
     restrict: 'E',
     replace: true,
     templateUrl: 'templates/slot.html'
   };
 }]);
