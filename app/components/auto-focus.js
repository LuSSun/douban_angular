'use strict';
(function(angular){
	angular.module('moviecat.directive.auto-focus',[])
		.directive('autoFocus',['$location',function($location){
				
				return {
					restrict:'A',
					link:function($scope,iElm,iAttrs,controller){
						$scope.$location = $location;
						$scope.$watch('$location.path()',function(now){
							// console.log(now); // in_theater/1
							var aLink = iElm.children().attr('href'); // #/in_theater/1
							var type = aLink.replace(/#(\/.+?)\/\d/,'$1');

							if(now.startsWith(type)){
								if(now.startsWith(type) =='/search'){
									iElm.removeClass('active');
								}
								iElm.parent().children().removeClass('active');
								iElm.addClass('active');
								
							}

						})
					}
				}

				}])
})(angular)