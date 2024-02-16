let titulo = document.getElementById("titulo")
const principal = document.getElementById("principal")
const contenedorCarrito = document.getElementById("contenedorCarrito")

let nombre= prompt("ingrese su nombre: ")

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

titulo.innerHTML = `
<h2> Bienvenido ${nombre}</h2>`

class bebida {
    constructor(id, nombre, precio, cantidad) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
   };

  const bebida1 = new bebida(1, 'Fernet', 10000, 1);
  const bebida2 = new bebida(2, 'Fanta', 2000, 1);
  const bebida3 = new bebida(3, 'Coca', 2000, 1);
  const bebida4 = new bebida(4, 'Sprite', 2000, 1);
  const bebida5 = new bebida(5, 'Gancia', 8000, 1);
  const bebida6 = new bebida(6, 'Campari', 7000, 1);
  const bebida7 = new bebida(7, 'Agua', 1000, 1);
  
  
  const productos = [bebida1, bebida2, bebida3, bebida4, bebida5, bebida6, bebida7];

  const boton = document.getElementById("boton") 
  boton.addEventListener("click",function(){
    productos.forEach((x) => {
      let content = document.createElement("div");
      content.innerHTML =  `
      <h4> ${x.id}_  ${x.nombre}:  ${x.precio}$ </h4>
      `;
      principal.append(content);

      let btnComprar = document.createElement("button");
      btnComprar.innerText = "comprar";
      content.append(btnComprar);
      btnComprar.addEventListener("click",() => {
          carrito.push({
            id: x.id,
            precio: x.precio,
            nombre: x.nombre,
            
          });
          savelocal();
        //console.log(carrito);
        });
    
          })});

      ver.addEventListener("click",() =>{

        const VerCarrito = document.createElement("div");
        VerCarrito.innerHTML = `<h3> Carrito de Compras </3>`
        contenedorCarrito.append(VerCarrito);

        carrito.forEach((productos) =>{
          let carritocontent =document.createElement("div");
          contenedorCarrito.innerHTML=
          `<h3>${productos.nombre}</h3>
          <p> ${productos.precio} $ </p>`
        
        contenedorCarrito.append(carritocontent);
        }
        );
        const total= carrito.reduce((acc,el) => acc + el.precio,0);
        const totalcompra = document.createElement("div");
        totalcompra.innerHTML = `total a pagar ${total}`
        contenedorCarrito.append(totalcompra)
      })
      const savelocal = () =>{
      localStorage.setItem("carrito", JSON.stringify(carrito) )};
      