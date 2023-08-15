let productosElemento = document.querySelector("#productos");

let productos = [
    {nombre: "Faja", precio: "200", stock: 5},
    {nombre: "Tobillera", precio: "300", stock: 40},
    {nombre: "Rodillera", precio: "500", stock: 10},
    {nombre: "Muslera", precio: "500", stock: 20},
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Agregamos un contador a cada Producto 
productos.forEach ((productos) => {
  productos.contador = 0;});

// Funcion para sumar en el contador 
const sumarContador = (index) => {
     productos[index].contador++;
     mostrarProductos();
  }

// Funcion para restar en el contador 
const restarContador = (index) => {
  if (productos[index].contador > 0) {
      productos[index].contador--;
      mostrarProductos();
  }
}


// Funcion para aregra productos al carrito
const agregarProducto = (index) => {
  productos[index].cantidad = productos[index].contador;

// Verificamos que el contador no sea mayor al Stock 
if (productos[index].contador > productos[index].stock){
  return alert(`No hay stock suficiente, el máximo del producto es ${productos[index].stock} disponible`)}
// Validamos que el usuario agregue mínimo 1 producto
if (productos[index].contador === 0) {
  return alert("Debe agregar por lo menos 1 producto al carrito");
}
// Agregamos el producto al carrito 
carrito.push(productos[index]);


//Guardamos el carrito en el LocalStorage
localStorage.setItem("carrito", JSON.stringify(carrito));
// descontamos la cantidad del carrito al Stock 
productos[index].stock -= productos[index].contador;
//Reseteamos el contador 
productos[index].contador = 0;


mostrarProductos();
}

// Mostramos los Productos
const mostrarProductos = () => {
    productosElemento.innerHTML = " ";
    productos.forEach((producto, index) => {
        let productoBox = document.createElement("div");
        productoBox.innerHTML = `
          <p>Nombre:${producto.nombre}</p>
          <p>Precio: ${producto.precio}</p> 
          <p>Stock: ${producto.stock}</p>
          <p>Cantidad: ${producto.contador}</p> 
          `;
        productosElemento.appendChild(productoBox);

        let btnSumar = document.createElement("button");
        btnSumar.innerHTML = "+";
        btnSumar.classList.add ("btn","btn-sm","btn-secondary");
        productoBox.appendChild(btnSumar);
        btnSumar.onclick = () => sumarContador(index);

        let btnResta = document.createElement("button");
        btnResta.innerHTML = "-";
        btnResta.classList.add ("btn","btn-sm","btn-secondary");
        productoBox.appendChild(btnResta);
        btnResta.onclick = () => restarContador(index);
      
        let btnAgregar = document.createElement("button");
        btnAgregar.innerHTML = "Agregar";
        btnAgregar.classList.add ("ms-3", "btn", "btn-primary","d-grid" ,"gap-2")
        productoBox.appendChild(btnAgregar);
        
        btnAgregar.onclick = () => agregarProducto(index);
      });
}


mostrarProductos();
