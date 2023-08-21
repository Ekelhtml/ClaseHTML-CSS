const prompt = require("prompt-sync")({sigint:true}) // valor por consola a usuario


//Funcion que permite insertar datos en un arreglo de objeto

let dataPersona =[];

// la variable 'condicion' (booleano) si es verdadero al final y si es falso al principio
const addDataPersona = (firstName, lastName, birthday, address, status, condicion)=>{
    let person = {
    // hacemos la propiedad del objeto persona
        firstName,
    lastName,
    birthday,
    address,
    status,    // al escribir las propiedades sin los valores indica que los atributos van a ser nombres de las variables
    }
    if(condicion){
        dataPersona.push(person); // inserta al final
    }
    else{
        dataPersona.unshift(person); // inserta al principio
    }
}

addDataPersona("Ekel", "Leal", 49, "MDQ",1, true);
addDataPersona("Clo", "Bustos", 47, "MDQ",2, false);
addDataPersona("Acsa", "Leal", 22, "MDQ",7, false);
addDataPersona("Mica", "Leal", 16, "MDQ",9, false);
addDataPersona("Venke", "Leal", 15, "MDQ",10, true);
addDataPersona("Tomas", "Leal", 31, "Melipilla",3, false);
addDataPersona("Natalia", "Correa", 29, "Melipilla",5, false);
addDataPersona("Eliana", "Zuniga", 68, "Melipilla",4, true);
addDataPersona("Claudio", "Bustos", 74, "Talca",8, true);
addDataPersona("Miriam", "Plaza", 66, "Santiago",6, false);

//con un for.Each
const promedio = () => {
    let suma = 0;
    dataPersona.forEach((person)=> {
        //suma = suma + person.birthday;
        suma += person.birthday;
    });
    let prom = suma / dataPersona.length;
    return prom;
};



// Con reduce
// reduce((nombre acumulador, elemento)=>{},valorInicialAcumulador)
let sumaReduce = dataPersona.reduce((sumaEdades, person)=>{
    return sumaEdades + person.birthday;
}, 0);

let promeReduce = sumaReduce / dataPersona.length;

console.log(promedio()); // no olvidar los parentesis de la funcion
console.log('//////////////////////////////////////////')
console.log(promeReduce);
console.log('////////////// metodo string ///////////////////////')
// metodos de string, Funciones de cadena
let prueba = "  Ejemplo de Prueba Prueba Prueba        "
// los string se toman como un array
console.log(prueba.length); //los espacios en blanco tambien son un caracter 17 elementos pero 16 posiciones 
console.log(prueba[1])
// Mayusculas y Minusculas
console.log(prueba.toLocaleUpperCase());
console.log(prueba.toLocaleLowerCase());

//trim() eliminar espacios en blanco al principio y al final
console.log('////////////// trim() string ///////////////////////')
console.log(prueba.trim().length);
//replace ("buscar", "reemplazar") lo realiza en la primera coincidencia
console.log('////////////// replace() string ///////////////////////')
console.log(prueba.replace("Prueba", "Hola" ));
// replaceAll("buscar","reemplazar") reemplaza donde encuentre el criterio a buscar
console.log('////////////// replaceAll() string ///////////////////////')
console.log(prueba.replaceAll("Prueba", "Hola"));
console.log(prueba.replaceAll(" ","")); //tiene que estar en blanco/ vacias las primera comillas 
console.log('////////////// split() e include() string ///////////////////////')
//split("buscar") busca y devuelve un array con loos elementos (divide una cadena en una subcadena), pero no muestra el elemento a buscar en este caso la e
console.log(prueba.split("e"));

//include("buscar") valor verdadero o falso
console.log(prueba.includes("es"));
console.log(prueba.includes("Pr"));

//CON ESTO PODEMOS HACER LA ACTIVIDAD

//FILTRADO POR NOMBRE

let words = prompt("Ingrese Nombre: ");// ingrese el valor a buscar
//creo funcion
let dataFilter = dataPersona.filter((person)=>{
    //conviertos las coincidencias todas a minusculas
    //words = words.trim().toLocaleLowerCase()//limpio espacios en blanco y convierto a minusculas
    //let firstName = person.firstName.toLowerCase();
    //let lastName = person.lastName.toLowerCase()
    //return firstName.includes(words) || lastName.includes(words);// retorne la palabra o letra del solicitada por usuario

    //startsWith()donde comienza
    return person.firstName.toLowerCase().startsWith(words.trim().toLocaleLowerCase()) || person.lastName.toLowerCase().startsWith(words.trim().toLocaleLowerCase())
})

console.table(dataFilter);
console.table(dataPersona);

