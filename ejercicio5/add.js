let contadorFilas = 0;

function agregarFila() {
    contadorFilas++;
    const tbody = document.getElementById('itemsFactura');
    const newRow = tbody.insertRow();
    newRow.innerHTML = `
        <td><input type="number" class="factura__input" onchange="calcularFila(this)"></td>
        <td><input type="text" class="factura__input"></td>
        <td><input type="number" class="factura__input" onchange="calcularFila(this)"></td>
        <td><input type="number" class="factura__input" readonly></td>
        <td>
            <button class="factura__boton" onclick="eliminarFila(this)">Eliminar</button>
        </td>
    `;
}

function calcularFila(input) {
    const row = input.closest('tr');
    const cantidad = parseFloat(row.cells[0].querySelector('input').value) || 0;
    const precio = parseFloat(row.cells[2].querySelector('input').value) || 0;
    const importe = cantidad * precio;
    row.cells[3].querySelector('input').value = importe.toFixed(2);
    calcularTotal();
}

function editarFila(button) {
    const row = button.closest('tr');
    const inputs = row.querySelectorAll('input');
    inputs.forEach(input => input.removeAttribute('readonly'));
}

function eliminarFila(button) {
    const row = button.closest('tr');
    row.remove();
    calcularTotal();
}

function calcularTotal() {
    let totalBruto = 0;
    const filas = document.querySelectorAll('#itemsFactura tr');
    filas.forEach(fila => {
        totalBruto += parseFloat(fila.cells[3].querySelector('input').value) || 0;
    });
    
    document.getElementById('totalBruto').value = totalBruto.toFixed(2);
    
    const descuento = parseFloat(document.getElementById('descuento').value) || 0;
    const baseImponible = totalBruto - descuento;
    document.getElementById('baseImponible').value = baseImponible.toFixed(2);
    
    const iva = baseImponible * 0.21;
    document.getElementById('iva').value = iva.toFixed(2);
    
    const total = baseImponible + iva;
    document.getElementById('total').value = total.toFixed(2);
}

// Inicializar con una fila
agregarFila();