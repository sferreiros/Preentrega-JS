let continuar = true;
while (continuar){
    let opciones = parseInt(prompt("Bienvenidos a AGNovedades\n Por favor ingrese una opcion:\n 1.Conocer medios de Pagos\n 2.Medios de envios\n 3.Tipos de Facturas\n 4.Salir"));
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
            continuar = false;
            break;
        default:
            alert("Opcion invalida por favor ingrese una opcion correcta");
            break;     
    }
}

alert("Gracias por su consulta")