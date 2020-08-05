
//EXPRESIONES REGULARES
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,//letras, números, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios, pueden llevar acentos
    password: /^.{4,12}$/, //4 a 12 dígitos
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ //7 a 14 números
}

//1º - ACCESO AL FORMULARIO
const formulario = document.getElementById("formulario");

//2º - ACCESO A "TODOS" LOS INPUTS DEL FORMULARIO
const inputs = document.querySelectorAll("#formulario input");

//3º - Ponemos a la escucha el formulario para enviar los datos.
formulario.addEventListener('submit', function (e) {
    e.preventDefault(); //como es prueba y los datos no se envían realmente a ningún sitio, 
    //evitamos que se ejecute el evento
});

/*mismo código en ES6
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
});
*/

//5º - Desarrollamos la función 'validarFormulario'
const validarFormulario = function (e) {
    //console.log("validar formulario");
    //console.log(e.target.name);
    switch (e.target.name) {//usamos el atributo 'name' del html para identificar el input en el que estamos
        case "usuario":
            //console.log("usuario");
            break;
        case "nombre":
            //console.log("nombre");
            break;
        case "password":
            //console.log("password");
            break;
        case "password2":
            //console.log("password2");
            break;
        case "correo":
            //console.log("correo");
            break;
        case "telefono":
            //console.log("telefono");
            break;

    }
};

/*mismo código en ES6
const validarFormulario = () => {
    //console.log("validar formulario");
    //console.log(e.target.name);
    switch (e.target.name) {//usamos el atributo 'name' del html para identificar el input en el que estamos
        case "usuario":
            //console.log("usuario");
            break;
        case "nombre":
            //console.log("nombre");
            break;
        case "password":
            //console.log("password");
            break;
        case "password2":
            //console.log("password2");
            break;
        case "correo":
            //console.log("correo");
            break;
        case "telefono":
            //console.log("telefono");
            break;

    }
};
*/

//4º - Ponemos a la escucha cada uno de los inputs de tal manera que al levantar una tecla
//o pulsemos con el ratón fuera del input ejecute la función 'validarFormulario'
inputs.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

/*mismo código en ES6
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
*/