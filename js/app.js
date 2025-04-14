let amigo = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');
let amigos = [];

function adicionar() {
    if (amigo.value === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert(`${amigo.value} já foi adicionado à lista. Escolha outro nome`);
        return;
    }

    amigos.push(amigo.value);

    if (amigos.length == 1) {
        lista.innerHTML += `<span class="clickable" onclick="remover(event)">${amigo.value}</span>`;
    } else {
        lista.innerHTML += `<span class="clickable" onclick="remover(event)">, ${amigo.value}</span>`;
    }

    document.getElementById('nome-amigo').value = '';
}

function remover(event) {
    event.target.remove();
}

function sortear() {
    document.getElementById('nome-amigo').value = '';

    if (amigos.length <= 3) {
        alert('Por favor, adicione pelo menos 4 amigos.');
        return;
    }

    listaSorteio.innerHTML = '';
    embaralhar(amigos);

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

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}