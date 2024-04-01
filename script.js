var botonEncriptar = document.querySelector(".btn_encriptar");
var botonDesencriptar = document.querySelector(".btn_desencriptar");
var muneco = document.querySelector(".contenedor_muneco");
var contenedor = document.querySelector(".contenedor_parrafo");
var resultado = document.querySelector(".texto_resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

//Funciones para los botones y acciones
function encriptar() {
    ocultarAdelante();
    var cajaTexto = rescuperarTexto();
    resultado.textContent = encriptadorTexto(cajaTexto);
}

function desencriptar() {
    ocultarAdelante();
    var cajaTexto = rescuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
}

function rescuperarTexto() {
    var cajaTexto = document.querySelector(".caja_texto");
    return cajaTexto.value;
}

function ocultarAdelante() {
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}
//Funcion que encripta el mensaje por las vocales
function encriptadorTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal += "ai";
        } else if (texto[i] == "e") {
            textoFinal += "enter";
        } else if (texto[i] == "i") {
            textoFinal += "imes";
        } else if (texto[i] == "o") {
            textoFinal += "ober";
        } else if (texto[i] == "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}
//funcion que hace que se desencripte el mensaje ya antes encriptado
function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a" && texto[i + 1] == "i") {
            textoFinal += "a";
            i++;
        } else if (texto[i] == "e" && texto.slice(i, i + 5) == "enter") {
            textoFinal += "e";
            i = i + 4;
        } else if (texto[i] == "i" && texto.slice(i, i + 4) == "imes") {
            textoFinal += "i";
            i = i + 3;
        } else if (texto[i] == "o" && texto.slice(i, i + 4) == "ober") {
            textoFinal += "o";
            i = i + 3;
        } else if (texto[i] == "u" && texto.slice(i, i + 4) == "ufat") {
            textoFinal += "u";
            i = i + 3;
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

//Metodo para copiar los mensajes que ya estaban encriptados
const btncopiar = document.querySelector(".btn_copiar");
btncopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
});

