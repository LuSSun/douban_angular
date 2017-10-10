'use strict';

// Declare app level module which depends on views, and components
var moviecat = angular.module('moviecat', [
  'ngRoute',
  'moviecat.movie_detial',  //详细的顺序先
  'moviecat.movie_list',
  
  'moviecat.directive.auto-focus',
  
  
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]);
moviecat.controller(
	'SearchController',
	[
	'$scope',
	'$route',
	function($scope,$route){
		$scope.input="";
		// console.log(111)
		$scope.search = function(){
			
			$route.updateParams({
                        category: 'search',
                        q:$scope.input
                    });
		}


	}]);

