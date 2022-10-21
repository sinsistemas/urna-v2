<?php
     $hostname="localhost";
     $username="root";
     $password="";
     $dbname="artee457_autogabasic_pagamentos";
     $linkP = mysqli_connect($hostname, $username, $password, $dbname);

     $sqlCliente = "SELECT * FROM modulos ORDER BY modulos_id";
     $clienteA = mysqli_query($linkP, $sqlCliente);

     while($row=mysqli_fetch_array($clienteA))
 {
    echo $row['mod_nome']; 
 }
?>