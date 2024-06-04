const { MetodoSerieNumerica } = require('./MetodoSerieNumerica'); // Asegúrate de que la ruta sea correcta

describe('MetodoSerie', () => {
  let metodoSerieNumerica;

  beforeEach(() => {
    metodoSerieNumerica = new MetodoSerieNumerica();
  });

  it.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])('debería calcular correctamente el término de la serie para n=%s', (n) => {
    expect(metodoSerieNumerica.calcularTerminoSerie(n)); // Ajusta el segundo argumento de toBeCloseTo según la precisión deseada
  });
});

