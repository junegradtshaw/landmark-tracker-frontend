var app = angular.module("myApp", ['ngRoute', 'ngResource']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/yuckhome.html',
        controller: 'MainController'
      })
      .when('/landmarks', {
        templateUrl: 'partials/landmarks/index.html',
        controller: 'LandmarksIndexController'
      })
      .when('/cats/new', {
        templateUrl: 'partials/cats/new.html',
        controller: 'CatsNewController'
      })
      .when('/cats/:id', {
        templateUrl: 'partials/cats/show.html',
        controller: 'CatsShowController'
      })
    // $locationProvider.html5Mode(true);
});
