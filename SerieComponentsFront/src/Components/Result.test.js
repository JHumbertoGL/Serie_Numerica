import CalcularSerie from './CalcularSerie';

describe('CalcularSerie', () => {
  let calcularSerie;

  beforeEach(() => {
    calcularSerie = new CalcularSerie();
  });

  it.each([
    [1, 0],
    [2, 1],
    [3, 3],
    [4, 13],
    [5, 34],
    [6, 76],
    [7, 168],
    [8, 377],
    [9, 610],
    [10, 987]
  ])('debería calcular correctamente el término de la serie para n=%i', (n, expectedResult) => {
    const result = calcularSerie.calcularTerminoSerie(n);
    expect(result);
  });
});

