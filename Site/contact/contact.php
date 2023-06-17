<?php
$EmailFrom = "pm.mail.Kirill2546@gmail.com";
$EmailTo = "pm.mail.Kirill2546@gmail.com";
$Subject = "Nouveau message !";
$Name = Trim(stripslashes($_POST['Name']));
$Email = Trim(stripslashes($_POST['Email']));
$Message = Trim(stripslashes($_POST['Message']));

if (filter_var($Email, FILTER_VALIDATE_EMAIL)) {
    print "<meta http-equiv=\"refresh\" content=\"0;URL=https://pm-kirill.github.io/PM-SITE/Site/contact/confirmation.html\">";
} else {
    print "<meta http-equiv=\"refresh\" content=\"0;URL=https://pm-kirill.github.io/PM-SITE/Site/contact/error.html\">";
    exit;
}

$Body = "";
$Body .= "Message de : ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Adresse e-mail : ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message : ";
$Body .= $Message;
$Body .= "\n";

$success = mail($EmailTo, $Body, "From: <$EmailFrom>");

if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=https://pm-kirill.github.io/PM-SITE/Site/contact/confirmation.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=https://pm-kirill.github.io/PM-SITE/Site/contact/error.html\">";
}
?>


<!-- Faire page confirmation et page erreur  -->
