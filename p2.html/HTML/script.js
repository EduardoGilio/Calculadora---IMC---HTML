document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = peso / (altura * altura);
    const resultado = document.getElementById('resultado');

    let categoria;

    if (imc < 18) {
        categoria = "Muito magro";

    } else if (imc >= 18 && imc <= 24.9) {
        categoria = "Peso normal";

    } else if (imc >= 25 && imc <= 34.9) {
        categoria = "Acima do peso";

    } else {
        categoria = "Obesidade";
    }

    resultado.textContent = `Seu IMC é: ${imc.toFixed(2)} - Categoria: ${categoria}`;
});