<?php
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
	echo "<script>responsiveVoice.speak('$phrase','French Female');</script>";
}


?>