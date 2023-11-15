let mdlConfirmacion;
function inicializarDatos(){
    if(!localStorage.getItem('personas')){
        //Solo guardar si no se ha guardado personas antes
        let personas=[
            {clave:1,nombre:'Juan Pérez',edad:16},
            {clave:2,nombre:'Lorena Juárez',edad:20},
            {clave:3,nombre:'Antonio Pérez',edad:18},
            {clave:4,nombre:'Margarita Hernández',edad:22},
            {clave:5,nombre:'Alfonso Suárez',edad:17}
        ];
        localStorage.setItem('personas',JSON.stringify(personas));
    }
}

document.addEventListener('DOMContentLoaded',()=>{

    

    inicializarDatos();
    let personas=[];
    if(localStorage.getItem('personas')){
        personas=JSON.parse(localStorage.getItem('personas'));
    }
    llenarTabla2(personas);

    document.getElementById("btnAgregar").addEventListener('click',()=>{
        //window.location.href='agregarPersona.html';
        sessionStorage.removeItem('clavePersona');
        window.location.replace('persona.php');

    });

    document.getElementById("btnConfirmar").onclick=eliminar;

    document.getElementById('mdlInformacion')
        .addEventListener('hidden.bs.modal', event => {
            location.reload();
    });

    mdlConfirmacion = document.getElementById('mdlConfirmacion')
    mdlConfirmacion.addEventListener('show.bs.modal', event => {
        //Cargar el nombre de la persona a eliminar
        let personas=localStorage.getItem('personas')?
        JSON.parse(localStorage.getItem('personas')):[];
        let clave=event.relatedTarget.value;
        //Buscar la persona que tenga la clave de la fila
        let index=personas.findIndex(item=>item.clave==clave);
        let persona=personas[index];
        document.getElementById("spnPersona").innerText=
            persona.nombre;
        
        //Cargar la clave en el value del botón "SI"
        document.getElementById("btnConfirmar").value=clave;
    });

});

function llenarTabla2(datos){
    let fila;
    let tbody=document.querySelector("#listaPersonas tbody");
    tbody.innerHTML='';
    datos.forEach(p => {
        fila=document.createElement('tr');
        let celda=document.createElement('td');
        celda.innerText=p.clave;
        fila.appendChild(celda);
        
        celda=document.createElement('td');
        celda.innerText=p.nombre;
        fila.appendChild(celda);
        
        celda=document.createElement('td');
        celda.innerText=p.edad;
        fila.appendChild(celda);

        let btnEditar=document.createElement('button');
        btnEditar.innerText='Editar';
        btnEditar.className='btn btn-primary';
        btnEditar.addEventListener('click',(e)=>{
            sessionStorage.setItem('clavePersona',p.clave);
            window.location.replace('persona.html');
        });

        let btnEliminar=document.createElement('button');
        btnEliminar.innerText='Eliminar';
        btnEliminar.className='btn btn-danger';
        btnEliminar.value=p.clave;
        /*btnEliminar.onclick = eliminar;*/
        btnEliminar.onclick=function(){
            //this.disabled=true;
            myModal = new bootstrap.Modal('#mdlConfirmacion');
            myModal.show(this);
            //eliminar(p.clave);
            //this.disabled=false;
        };
        
        celda=document.createElement('td');
        celda.appendChild(btnEditar);
        celda.appendChild(btnEliminar);
        fila.appendChild(celda);

        tbody.appendChild(fila);
    });

    $("#listaPersonas").DataTable({
        dom: 'Bfrtip',
        buttons: [
            'pageLength',
            {
                extend: 'copyHtml5',
                exportOptions: {
                    columns: [0,1,2]
                }
            },
            {
                extend: 'print',
                exportOptions: {
                    columns: [0,1,2]
                }
            },
            {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: [0,1,2]
                }
            },
            {
                extend: 'pdfHtml5',
                exportOptions: {
                    columns: [0,1,2]
                }
            },
            'colvis'
        ],
        stateSave: true,
        columnDefs: [
            { orderable: false, targets: -1 }
        ],
        order: [[1, 'asc'],[2,'desc']]
    });

    
}
function eliminar(){
    
    let personas=localStorage.getItem('personas')?
    JSON.parse(localStorage.getItem('personas')):[];
    
    let index=personas.findIndex(item=>item.clave==this.value);
    if(index>=0){
        personas.splice(index,1);
        localStorage.setItem('personas',JSON.stringify(personas));
        
        let mdlInformacion = new bootstrap.Modal('#mdlInformacion');
        mdlInformacion.show(this);
        
        //mostrarMensaje('Registro eliminado','success',()=>location.reload());
        /*mostrarMensaje('Registro eliminado','success',function(){
            location.reload()}
            );*/
    }else{
        alert('registro no encontrado');
    }
    //llenarTabla2(personas);

}

/**
 * Muestra una notificación cerrable y que se muestra por una cantidad de
 * 5 segundos
 * @param {*} mensaje Texto a mostrar en la notificación
 * @param {*} tipo Puede ser "success" "danger" "warning" "info"
 */
function mostrarMensaje(mensaje,tipo,funcion){
    let notificacion=document.createElement("div");
    notificacion.id="divNotificacion";
    notificacion.innerHTML='<p>'+mensaje+'</p>'+
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
    //configurar la clase (color)
    notificacion.className='alert alert-dismissible fade show alert-'+tipo;
    
    document.querySelector('.container').insertBefore(notificacion,
    document.getElementById("btnAgregar"));

    //colocar el contador y ocultarla (quitarl la clase show)
    setTimeout(()=>{
        //No destruye la alerta, solo la oculta y se van acumulando
        //notificacion.classList.remove('show')
        if(document.getElementById('divNotificacion')){
            notificacion.remove();
            /*const alert = bootstrap.Alert.getOrCreateInstance('#divNotificacion')
            alert.close()*/
        }
        if(funcion){
            funcion();
        }
    },5000);
    
}
