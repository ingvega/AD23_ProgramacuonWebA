document.addEventListener("DOMContentLoaded",()=>{
    
    let personas=[];
    if(localStorage.getItem('personas')){
        personas=JSON.parse(localStorage.getItem('personas'));
    }

    if(sessionStorage.getItem('claveAEditar')){
        document.getElementById("titulo").innerText="Editar";
        let obj=personas.find((p)=>p.clave==clave);
        if(obj){
            document.getElementById("spnClave").innerText=clave;
            document.getElementById("txtNombre").value=obj.nombre;
            document.getElementById("txtEdad").value=obj.edad;
            document.getElementById("titulo").innerText='Editar persona';
        }else{
            alert("Registro no encontrado");
            //llenarTabla();
        }
    }else{
        document.getElementById("titulo").innerText="Agregar";
    }
    
    document.getElementById("btnGuardar").addEventListener('click',
        ()=>{
        
        let frm=document.getElementsByTagName("form")[0];
        if(frm.checkValidity()){
            
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
                }
            }
        }    
    });

});