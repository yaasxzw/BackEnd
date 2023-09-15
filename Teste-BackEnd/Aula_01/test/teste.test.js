const { somaNumeros, subtraiNumero } = require('../index');

test('A fução deve somar dois números', () => {
  const esperado = 1000;
  const retornado = somaNumeros(800, 200);

    expect(retornado).toBe(esperado);
});

test('A fução deve subtrair dois números', () => {
  const esperado = 10;
  const retornado = subtraiNumero(30, 20);

    expect(retornado).toBe(esperado);
});
