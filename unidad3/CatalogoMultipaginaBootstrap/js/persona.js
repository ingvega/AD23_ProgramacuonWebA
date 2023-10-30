document.addEventListener("DOMContentLoaded",()=>{
    
    let personas=[];
    if(localStorage.getItem('personas')){
        personas=JSON.parse(localStorage.getItem('personas'));
    }
    let clave=sessionStorage.getItem('claveAEditar');
    if(clave){
        document.getElementById("titulo").innerText="Editar";
        let obj=personas.find((p)=>p.clave==clave);
        if(obj){
            document.getElementById("spnClave").innerText=clave;
            document.getElementById("txtNombre").value=obj.nombre;
            document.getElementById("txtEdad").value=obj.edad;
            document.getElementById("titulo").innerText='Editar persona';
        }else{
            alert("Registro no encontrado");
            location.replace('index.html');
        }
    }else{
        document.getElementById("titulo").innerText="Agregar";
    }
    document.getElementById("btnVolver").addEventListener('click',
        (e)=>{
        location.replace('index.html');
    });

    document.getElementById("btnGuardar").addEventListener('click',
        (e)=>{
        
        let frm=document.getElementsByTagName("form")[0];
        frm.classList.add("was-validated");
        e.preventDefault();
        if(frm.checkValidity()){
            //Cancelar el submit para que más adelante la 
            //redirección sí funcione
            e.preventDefault();
            let clave=document.getElementById("spnClave").innerText;
            let personas=localStorage.getItem('personas')?
            JSON.parse(localStorage.getItem('personas')):[];
            //'4'==4 true
            //'4'===4 false
            //Agregar
            if(!clave){
                clave=personas.length?personas[personas.length-1].clave+1:1;
                let nuevo={
                    clave:clave,
                    nombre: document.getElementById("txtNombre").value.trim(),
                    edad: parseInt(document.getElementById("txtEdad").value)
                };
                personas.push(nuevo);
                localStorage.setItem('personas',JSON.stringify(personas));
                
                alert('Registro añadido');
                
                location.replace('index.html');
            }else{
                //Buscar la posicion de la persona que le corresponde la clave
                let posicion=personas.findIndex(p=>p.clave==clave);
                if(posicion>-1){
                    personas[posicion].nombre=document.getElementById("txtNombre").value.trim();
                    personas[posicion].edad=parseInt(document.getElementById("txtEdad").value);

                    /*personas[posicion]={
                        clave:clave,
                        nombre: document.getElementById("txtNombre").value.trim(),
                        edad: parseInt(document.getElementById("txtEdad").value)
                    };*/
                    localStorage.setItem('personas',JSON.stringify(personas));
                    alert('Registro actualizado');
                    location.replace('index.html');
                }else{
                    alert('El registro ya no existe');
                    location.replace('index.html');
                }
            }
        }    
    });

});