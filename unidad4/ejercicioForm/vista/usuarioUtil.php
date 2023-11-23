<?php
    function validateDate($date, $format = 'Y-m-d'){
        $d = DateTime::createFromFormat($format, $date);
        return $d && $d->format($format) == $date;
    }
    
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
    
    $usuario=new Usuario();

    $valNombre=$valApe1=$valApe2=$valEmail=$valGenero=$valIntereses=$valFechaNac=$valTerminos=$valEstadoCivil=$valPassword="";
    if(count($_POST)==1 && ISSET($_POST["id"]) && is_numeric($_POST["id"])){
        //Obtener la info del usuario con ese id
        $dao=new DAOUsuario();
        $usuario=$dao->obtenerUno($_POST["id"]);
        
    }elseif(count($_POST)>1){
        $valNombre=$valApe1=$valApe2=$valEmail=$valGenero=$valIntereses=$valFechaNac=$valTerminos=$valEstadoCivil=$valPassword="is-invalid";
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
        if(ISSET($_POST["Password"]) && 
          (strlen(trim($_POST["Password"]))>=6 && strlen(trim($_POST["Password"]))<16)){
            $valPassword="is-valid";
        }else{
            $valido=false;
        }
        if(ISSET($_POST["FechaNac"]) && validateDate($_POST["FechaNac"])){
            $fNac=DateTime::createFromFormat('Y-m-d', $_POST["FechaNac"]);
            $h = new DateTime();
            $dif = $h->diff($fNac)->y;
            if($dif>=18)
                $valFechaNac="is-valid";
        }else{
            $valido=false;
        }
        if(ISSET($_POST["EstadoCivil"]) && 
          ($_POST["EstadoCivil"]>=1 && $_POST["EstadoCivil"]<=5)){
            $valEstadoCivil="is-valid";
        }else{
            $valido=false;
        }

        if(ISSET($_POST["Genero"]) && 
          ($_POST["Genero"]=='Masculino' || $_POST["Genero"]=='Femenino')){
            $valGenero="is-valid";
        }else{
            $valido=false;
        }

        if(ISSET($_POST["Terminos"]) && $_POST["Terminos"]=="on" ){
            $valGenero="is-valid";
        }else{
            $valido=false;
        }

        $usuario->nombre=ISSET($_POST["Nombre"])?trim($_POST["Nombre"]):"";
        $usuario->apellido1=ISSET($_POST["Apellido1"])?trim($_POST["Apellido1"]):"";
        $usuario->apellido2=ISSET($_POST["Apellido2"])?trim($_POST["Apellido2"]):"";
        $usuario->fechaNac=DateTime::createFromFormat('Y-m-d', $_POST["FechaNac"]);
        $usuario->email=$_POST["Email"];
        $usuario->genero=$_POST["Genero"]=="Femenino"?"F":"M";
        $usuario->edoCivil=$_POST["EstadoCivil"];
        $usuario->password=$_POST["Password"];
        $usuario->intereses=ISSET($_POST["Intereses"])?$_POST["Intereses"]:array();

        if($valido){
            //Guardar 
            //Crear un modelo Usuario con todos los datos
            
            
            //var_dump($obj);

            //Usar el método agregar del dao
            $dao= new DAOUsuario();
            if($dao->agregar($usuario)==0){
                echo "Error al guardar";
            }else{
                //Al finalizar el guardado redireccionar a la lista
                header("Location: listaUsuarios.php");
            }
        }

      }
?>