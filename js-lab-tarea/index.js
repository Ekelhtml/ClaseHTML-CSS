const inputItem = document.getElementById("inputItem");
const btnItem = document.querySelector("#btnItem");
const listItem = document.querySelector("#listItem");

inputItem.focus();
//capturara en localStorage
// listItem.innerHTML = localStorage.getItem("htmlItem");
btnItem.addEventListener("click", function () {
    //alert(inputItem.value);



    //creando elementos
    const trElement = document.createElement('tr');  /* <tr><tr>  */
    const tdElementOne = document.createElement('td'); /* <td><td> ---- aca agrego un valor valor item*/
    const tdElementTwo = document.createElement('td'); /* <td><td> --- aca agrego un boton eliminar item*/
    
 
    
    //debo saber cuantos item hay de los <tr>
        const trlength = document.querySelectorAll("tbody tr").length; //dentro del tbody cuantos tr hay
    //ahora a cada tr le damos el valor numerico 
       trElement.id="item_"+trlength // esto eliminara la fila completa, consulta el id correspondiente y eliminara 
        console.log(trlength);

       

    //agregar valor al primer Elemento
    tdElementOne.textContent = inputItem.value;

    //creo boton eliminar
    tdElementTwo.innerHTML = '<button id="deleteItem" data-id="'+trlength+'" class="btn btn-danger">Eliminar</button>' //agrego codigo en html5


    //agrego elemento
    trElement.appendChild(tdElementOne);
    trElement.appendChild(tdElementTwo);
    listItem.prepend(trElement);    

    //agrego evento click boton Eliminar
    const btnEliminar = document.querySelector('#deleteItem');

    //funcion eliminar
    btnEliminar.addEventListener("click", function(){
        //console.log(btnEliminar.parentNode); //mnuestra el padre
        let numberItem = btnEliminar.getAttribute('data-id');
        // console.log(btnEliminar.getAttribute('data-id'));
        const trEliminar = document.querySelector("#item_"+numberItem);
        // console.log(trEliminar)
        trEliminar.remove();
    });

    // vaciar input
    inputItem.value = ''
    // cursor parpadeando siempre
    inputItem.focus();

    // guardar en localStorage (get/leer, Set/agregar)
    // localStorage.setItem("htmlItem", listItem.innerHTML);
});

