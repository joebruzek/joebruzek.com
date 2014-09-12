'use strict';

/**
 * @ngdoc function
 * @name joebruzekcomApp.controller:SeekCtrl
 * @description
 * # AboutCtrl
 * Controller of the joebruzekcomApp
 */
angular.module('joebruzekcomApp')
  .controller('SeekCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
