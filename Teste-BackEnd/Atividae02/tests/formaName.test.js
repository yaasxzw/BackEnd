// const { formaName, VerificaIdade } = require('../index');

const getUser = require("..");

// test('Verificar se o nome está em letras maiúscula', () => {
//   expect(formaName('yasmim', 'guedes')).toBe('YASMIM GUEDES');
// });

// test('Verificar se a pessoa é maior de idade', () => {
//   const idade = 27;
//   expect(VerificaIdade(idade)).toBeGreaterThanOrEqual(18);
// });

test('Verificar se os objetos são iguais', () => {
  const userEsperado = {
    nome: 'bruno',
    idade: 18,
    _email: 'bruno@bruno.com',
  };
  const user = getUser('bruno', 18, 'bruno@bruno.com');
  expect(userEsperado).toEqual(user);
});
