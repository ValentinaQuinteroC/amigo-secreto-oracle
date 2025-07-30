let listaAmigos = [];  

//al agregar un valor, se asegura que no sea un espacio en blanco
function agregarAmigo(){ 
    let amigo = document.getElementById('amigo').value;
    if (!amigo || amigo.trim() === ""){ 
        alert ("ingresa un nombre valido") 
        return; 
    }
    //convierte el dato ingresado en valido convirtiendolo todo el minuscula, para que despues no se repiran nombres incluso si escriben mayuscula
    let nombreArreglado = amigo.trim().toLowerCase(); 
    let existente = listaAmigos.some (nombre => nombre.toLowerCase() === nombreArreglado);

//verifica que no este el mismo nombre gardado previamente
    if (existente) {
        alert ("ese nombre ya fue agregado, intenta con uno diferente"); 
        return; 
    } 
    listaAmigos.push(amigo.trim());
    actualizarLista(); 
    document.getElementById('amigo').value = "";
}

//actualiza la lista, y la muestra recorriendo uno por uno los elementos de la misma
function actualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    for (let amigo of listaAmigos) {
    const li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);
  }
}

//escoge aleatoriamente un elemento de la lista como resultado
function sortearAmigo () { 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (listaAmigos.length === 0){ 
        alert ("agrega un nombre para poder sortear");
        return;
    } 
    let resultadoAleatorio = Math.floor(Math.random() * listaAmigos.length); 
    let nombreAleatorio = listaAmigos[resultadoAleatorio]
    let li = document.createElement("li")
    li.textContent = `el amigo secreto es ${nombreAleatorio}` 
    resultado.appendChild (li);
}
