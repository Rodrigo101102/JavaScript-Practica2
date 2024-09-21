//Ejercicio 1

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (peso <= 0 || altura <= 0) {
        document.getElementById('resultado').textContent = 'Por favor, ingresa valores válidos.';
        return;
    }

    const imc = peso / (altura * altura);
    let categoria = '';

    if (imc < 18.5) {
        categoria = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidad';
    }

    document.getElementById('resultado').textContent = `Tu IMC es: ${imc.toFixed(2)} (${categoria})`;
}


