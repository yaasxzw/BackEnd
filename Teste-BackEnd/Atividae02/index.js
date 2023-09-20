// function formaName(name, sobrenome) {
//   return `${name.toUpperCase()} ${sobrenome.toUpperCase()}`;
// }

// function VerificaIdade(idade) {
//   if (idade >= 18) {
//     return idade;
//   }
//   return idade;
// }

// module.exports = { formaName, VerificaIdade };

// eslint-disable-next-line no-unused-vars
function getUser(nome, idade, _email) {
  return {
    nome,
    idade,
    _email,
  };
}

module.exports = getUser;
