let minhaLista = [1, 2, 3];
let outraLista = [4, 5, 6];

let novaLista = minhaLista.concat(outraLista);

console.log('Lista 1' + ' - ' + minhaLista);
console.log('Lista 2' + ' - ' + outraLista);


console.log('Concatenando listas' + ' ' + novaLista);

novaLista.pop(); //desafio 2

console.log('Retirando último elemento de array' + ' ' + novaLista);

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

console.log('Embaralhando...' + ' ' + shuffle(novaLista));
  
function removerDuplicatas(array) {
  var uniqueArr = [...new Set(array)]

  console.log(`Removendo duplicatas... ${uniqueArr}`)  
}

removerDuplicatas(novaLista);
