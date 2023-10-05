document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("btnCalcular").addEventListener('click',function(e){
            let form=document.querySelector("form");
            //Reemplaza lo que haya en el atributo class con el valor asignado
            //form.className="revisado";
            //Añade la clase revisado a lo que ya haya en el atributo class
            form.classList.add("revisado");
            let num1= parseInt(document.getElementById("txtNum1").value);
            let num2= parseInt(document.getElementById("txtNum2").value);
            let operacion=document.getElementById("cboOperacion").value;
            debugger;
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
});