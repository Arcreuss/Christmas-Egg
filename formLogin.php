<?php
session_start();
$_SESSION["user"] = "";?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="main.js">
    <title>Defi CAPCOD</title>
</head>

<body>
    <a id="goBackHome" href=".">Home</a>
    <div id="preElFormulaire">
        <!-- <img id="elFormulaireLogo" src="./Images/banner_site_nuit_info.png" width="175px" height="auto"> -->
        <form id="elFormulaire"  method="post">
            <label for="fname">Username:</label>
            <input type="text" id="fname" name="fname"><br><br>
            <label for="lname">Password:</label>
            <input type="text" id="lname" name="lname"><br>
            <input type="submit" value="Submit" id="elFormulaireSubmit">
        </form>

        <?php
            if( isset($_POST["fname"]))
                $pswd = str_replace(' ', '',strtolower($_POST["lname"]));


            if(isset($_POST["fname"]) && $_POST["fname"] == "Hollywood" && $_POST["lname"] == ''){
                ?><a id="downloadlink" href="NuitDeL'infoEasterEg(GoogleCollab).ipynb" download="Enigme.ipynb">Next Step</a><?php
            }elseif( isset($_POST["fname"]) && $_POST["fname"] == "Hollywood" && $pswd == "debug"){
                // echo "hop";
            //    Redirect('congrats.php', false);
               header('Location: congrats.php');
                // header('Location: D:\WAMP\www\NuitDeLinfo\in\congrats.php');
            }


            // function Redirect($url, $permanent = false) {
            //     header('Location: congrats.php');
            //     exit();
            //     }
        ?>
    </div>

    
</body>