const carritoCompras = document.querySelector ("#carritoCompras");
const compraProductos = document.querySelector("#compraProductos");
const carritoFoot = document.querySelector("#carritoFoot");


let contador = 1;
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let productos = [
    {id:"1",
nombre:"Muñequera Turmalina Magnetica Artrosis Artritis",
precio: "7190",
imagen:"./img/Muñequera Magnetica.jpeg"},
{
    id:"2",
    nombre:"Rodillera Ortopedica Neoprene Magnetica",
    precio:"11800",
    imagen:"./img/Rodillera Ortopedica Neoprene Magnetica.jpeg"
},
{
    id:"3",
    nombre:"Hombrera Tendinitis Magnetica Hombre Manguito",
    precio:"11900",
    imagen:"./img/Hombrera Magnetica.jpeg"
},
{
    id:"4",
    nombre:"Tobillera Lesión Artrosis Artritis Magnetica",
    precio:"7990",
    imagen:"./img/Tobillera Magnetica.jpeg"
},
{
    id:"5",
    nombre:"Corrector Postural Espalda Clavicula Premiun",
    precio:"6190",
    imagen:"./img/Corrector Postural.jpeg"
},
{
    id:"6",
    nombre:"Faja Termica Lumbar Neoprene Bellenada",
    precio:"15900",
    imagen: "./img/Faja Termica Lumbar.jpeg"
},
];

//Mostrar los productos
const mostrarProductos = () => {
    compraProductos.innerHTML = "";
    productos.forEach ((productos, index) => {
        let productoBox = document.createElement ("div");
        productoBox.innerHTML = `
        <div class="col">
        <div class="card">
          <div class="card-body" >
            <div>
              <img src="${productos.imagen}" class="card-img-top" alt="Muñequera">
            <h5 class="card-title">${productos.nombre}</h5>
            <p class="card-text">${productos.precio}</p>
            <button class="btn btn-dark btn-comprar" data-index="${index}"">Comprar</button>
            </div>
          </div>
        </div>
      </div>`;
      compraProductos.appendChild(productoBox);
      
      
   });
   // Agregamos evento para el btn de compra 
   const btnsComprar = document.querySelectorAll('.btn-comprar');
   btnsComprar.forEach(btn => {
       btn.addEventListener('click', agregarProducto);
   });
   
   
};

// Agregamos producto al carrito
const agregarProducto = (e) => {
    const index = event.target.getAttribute('data-index');
    const productoSeleccionado = productos[index];
    productoSeleccionado.cantidad = 1;

    carrito.push(productoSeleccionado);
    
    Swal.fire ({
        title: "Agregado",
        titleText: `Prodcuto ${productoSeleccionado.nombre} agregado al carrito`,
        icon: "success",
        confirmButtonText: "Ok",        
    });

    localStorage.setItem("carrito",JSON.stringify(carrito));
    mostrarCarrito();
    totalCarrito ();
    
};

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
            <button class="btn btn-outline-primary" id="comprar">Comprar</button>
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

const btnComprar = document.getElementById ("comprar");
btnComprar.addEventListener (`click`, () => {
    window.location.href = "./page/carrito_compras.html"
});          
    
};


mostrarCarrito();
mostrarProductos ();
totalCarrito ();    