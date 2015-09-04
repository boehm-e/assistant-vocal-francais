<?php
include ("tts.php");

$meteo = file_get_contents("http://www.previmeteo.com/fr/3012621-meteo-ivry-sur-seine.html");

/*On recupere les urls*/
$final = preg_match_all('/class="prev_picto" id="picto_1_0"><img src="(.*)" alt/',$meteo, $matin);
$final = preg_match_all('/class="prev_picto" id="picto_1_1"><img src="(.*)" alt/',$meteo, $midi);
$final = preg_match_all('/class="prev_picto" id="picto_1_2"><img src="(.*)" alt/',$meteo, $soir);

/*on cre les images*/

$matin = implode($matin[1]);
$midi = implode($midi[1]);
$soir = implode($soir[1]);

echo "<p class=text>Demain matin : <br /> <br /><img src=\"$matin\"/> <br/><br/></p>";
echo "<p class=text>Demain midi :  <br /><br /><img src=\"$midi\"/> <br /><br /></p>";
echo "<p class=text>Demain soir : <br /> <br /><img src=\"$soir\"/><br /></p>";

tts("Voila la meteo!");
echo "<audio controls autoplay hidden>
  <source src=\"audio.mp3\" type=\"audio/mp3\" />
</audio>";
?>