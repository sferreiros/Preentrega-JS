let productosElemento = document.querySelector("#productos");

let productos = [
    {nombre: "Faja", precio: "200", stock: 5},
    {nombre: "Tobillera", precio: "300", stock: 40},
    {nombre: "Rodillera", precio: "500", stock: 10},
    {nombre: "Muslera", precio: "500", stock: 20},
];

let carrito;


if(localStorage.getItem("carrito") === null){
    carrito = [];
} else {localStorage.getItem("carrito");}

// Mostramos los Productos
const mostrarProductos = () => {
    productosElemento.innerHTML = " ";
    productos.forEach((producto, index) => {
        let productoBox = document.createElement("div");
        productoBox.innerHTML = `
          <p>Nombre:${producto.nombre}</p>
          <p>Precio: ${producto.precio}</p> 
          <p>Stock: ${producto.stock}</p> 
          `;
        productosElemento.appendChild(productoBox);

        let btnSumar = document.createElement("button");
        btnSumar.innerHTML = "+";
        btnSumar.classList.add ("btn","btn-sm","btn-secondary");
        productoBox.appendChild(btnSumar);

        let btnResta = document.createElement("button");
        btnResta.innerHTML = "-";
        btnResta.classList.add ("btn","btn-sm","btn-secondary");
        productoBox.appendChild(btnResta);
      
        let btnAgregar = document.createElement("button");
        btnAgregar.innerHTML = "Agregar";
        btnAgregar.classList.add ("ms-3", "btn", "btn-primary","d-grid" ,"gap-2")
        productoBox.appendChild(btnAgregar);
        
        btnAgregar.onclick = () => agregarProducto(index);
      });
}

mostrarProductos();
