'use strict';

var app = angular.module('loadoutApp', [
  'ng',
  'ngResource',
  'ngRoute',
  'ngCookies'
])
.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
});
