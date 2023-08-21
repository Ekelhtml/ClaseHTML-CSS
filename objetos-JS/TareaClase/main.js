//Funcion que permite insertar datos en un arreglo de objeto

let dataPersona = [];
// La función para verificar si el DNI ya existe en el arreglo
const dniExists = (dni) => {
    return dataPersona.some(person => person.dni === dni)
}
// la variable 'condicion' (booleano) si es verdadero al final y si es falso al principio
const addDataPersona = (dni, firstName, lastName, birthday, address, status, condicion = true) => {
    let person = {
        // hacemos la propiedad del objeto persona
        dni,
        firstName,
        lastName,
        birthday,
        address,
        status,    // al escribir las propiedades sin los valores indica que los atributos van a ser nombres de las variables
    }
    if (condicion) {
        dataPersona.push(person); // inserta al final
    }
    else {
        dataPersona.unshift(person); // inserta al principio
    }
};



document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
    });





    
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
    })
});

// esta fucnion debe agregarse al formulario html con el metodo onclick
const addFormPerson = () => {
    let dni = document.getElementById("dni");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let birthday = document.getElementById("birthday");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    console.log(firstName.value);

    if (
        dni.value.trim() === '' ||
        firstName.value.trim() === '' ||
        lastName.value.trim() === '' ||
        birthday.value.trim() === '' ||
        address.value.trim() === '' ||
        status.value.trim() === ''
    ) {
        Swal.fire('Error', 'Por favor, completa todos los campos.', 'error');
    } else if (dniExists(dni.value)) {
        Swal.fire('Error', 'El DNI ya existe. Introduce otro DNI.', 'error');
    } else {

        //ahora paso los parametros a addDataPersona
        addDataPersona(dni.value, firstName.value, lastName.value, birthday.value, address.value, status.value);
        //ahora limpio la propiedad
        //
        dni.value = '';
        firstName.value = '';
        lastName.value = '';
        birthday.value = '';
        address.value = '';
        status.value = '';
        firstName.focus(); //cursor
        Swal.fire('Saved!', '', 'success'); //https://sweetalert2.github.io/v10.html#download
        //PODEMOS RESETAR DESPUES EL FORM
        console.table(dataPersona);
    }
    /**
     * 1.- evitar que el usuario ingrese datos vacios deben ser obligatorios 
     * 2.- evitar duplicidad de DNI
     */

};
