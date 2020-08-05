
//EXPRESIONES REGULARES
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,//letras, números, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios, pueden llevar acentos
    password: /^.{4,12}$/, //4 a 12 dígitos
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ //7 a 14 números
}

const formulario = document.getElementById("formulario");

const inputs = document.querySelectorAll("#formulario input");

formulario.addEventListener('submit', function (e) {
    e.preventDefault(); //como es prueba y los datos no se envían realmente a ningún sitio, 
    //evitamos que se ejecute el evento
});

/*mismo código en ES6
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
});
*/

const validarFormulario = function (e) {

    switch (e.target.name) {
        case "usuario":
            //1º - para comprobar la expresión regular de 'usuario'
            if (expresiones.usuario.test(e.target.value)) {
                //si verdadero
                document.getElementById("grupo__usuario").classList.remove("formulario__grupo-incorrecto");
                document.getElementById("grupo__usuario").classList.add("formulario__grupo-correcto");
                document.querySelector("#grupo__usuario i").classList.remove("fa-times-circle");
                document.querySelector("#grupo__usuario i").classList.add("fa-check-circle");
                //eliminamos el mensaje de error
                document.querySelector("#grupo__usuario .formulario__input-error").classList.remove("formulario__input-error-activo");
            } else {
                //si falso
                document.getElementById("grupo__usuario").classList.remove("formulario__grupo-correcto");
                document.getElementById("grupo__usuario").classList.add("formulario__grupo-incorrecto");
                document.querySelector("#grupo__usuario i").classList.remove("fa-check-circle");
                document.querySelector("#grupo__usuario i").classList.add("fa-times-circle");
                //mostramos el mensaje de error
                document.querySelector("#grupo__usuario .formulario__input-error").classList.add("formulario__input-error-activo");
            }

            break;
        case "nombre":

            break;
        case "password":

            break;
        case "password2":

            break;
        case "correo":

            break;
        case "telefono":

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