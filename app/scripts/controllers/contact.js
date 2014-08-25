'use strict';

/**
 * @ngdoc function
 * @name joebruzekcomApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the joebruzekcomApp
 */
angular.module('joebruzekcomApp')
  .controller('ContactCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
