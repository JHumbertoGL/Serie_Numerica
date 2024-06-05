const { MetodoSerieNumerica } = require('./MetodoSerieNumerica');

describe('MetodoSerie', () => {
  let metodoSerieNumerica;

  beforeEach(() => {
    metodoSerieNumerica = new MetodoSerieNumerica();
  });

  it.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])('debería calcular correctamente el término de la serie para n=%s', (n) => {
    const expectedResults = [
      2,
      0,
      -3,
      -6,
      -12,
      -17,
      -24,
      -28,
      -27,
      -24
    ];
    expect(metodoSerieNumerica.calcularTerminoSerie(n)).toBe(expectedResults[n - 1]);
  });
});

