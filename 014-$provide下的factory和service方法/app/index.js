/**
 * Created by zhaoky on 2015/12/31.
 */
var app = angular.module('myApp',[],function($provide){
	//自定义工厂
	$provide.factory("factory",function(){
		return [1,2,3,4,5];
	});
	//自定义服务
	$provide.service("service",function(){
		return [1,2,3,4,5];
	})
});
//直接在module有对应的方法：
app.factory("factory",function(){
	return [1,2,3,4,5];
});
app.service("service",function(){
	return [1,2,3,4,5];
});

app.controller("firstController",function($scope,factory,service){
	$scope.name= "zky";
	console.log(factory);
	console.log(service);
});

/*
function firstController($scope){
	$scope.name= "zky";
}
*/
