<?php session_start();?>
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
        <img id="elFormulaireLogo" src="./Images/banner_site_nuit_info.png" width="175px" height="auto">
        <form id="elFormulaire" action="traitement.php" method="post">
            <label for="fname">Username:</label>
            <input type="text" id="fname" name="fname"><br><br>
            <label for="lname">Password:</label>
            <input type="text" id="lname" name="lname"><br>
            <input type="submit" value="Submit" id="elFormulaireSubmit">
        </form>
    </div>
    <?php
    if($_SESSION["fname"] == Hollywood){
        echo 'hop';
    }
    ?>
</body>