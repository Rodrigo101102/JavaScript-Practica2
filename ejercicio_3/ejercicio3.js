function calcularIVA() {
    const importe = parseFloat(document.getElementById('importe').value);
    const tipoIVA = parseFloat(document.getElementById('iva').value);
    const totalConIVA = importe + (importe * tipoIVA / 100);
    document.getElementById('resultado').innerText = `Total con IVA incluido: €${totalConIVA.toFixed(2)}`;
}