var app = angular.module("myApp", ['ngRoute', 'ngResource']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/landmark-tracker-frontend/partials/home.html',
        controller: 'MainController'
      })
      .when('/landmarks', {
        // templateUrl: 'landmark-tracker/partials/landmarks/index.html',
        templateUrl: '/landmark-tracker-frontend/partials/landmarks/index.html',
        controller: 'LandmarksIndexController'
      })
      .when('/cats/new', {
        templateUrl: 'landmark-tracker/partials/cats/new.html',
        controller: 'CatsNewController'
      })
      .when('/cats/:id', {
        templateUrl: 'landmark-tracker/partials/cats/show.html',
        controller: 'CatsShowController'
      })
    $locationProvider.html5Mode(true);
});
