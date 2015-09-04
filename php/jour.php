
<?php
include ("tts.php");

$google = file_get_contents("http://24timezones.com/fr_temps/paris_temps_local.php");

$final = preg_match_all('/<span id="currentTime">(.*)<\/span>/',$google, $heure);
$heure = implode($heure[1]);
$heure =  explode(",", $heure);
tts("$heure[1]");
echo "<p class=text>Nous sommes le <strong>$heure[1] $heure[2]</strong>. <br /></p>";

echo '<script>responsiveVoice.speak("'.$heure[1].'","French Female");</script>';
?>