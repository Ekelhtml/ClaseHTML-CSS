// const persona = {
//     firstName:"Ekel",
//     lastName: "Leal",
//     birthday: 20,
//     status: true,
// };

// const arrayDeObjetos = [];

// arrayDeObjetos.push(persona);

// console.log(arrayDeObjetos);

console.log("///////////////////////////////////////////////////////");

// Supongamos que ya tienes definida la clase Persona y sus atributos y métodos

class Persona {
    constructor(firstName, lastName, birthday, status) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.status = status;
    }
}
// Crear el primer objeto persona
const persona_1 = new Persona("Ekel", "Leal", 49, true);
const persona_2 = new Persona("Clo", "Bustos", 47, false);
const persona_3 = new Persona("Acsa", "Leal", 22, false);
const persona_4 = new Persona("Mica", "Leal", 16, false);
const persona_5 = new Persona("Venke", "Leal", 15, true);
// Crea un array vacío
arrayPersonas = [];
// Agrega los objetos persona al array usando el método push
arrayPersonas.push(persona_1);
arrayPersonas.push(persona_2);
arrayPersonas.push(persona_3);
arrayPersonas.push(persona_4);
arrayPersonas.push(persona_5);
// El array contendrá los  objetos persona
console.log(arrayPersonas);

console.log("///////////////////////////////////////////////////////");

