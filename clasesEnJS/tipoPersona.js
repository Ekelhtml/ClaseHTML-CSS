//HERENCIA:
// se debe importar datos personales/
import DatosPersonales from "./datosPersonales.js";

//todos los metodos que tenga la clase padre los traspasa al hijo, SE USA "extends"
//

// al extender TypePerson ya tiene todos lo datos de DatosPersonales... heredara solo lo publico no lo privado
// no olvidar exportar default
export default class TypePerson extends DatosPersonales{
    constructor(nombre, apellido, edad, type){
        super(nombre, apellido, edad); //hereda del padre datos COMUNES a TODOS
        this.type=type; // este es solo del hijo 
    }

    //heredamos todo del padre y hacer funciones propias del hijo ejemplo:

    ejemplo(){
        //console.log(`${this.type}, ${super().firstName}`);
        console.log(`${this.type}`);
    }
} 