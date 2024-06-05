class CalcularSerie {
    constructor() {}

    esPrimo(n) {
        if (n <= 1) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;

        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }

    calcularPrimo(n) {
        let contador = 0;
        let num = 2;

        while (contador < n) {
            if (this.esPrimo(num)) {
                contador++;
            }
            num++;
        }
        return num - 1;
    }

    calcularTriangular(n) {
        if (n <= 0) return 0;
        return (n * (n + 1)) / 2;
    }

    calcularFibonacci(n) {
        if (n <= 0) return [0];
        if (n === 1) return [0, 1];

        let fib = [0, 1];

        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    }

    calcularTerminoSerie(n) {
        const primo = this.calcularPrimo(n + 1);
        const triangular = this.calcularTriangular(n);
        const fibonacci = this.calcularFibonacci(n + 1);

        const serie = primo - (2 * triangular) + fibonacci[n]; 
        // console.log("Primo:",primo,",","triangular:",triangular,",","fibonacci:", fibonacci[n], "Resultado = " ,primo, "-","2*",triangular,"+",fibonacci[n]," = ",serie);

        return serie;
    }
}
  
  export default CalcularSerie;
  