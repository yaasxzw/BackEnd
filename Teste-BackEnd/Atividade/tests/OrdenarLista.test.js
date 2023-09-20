function Ordenarlista(lista) {
  return lista.sort((a, b) => a - b)
}

 test('Ordenarlista de números', () => {
  const lista0 = [5, 8, 7, 6];
  const lista1 = Ordenarlista(lista0); 

  expect(lista1).toEqual([5, 6, 7, 8]);
})
