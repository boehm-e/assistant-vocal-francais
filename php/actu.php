<?php
$meteo = file_get_contents("http://www.futura-sciences.com/magazines/sciences/infos/actu/");

/*On recupere les urls*/
$final = preg_match_all('/<h3 class="title">.*debug">(.*)<\/span><\/h3>/',$meteo, $matin);

/*on cre les images*/

echo "<p class=text>Actualitees de Futura Science: <br /><br /></p>";
;
$i = 0;
foreach ($matin[0] as $key => $value)
{
	if ($i < 5) {
			echo "<p>$value</p>";
		}
	$i++;
}

?>