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

      function checkIntereses($interes){
        if(ISSET($_POST["Intereses"])){
            for($i=0;$i<count($_POST["Intereses"]);$i++){
                if($_POST["Intereses"][$i]==$interes){
                    return "checked";
                }
            }
        }
        return "";
      }
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
        placeholder="Nombre" required value="<?php echo ISSET($_POST["Nombre"])?$_POST["Nombre"]:"" ?>">
        </p>
        <p>
            <?php
                if(ISSET($_POST["Apellido1"])){
            ?>
                <input type="text" id="txtApellido1" name="Apellido1" 
                placeholder="Primer apellido" value="<?= $_POST["Apellido1"] ?>" required>
            <?php
                }else{
            ?>
                <input type="text" id="txtApellido1" name="Apellido1" placeholder="Primer apellido" required>
            <?php
                }
            ?>

        </p>
        <p>
            <input type="text" id="txtApellido2" name="Apellido2" placeholder="Segundo apellido"
            value="<?= ISSET($_POST["Apellido2"])?$_POST["Apellido2"]:"" ?>">
        </p>
        <p>
        <input type="number" id="txtEdad" name="Edad" placeholder="Edad" 
        value="<?= ISSET($_POST["Edad"])?$_POST["Edad"]:"" ?>"
        required>
        </p>
        <p>
        <label>
            <input type="radio" id="rbtMasculino" name="Genero" value="Masculino" 
            checked
            >
            Masculino
        </label>

        <label>
            <input type="radio" id="rbtFemenino" name="Genero" Value="Femenino"
            <?= (ISSET($_POST["Genero"]) && 
                $_POST["Genero"]=="Femenino")?"checked":"" ?>>
            Femenino
        </label>
        </p>
        <p>
        <h4>Intereses</h4>
        <label>
            <input type="checkbox" name="Intereses[]" value="Tecnologia" 
             <?=checkIntereses("Tecnologia") ?>
            > Tecnología
        </label>
        <label>
            <input type="checkbox" name="Intereses[]" value="Cambio climático"
             <?=checkIntereses("Cambio climático") ?>
            > Cambio climático
        </label>
        <label>
            <input type="checkbox" name="Intereses[]" value="Covid19"
             <?=checkIntereses("Covid19") ?>
            > COVID-19
        </label>
        <label>
            <input type="checkbox" name="Intereses[]" value="Politica"
            <?=checkIntereses("Politica") ?>
            > Política
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