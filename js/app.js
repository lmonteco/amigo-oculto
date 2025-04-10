let amigo = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');
let amigos = [];

function adicionar() {
    amigos.push(`${amigo.value}`);
    
    lista.textContent = amigos;

    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    embaralhar(amigos);

    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            listaSorteio.innerHTML += `<li>${amigos[amigos.length - 1]} -> ${amigos[0]}</li>`;        
        } else {
            listaSorteio.innerHTML += `<li>${amigos[i]} -> ${amigos[i+1]}</li>`;        
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}