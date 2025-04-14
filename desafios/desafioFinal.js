function validarPositivo(n) {
    if (n > 0) {
        console.log(`${n} é positivo`);
    } else if (n < 0) {
        console.log(`${n} é negativo`);
    } else {
        console.log(`${n} é neutro`);
    }
}

validarPositivo(-3);