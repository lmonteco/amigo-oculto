// desafio 1
/* function validarPositivo(n) {
    if (n > 0) {
        console.log(`${n} é positivo`);
    } else if (n < 0) {
        console.log(`${n} é negativo`);
    } else {
        console.log(`${n} é neutro`);
    }
}

validarPositivo(-3); */

// desafio 2
/* function verificarIdade(idade) {

    if (idade >= 18) {
        console.log('Você é maior de idade.');
    } else {
        console.log('Você é menor de idade.');
    }
}

verificarIdade(8); */

// desafio 3
/* function validarString(string) {
    if (string == '') {
        console.log('A string está vazia');
    } else {
        console.log(string);
    }
}

validarString(""); */

//desafio 4
/* É múltiplo de 400
É múltiplo de 4 mas não é de 100 */

function validarBissexto(ano) {
    if (ano == '' || isNaN(ano)){
        console.log('Insira um ano válido, por favor.');
        return;
    }
    if (ano % 400 == 0 || ano % 4 == 0 && ano % 100 != 0) {
        console.log(`${ano} é um ano bissexto.`);
        console.log(ano % 400 == 0);        
        console.log(ano % 4 == 0);        
        console.log(ano % 100 != 0);        
    } else {
        console.log(`${ano} não é um ano bissexto.`);     
        console.log(ano % 400 == 0);        
        console.log(ano % 4 == 0);        
        console.log(ano % 100 != 0);   
    }
}

validarBissexto(1996);