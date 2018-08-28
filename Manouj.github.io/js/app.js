var nerdApp = angular.module('nerdApp', ['ngRoute', 'ngAnimate']);

nerdApp.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'page-home.html',
            controller: 'mainController'
    	})
    	.when('/about', {
    		templateUrl: 'page-about.html',
            controller: 'aboutController'
    	})
    	.when('/contact', {
    		templateUrl: 'page-contact.html',
            controller: 'contactController'
    	});

});

nerdApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

nerdApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

nerdApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});


