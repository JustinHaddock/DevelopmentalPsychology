var myApp = angular.module('psychPage', [
	'ngRoute',
	'psychController'
])


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController as home'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);