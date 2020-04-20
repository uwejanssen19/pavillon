<?php
//$error_reporting = error_reporting(E_ALL | E_STRICT);
$bSubmitSet = filter_input(INPUT_POST, 'submit');
if (isset($bSubmitSet)) {
    //var_dump($_POST);
    // TODO: Change this email address to the shop's e-mail address
    /* for test only: */
    //$mail_to = "uwe@janssen-muenchen.de"; // this is the receiver this mail is sent to
    $mail_to = "schreibwaren-pavillon@gmx.de"; // this is the receiver this mail is sent to
    
    $from_mail = $_POST['contact_email']; // this is the sender's Email address
    $from_name = $_POST['contact_name'];
    $mail_subject = $_POST['contact_subject'];
    $mail_message = $_POST['contact_message'];

    $header = makeHeader($from_name, $from_mail, $mail_subject);
    // Send mail
    $bRetVal = mail($mail_to, $mail_subject, $mail_message, $header);
    echo "retVal for sending = " . $bRetVal;

//    $subject2 = "Kopie Ihrer Nachricht";
//    $mail_message = $name . " wrote the following:" . "\n\n" . $_POST['jform']['contact_message'];
//    $message2 = "Here is a copy of your message " . $from_name . "\n\n" . $mail_message;
//    $headers = "From:" . $from;
//    $headers2 = "From:" . $to;
//    //echo "validated by JS and ready for submit- > send the MAIL to " . $to;
//    //$bRetVal = mail($from_mail,$subject2,$message2,$headers); // sends a copy of the message to the sender
//    echo "retVal for sending = " . $bRetVal;
//    // echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
//    // You can also use header('Location: thank_you.php'); to redirect to another page.
}

function makeHeader($p_from_name, $p_from_mail, $p_mail_subject) {
    $encoding = "utf-8";

    // Preferences for Subject field
    $subject_preferences = ["input-charset" => $encoding,
        "output-charset" => $encoding,
        "line-length" => 76,
        "line-break-chars" => "\r\n"
    ];

    // Mail header
    $header = "Content-type: text/html; charset=" . $encoding . " \r\n";
    $header .= "From: " . $p_from_name . " <" . $p_from_mail . "> \r\n";
    $header .= "MIME-Version: 1.0 \r\n";
    $header .= "Content-Transfer-Encoding: 8bit \r\n";
    $header .= "Date: " . date("r (T)") . " \r\n";
    $header .= iconv_mime_encode("Subject", $p_mail_subject, $subject_preferences);
    return $header;
}
?>
<!-- PHP END --> 

<!DOCTYPE html>
<html dir="ltr" lang="de-de">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="author" content="Uwe Janssen" />
        <title>Schreibwaren-Pavillon - Kontakt</title>
        <!-- link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" -->
        <link rel="stylesheet" href="lib/css/system.css" />
        <link rel="stylesheet" href="lib/css/general.css" />
        <link rel="stylesheet" href="lib/css/template.css" />
        <meta name="viewport" content="initial-scale = 1.0, maximum-scale = 1.0, user-scalable = no, width = device-width">
        <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
        <link rel="stylesheet" href="lib/css/template.responsive.css" media="all">
        <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=PT+Sans+Narrow%7CPT+Sans&amp;subset=latin">
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        <!-- script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script -->
        <!-- script src="lib/js/bootstrap.min.js"></script> -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/localization/messages_de.js"></script>
        <!--script>if ('undefined' !== typeof jQuery)
                document._artxJQueryBackup = jQuery;</script>
        <!--script>jQuery.noConflict();</script-->
        <script src="lib/js/check_form.js"></script>

        <!--script>if (document._artxJQueryBackup)
                jQuery = document._artxJQueryBackup;</script-->
        <!--script src="lib/js/script.responsive.js"></script-->
        <!-- own jq script -->

    </head>
    <body>


        <div id="art-main">
            <header class="art-header clearfix">
                <div class="art-shapes">
                    <h1 class="art-headline" data-left="11.24%">
                        <a href="index.html">Schreibwaren Pavillon</a>
                    </h1>
                    <h2 class="art-slogan" data-left="73.8%">Bachbauernstr. 2a 81241 M&uuml;nchen +49 (0)89 88 14 91</h2>
                </div>
            </header>
            <nav class="art-nav clearfix">
                <div class="art-nav-inner">
                    <ul class="art-hmenu">
                        <li class="item-119 deeper parent">
                            <a href="index.html">Home</a>
                            <ul>
                                <li class="item-121 deeper parent">
                                    <a href="produkte.html">Produkte</a>
                                    <ul>
                                        <li class="item-123"><a href="druckerpatronen.html">Druckerpatronen</a></li>
                                    </ul>
                                </li>
                                <li class="item-125"><a href="produktliste.html">Produktliste</a></li>
                                <li class="item-127"><a href="produktvideos.html">Produktvideos</a></li>
                                <li class="item-160"><a href="galerie.html">Galerie</a></li>
                                <li class="item-161"><a href="anfahrt.html">Anfahrt</a></li>
                            </ul>
                        </li>
                        <li class="item-129"><a href="impress_oeffn.html">Impressum &amp; &Ouml;ffnungszeiten</a></li>
                        <li class="item-133 current active"><a class=" active" href="kontakt.php">Kontakt</a></li>
                    </ul>
                </div>
            </nav>
            <div class="art-sheet clearfix">
                <div class="art-layout-wrapper clearfix">
                    <div class="art-content-layout">
                        <div class="art-content-layout-row">
                            <div class="art-layout-cell art-content clearfix">
                                <article class="art-post">
                                    <div class="art-postcontent clearfix">
                                        <div class="breadcrumbs">
                                            <span class="showHere">Aktuelle Seite: </span>
                                            <a href="index.html" class="pathway">Home</a> <img src="images/arrow.png" alt="Pfeil rechts"  /> 
                                            <span>Kontakt</span>
                                        </div>
                                    </div>
                                </article>
                                <!--article class="art-post art-messages">
                                  <div class="art-postcontent clearfix">
                                        <div id="system-message-container"></div>
                                  </div>
                                  </article -->
                                <article class="art-post">
                                    <div class="art-postcontent clearfix">
                                        <div class="contact">
                                            <h2><span class="contact-name">Schreibwaren Pavillon</span></h2>
                                            <h3>Kontakt</h3>
                                            <div class="contact-address">
                                                <span class="jicons-text" >Adresse: 		</span>
                                                <address>
                                                    <span class="contact-street">BACHBAUERNSTR. 2A<br />81241 M&uuml;nchen<br /><br />E-Mail:<br />schreibwaren-pavillon@gmx.de</span>
                                                </address>
                                            </div>
                                            <div class="contact-contactinfo">
                                                <p><span class="jicons-text" >Telefon:</span><span class="contact-telephone">+49 (0)89 88 14 91		</span>
                                                </p>
                                                <p>
                                                    <span class="jicons-text" >
                                                        Fax:</span>
                                                    <span class="contact-fax">
                                                        ++49 (0)89 834 95 19</span>
                                                </p>
                                                <p>
                                                    <span class="jicons-text" >
                                                    </span>
                                                    <span class="contact-webpage">
                                                        <a href="http://schreibwaren-pavillon.de" target="_blank">
                                                            http://schreibwaren-pavillon.de</a>
                                                    </span>
                                                </p>
                                            </div>
                                            Informationen herunterladen als:<a href="res/Schreibwaren_Pavillon.vcf">vCard</a>
                                            <p></p>
                                            <h3>Kontaktformular</h3>
                                            <div class="contact-form">
                                                <form id="contact-form" name="contactForm" action="" method="post" ng-submit="submitForm(userForm.$valid)" novalidate>
                                                    <fieldset>
                                                        <legend>Eine E-Mail senden. Alle mit * markierten Felder werden ben&ouml;tigt.</legend>
                                                        <dl>
                                                            <dt><label id="jform_contact_name-lbl" for="jform_contact_name" class="hasTip required" title="Name::Der Name">Name<span class="star">&#160;*</span></label>
                                                            <dd><input type="text" id="jform_contact_name" name="contact_name" size="30" class="form-control" 
                                                                       data-rule-required="true" data-msg-required="Bitte füllen Sie dieses Feld aus" data-rule-minlength="3" data-msg-minlength="Geben Sie mindestens {0} Zeichen ein"></dd>
                                                            <dt><label id="jform_contact_email-lbl" for="jform_contact_email" class="hasTip required" title="E-Mail::E-Mail f&uuml;r Kontakt" required>E-Mail<span class="star">&#160;*</span></label></dt>
                                                            <dd><input type="email" name="contact_email" class="form-control" id="jform_contact_email" required/></dd>
                                                            <dt><label id="jform_contact_emailmsg-lbl" for="jform_contact_email_subject" class="hasTip required" title="Betreff::Einen Betreff f&uuml;r die E-Mail eingeben.">Betreff<span class="star">&#160;*</span></label></dt>
                                                            <dd><input type="text" name="contact_subject" id="jform_contact_email_subject" value="" class="form-control" size="60" 
                                                                       data-rule-required="true" data-msg-required="Bitte füllen Sie dieses Feld aus" data-rule-minlength="4" data-msg-minlength="Geben Sie mindestens {0} Zeichen ein"/></dd>
                                                            <dt><label id="jform_contact_message-lbl" for="jform_contact_message" class="hasTip required" title="Nachricht::Nachricht hier eingeben.">Nachricht<span class="star">&#160;*</span></label></dt>
                                                            <dd><textarea name="contact_message" id="jform_contact_message" cols="50" rows="10" class="form-control"
                                                                          data-rule-required="true" data-msg-required="Bitte füllen Sie dieses Feld aus" data-rule-minlength="10" data-msg-minlength="Geben Sie mindestens {0} Zeichen ein"></textarea></dd>
                                                            <dt></dt>
                                                            <dd><div><button class="button validate" name="submit" id="contact_submit" type="submit">E-Mail senden</button><span id="message_field"></span></div>
                                                            </dd>
                                                        </dl>
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="art-footer clearfix"></footer>
        </div>
    </body>
</html>
