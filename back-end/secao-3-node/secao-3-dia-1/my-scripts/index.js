const fs = require('fs').promises;

const readSimpsons = async (url) => {
  const simpsons = await fs.readFile(url, 'utf-8');
  const simpsonsResult = JSON.parse(simpsons);
  //  simpsonsResult.forEach(({ id, name }) => console.log(`${id} - ${name}`));
  return simpsonsResult;
}

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

const getSimpsonById = async (id) => {
  const simpsons = await readSimpsons('./simpsons.json');
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

const removeSimpson = async (id) => {
  const simpsons = await readSimpsons('./simpsons.json');
  const result = simpsons.filter((simpson) => simpson.id !== id);
  await fs.writeFile('./simpsons.json', JSON.stringify(result));
  return result;
};

const copySimpsons = async () => {
  const simpsons = await readSimpsons('./simpsons.json');
  const result = simpsons.filter((simpsons) => simpsons.id >= '1' && simpsons.id <= '4');
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(result));
};

const addSimpson = async (id) => {
  const simpsons = await readSimpsons('./simpsons.json');
  const result = simpsons.filter((simpson) => simpson.id === id);
  const update = await readSimpsons('./simpsonFamily.json');
  const newSimpson = [...update, ...result];
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpson));
}

// addSimpson('8');

const updateSimpson = async (id, name) => {
  const simpsons = await readSimpsons('./simpsonFamily.json');
  const result = simpsons.map((simpson) => {
    if (simpson.id === id) {
      simpson.name = name;
      return simpson;
    }
    return simpson;
  });
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(result));
};

updateSimpson('8', 'Maggie Simpson');




