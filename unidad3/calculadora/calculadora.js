document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("btnCalcular").addEventListener('click',function(e){
            let form=document.querySelector("form");
            //Reemplaza lo que haya en el atributo class con el valor asignado
            //form.className="revisado";
            //Añade la clase revisado a lo que ya haya en el atributo class
            form.classList.add("revisado");
            let num1= parseInt(document.getElementById("txtNum1").value);
            let num2= parseInt(document.getElementById("txtNum2").value);
            /*Preguntar de uno a uno si alguno de los campos no es válido */
            //if(isNaN(num1) || isNaN(num2)){
            /*Preguntarle al form si todo está bien o no */
            if(!form.checkValidity()){
                alert('Ingresa los datos');
                return;
            }
            let operacion=document.getElementById("cboOperacion").value;
            if(operacion=='/' && num2==0){
                document.getElementById("txtNum2").setCustomValidity('No se acepta cero como divisor de una división');
                //e.preventDefault();
                //alert('División por cero');
                return;
            }
            
            let expresion=num1+operacion+num2;
            let resultado=eval(expresion);
            /*if(operacion=='+'){
                resultado=num1+num2;
            }else if(operacion=='-'){
                resultado=num1-num2;
            }else if(operacion=='*'){
                resultado=num1*num2;
            }else{
                resultado=num1/num2;
            }*/
            
            alert(resultado);
    });

    document.querySelector('button[type=reset]').addEventListener('click',function(e){
        let form=document.querySelector("form");
        form.classList.remove("revisado");
        
    });
});