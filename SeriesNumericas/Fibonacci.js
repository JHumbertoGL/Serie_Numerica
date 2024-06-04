function fibonacci(n) {
    if (n <= 0) return "Error: El número debe ser mayor que cero.";
    else if (n === 1) return [0];
    else if (n === 2) return [0, 1];

    let fibonacci = [0,1];

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}

console.log(fibonacci(6)); 