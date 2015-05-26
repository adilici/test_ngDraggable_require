'use strict';

define([
  'angular',
  'angular-route',
  'ngDraggable',
  'index-view-controller'
], function(angular) {
  return angular.module('ExampleApp', [
    'ngRoute',
    'MainControllerModule'
  ]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {
        templateUrl: 'index-view.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/index'
      });
  }]);
});