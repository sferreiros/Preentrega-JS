//const finalCarrito = document.querySelector("#finalCarrito");



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
// Mostramos los datos del comprador 
let productoBox = document.createElement ("div")
productoBox.innerHTML =`
<form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Apellido</label>
            <input type="email" class="form-control" id="inputApellido">
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Nombre</label>
            <input type="password" class="form-control" id="inputNombre">
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Direccion de Entrega</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Calle Falsa 123">
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Piso - Departamento</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="4 B">
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">DNI</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="11111111">
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">Ciudad</label>
            <input type="text" class="form-control" id="inputCity">
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">Localidad</label>
            <select id="inputState" class="form-select">
              <option selected>Ciudad Autonoma de Buenos Aires</option>
              <option>Mendoza</option>
              <option>Catamarca</option>
              <option>La Rioja</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Codigo Postal</label>
            <input type="text" class="form-control" id="inputZip">
          </div>
          <div>
            <h1>Datos de la Tarjeta</h1>
          </div>
          <div class="d-flex justify-content-between estiloTarjeta">
            <div class="card text-bg-light mb-3" style="max-width: 28rem;">
              <div class="card-header">
                <div class="d-flex justify-content-between">
                  <h5>Tarjeta de Debito</h5>
                  <div>
                    <span class="material-symbols-outlined">
                      credit_card
                      </span>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h6 class="card-title">
                  <label>Número de Tarjeta</label><br>
                  <input type="text" id="numeroTarjeta">
                </h6>
                <div class="card-text">
                  <div class="d-flex justify-content-between">
                    <div>
                      <label>Titular de la Tarjeta</label>
                      <input type="text">
                    </div>
                    <div>
                      <label>Fecha Vto</label>
                      <input type="text">
                    </div>                    
                  </div>                  
                  <label >CVC</label><br>
                  <input type="text">
                </div>
              </div>
            </div>
            <div class="card text-bg-light mb-3" style="max-width: 28rem;">
              <div class="card-header">
                <div class="d-flex justify-content-between">
                  <h5>Tarjeta de Credito</h5>
                  <div>
                    <span class="material-symbols-outlined">
                      credit_card
                      </span>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h6 class="card-title">
                  <label>Numero de Tarjeta</label><br>
                  <input type="text" id="numeroTarjeta">
                </h6>
                <div class="card-text">
                  <div class="d-flex justify-content-between">
                    <div>
                      <label>Titular de la Tarjeta</label>
                      <input type="text">
                    </div>
                    <div>
                      <label>Fecha Vto</label>
                      <input type="text">
                    </div>                    
                  </div>                  
                  <label >CVC</label><br>
                  <input type="text">
                </div>
              </div>
            </div>
          </div>                    
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Comprar</button>
          </div>
        </form>
`
finalCarrito.appendChild(productoBox); 



  