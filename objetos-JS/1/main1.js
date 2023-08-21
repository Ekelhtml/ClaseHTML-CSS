
let dataPersona = [];

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
}

// esta fucnion debe agregarse al formulario html con el metodo onclick
const addFormPerson = () => {
    let dni = document.getElementById("dni");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let birthday = document.getElementById("birthday");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    //console.log(firstName.value);

    if (findDniOne(dni.value) == -1) {
        //ahora pas o los parametros a addDataPersona
        addDataPersona(dni.value, firstName.value, lastName.value, birthday.value, address.value, status.value);
        //ahora limpio la propiedad
        //
        // dni.value='';
        // firstName.value='';
        // lastName.value='';
        // birthday.value='';
        // address.value='';
        // status.value='';

        //PODEMOS RESETAR DESPUES EL FORM
        document.getElementById("formPerson").reset();
        dni.focus(); //cursor
        document.getElementById("listPerson").innerHTML = listPerson(dataPersona);
        messageAlert("Datos guardados");

    }
    else {
        dni.focus(); //cursor
        messageAlert(" Error DNI ya esta registrado", "error");
    }
    //console.table(dataPersona);
}
//tbody... funcion filtrado o recorrido reutilizable forEach recorrido al vector para que vaya sumando elementos y los agrege en el html
//AGREGO UN IF PAR MOSTRAR QUE NO HAY RESULTADOS COINCIDENTES
const listPerson = (dataArray) => {
    let list = ''; //list es la suma de todos los elementos
    if (dataArray.length > 0) {
        dataArray.forEach((person, index) => { //incluyo index para eliminar posicion de la list
            list += `   <tr>
                        <td>${person.dni}</td>
                        <td>${person.firstName} ${person.lastName}</td>
                        <td>${person.birthday}</td>
                        <td>${person.address}</td>
                        <td>${person.status}</td>
                       
                        <td><button onclick="deleteRegisterPerson(${person.dni})" type="button"class="btn btn-danger">Eliminar</button></td>
                    </tr>`;
                    //arriba agrego evento onclick
        });
    }
    else {
        list =`<tr>
                <td class="text-center"colspan="6">No se encontraron filtrados</td>
            </tr>`;
           
    }
    return list;
}

//findIndex: permite ver si esta duplicado el DNI ... devuelve la posicion del elemento buscado si lo encuentra, y si no la encuentyra devuelve un -1
const findDniOne = (dni) => {
    return dataPersona.findIndex((person) => {
        return person.dni == parseInt(dni)
    });
}
// funcion para el filtrado
const searchInput = () => {
    let search = document.getElementById('search').value;
    search = search.trim().toLowerCase();
    let filterData = filterDataPersona(search);
    document.getElementById("listPerson").innerHTML = listPerson(filterData);
    console.log(search);
}
// funcion para el filtrado
const filterDataPersona = (search) => {
    return dataPersona.filter((person) => {
        return person.firstName.toLowerCase().includes(search) || person.lastName.toLowerCase().includes(search)
    });
}

const deleteRegisterPerson = (dni) => {
    let position = findDniOne(dni);// agreago esta linea verifico en dni par saber el index del vector original y despues elimino
    dataPersona.splice(position,1); 
    document.getElementById("listPerson").innerHTML = listPerson(dataPersona);

}


//original

// const messajeAlert = ()=> {
//     Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'Your work has been saved',
//         showConfirmButton: false,
//         timer: 1500
//       })
// }

//reutilizable en cualquier parte //https://sweetalert2.github.io/v10.html#downl
const messageAlert = (title, icon = 'success') => {
    Swal.fire({
        position: 'top-end',
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1500
    })
}




