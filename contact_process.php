<?php
	$fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
	$email = $_POST['email'];
	$Question = $_POST['message'];
    $party = $_POST['party'];
    $partys = implode(',', $party);
   
 	$to = "adam@reversedout.com";
	$subject = "Contact Request from Lindner Center of Hope";
	$message = "Below are details of User : \n";
	$message .= "First Name : $fname \n";
    $message .= "Last Name : $lname \n";
	$message .= "Email : $email \n";
	$message .= "Comment, Message, Question : $Question \n";
    $message .= "Party : $partys \n";
	$from = "adam@reversedout.com";
	$headers = "From:" . $from;
	mail($to,$subject,$message);
	header('Location: index.html');
	exit; 
?>