function numeroTriangular(n) {
    if (n <= 0) return "Error: El número debe ser mayor que cero.";

    let numeroTriangular = (n * (n + 1)) / 2;
    console.log(`T${n} = ${numeroTriangular}.`);

    let triangulo = "";
    for (let i = 1; i <= n; i++) {
        let espacios = ' '.repeat(n - i);
        let caracteres = '*'.repeat(2 * i - 1);
        triangulo += espacios + caracteres + '\n';
    }
    return triangulo;
}
console.log(numeroTriangular(5));