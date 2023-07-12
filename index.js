let continuar = true;
while (continuar){
    let opciones = parseInt(prompt("Bienvenidos a AGNovedades\n Por favor ingrese una opcion:\n 1.Conocer medios de Pagos\n 2.Medios de envios\n 3.Tipos de Facturas\n 4.Calcular Precio final de compra\n 5.Salir"));
    switch (opciones){
        case 1:
            alert("Los medios de pagos disponibles:\n 1. Mercado Pago\n 2. Tarjeta de Credito\n 3. Tarjeta de Debito");
            break;
        case 2:
            alert("Hacemos envios por moto-mensajeria expres y OCA");
            break;
        case 3:
            alert("Hacemos facturas A y B\n *RECORDATORIO*\n Debe adjnutar los datos correspondientes en el caso de querer una Factura A"); 
            break; 
        case 4:
            let cantidad = parseInt(prompt("Ingrese cantidad del producto")); 
            let precio = parseInt(prompt("Ingrese precio del producto"));
            let iva = 1.21;
            let costoEnvio = 500;
            let precioFinal = (cantidad * precio * iva) + costoEnvio;
            alert("El precio total de su producto es " + "$" + precioFinal + "\n El precio final contiene iva y un precio estandar de costo de envio de $500" );
            break;
        case 5:
            continuar = false;
            break;
        default:
            alert("Opcion invalida por favor ingrese una opcion correcta");
            break;     
    }
}

alert("Gracias por su consulta")