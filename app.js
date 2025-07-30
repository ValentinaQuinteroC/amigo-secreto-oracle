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
    } else {  // con esto se muestra al nombre en la lista y se limpia el espacio para escribir otro nombre
    listaAmigos.push(amigo.trim()) }
    let li = document.createElement("li");
    li.textContent = amigo;
    document.getElementById("listaAmigos").appendChild(li);
    document.getElementById('amigo').value = "";
}

