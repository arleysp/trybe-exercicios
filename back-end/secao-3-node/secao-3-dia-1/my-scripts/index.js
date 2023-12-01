const fs = require('fs').promises;

const readSimpsons = async () => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonsResult = JSON.parse(simpsons);
  //  simpsonsResult.forEach(({ id, name }) => console.log(`${id} - ${name}`));
  return simpsonsResult;
}

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

const getSimpsonById = async (id) => {
  const simpsons = await readSimpsons();
  const promise = new Promise((resolve, reject) => {
    const result = simpsons.find((simpson) => simpson.id === id);
    result ? resolve(result) : reject(new Error('id inválido'));
  })

  return promise;
}

const main = async () => {
  const result = await getSimpsonById('8');
  console.log(`${result.id} - ${result.name}`);
};
