const Numero_1 = document.getElementById("Numero_A");
const Numero_2 = document.getElementById("Numero_b");
const resultado = document.getElementById("Mostrar");
function Resta() {
     if (Numero_1.value == "") {
        alert("Por favor digite un nombre ")
        return;
    }
    let a = parseFloat(Numero_1.value)
    let b = parseFloat(Numero_2.value)
    resultado.innerText = a - b
}
function Sumar() {
     if (Numero_1.value == "") {
        alert("Por favor digite su Nombre")
        return;
    }
    let a = parseFloat(Numero_1.value)
    let b = parseFloat(Numero_2.value)
    resultado.innerText = a + b
}
function Multiplicar() {
     if (Numero_1.value == "") {
        alert("Por favor digite su Nombre")
        return;
    }
    let a = parseFloat(Numero_1.value)
    let b = parseFloat(Numero_2.value)
    resultado.innerText = a * b
}
function Dividir() {
     if (Numero_1.value == "") {
        alert("Por favor digite su Nombre")
        return;
    }
    let a = parseFloat(Numero_1.value)
    let b = parseFloat(Numero_2.value)
    resultado.innerText = a / b
}
function borrar() {
    // Limpiamos los inputs
    document.getElementById('Numero_A').value = "";
    document.getElementById('Numero_b').value = "";

    // Limpiamos el texto del resultado
    document.getElementById('resultado').innerText = "";
}