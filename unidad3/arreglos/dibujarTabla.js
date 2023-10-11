document.addEventListener('DOMContentLoaded',()=>{
    let obj={};
    obj.nombre='a';
    obj.id=1;
    let obj1=new Object();
    obj1.nombre='b';
    obj1.id=2;
    let obj2={nombre:'c',id:3};

    let objetos=[obj,obj1,obj2];
    
    let tabla=document.querySelector("#tblUsuarios tbody");
    let filas='';
    objetos.forEach((o)=>{
        filas+=`<tr><td>${o.id}</td><td>${o.nombre}</td></tr>`;
    });
    tabla.innerHTML=filas;

});