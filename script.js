const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".encriptacion");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    if (textArea.value.trim() === "") {
        mensaje.value = "Lo sentimos, no se pudo encontrar el texto";
    } else {
        mensaje.value = textoEncriptado;
    }
    textArea.value = "";
    //me gusta que la imagen siempre se vea
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    if (textArea.value.trim() === "") {
        mensaje.value = "Lo sentimos, no se pudo encontrar el texto";
    } else {
        mensaje.value = textoEncriptado;
    }
    textArea.value = "";
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}


const copiarBoton = document.querySelector(".copiar");
const mensajeEncriptado = document.querySelector(".encriptacion");

copiarBoton.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(mensajeEncriptado.value);
        copiarBoton.textContent = "¡Copiado!";
    } catch (error) {
        console.error("Error al copiar al portapapeles:", error);
    }
});


