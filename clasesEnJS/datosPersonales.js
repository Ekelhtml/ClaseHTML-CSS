// Una buena practica es crear un archivo aparte y exportarlo para usar en otro.

// se utiliza las palabras reservadas export default

// este archivo debe comenzar y termionar no mas codigo porque es de SOLO CLASE

export default class DatosPersonales {
    firstName;
    lastName;
    age;

    // EL CONSTRUCCTOR ES PARA INICIALIZAR LAS VARIABLES QUE LE PASARE A LA CLASE

    constructor(nombre, apellido, edad) { //estas tres son propiedades o variables
        this.firstName = nombre; //this se usa para poder usar estos parametros hace referencia a os mismo objetos donde esta, se llama asi mismo dentro de la clase
        this.lastName = apellido;
        this.age = edad;
    }

    //ESTOS METODOS SON PUBLICOS 
    // setter=> set es modificar

    // esto cambia solo el nombre
    setFirstName(name) {
        this.firstName = name;

        this.#hola();
    }

    // funcion abreviada de lo anterior
    setFirstName = () => {

    }

    // getter=> get es mostrar
    getFirstName(name) {
        return this.firstName;
    }

 
    // metodo estatico (static)sin instancia una clase, no tienen que ver con la clase
    static holaMundo() {
        console.log("hola..." + this.firstName);
    }


    //ESTOS SON PRIVADOS solo se accede dentro de la clase, se usa #
    #hola() {
        console.log("pueba...");
    };

}


//ACA ESTOY EXPORTANTO ESTA CLASE A ARCHIVO "clasesEjercObjeto.js"

//PARA QUE NO DE ERROR y poder importar, EN HTML, AGREGAR AL SCRIPT type="module"