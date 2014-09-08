'use strict';

angular.module('loadoutApp', [], function($locationProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!')
});
