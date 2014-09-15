'use strict';

/**
 * @ngdoc overview
 * @name joebruzekcomApp
 * @description
 * # joebruzekcomApp
 *
 * Main module of the application.
 */
angular
  .module('joebruzekcomApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/tapus', {
        templateUrl: 'views/tapus.html',
        controller: 'TapusCtrl'
      })
      .when('/pickmymovie', {
        templateUrl: 'views/pickmymovie.html',
        controller: 'PickMyMovieCtrl'
      })
      .when('/deathnumber', {
        templateUrl: 'views/deathnumber.html',
        controller: 'DeathNumberCtrl'
      })
      .when('/seek', {
        templateUrl: 'views/seek.html',
        controller: 'SeekCtrl'
      })
      .when('/critisearch', {
        templateUrl: 'views/critisearch.html',
        controller: 'CritisearchCtrl'
      })
      .when('/hc-cs', {
        templateUrl: 'views/hccs.html',
        controller: 'HccsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
