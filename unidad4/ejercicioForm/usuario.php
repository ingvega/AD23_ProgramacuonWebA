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

      var_dump($_GET);
    ?>
    <form>
        <p>
        <input type="text" id="txtNombre" name="Nombre" placeholder="Nombre" required>
        </p>
        <p>
            <input type="text" id="txtApellido1" name="Apellido1" placeholder="Primer apellido" required>
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
            <input type="checkbox" name="Intereses" value="Cambio climático"> Cambio climático
        </label>
        <label>
            <input type="checkbox" name="Intereses" value="Covid19"> COVID-19
        </label>
        <label>
            <input type="checkbox" name="Intereses" value="Politica"> Política
        </label>
        </p>
        <p>
            <select name="EstadoCivil">
                <option value="1">Soltero</option>
                <option value="2">Casado</option>
                <option value="3">Divorciado</option>
                <option>Viudo</option>
                <option>Unión Libre</option>
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