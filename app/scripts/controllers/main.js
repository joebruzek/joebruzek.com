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

    $(window).scroll(function (event) {
      var position = $(window).scrollTop();
      console.log(position);
      if (position >= 100) {
        $('.scroll').fadeOut();
      } else {
        $('.scroll').fadeIn();
      }
    });

    $(document).ready(function(){
      $(".scroll").effect("bounce", { times:3 }, 2000);
    });

    $('.project').mouseenter(function() {
    	$(this).addClass('active');
    });

    $('.project').mouseleave(function() {
    	$(this).removeClass('active');
    });

    $scope.linkTo = function(location) {
    	$location.path('/' + location);
    }

    $scope.resume = function() {
      window.location="https://github.com/joebruzek/resume/blob/master/Joseph%20A%20Bruzek%20-%20Resume.pdf?raw=true", '_blank';
    }

    $scope.linkedIn = function() {
    	window.location="https://www.linkedin.com/pub/joe-bruzek/66/5b4/92";
    }

    $scope.github = function() {
      window.location="https://github.com/joebruzek", '_blank';
    }
  });
