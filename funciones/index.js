//  Declaracion de funciones
//  Funcion por declaracion

//esta funcion no tiene parametros y no retorna valores // se ejecuta y termina
function ejemplo() {
    console.log("hola");
}

ejemplo(); //invoco, ejecuto una funcion 

//esta funcion tiene parametros y no retorna valores
function suma(x,y,z){
let result=x+y+z;
console.log(result);

// para indicar retorno se utiliza "return" solo si voy a utilizar ese valor despues
return result;

}

//invoco...// una vez que retorno puedo asignarla a una variable
let x = suma(5,8,9);

console.log(x*100);

//Funcion mediante expresion
// significa que la funcion se le asigna auna variable
const restar = function resta(x,y){
    return x-y;
}

restar(3,4); 


//Funciones anonimas, no tienen nombre
const mult = function(x,y){
    return x*y;
}

mult(4,5);

//Funciones autoejecutable, sin nombre de funcion ya que no guardaremos nada, son de poco uso, no cumple la funcion de reutilizacion
(function(){
    console.log("hola...");
})();

//Funciones Flecha u Arrow

const restaDos = (x,y)=>{
    return x,y;
}

restaDos(3,4);

/**operaciones Matematicas segun operacion que ingrese  el usuario (+ - / *) */

const prompt = require("prompt-sync")(({sigint:true}));

const calculo = (z,x,y)=> {
    let result;

    if (z==1){
        result = x+y;
    }
    else if(z==2){
        result = x-y;
    }
    else if(z==3){
        result = x*y;
    }
    else if (z==4){
        result = x/y
    }

    else{
        result = "Fuera de rango 1-4"
    }

    return result
}

let a = parseInt(prompt("Ingrese un nuemro A: "));
let b = parseInt(prompt("Ingrese un nuemro B: "));
let op = parseInt(prompt("Seleccione una accion 1.- Suma, 2.- Resta, 3.- Mult, 4.- Div:  "));

let acciones = calculo(op,a,b);
console.log(acciones);

/** Dada una accion por el usuario mostrar por pantalla la tabla de multiplicar
 * sumar, dividir, restar, segun el valor que ingrese el usuario
 * 
*/


