let titulo = document.getElementById("titulo")

let nombre= prompt("ingrese su nombre: ")

titulo.innerHTML = `
<h2> Bienvenido ${nombre}</h2>`

const bebidas =[
    {id:1, nombre: "fernet", precio: 10000},
    {id:2,nombre: "Fanta", precio: 2000},
    {id:3,nombre: "Coca", precio: 2000},
    {id:4,nombre: "Sprite", precio: 2000},
    {id:5,nombre: "Gancia", precio: 8000},
    {id:6,nombre: "Campari", precio: 7000},
    {id:7,nombre: "Agua", precio: 1000},
]

//document.append(titulo)
const boton = document.getElementById("boton")
const principal= document.querySelector("#principal")
boton.addEventListener("click",function(){
    for(const x of bebidas){
        let contador = document.createElement("div")
    
        contador.innerHTML= `
        <h4> ${x.id}_  ${x.nombre}:  ${x.precio}$ </h4>
       
        `
        document.body.appendChild(contador)
    }

})



