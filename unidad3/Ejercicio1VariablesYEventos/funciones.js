/*window.addEventListener('load',()=>{
    let btns=document.querySelectorAll("#opciones button");
    btns.forEach(function(boton,indice){
        boton.innerText="Botón "+(indice+1);
        boton.addEventListener('click',clickBoton);
    });
});
*/
document.addEventListener('DOMContentLoaded',()=>{
    let btns=document.querySelectorAll("#opciones button");
    for(let boton in btns){


    }

    btns.forEach((boton)={
    
    });
    btns.forEach(function(boton,indice){
        boton.innerText="Botón "+(indice+1);
        boton.addEventListener('click',clickBoton);
    });
});


function clickBoton(e){
   let botones=this.parentElement.children;
   for(let i=0;i<botones.length;i++){
        botones[i].style.backgroundColor='lightgray';
   }
    this.style.backgroundColor='blue';
}

function saludar(){
    let nombre=document.getElementById("txtNombre").value;
    alert("Hola " + nombre)
}