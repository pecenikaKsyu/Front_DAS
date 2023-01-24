<?php


$message = rand(99999, 1000000);

$_SESSION['message'] = $message;	


if (!isset($_POST['g-recaptcha-response'])) {
    response("You didnt pass the recaptcha");
}

$secret = "Ldc4iEkAAAAAOBOy3jNv5wnWC7TB8xTZMU9tUw3";
$verifyResponse = file_get_contents($settings["recaptcha"]["verify-address"] . $secret . '&response=' . $_POST['g-recaptcha-response']);
$responseData = json_decode($verifyResponse);
if ($responseData->success) {}
else{
    response("Error while checking your g-recaptcha");
}

$email = $_POST['email'];
if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    response('Your email address is not valid');
}


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
	$mail->isSMTP();
	$mail->Host			= 'smtp.gmail.com';
	$mail->SMTPAuth		= true;
	$mail->Username		= 'vbotnaru18@gmail.com';
	$mail->Password		= 'mmtygijweikjfyvz';
	$mail->SMTPSecure	= PHPMailer::ENCRYPTION_SMTPS;
	$mail->Port			= 465;
	
	$mail->setFrom( 'vbotnaru18@gmail.com' , 'eLearning' );
	$mail->addReplyTo($_POST['email'], 'eLearning');
	$mail->addAddress($_POST['email'], 'eLearning');

	$mail->isHTML(true);
	$mail->Subject	= 'Message';
	$mail->Body		= 'Your secret key is: '. $message;

	$mail->send();
	
	response("Mail Send", false);
	
} 
catch (Exception $e) {
	response("Error while sending mail");
}

function response(string $string, bool $error = true){
	$data = array(
		"error"		=> $error,
		"message"	=> $string
	);	
	die (json_encode($data));
}


?>