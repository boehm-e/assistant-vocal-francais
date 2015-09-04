
<?php
$streamzzz = file_get_contents("http://streamzzz.com/");
$final = preg_match_all('/<h1><a href="http.*".(.*)<\/a><\/h1>/',$streamzzz, $series);
$i = 1;

foreach ($series[0] as $key => $values)
  {
    if (substr_count($values, "arrow") >= 1 || substr_count($values, "flash") >= 1 || substr_count($values, "gotham") >= 1 || substr_count($values, "Walking Dead") >= 1)
      {
        echo "<p style=\"margin-left:35%\">$values</p>";
        preg_match_all('/a href="(.*)" title/',$values, $myseries);

        $i = 0;
      }
  }


@$myseries = file_get_contents($myseries[1][0]);
preg_match_all('/<iframe src="(http:\/\/youwatch.org\/embed.*html)/',$myseries, $watch);


@$watch = $watch[0][0];

if ($watch[0][0])
  echo "<p class=\"text\">$watch\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"NO\" frameborder=\"0\" height=\"600px\" width=\"95%\"></iframe></p>";
else
  echo "<p class=\"text\"> Pas de nouvelles series</p>";


if ($i == 1)
  echo "<script>responsiveVoice.speak('aucunes','French Female');</script>";
else
  echo "<script>responsiveVoice.speak('voila les séries disponibles','French Female');</script>";

?>
