document.addEventListener('DOMContentLoaded',()=>{
    let clavePersona=sessionStorage.getItem('clavePersona');
    if(clavePersona){
        document.querySelector("form h4").innerText='Editar';
        cargarPersona(clavePersona);
    }else{
        document.querySelector("form h4").innerText='Agregar';
    }
    document.getElementById("btnAceptar").addEventListener('click',function(e){
        document.querySelector("form").classList.add("was-validated");
        if(document.querySelector("form").checkValidity()){
            let personas=[];
            if(localStorage.getItem('personas')){
                personas=JSON.parse(localStorage.getItem('personas'));
            }
            let operacion=document.querySelector("form h4").innerText;
            let clave=0;
            if(operacion=='Agregar'){
                //Llenar un objeto con los elementos de la caja de texto
                if(personas.length>0){
                    clave=personas[personas.length-1].clave;
                }          
                clave++;      
                let nuevaPersona={
                    clave:clave,
                    nombre:document.getElementById("txtNombre").value.trim(),
                    edad:document.getElementById("txtEdad").value
                };
                personas.push(nuevaPersona);
                localStorage.setItem('personas',JSON.stringify(personas));
                alert('Registro añadido');
                e.preventDefault();
                location.replace('tabla.html');
            }else if(operacion=='Editar'){
                clave=document.getElementById("txtClave").value;
                let index=personas.findIndex(item=>item.clave==clave);
                personas[index].nombre=document.getElementById("txtNombre").value.trim();
                personas[index].edad=document.getElementById("txtEdad").value;
                localStorage.setItem('personas',JSON.stringify(personas));
                alert('Registro almacenado');
                e.preventDefault();
                location.replace('tabla.html');
                //if('1'==1)->true
                //if('1'===1)->false
            }
        }else{
            e.preventDefault();
        }
    });
});

function cargarPersona(clave){
    //Cargar la información almacenada
    let personas=localStorage.getItem('personas')?
    JSON.parse(localStorage.getItem('personas')):[];
    //Buscar la persona que tenga la clave de la fila

    let persona=personas.find(item=>item.clave==clave);
    if(persona){
        document.getElementById("txtClave").value=persona.clave;
        document.getElementById("txtNombre").value=persona.nombre;
        document.getElementById("txtEdad").value=persona.edad;
        document.querySelector("form h4").innerText='Editar';
    }else{
        alert('Registro no encontrado');
        location.replace('tabla.html');
    }

}
