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