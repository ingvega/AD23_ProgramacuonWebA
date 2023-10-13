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
});

function llenarTabla(datos){
    let tbody=document.querySelector("#tblPersonas tbody"),fila,celda;
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