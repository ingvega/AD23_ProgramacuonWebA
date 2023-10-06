/*        
//Retorna el primer elemento que cumpla con el selector
document.querySelector("#btnOpc1")
document.querySelector("button")
document.querySelector(".seleccionado")
document.querySelector("form input:first-child")
//Retorna una colección de todos los elementos que cumplan con el selector
document.querySelectorAll("form input")
*/
//let btns=document.getElementById("opciones").children;
let btns=document.querySelectorAll("#opciones button");
btns.forEach(function(element,indice){
    //element.innerHTML="<b>Boton</b>"; //Texto interpretado como html
    //element.innerText="<b>Boton</b>"; //Texto interpretado como cadena
    element.innerText="Botón "+(indice+1);
    //console.log(element);
    element.addEventListener('click',clickBoton);
});

//No enlaza el click porque no se envía una función sino una llamada a la función
//document.getElementById("btnOpc3").addEventListener('click',clickBoton(3));

/*
//Usar cuando necesitamos enviar argumentos adicionales a la función
document.getElementById("btnOpc3").addEventListener('click',function(e){
    clickBoton(3)
});
*/



function clickBoton(e){
//function clickBoton(numBtn){
    console.log(this);
    console.log(e);
    debugger;
    /*
    document.getElementById("btnOpc1").style.backgroundColor='lightgray';
    document.getElementById("btnOpc2").style.backgroundColor='lightgray';
    document.getElementById("btnOpc3").style.backgroundColor='lightgray';
    */
   let botones=this.parentElement.children;
   for(let i=0;i<botones.length;i++){
        botones[i].style.backgroundColor='lightgray';
   }
    this.style.backgroundColor='blue';
    //e.target.style.backgroundColor='blue';
}

function marcar(btn){
    document.getElementById("btnOpc1").style.backgroundColor='lightgray';
    document.getElementById("btnOpc2").style.backgroundColor='lightgray';
    document.getElementById("btnOpc3").style.backgroundColor='lightgray';
    document.getElementById("btnOpc"+btn).style.backgroundColor='blue';
}

function marcar1(){
    document.getElementById("btnOpc1").style.backgroundColor='blue';
    document.getElementById("btnOpc2").style.backgroundColor='lightgray';
    document.getElementById("btnOpc3").style.backgroundColor='lightgray';
}

function marcar2(){
    document.getElementById("btnOpc2").style='background-color: blue;';
    document.getElementById("btnOpc1").style.backgroundColor='lightgray';
    document.getElementById("btnOpc3").style.backgroundColor='lightgray';
}

function marcar3(){
    document.getElementById("btnOpc3").style='background-color: blue;';
    document.getElementById("btnOpc1").style.backgroundColor='lightgray';
    document.getElementById("btnOpc2").style.backgroundColor='lightgray';
}

//alert("Mensaje al cargar la página");
a=5;
var x=10.5;
let y="hola";
const z=20;
//z++;
x+=50;
y+=a;
console.log(y);
function saludar(){
    let nombre=document.getElementById("txtNombre").value;
    alert("Hola " + nombre)
}