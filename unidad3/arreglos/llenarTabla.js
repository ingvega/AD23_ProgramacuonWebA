function cargarPersonas(){
    //Verificar que no exista en el localstorage
    //solo si no existen se añadirán
    if(!localStorage.getItem('personas')){
        let personas=[
            {clave:1,nombre:'Juan Pérez',edad:20},
            {clave:2,nombre:'Lorena Hernández',edad:17},
            {clave:3,nombre:'Luis Martínez',edad:15},
            {clave:4,nombre:'José Gutiérrez',edad:19},
            {clave:5,nombre:'Margarita Olvera',edad:20},
            {clave:6,nombre:'Alicia Jiménez',edad:21},
        ];
        localStorage.setItem('personas',
            JSON.stringify(personas)
        );
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    cargarPersonas();
    let personas=[];
    if(localStorage.getItem('personas')){
        personas=JSON.parse(localStorage.getItem('personas'));
    }
    //llenarTablaConcatenando(personas);
    llenarTabla(personas);
    document.getElementById("btnAgregar").addEventListener('click',
    ()=>{
        document.getElementById("titulo").innerText='Agregar persona';
        document.querySelector("button[type=reset]").click();
        document.getElementById("spnClave").innerText='';
    });
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

function llenarTabla(datos){
    let tbody=document.querySelector("#tblPersonas tbody"),fila,celda;
    tbody.innerHTML='';
    let x,y,z;
    x=y=z=3;
    datos.forEach(persona => {
        fila=document.createElement('tr');
        
        celda=document.createElement('td');
        celda.appendChild(document.createTextNode(persona.clave));
        fila.appendChild(celda);

        celda=document.createElement('td');
        if(persona.edad<18) celda.className='menor';
        celda.appendChild(document.createTextNode(persona.nombre));
        fila.appendChild(celda);

        celda=document.createElement('td');
        celda.appendChild(document.createTextNode(persona.edad));
        fila.appendChild(celda);

        let btnEditar=document.createElement('button'),
        btnEliminar=document.createElement('button');
        btnEditar.innerText='Editar';
        btnEditar.addEventListener('click',()=>{
            let clave=persona.clave;
            let personas=localStorage.getItem('personas')?
                        JSON.parse(localStorage.getItem('personas')):[];
            /*(a,b)=>
            a=>
            (a,b)=>{}
            a=>{}*/
            let obj=personas.find((p)=>p.clave==clave);
            if(obj){
                document.getElementById("spnClave").innerText=clave;
                document.getElementById("txtNombre").value=obj.nombre;
                document.getElementById("txtEdad").value=obj.edad;
                document.getElementById("titulo").innerText='Editar persona';
            }else{
                alert("Registro no encontrado");
                llenarTabla();
            }
        });
        celda=document.createElement('td');
        celda.appendChild(btnEditar);
        btnEliminar.innerText='Eliminar';
/*
        btnEliminar.onclick=function(e){

        };*/
        btnEliminar.onclick=e=>eliminar(persona.clave,this);
        /*p=>instruccion
        (p1,p2)=>instruccion
        p=>{
            instruccion1;
            instruccion2;
        }
        (p1,p2)=>{
            instruccion1;
            instruccion2;
        }
*/


        //btnEliminar.onclick=eliminar;
        btnEliminar.value=persona.clave;
        celda.appendChild(btnEliminar);
        fila.appendChild(celda);
        
        /*
        celda=document.createElement('td');
        celda.innerText=persona.clave;
        fila.appendChild(celda);

        celda=document.createElement('td');
        celda.innerText=persona.nombre;
        if(persona.edad<18) celda.className='menor';
        fila.appendChild(celda);

        celda=document.createElement('td');
        celda.innerText=persona.edad;
        fila.appendChild(celda);
        */

        tbody.appendChild(fila);
    });
}

function eliminar(e){
    
    alert(e);
    alert(this.value);
    //alert(e.target.value);
}

function llenarTablaConcatenando(datos){
    //Obtener la referencia del tbody
    let tbody=document.querySelector("#tblPersonas tbody"),contenido='',fila,
    claseMenor='';
    datos.forEach(persona => {
        if(persona.edad<18){ claseMenor=' class="menor"';
        }else{ claseMenor='';}
        fila='<tr><td>'+ persona.clave + '</td><td'+claseMenor+'>'+ 
        persona.nombre +'</td><td>'+persona.edad+'</td></tr>';
        fila=`<tr><td>${persona.clave}</td><td${claseMenor}>${persona.nombre}</td><td>${persona.edad}</td></tr>`;
        contenido+=fila;
    });
    tbody.innerHTML=contenido;
}