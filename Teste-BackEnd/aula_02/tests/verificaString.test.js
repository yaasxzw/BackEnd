test('Verificar se existe @ no email', () => {
  expect('igor@senai.com').toMatch(/@/);
});

test('Verifica se existe #', () => {
  expect('123456').not.toMatch(/#/);
});

const frutas = ['kiwi', 'uva', 'morongo', 'framboesa', 'fruta-pão', 'amora'];

test('Tem amora na minha lista de frutas', () => {
  expect(frutas).toContain('amora');
});

const lista = ['lasanha', 'alcatra', 'queijo'];

test('Não pode ter pipoca', () => {
  expect(lista).not.toContain('pipoca')
});
