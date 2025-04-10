let amigo = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');
let amigos = [];

function adicionar() {
    amigos.push(`${amigo.value}`);
    
    lista.textContent = amigos;
}

function sortear() {
    embaralhar(amigos);
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}