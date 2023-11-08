<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Mi primer ejercicio con PHP</h1>
    <?php
        echo "<button>Mensaje</button>";
    ?>

    <?php
        echo($_GET); //Echo no sirve para imprimir valores complejos, solo escalares
        var_dump($_GET); //Imprime a detalle el arreglo contenido en la variable $_GET
        var_dump("<br>".$_GET."<br>"); //Imprime el detalle del elemento string <br>Array<br>", es decir: String(13)Array
        $usuario=$_GET["usuario"];
        $password=$_GET["password"];
        echo "Está intentando entrar el usuario ".$usuario;
        var_dump($_POST);
    ?>
</body>
</html>