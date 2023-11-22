let mdlConfirmacion;

document.addEventListener('DOMContentLoaded',()=>{
    $("#lista").DataTable({
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
