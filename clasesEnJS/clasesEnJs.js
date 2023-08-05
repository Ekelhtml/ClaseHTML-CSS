// IMPORTO CLASE DE ARCHIVO EXTERNO
import DatosPersonales from "./datosPersonales.js";
import TypePerson from "./tipoPersona.js";


// las clases son una forma de organizar el codigo, ocupa metodos y abtracciones
//esta compuesta por metoso y llamado o variables
// se usa con la propiedad Class y asi defino una clase

// instanciar hace referencia a inicializar la clase, crear un objeto basado en la clase, se usa la propiedad New

//clase vacia... ademas puede tener parametros usando la propiedad "contructor"(metodo se ejecuta al momento de instaciar una clase)
// propiedades: variables dentro de la clase
// metodos: funciones / publicos (cuando instancio o inicializo la clase), privados (destro de la clase) o estaticos 
// constructor permite pasar parametros a la clase

// class DatosPersonales {
// //pude haber hecho esto para declararla: SI PASO PARAMETROS Y USO CONSTRUCTOR NO ES NECESARIO

// firstName;
// lastName;
// age;

// esto cambia solo el nombre
// setFirstName(name){
//     this.firstName = name;
// }
// EL CONSTRUCCTOR ES PARA INICIALIZAR LAS VARIABLES QUE LE PASARE A LA CLASE

   /* constructor(nombre, apellido, edad){ //estas tres son propiedades o variables
        this.firstName = nombre; //this se usa para poder usar estos parametros hace referencia a os mismo objetos donde esta, se llama asi mismo dentro de la clase
        this.lastName = apellido;
        this.age = edad;
    }*/
// }

const ejemplo = new DatosPersonales("Ekel", "Leal", 49); //esto lo declaro en el constructor
ejemplo.setFirstName("Zuniga"); //aca estoy cambiando su valor NO ESTAY INSTANCIANDO 

const b = new TypePerson("Ekel", "Leal", 49, "Profesor");
console.log(b);

//DatosPersonales.setFirstName("hola");
DatosPersonales.holaMundo();
 console.log(ejemplo); 

 // SIN NECESITO TENBER VALORES SI  O SI USO CONSTRUCTOR 

//BUENAS PRACTICAS... CREAR UNN ARCHIVO DATOS PERSONALES

