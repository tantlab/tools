'use strict'

angular.module('app.landing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'src/views/landing.html'
  , controller: 'LandingController'
  })
}])

.controller('LandingController', function($scope, $location, $window, $translate, $translatePartialLoader) {
  // Translation
  $translatePartialLoader.addPart('landing');
  $translate.refresh();

  $scope.goTo = function(url) {
  	$window.location.href = url;
  }

  $scope.language = $translate.use().toUpperCase()

  $scope.toggleLanguage = function () {
    if ($translate.use() == 'da') {
      $translate.use('en')
      $scope.language = 'EN'
    } else {
      $translate.use('da')
      $scope.language = 'DA'
    }

  }
});
