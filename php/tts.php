<?php
function tts($words)
{
	$words = str_replace(' ', "%20", $words);

	$mp3 =file_get_contents("http://translate.google.com/translate_tts?ie=UTF-8&q=$words&tl=fr");
	file_put_contents("../audio.mp3", $mp3);
}
?>
