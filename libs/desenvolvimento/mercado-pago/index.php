

<?php
//criamos o arquivo
$arquivo2 = fopen('json.txt','a+');
//verificamos se foi criado
if ($arquivo2 == false) die('Não foi possível criar o arquivo.');
//$texto = file_get_contents("php://input");
$json_event = file_get_contents('php://input', true);
$event = json_decode($json_event);
fwrite($arquivo2, $event);

//Fechamos o arquivo após escrever nele
fclose($arquivo2);
?>