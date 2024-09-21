
        document.addEventListener('DOMContentLoaded', function() {
            const invoiceItems = document.getElementById('invoiceItems');
            const addLineButton = document.getElementById('addLineButton');
            const descuentoInput = document.getElementById('descuento');

            let itemCounter = 0;

            function createInvoiceItem() {
                const row = document.createElement('tr');
                row.classList.add('invoice__item');
                row.dataset.id = itemCounter++;

                row.innerHTML = `
                    <td><input type="number" class="invoice__input invoice__input--cantidad" value="0"></td>
                    <td><input type="text" class="invoice__input invoice__input--concepto"></td>
                    <td><input type="number" class="invoice__input invoice__input--precio" value="0"></td>
                    <td><input type="number" class="invoice__input invoice__input--importe" readonly></td>
                    <td>
                        <button type="button" class="invoice__button invoice__button--edit">Editar</button>
                        <button type="button" class="invoice__button invoice__button--delete">Eliminar</button>
                    </td>
                `;

                invoiceItems.appendChild(row);
                return row;
            }

            function updateItemTotal(row) {
                const cantidad = parseFloat(row.querySelector('.invoice__input--cantidad').value) || 0;
                const precio = parseFloat(row.querySelector('.invoice__input--precio').value) || 0;
                const importe = cantidad * precio;
                row.querySelector('.invoice__input--importe').value = importe.toFixed(2);
            }

            function updateInvoiceTotal() {
                const items = document.querySelectorAll('.invoice__item');
                let totalBruto = 0;

                items.forEach(item => {
                    totalBruto += parseFloat(item.querySelector('.invoice__input--importe').value) || 0;
                });

                const descuento = parseFloat(descuentoInput.value) || 0;
                const baseImponible = totalBruto - descuento;
                const iva = baseImponible * 0.21;
                const total = baseImponible + iva;

                document.getElementById('totalBruto').value = totalBruto.toFixed(2);
                document.getElementById('baseImponible').value = baseImponible.toFixed(2);
                document.getElementById('iva').value = iva.toFixed(2);
                document.getElementById('total').value = total.toFixed(2);
            }

            addLineButton.addEventListener('click', () => {
                const newRow = createInvoiceItem();
                newRow.querySelectorAll('input').forEach(input => {
                    input.addEventListener('input', () => {
                        updateItemTotal(newRow);
                        updateInvoiceTotal();
                    });
                });
                updateInvoiceTotal();
            });

            invoiceItems.addEventListener('click', (event) => {
                const target = event.target;
                if (target.classList.contains('invoice__button--delete')) {
                    target.closest('tr').remove();
                    updateInvoiceTotal();
                } else if (target.classList.contains('invoice__button--edit')) {
                    const row = target.closest('tr');
                    row.querySelectorAll('input').forEach(input => input.removeAttribute('readonly'));
                }
            });

            descuentoInput.addEventListener('input', updateInvoiceTotal);

            // Initialize with one empty row
            createInvoiceItem();
        });
