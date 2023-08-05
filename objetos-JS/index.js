

let firstName = "EJEMPLO"

const persona = {
    firstName,
    lastName: "Pedro",
    birthday: 20,
    status: true,
    // puedo agregar metodos propios con funciones anonimas
    fullName: function () {
        return `${this.firstName} ${this.lastName}` // this me da acceso a las variables donde estoy parado.
    }
};

//agregar atributo y valor
persona.address = "CABA";

//como ver por consola
console.log(persona);
console.log(persona.firstName);
console.log(persona["firstName"]); // SOLO PARA ARRAY DE OBJETOS
console.log(persona.fullName()); // no olvidar los parentesis de la funcion    

// desestructuracion del objeto
//asi puedo llamar solo algunos valores del objeto, es decir ocupo lo que necesito. pasan a ser como variables, ejemplo formulario de registro de personas. puedo tener un objeto dentro de otro.

const { status, birthday } = persona;
console.log(status);
console.log(birthday);

// como se cuales son todos los atributos de un objeto?
console.log(Object.keys(persona));
// ahora solo los valores
console.log(Object.values(persona));
// separar propiedades en pares en un array: atributo y valor
console.log(Object.entries(persona));
console.log(persona.ejemplo); //muestra undefined
console.log(persona?.ejemplo); //accedo a una propiedad aunque en el padre no exista - coleccion de objetos / no dara error si viene o no viene desde el HTML frontend

console.log("------------------------------------------------");

//ARRAY [] coleccion de elementos
// creando o declarando un vector
const arrayEjemplo = new Array('hola', 2,3,4, true)
console.log(arrayEjemplo.length); // length muestra cantidad de elementos
// otra manera
const arrayDos=[]; //array vacio
const arrayTres=[3,'hola', 'buenas',3,4,5];
console.log(arrayDos.length);
console.log(arrayTres.length);
// UNA COSA ES POSICIONES Y OTRA CANTIDAD DE ELEMENTOS

//si quiero ver la posicion de la palabra 'buenas'?
console.log(arrayTres[2]);// sin punto antes del corchete

/**OPERACIONES Y FUNCIONES DENTRO DE ARAYS */

//Agregarndo elementos al array:
//PUSH agregar uno o varios ewlementos al final del vector
//UNSHIFT agrega al principio del vector

