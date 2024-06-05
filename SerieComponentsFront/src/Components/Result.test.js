import CalcularSerie from './CalcularSerie';

describe('CalcularSerie', () => {
  let calcularSerie;

  beforeEach(() => {
    calcularSerie = new CalcularSerie();
  });

  it.each([
    [1, 2],
    [2, 0],
    [3, -3],
    [4, -6],
    [5, -12],
    [6, -17],
    [7, -24],
    [8, -28],
    [9, -27],
    [10, -24]
  ])('debería calcular correctamente el término de la serie para n=%i', (n, expectedResult) => {
    const result = calcularSerie.calcularTerminoSerie(n);
    expect(result).toBe(expectedResult);
  });
});

