<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
    
    <?php
      require('menu.php');
    ?>
    <pre>
    <?php
      /*var_dump($_GET);*/
      var_dump($_POST);
      /*var_dump($_REQUEST);
      echo count($_POST);
      echo "\nNOmbre".ISSET($_POST["Nombre"]);
      echo "\nApellido2".ISSET($_POST["Apellido2"]);
      echo "\nX".ISSET($_POST["X"]);*/
    ?>
    </pre>
    <form method="post">
        <p>
        <input type="text" id="txtNombre" name="Nombre" 
        placeholder="Nombre" required value="<?php echo ISSET($_POST["X"])?$_POST["X"]:""; ?>">
        </p>
        <p>
            <?php
                if(ISSET($_POST["Apellido1"])){
            ?>
                <input type="text" id="txtApellido1" name="Apellido1" 
                placeholder="Primer apellido" value="<?php echo $_POST["Apellido1"] ?>" required>
            <?php
                }else{
            ?>
                <input type="text" id="txtApellido1" name="Apellido1" placeholder="Primer apellido" required>
            <?php
                }
            ?>

        </p>
        <p>
            <input type="text" id="txtApellido2" name="Apellido2" placeholder="Segundo apellido">
        </p>
        <p>
        <input type="number" id="txtEdad" name="Edad" placeholder="Edad" required>
        </p>
        <p>
        <label>
            <input type="radio" id="rbtMasculino" name="Genero" value="Masculino">
            Masculino
        </label>

        <label>
            <input type="radio" id="rbtFemenino" name="Genero" Value="Femenino">
            Femenino
        </label>
        </p>
        <p>
        <h4>Intereses</h4>
        <label>
            <input type="checkbox" name="Intereses[]" value="Tecnologia"> Tecnología
        </label>
        <label>
            <input type="checkbox" name="Intereses[]" value="Cambio climático"> Cambio climático
        </label>
        <label>
            <input type="checkbox" name="Intereses[]" value="Covid19"> COVID-19
        </label>
        <label>
            <input type="checkbox" name="Intereses[]" value="Politica"> Política
        </label>
        </p>
        <p>
            <select name="EstadoCivil">
                <option value="1" <?php echo (ISSET($_POST["EstadoCivil"])
                                            && $_POST["EstadoCivil"]=="1")
                                           ?"selected":""; ?>>Soltero</option>
                <option value="2">Casado</option>
                <option value="3" <?php echo (ISSET($_POST["EstadoCivil"])
                                            && $_POST["EstadoCivil"]=="3")
                                           ?"selected":""; ?>>Divorciado</option>
                <option value="4">Viudo</option>
                <option value="5">Unión Libre</option>
            </select>
        </p>
        <p>
        <label>
        <input type="checkbox" name="Terminos" >
        Acepto los términos</label>
        </p>
        
        <button>Enviar</button>
    </form>
    <script src="js/bootstrap.bundle.min.js"></script>
</body>
</html>