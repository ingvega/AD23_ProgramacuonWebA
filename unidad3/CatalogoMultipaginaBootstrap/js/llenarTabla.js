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
    llenarTabla(personas);
    document.getElementById("btnAgregar").addEventListener('click',
    ()=>{
        sessionStorage.removeItem('claveAEditar');
        //Si  guarda en el historial
        //window.location.href='persona.html';
        //La página actual NO se guarda en el historial
        window.location.replace('persona.html');
    });
    
    document.getElementById("mdlConfirmacion").addEventListener('show.bs.modal',(e)=>{
        let personas=[];
        if(localStorage.getItem('personas')){
            personas=JSON.parse(localStorage.getItem('personas'));
        }
        let index=personas.findIndex(p=>p.clave==e.relatedTarget.value);
        if(index>=0){
            document.getElementById("spnPersona").innerText=personas[index].nombre;
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
        btnEditar.className="btn btn-primary";
        btnEliminar.className="btn btn-danger";
        btnEditar.innerText='Editar';
        btnEditar.addEventListener('click',()=>{
            sessionStorage.setItem('claveAEditar',persona.clave);
            window.location.replace('persona.html');
        });
        celda=document.createElement('td');
        celda.appendChild(btnEditar);
        btnEliminar.innerText='Eliminar';
        btnEliminar.value=persona.clave;
        btnEliminar.onclick=e=>{
            //Colocar en el span el nombre de quien eliminar
            const mdlEliminar = new bootstrap.Modal('#mdlConfirmacion', {
                backdrop:'static'
            });
            mdlEliminar.show(e.target);
        };

        celda.appendChild(btnEliminar);
        fila.appendChild(celda);

        tbody.appendChild(fila);
    });
}

function eliminar(clave){
    let personas=[];
    if(localStorage.getItem('personas')){
        personas=JSON.parse(localStorage.getItem('personas'));
    }
    let index=personas.findIndex(p=>p.clave==clave);
    if(index>=0){
        if(confirm('Está a punto de eliminar a: ' + 
        personas[index].nombre + ' ¿Desea continuar?')){
            personas.splice(index,1);
            localStorage.setItem('personas',JSON.stringify(personas));
            alert('Persona eliminada');
            llenarTabla(personas);    
        }
    }else{
        alert('Persona no encontrada');
        llenarTabla(personas);
    }
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