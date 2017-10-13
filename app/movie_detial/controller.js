'use strict';

angular.module('moviecat.movie_detial', ['ngRoute','moviecat.service.http'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detial/:id', {
    templateUrl: 'movie_detial/index.html',
    controller: 'movieDetialCtrl'
  });
}])

.controller('movieDetialCtrl', [
	'$scope',
	'$route',
	'$routeParams',
	'HttpService',
	
	function($scope,$route,$routeParams,HttpService) {
		$scope.movie = {};
		var id = $routeParams.id;
		// console.log(id);
		$scope.loading = true;
		
		HttpService.jsonp('http://api.douban.com/v2/movie/subject/'+id,{
			
		},function(data){
			// console.log(data);
			$scope.loading = false;
			$scope.movie =data; 	
			$scope.$apply();  //$apply让指定表达式重新同步
	
		});
	
}]);








