
'use strict';
(function(angular){
	var http = angular.module('moviecat.service.http',[])
		.service('HttpService',['$window','$document',  
			function($window,$document){
				this.jsonp = function(url,data,callback){

					//id=1&name=12$cb=mg_json_cb_012326
					var r = Math.random().toString().replace('.','');
					var cbFunc = 'my_json_cb'+r;
					
					var querystring = url.indexOf('?') == '-1'?'?':'&';
					for(var key in data){
						querystring += key +'='+data[key] +'&';
					}
					querystring +='callback='+cbFunc;
					var script = $document[0].createElement('script');
					script.src =url + querystring;
					$window[cbFunc] = function(data){
						callback(data);
						$document[0].body.removeChild(script);
					}
					$document[0].body.appendChild(script);
				}
		}])
})(angular)



