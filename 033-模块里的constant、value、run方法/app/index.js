/**
 * Created by zhaoky on 2015/12/31.
 */
angular.module("myApp",[],["$provide",function($provide){
	console.log("**module启动");
	//$provide.factory
	//$provide.service
	//$provide.constant
	//$provide.value
}])
		.config(["KEY",function(KEY){
			console.log("**执行config");
			console.log("constant注入到config：",KEY);
			//console.log("value注入到config：",vension); //不能注入
		}])
		//可以注入任何方法
		.constant("KEY","xxxx")
		//只能注入controller..service..factory
		.value("vension","1.0.0")
		//在config之后，在controller等其他服务之前
		.run(function(){
			console.log("**执行run");
		})
		.controller("controller",["KEY","vension",function(KEY,vension){
			console.log("**执行controller");
			console.log("constant注入到controller：",KEY);
			console.log("value注入到controller：",vension);
}]);
