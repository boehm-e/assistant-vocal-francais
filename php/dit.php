<?php
include ("tts.php");
if (isset($_POST['id'])) {

	dit($_POST['id']);
	echo $_POST['id'];
	function deleteClient11($x) {
	}
}

function dit($phrase)
{
	$phrase = str_replace("dis", "", $phrase);
	$phrase = str_replace("dit", "", $phrase);
	tts($phrase);
	echo "<audio controls autoplay hidden>
	<source src=\"audio.mp3\" type=\"audio/mp3\" />
	</audio>";
}


?>