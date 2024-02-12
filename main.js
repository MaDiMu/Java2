let titulo = document.getElementById("titulo")

let nombre= prompt("ingrese su nombre: ")

titulo.innerHTML = `
<h2> Bienvenido ${nombre}</h2>`

class bebida {
    constructor(id, nombre, precio, cantidad) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }

  const bebida1 = new bebida(1, 'Fernet', 10000, 1);
  const bebida2 = new bebida(2, 'Fanta', 2000, 1);
  const bebida3 = new bebida(3, 'Coca', 2000, 1);
  const bebida4 = new bebida(4, 'Sprite', 2000, 1);
  const bebida5 = new bebida(5, 'Gancia', 8000, 1);
  const bebida6 = new bebida(6, 'Campari', 7000, 1);
  const bebida7 = new bebida(7, 'Agua', 1000, 1);
  
  
  const productos = [bebida1, bebida2, bebida3, bebida4,bebida5,bebida6,bebida7];

const boton = document.getElementById("boton")
const principal= document.querySelector("#principal")
boton.addEventListener("click",function(){
    for(const x of productos){
        let contador = document.createElement("div")
    
        contador.innerHTML= `
        <h4> ${x.id}_  ${x.nombre}:  ${x.precio}$ </h4>
        <button id="boton${productos.id}" class="btn"> Agregar al Carrito </button>
        `;
        
        document.body.appendChild(contador)
    }
    const boton = document.getElementById(`boton${productos.id}`);
  boton.addEventListener('click', () => {
    agregarAlCarrito(productos.id);
  });

})

const carrito = [];

const agregarAlCarrito = (id) => {
    const producto = productos.find(producto => producto.id === id);
    carrito.push(producto);}

    const contenedorCarrito = document.getElementById('contenedorCarrito');
    const verCarrito = document.getElementById('ver');
    
    verCarrito.addEventListener('click', actualizarCarrito);
    
    function actualizarCarrito() {
      let aux = '';
      carrito.forEach((producto) => {
        aux += `
                  <div>
                      ${productos.id}
                      <div class="card-body">
                          <h3 class="card-title"> ${productos.nombre} </h3>
                          <p class="card-text"> ${productos.precio} </p>
                          <button onClick = "eliminarDelCarrito(${productos.id})" class="btn"> Eliminar del Carrito </button>
                      </div>
                  </div>
                  `;
      });
    
      contenedorCarrito.innerHTML = aux;
      calcularTotalCompra();
    }
    const eliminarDelCarrito = (id) => {
        const producto = carrito.find((producto) => productos.id === id);
        carrito.splice(carrito.indexOf(producto), 1);
        actualizarCarrito();
      };
      
      
      
      const vaciarCarrito = document.getElementById('vaciarCarrito');
      vaciarCarrito.addEventListener('click', () => {
        carrito.splice(0, carrito.length);
        actualizarCarrito();
      });
      
      
      
      const totalCompra = document.getElementById('totalCompra');
      
      const calcularTotalCompra = () => {
        let total = 0;
        carrito.forEach((productos) => {
          total += productos.precio * productos.cantidad;
        });
        totalCompra.innerHTML = total;
      };