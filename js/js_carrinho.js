const precos = [95, 50, 15, 100];
const frete = 10;

const inputs = document.querySelectorAll(".produto input");

function atualizarTotal() {

    let total = 0;

    inputs.forEach((input, indice) => {
        total += Number(input.value) * precos[indice];
    });

    document.getElementById("valorTotal").innerHTML =
        "Valor Total: R$ " + total.toFixed(2);

    document.getElementById("valorFrete").innerHTML =
        "Frete: R$ " + frete.toFixed(2);

    document.getElementById("valorPagar").innerHTML =
        "Total: R$ " + (total + frete).toFixed(2);
}

inputs.forEach(input=>{
    input.addEventListener("input", atualizarTotal);
});

atualizarTotal();