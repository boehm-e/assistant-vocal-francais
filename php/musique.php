<?php
if (isset($_POST['id'])) {

    musique($_POST['id']);
    echo $_POST['id'];
    function deleteClient11($x) {
           // your business logic
    }
}

function musique($phrase)
{
    $song = "";
    $mots = explode(" ", $phrase);
    for ($i = 1; isset($mots[$i]); $i++)
      if($mots[$i] != "des" || $mots[$i] != "de" || $mots[$i] != "video" || $mots[$i] != "videos")
        $song .= $mots[$i] . "+";

    $youtube = file_get_contents("https://www.youtube.com/results?search_query=$song");
    /* On recupere l url */
    $final = preg_match('/data-context-item-id="(.*)" data-visibility-tracking/',$youtube, $music);
    if ($music[1])
    {
        $song = $music[1];
        echo "<p class=text>Voila la video de la musique : <br /><br /></p>";
        echo "\n";
        echo "<p class=text><iframe width=\"95%\" height=\"600px\" src=\"//www.youtube.com/embed/$song?fs=1&autoplay=1&loop=1\" frameborder=\"0\" allowfullscreen></iframe></p>";
    }
}
?>