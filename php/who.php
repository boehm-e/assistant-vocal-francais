<?php
include("tts.php");
if (isset($_POST['id'])) {

	who($_POST['id']);
	function deleteClient11($x) {
           // your business logic
	}
}

function who($mots)
{
	$song = "";
	$mots = explode(" ",$mots);
	for ($i = 2; isset($mots[$i]); $i++)
		@$who .= $mots[$i] . "%20";

	$bing = file_get_contents("https://fr.search.yahoo.com/search;_ylt=AkAGke7ieH5yxJiveruID_VNhJp4?fr=yfp-t-905-s&toggle=1&fp=1&cop=mss&ei=UTF-8&p=qui%20est%20$who");
	preg_match_all('/<div class="compText" ><p class="">(.*)<a href="http:\/\/.*wikipedia/',$bing, $result);
	@$result = @$result[0][0];
	if ($result != NULL)
	{
		echo "$result";
	}
	else
		echo '<p class="text">Je ne sais pas, voulez vous rechercher sur wikipedia <a href="http://fr.wikipedia.org/w/index.php?title=Sp%C3%A9cial%3ARecherche&profile=default&search=$who&fulltext=Search&searchengineselect=mediawiki">Plus de resultats ici</a></p>';
//	echo @$search;
}