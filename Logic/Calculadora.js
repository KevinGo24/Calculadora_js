const Numero_1 = document.getElementById("Numero_A");
const Numero_2 = document.getElementById("Numero_b");
const resultado = document.getElementById("Mostrar");
function Evento() {
    let a = parseFloat(Numero_1.value)
    let b = parseFloat(Numero_2.value)
    resultado.innerText = a - b
}