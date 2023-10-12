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
    llenarTablaConcatenando(personas);
});

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