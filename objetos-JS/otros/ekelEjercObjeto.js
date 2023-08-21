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
addDataPersona("Eliana", "Zunia", 68, "Melipilla",4, true);
addDataPersona("Claudio", "Bustos", 74, "Talca",8, true);
addDataPersona("Miriam", "Plaza", 66, "Santiago",6, false);

// Función para calcular el promedio de edades en el arreglo completo
const calculateAverageAge = (people) => {
    const totalAges = people.reduce((sum, person) => sum + person.birthday, 0);
    return totalAges / people.length;
};

// Función para filtrar por cualquier coincidencia en el nombre o apellido
const filterByName = (term) => {
    return dataPersona.filter(person => {
        const fullName = `${person.firstName} ${person.lastName}`.toLowerCase();
        return fullName.includes(term.toLowerCase());
    });
}

const searchTerm = prompt("Ingrese el término a buscar: ");
const filteredData = filterByName(searchTerm);

if (filteredData.length > 0) {
    console.table(filteredData);
} else {
    console.log("No se encontraron resultados.");
}

// Calcular el promedio de edades de todas las personas y mostrarlo
const averageAgeAll = calculateAverageAge(dataPersona);
console.log(`Promedio de edades de todas las personas: ${averageAgeAll.toFixed(2)}`);

console.table(dataPersona);

// for (let i = 1; i <= 10; i++) {
//     let firstName = prompt("Ingrese Nombre: ");
//     let lastName = prompt("Ingrese Apellido: ");
//     let birthday = parseInt(prompt("Inrese Edad: "));
//     let address = prompt("Ingrese Direccion: ");
//     let status = parseInt(prompt("Inrese Status: "));
//     addDataPersona(firstName, lastName, birthday, address, status,true) //true para no solitar al usuario ese valor y los areaga al final

// }

// Se puede crear un ciclo repetitivo para ingresar infinitos datos

// se puede hacer via HTML un formulario y se cqrgan los valores

// aca borro datos y los pide nuevamente es  memoria volatil

