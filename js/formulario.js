
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

const validarFormulario = function (e) {

    //1º.- Trasladamos el código a una función. Para reutilizarla en todos los inputs. 
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            //3º - Pasamos por parámetros los tres valores que necesita la función
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


inputs.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

/*
    2º.- A la función tenemos que pasarle 3 valores:
        - La expresión a comparar.
        - El input donde se va a realizar la validación.
        - El campo. Ej. grupo__usuario, grupo__password, etc. Queremos que sea
          dinámico. 
*/

const validarCampo = function (expresion, input, campo) {

    if (expresion.test(input.value)) {
        //si verdadero
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        //eliminamos el mensaje de error
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
    } else {
        //si falso
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
        //mostramos el mensaje de error
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
    }

    //4º - Sustituimos las comillas simples o dobles por "`" (símbolo de la tilde) y
    //     añadimos el "campo", ${campo}. 
}