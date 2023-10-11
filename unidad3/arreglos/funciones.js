let a=[];
let b=new Array();
let c=new Array(5);
a=[1,2,3,4,'hola',.5];
a[14]=5;
a.push(6);
a.unshift(0);
console.log(b);
console.log(c);
console.log(a);
debugger; 

let obj={};
obj.nombre='a';
obj.id=1;
let obj1=new Object();
obj1.nombre='b';
obj1.id=2;
let obj2={nombre:'c',id:3};
let obj3=[];
obj3['nombre']='d';
obj3['id']=4;
console.log(obj['nombre']);
alert(obj);

let objetos=[obj,obj1,obj2];
alert(objetos);


let alumno={noControl:'1',
            nombre:'a',
            kardex:[
                {materia:'prog. web',prom:100},
                {materia:'gestión de proy',prom:100}]
            };
let alumnos=[];
alumnos.push(alumno);
alumnos.push(alumno);
console.log(JSON.stringify(alumnos));
let objetoDeString=JSON.parse('{"nombre":"juan perez","clave":1}');
console.log(objetoDeString);
debugger;
//Guarda un valos string asociado con una clave
localStorage.setItem('clave','valor');
//Guarda la cadena que representa el toString del objeto obj
localStorage.setItem('objeto',obj);
//Almacena en formato de cadena el arreglo y los objetos contenidos 
//la variable alumnos
localStorage.setItem('alumnos',JSON.stringify(alumnos));

/*A partir del arreglo objetos, genera el código necesario en JS
* para que se dibuje una tabla que muestre tantos elementos como 
* objetos tenga el arreglo
*/

