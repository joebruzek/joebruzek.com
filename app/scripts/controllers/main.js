'use strict';

/**
 * @ngdoc function
 * @name joebruzekcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the joebruzekcomApp
 */
angular.module('joebruzekcomApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $('.project').mouseenter(function() {
    	$(this).addClass('active');
    });

    $('.project').mouseleave(function() {
    	$(this).removeClass('active');
    });

    $scope.linkTo = function(location) {
    	$location.path('/' + location);
    }

    $scope.linkedin = function() {
    	window.location="LINKEDIN";
    }

    $scope.github = function() {
      window.location="https://github.com/joebruzek";
    }
  });
