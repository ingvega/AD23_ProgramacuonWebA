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
      require_once('../datos/daoUsuario.php');
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

      function validar($interes){
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

        //Aceptar letras caracter punto y espacios
        //var_dump(preg_match("/^[a-zA-Z.\s]+$/",$_POST["Nombre"]));
      /*var_dump($_GET);*/
      var_dump($_POST);
      /*var_dump($_REQUEST);
      echo count($_POST);
      echo "\nNOmbre".ISSET($_POST["Nombre"]);
      echo "\nApellido2".ISSET($_POST["Apellido2"]);
      echo "\nX".ISSET($_POST["X"]);*/
      $valNombre=$valApe1=$valApe2=$valEmail=$valEdad=$valGenero=$valIntereses=$valTerminos=$valEdoCivil="";
      
      if(count($_POST)>0){
        $valNombre=$valApe1=$valApe2=$valEmail=$valEdad=$valGenero=$valIntereses=$valTerminos=$valEdoCivil="is-invalid";
        $valido=true;
        if(ISSET($_POST["Nombre"]) && 
          (strlen(trim($_POST["Nombre"]))>3 && strlen(trim($_POST["Nombre"]))<51) &&
            preg_match("/^[a-zA-Z.\s]+$/",$_POST["Nombre"])){
            $valNombre="is-valid";
        }else{
            $valido=false;
        }
        if(ISSET($_POST["Apellido1"]) && 
          (strlen(trim($_POST["Apellido1"]))>3 && strlen(trim($_POST["Apellido1"]))<51) &&
            preg_match("/^[a-zA-Z.\s]+$/",$_POST["Apellido1"])){
            $valApe1="is-valid";
        }else{
            $valido=false;
        }
        if(ISSET($_POST["Apellido2"]) && 
          (strlen(trim($_POST["Apellido2"]))==0) ||
          (strlen(trim($_POST["Apellido2"]))>3 && strlen(trim($_POST["Apellido2"]))<51) &&
            preg_match("/^[a-zA-Z.\s]+$/",$_POST["Apellido2"])){
            $valApe2="is-valid";
        }else{
            $valido=false;
        }
        if(ISSET($_POST["Email"]) && 
            filter_var($_POST["Email"],FILTER_VALIDATE_EMAIL)){
            $valEmail="is-valid";
        }else{
            $valido=false;
        }
        if(ISSET($_POST["Edad"]) && 
            is_numeric($_POST["Edad"]) &&
            $_POST["Edad"]>=18 && $_POST["Edad"]<=100){
            $valEdad="is-valid";
        }else{
            $valido=false;
        }
        if(ISSET($_POST["Edad"]) && 
            is_numeric($_POST["Edad"]) &&
            $_POST["Edad"]>=18 && $_POST["Edad"]<=100){
            $valEdad="is-valid";
        }else{
            $valido=false;
        }

        //Guardar 
        //Crear un modelo Usuario con todos los datos
        $obj = new Usuario();
        $obj->nombre=trim($_POST["Nombre"]);
        $obj->apellido1=trim($_POST["Apellido1"]);
        $obj->apellido2=trim($_POST["Apellido2"]);
        $obj->edad=$_POST["Edad"];
        $obj->fechaNac=new DateTime();
        $obj->email=$_POST["Email"];
        $obj->genero=$_POST["Genero"]=="Femenino"?"F":"M";
        $obj->edoCivil=1;
        $obj->intereses=$_POST["Intereses"];
        $obj->password="123";

        //Usar el método agregar del dao
        $dao= new DAOUsuario();
        if($dao.agregar($obj)==0{
            echo "Error al guardar";
        }else{
            //Al finalizar el guardado redireccionar a la lista
            header("location=listaUsuarios.php");
        }
        

      }
    ?>
    </pre>
    <form method="post">
        <div>
            
            <input type="text" id="txtNombre" name="Nombre" class="form-control <?=$valNombre?>"
            placeholder="Nombre" required value="<?php echo ISSET($_POST["Nombre"])?$_POST["Nombre"]:"" ?>">
            <div class="invalid-feedback">
                <ul>
                    <li>El nombre es obligatorio</li>
                    <li>Debe contener solo caracteres alfabéticos</li>
                    <li>Debe tener entre 2 y 50</li>
                </ul>
            </div>
        </div>
        <div>
            <?php
                if(ISSET($_POST["Apellido1"])){
            ?>
                <input type="text" id="txtApellido1" name="Apellido1" 
                class="form-control <?=$valApe1?>" placeholder="Primer apellido" value="<?= $_POST["Apellido1"] ?>" required>
            <?php
                }else{
            ?>
                <input type="text" id="txtApellido1" class="form-control" name="Apellido1" placeholder="Primer apellido" required>
            <?php
                }
            ?>
            <div class="invalid-feedback">
                <ul>
                    <li>El primer apellido es obligatorio</li>
                    <li>Debe contener solo caracteres alfabéticos</li>
                    <li>Debe tener entre 2 y 50</li>
                </ul>
            </div>
        </div>
        <div>
            <input type="text" id="txtApellido2" class="form-control <?=$valApe2?>" name="Apellido2" placeholder="Segundo apellido"
            value="<?= ISSET($_POST["Apellido2"])?$_POST["Apellido2"]:"" ?>">
            <div class="invalid-feedback">
                <ul>
                    <li>Debe contener solo caracteres alfabéticos</li>
                    <li>Debe tener entre 2 y 50</li>
                </ul>
            </div>
        </div>

        <div>
            
            <input type="email" id="txtEmail"  name="Email" class="form-control <?=$valEmail?>"
            placeholder="Correo electrónico" required value="<?php echo ISSET($_POST["Email"])?$_POST["Email"]:"" ?>">
            <div class="invalid-feedback">
                <ul>
                    <li>El correo electrónico es obligatorio</li>
                    <li>Debe tener un formato válido</li>
                </ul>
            </div>
        </div>

        <div>
            <input type="number" id="txtEdad" name="Edad" class="form-control <?=$valEdad?>" placeholder="Edad" 
            value="<?= ISSET($_POST["Edad"])?$_POST["Edad"]:"" ?>"
            required>
            <div class="invalid-feedback">
                <ul>
                    <li>La edad es un dato obligatorio</li>
                    <li>Valores numéricos enteros entre 18 y 100</li>
                </ul>
            </div>
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
        <label>
        <input type="checkbox" name="Terminos" >
        Acepto los términos</label>
        </div>
        
        <button>Enviar</button>
    </form>
    <script src="js/bootstrap.bundle.min.js"></script>
</body>
</html>