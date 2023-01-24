<?php
$url = 'http://localhost/employe-api/public/register';
$data = array(
    "username"=> $_POST["username"],
    "first_name"=> $_POST["first_name"],
    "last_name"=> $_POST["last_name"],
    "password"=> $_POST["password"]
);

$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

function response(string $string, bool $error = true){
	$data = array(
		"error"		=> $error,
		"message"	=> $string
	);	
	die (json_encode($data));
}


?>