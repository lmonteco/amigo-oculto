let inputAmigo = document.getElementById('nome-amigo');
let listaAmigos = document.getElementById('lista-amigos');
let amigosIncluidos = [];

function adicionar() {
    amigosIncluidos.push(`${inputAmigo.value}`);
    
    listaAmigos.textContent = amigosIncluidos;
}