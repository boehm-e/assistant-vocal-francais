<?php
include ("tts.php");

$google = file_get_contents("http://24timezones.com/fr_temps/paris_temps_local.php");

$final = preg_match_all('/<span id="currentTime">(.*)<\/span>/',$google, $heure);
$heure = implode($heure[1]);
$heure =  explode(",", $heure);

$h = $heure[0][0].$heure[0][1];
$m = $heure[0][3].$heure[0][4];
tts("$h heure et $m minutes");
echo "<p class=text>Il est <strong>$heure[0]</strong>. <br /></p>";

echo "<audio controls autoplay hidden>
  <source src=\"audio.mp3\" type=\"audio/mp3\" />
</audio>";
?>