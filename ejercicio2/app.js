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

//Ejercicio 2
function verificarElegibilidad() {
    const edad = parseInt(document.getElementById('edad').value);
    const ingresos = parseFloat(document.getElementById('ingresos').value);

    if (edad <= 0 || ingresos < 0) {
        document.getElementById('resultado2').textContent = 'Por favor, ingresa valores válidos.';
        return;
    }

    if (edad >= 18 && ingresos >= 500 && ingresos <= 2000) {
        document.getElementById('resultado2').textContent = 'Eres elegible para el subsidio.';
    } else {
        document.getElementById('resultado2').textContent = 'No eres elegible para el subsidio.';
    }
}

//Ejercicio 3
function calcularTotal() {
    const importe = parseFloat(document.getElementById('importe').value);
    const tipoIva = parseFloat(document.getElementById('tipoIva').value);

    if (importe <= 0) {
        document.getElementById('resultado3').textContent = 'Por favor, ingresa un importe válido.';
        return;
    }

    const total = importe + (importe * tipoIva);

    document.getElementById('resultado3').textContent = `El total con IVA incluido es: ${total.toFixed(2)} €`;
}


//Ejercicio 4
function aplicarDescuento() {
    const total = parseFloat(document.getElementById('total').value);
    const codigo = document.getElementById('codigo').value.toUpperCase();

    if (total <= 0) {
        document.getElementById('resultado4').textContent = 'Por favor, ingresa un total válido.';
        return;
    }

    let descuento = 0;

    if (codigo === "DESCUENTO10") {
        descuento = 0.10;
    } else if (codigo === "DESCUENTO20") {
        descuento = 0.20;
    } else if (codigo) {
        document.getElementById('resultado4').textContent = 'El código de descuento no es válido.';
        return;
    }

    const totalConDescuento = total - (total * descuento);

    document.getElementById('resultado4').textContent = `El total con descuento es: ${totalConDescuento.toFixed(2)} €`;
}