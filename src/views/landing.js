'use strict'

angular.module('app.landing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'src/views/landing.html'
  , controller: 'LandingController'
  })
}])

.controller('LandingController', function($scope, $location, $translate, $translatePartialLoader) {
  // Translation
  $translatePartialLoader.addPart('landing');
  $translate.refresh();

  
});
