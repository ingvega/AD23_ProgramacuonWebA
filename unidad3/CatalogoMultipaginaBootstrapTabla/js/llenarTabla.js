var tabla;
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
    //setTimeout(()=>alert('Mensaje con retardo de 3 segundos'),3000);
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
    document.getElementById("btnConfirmar").addEventListener('click',eliminar);
    document.getElementById("mdlConfirmacion").addEventListener('show.bs.modal',(e)=>{
        let personas=[];
        if(localStorage.getItem('personas')){
            personas=JSON.parse(localStorage.getItem('personas'));
        }
        document.getElementById("btnConfirmar").value=e.relatedTarget.value;
        let index=personas.findIndex(p=>p.clave==e.relatedTarget.value);
        if(index>=0){
            document.getElementById("spnPersona").innerText=personas[index].nombre;
        }
    });

});

/**
 * Crear dinámicamente una alerta que después de 5 segundos se cierre automáticamente
 * si el usuario no la cierra
 * @param {*} texto Mensaje a mostrar en la alerta (puede ser HTML)
 * @param {*} tipo Puede ser "success", "danger" o "warning"
 * @param {*} callback Función que contiene las instrucciones que necesitamos
 *  que se ejecuten hasta que la alerta se cierre
 */
function crearAlerta(texto,tipo,callback){
    let alerta=document.createElement("div");
    alerta.id="divAlerta";
    alerta.className="alert alert-"+tipo+" alert-dismissible fade show";
    alerta.innerHTML=texto +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
    document.querySelector("#contenido").
        insertBefore(alerta,document.getElementById("btnAgregar"));
    setTimeout(()=>{
        //alerta.remove();
        if(document.getElementById("divAlerta")){
            const alert = bootstrap.Alert.getOrCreateInstance('#divAlerta')
            alert.close()
        }
        if(callback)
            callback(); //Llamar a la función si es que se recibió
    },5000);
}


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

    
    //$("selector").funcion();
    tabla=$("#tblPersonas").DataTable({
        columnDefs: [
            { orderable: false, targets: -1 }
        ],
        order: [[1, 'asc']],
        
    });
}

function eliminar(e){
    
    let personas=[];
    if(localStorage.getItem('personas')){
        personas=JSON.parse(localStorage.getItem('personas'));
    }
    
    let clave=this.value;
    let index=personas.findIndex(p=>p.clave==clave);
    if(index>=0){
        personas.splice(index,1);
        localStorage.setItem('personas',JSON.stringify(personas));
        crearAlerta('Persona eliminada','success'),()=>location.reload());
        //llenarTabla(personas);            
    }else{
        alert('Persona no encontrada');
        llenarTabla(personas);
    }
}

