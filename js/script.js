const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#Encriptar");
const btnDesencriptar = document.querySelector("#Desencriptar");
const btnCopiar = document.querySelector("#Copiar");

const tarjeta = document.querySelector("tarjeta1");

function validaMensaje (){
    var mensaje = inputMensaje.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = "";
    for (let letra of mensaje)
    if (!letrasValidas.includes(letra));
}
function encriptar (){
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e" , "enter")
    .replaceAll("i" , "imes")
    .replaceAll("o" , "ober")
    .replaceAll("a" , "ai")
    .replaceAll("u" , "ufat");

    inputResultado.value = mensajeEncriptado;
}

function desencriptar (){
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter" , "e")
    .replaceAll("imes" , "i")
    .replaceAll("ober" , "o")
    .replaceAll("ai" , "a")
    .replaceAll("ufat" , "u");

    inputResultado.value = mensaje;
}

function copiar (){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}




