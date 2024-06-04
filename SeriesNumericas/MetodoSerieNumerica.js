class SerieCalculadora {

    numPrimo(n) {
        if (n <= 1) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
    
        for (let i = 3; i <= n / 2; i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    }

    calcularPrimo(n) {
        let contador = 0;
        let num = 2;

        while (contador < n) {
            if (this.numPrimo(num)) {
                contador++;
            }
            num++;
        }
        return num - 1;
    }

    calcularNumeroTriangular(n) {
        if (n <= 0) return 0;
        return (n * (n + 1)) / 2;
    }

    calcularFibonacci(n) {
        if (n <= 0) return [0];
        if (n === 1) return [0, 1];

        let fibonacci = [0,1];

        for (let i = 2; i < n; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
        return fibonacci;
    }

    calcularTerminoSerie(n) {
        const primo = this.calcularPrimo(n + 1);
        const triangular = this.calcularNumeroTriangular(n);
        const fibonacci = this.calcularFibonacci(n + 1);
        const serie = primo - (2 * triangular) + fibonacci[n]; 
    
        return serie;
    }
}
const serieCalculadora = new SerieCalculadora();
const termino = serieCalculadora.calcularTerminoSerie(5);
console.log("El término n de la serie es:", termino);