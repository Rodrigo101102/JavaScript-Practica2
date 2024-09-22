let contadorFilas = 0;

function agregarFila() {
    const template = document.getElementById('filaFactura');
    const tbody = document.getElementById('itemsFactura');
    // Clonar el contenido del template
    const nuevaFila = template.content.cloneNode(true);
    // Añadir la fila clonada al tbody
    tbody.appendChild(nuevaFila);
}

function calcularFila(input) {
    const row = input.closest('tr');
    const cantidad = parseFloat(row.cells[0].querySelector('input').value) || 0;
    const precio = parseFloat(row.cells[3].querySelector('input').value) || 0;
    const importe = cantidad * precio;
    row.cells[4].querySelector('input').value = importe.toFixed(2);
    calcularTotal();
}

function eliminarFila(button) {
    const row = button.closest('tr');
    row.remove();
    calcularTotal();
}

function calcularTotal() {
    let subTotalVentas = 0;
    const filas = document.querySelectorAll('#itemsFactura tr');
    filas.forEach(fila => {
        subTotalVentas += parseFloat(fila.cells[4].querySelector('input').value) || 0;
    });
    
    document.getElementById('subTotalVentas').value = subTotalVentas.toFixed(2);
    
    const descuento = parseFloat(document.getElementById('descuento').value) || 0;

    const igv = (subTotalVentas - descuento) * 0.18;;
    document.getElementById('igv').value = igv.toFixed(2);
    const total = (subTotalVentas - descuento) + igv;
    document.getElementById('total').value = total.toFixed(2);
}

// Inicializar con una fila
agregarFila();