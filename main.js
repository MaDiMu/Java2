let titulo = document.getElementById("titulo")

let nombre= prompt("ingrese su nombre: ")

titulo.innerHTML = `
<h2> Bienvenido ${nombre}</h2>`

document.append(titulo)