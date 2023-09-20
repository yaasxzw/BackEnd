const converteCelsius = require('../index')

test('Converte Celsius para Fahrenheit', () => {
  expect(converteCelsius(100)).toBe(212)
});
