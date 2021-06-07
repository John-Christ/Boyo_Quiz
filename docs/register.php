<?php
if(!isset($_POST['submit']))
{
    //need to submit the form, cannot access the file
    echo "error; you need to submit the form!";
}


//collect this
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];


//let's validate
if(empty($name)||empty($visitor_email))
{
    echo "Name and email are mandatory!";
    exit;
}


$email_from = 'boyolifestyle@gmail.com';
$email_subject = "New form Submission";
$email_body = "You have received a new message from the user $name.\n".
"email address: $visitor_email\n".
"Here is the message:\n $message".

$to = "boyolifestyle@gmail.com";
$headers = "from: $email_from \r\n";

//send the email
mail($to,$email_subject,$email_body,$headers);
 ?>
