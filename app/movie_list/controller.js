'use strict';

angular.module('moviecat.movie_list', ['ngRoute','moviecat.service.http'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:category/:page', {
    templateUrl: 'movie_list/index.html',
    controller: 'movieListCtrl'
  });
}])

.controller('movieListCtrl', [
	'$scope',
	'$route',
	'$routeParams',
	'HttpService',
	
	function($scope,$route,$routeParams,HttpService) {
		var count = 10;
		var page = parseInt($routeParams.page);
		var start = (page-1)*count;

		$scope.title = 'Loading...'
		$scope.loading = true;
		$scope.currentPage = page;
		$scope.totalPages = 0;
		$scope.totalCount = 0;


	HttpService.jsonp('http://api.douban.com/v2/movie/'+$routeParams.category,{
		start:start,
		count:count,
		q:$routeParams.q,
	},function(data){
		
		$scope.title = data.title;
		$scope.subjects = data.subjects;
		$scope.loading = false;
		$scope.totalCount = data.total;
		$scope.totalPages = Math.ceil($scope.totalCount / count);
		$scope.$apply();

	});
	//上一页，下一页
	$scope.go = function(page) {
		if (page > 0 && page <= $scope.totalPages)
			$route.updateParams({
				page: page
			})
	}
	
}]);








// .controller('movieListCtrl', ['$scope','$http',function($scope,$http) {
// 	$http.get('data.json').then(function(res){
// 		if(res.status ===200){
// 			$scope.subjects = res.data.subjects;
// 			console.log(res)
// 		}
		
		
// 	})

// }]);