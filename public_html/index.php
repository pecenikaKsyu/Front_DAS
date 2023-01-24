
<?php

$route = __DIR__;

//session_start();

$request_type = $_SERVER["REQUEST_METHOD"];
$request_route = @parse_url( $_SERVER["REQUEST_URI"] )["path"];
$valid_routes = ["/login","/register","/home","/about","/contact","/course","/pricing","/work-single"];
if(!isset($_SESSION["loggedin"]) || !$_SESSION["loggedin"]){
	if(isset($request_route) && $request_route == "/register"){
		$route_builder = $route . "/../src/register.html";
		require $route_builder;
		die();
	}
	else{
		$route_builder =	$route . "/../src/login.html"; 
		require $route_builder ;
		die();
	}
}
else{
	if($request_route === "/"){
		$route_builder =	$route . "/../src/home.html"; 
		require $route_builder ;
		die();
	}
	else if(in_array($request_route, $valid_routes)){
		$route_builder = $route . "/../src". $request_route . ".html";
		require $route_builder;
		die();
	}
}

?>