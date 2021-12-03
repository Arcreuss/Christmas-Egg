<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="main.js"></script>
    <title>Defi CAPCOD</title>
</head>

<body>


    <h1 class="Damas">HOP</h1>
    <a id="connection" href="formLogin.html">Log in</a>
    <?php
    echo "<div class='containerDivs'>";
    for ($i = 1; $i <= 30; $i++) {
        for ($j = 1; $j <= 28; $j++) {
            if($j%26 == 0){
                echo "<div class='spanm'></div>";
            }
            else
                echo "<div class='span'></div>";
        }
    }
    echo "</div>";
    ?>
</body>

</html>