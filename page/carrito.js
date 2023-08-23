//Mostrar el carrito
const mostrarCarrito = () => {
    carritoCompras.innerHTML = "";
  
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    carrito.forEach((productos, index) => {
        let productoBox = document.createElement ("tr")
        productoBox.innerHTML = `        
        
                <th scope="row">${productos.id}</th>
                <td>${productos.nombre}</td>
                <td><span class="contador">${productos.cantidad}</span></td>
                <td>
                    <button class="btn btn-success btnSuma" data-index="${index}">+</button>                    
                    <button class="btn btn-danger btnResta" data-index="${index}">-</button>
                </td>
                <td>$ <span>${productos.precio* productos.cantidad}  </span></td>
        `;
  
    carritoCompras.appendChild(productoBox);  
        
    });
  // Agregamos evento para el btn de suma y resta
  const btnsSuma = document.querySelectorAll('.btnSuma');
  const btnsResta = document.querySelectorAll('.btnResta');

  btnsSuma.forEach(btn => {
       btn.addEventListener('click', sumarCantidad);
   });
   btnsResta.forEach(btn => {
    btn.addEventListener(`click`, restarCantidad);
   });  
  };

// Función para sumar 
const sumarCantidad = (e) => {
    const index = e.target.getAttribute('data-index');
    carrito[index].cantidad++;
    actualizarCarrito();
    totalCarrito ();
};

// Función para restar 
const restarCantidad = (e) => {
    const index = e.target.getAttribute('data-index');
    if (carrito[index].cantidad > 1) {
        carrito[index].cantidad--;
        
    } else {
        carrito.splice(index, 1);
    }
    actualizarCarrito();
    totalCarrito ();
};
// Función para actualizar el carrito 
const actualizarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
};
// Función para total del carrito
const calcularTotalCarrito = () => {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    return total;
};

// Mostramos el total del Carrito
const totalCarrito = () => {
    carritoFoot.innerHTML = " ";

    let totalCantidad = 0; // Variable para almacenar la suma de cantidades
    carrito.forEach(producto => {
        totalCantidad += producto.cantidad;
    });
    
    let totalPrecio = calcularTotalCarrito(); // Obtener el total de precio

    let productoBox = document.createElement ("tr")
    productoBox.innerHTML =`
    <th scope="row" colspan="2">Total productos</th>
        <td>${totalCantidad}</td>
        <td>
            <button class="btn btn-outline-danger" id="vaciar-carrito">
                Vaciar Carrito
            </button>
            
        </td>
        <td class="font-weight-bold">$ <span>${totalPrecio}</span></td>
        `;
        carritoFoot.appendChild(productoBox); 
        const btnVaciar = document.getElementById(`vaciar-carrito`);
btnVaciar.addEventListener (`click`, () => {
    localStorage.removeItem("carrito");
    mostrarCarrito();
    totalCarrito ();   

});  

        
    
};


mostrarCarrito();
totalCarrito ();    