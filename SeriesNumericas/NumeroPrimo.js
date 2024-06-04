function numPrimo(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= n / 2; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function calcularPrimo(n) {
    let contador = 0;
    let num = 2; 
    while (contador < n) {
        if (numPrimo(num)) {
            contador++;
            console.log(`El ${contador}° número primo es ${num}.`);
        }
        num++;
    }
}

calcularPrimo(10);