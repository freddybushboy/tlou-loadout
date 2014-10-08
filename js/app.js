'use strict';

var app = angular.module('loadoutApp', [
  'ng',
  'ngResource',
  'ngRoute'
])
.config(function($locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
});
