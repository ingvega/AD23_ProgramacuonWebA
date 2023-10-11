document.addEventListener('DOMContentLoaded',function(){
    document.querySelector("button[type='reset']").addEventListener('click',function(e){
        document.querySelector("form").classList.remove("revisado");
    });

    document.getElementById("btnRegistrar").addEventListener('click',function(e){
        //debugger;
        document.getElementById("txtContrasenia").setCustomValidity('');
        document.getElementById("txtContrasenia2").setCustomValidity('');
        document.getElementById("txtTelefono").setCustomValidity('');
        let form=document.querySelector("form");
        form.classList.add("revisado");
        debugger;
        if(1){
            console.log('1=True');
        }
        if(0){
            console.log('0=True');
        }
        let c='          ';
        //if(c.trim().length>0){
        if(c.trim()){
            console.log("''=True");
        }
        let d='algo';
        if(d){
            console.log("algo=True");
        }
        let a=null;
        if(a){
            console.log("''=True");
        }
        let b;
        if(b){
            console.log("undefined=True");
        }

        if(form.checkValidity()){
            
            if(document.getElementById("txtContrasenia").value!=
            document.getElementById("txtContrasenia2").value){
                //alert('Contraseñas no coinciden');
                document.getElementById("txtContrasenia").setCustomValidity(
                    'Las contraseñas no coinciden'
                );
                document.getElementById("txtContrasenia2").setCustomValidity(
                    'Las contraseñas no coinciden'
                );
                
            }
            /*let txtTelefono=document.getElementById("txtTelefono");
            if(txtTelefono.value!=''){
                //     12345
                //Verifica si se convirtió a entero
                //if(isNaN(parseInt(txtTelefono.value))){
                //Verificar que sean 10 dígitos
                if(!txtTelefono.value.match('^\\d{10}$')){
                    //alert('Teléfono no valido')
                    txtTelefono.setCustomValidity('El teléfono debe tener exactamente 10 dígitos');
                    valido=false;
                }   
            }*/
        }
        
        if(txtTelefono.value!=''){
            //     12345
            //Verifica si se convirtió a entero
            //if(isNaN(parseInt(txtTelefono.value))){
            //Verificar que sean 10 dígitos
            debugger;
            if(!txtTelefono.value.match('[0-9]{10}')){
                //alert('Teléfono no valido')
                txtTelefono.setCustomValidity('El teléfono debe tener exactamente 10 dígitos');
            }   
        }
    });
});