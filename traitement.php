<?php

if(isset($_POST))
    if($_POST["fname"] == "Hollywood")
        $_SESSION["fname"] = $value;
    else
        echo "nop bro";

    header('Location: formLogin.php');
?>