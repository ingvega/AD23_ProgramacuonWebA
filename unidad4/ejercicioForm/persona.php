<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">-->
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
      <?php
      require('menu.php');
      ?>
      <div class="container my-3">
        <form class="needs-validation" novalidate>
            <h4 class="text-center mb-2"></h4>
            <div class="row">
                <div class="col-4">
                    <input type="text" class="form-control" id="txtClave" placeholder="Clave" readonly>
                </div>
                <div class="col-8">
                    <input type="text" class="form-control" id="txtNombre" placeholder="Nombre completo" minlength="5" required>
                    <div class="valid-feedback">
                      Dato correcto
                    </div>
                    <div class="invalid-feedback">
                      <ul>
                        <li>El nombre es obligatorio</li>
                        <li>Debe tener al menos 5 caracteres</li>
                      </ul>
                    </div>
                </div>
            
                <div class="col-4">
                    <input type="text" class="form-control" id="txtEdad" pattern="\d{1,2}" placeholder="Edad" required>
                    <div class="valid-feedback">
                      Dato correcto
                    </div>
                    <div class="invalid-feedback">
                      <ul>
                        <li>La edad es obligatoria</li>
                        <li>Valores entre 1 y 100</li>
                      </ul>
                    </div>
                </div>
            </div>
            <div class="row justify-content-evenly mt-4">
                <button id="btnAceptar" class="btn btn-primary col-3">Aceptar</button>
                <button type="reset" id="btnLimpiar" class="btn btn-warning col-3">Limpiar</button>
                <a href="tabla.html" class="btn btn-secondary col-3">Volver</a>
            </div>
        </form>
    </div>
    <!--<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>-->
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/persona.js"></script>
</body>
</html>