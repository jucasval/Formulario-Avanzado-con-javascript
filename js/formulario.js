
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

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
};

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    //1º - Validamos los "terminos y condiciones".
    const terminos = document.getElementById("terminos");

    if (campos.usuario && campos.nombre && campos.password && campos.correo
        && campos.telefono && terminos.checked) {
        //2º - Añadimos a la condicion que los termindos estan 'checked'. 
        formulario.reset();

        //3º - Mostramos el mensaje de exito al enviar el formulario durante 5 segundos
        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");

        setTimeout(function () {
            document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
        }, 5000);

        //4º - Eliminamos la palomita de los inputs. 
        document.querySelectorAll(".formulario__grupo-correcto").forEach(function (icono) {
            icono.classList.remove('formulario__grupo-correcto');
        });

    } else {
        //5º - Mostramos el mensaje de error del formulario
        document.getElementById('formulario__mensaje').classList.add("formulario__mensaje-activo");
    }



});

const validarFormulario = function (e) {
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
            break;
        case "password2":
            validarPassword2();
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;

    }
};


inputs.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

const validarCampo = function (expresion, input, campo) {

    if (expresion.test(input.value)) {
        //si verdadero
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        //eliminamos el mensaje de error
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");

        campos[campo] = true;
    } else {
        //si falso
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
        //mostramos el mensaje de error
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");

        campos[campo] = false;
    }


};

const validarPassword2 = function () {
    const inputPassword1 = document.getElementById("password");
    const inputPassword2 = document.getElementById("password2");

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-correcto");
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-incorrecto");
        document.querySelector(`#grupo__password2 i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo__password2 i`).classList.add("fa-times-circle");
        //mostramos el mensaje de error
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.add("formulario__grupo-correcto");
        document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-incorrecto");
        document.querySelector(`#grupo__password2 i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__password2 i`).classList.remove("fa-times-circle");
        //mostramos el mensaje de error
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos["password"] = true;
    }
}