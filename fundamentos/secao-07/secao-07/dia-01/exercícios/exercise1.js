const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

const expectedResult = 'Stephen King';
const authorBornIn1947 = () => books.find((autor) => autor.author.birthYear === 1947).author.name;


const expectedResult2 = 'Duna';

const smallerName = (array) => {
  let nameBook = array[0].name;

  array.forEach((element) => {

    if (element.name.length < nameBook.length) {
        nameBook = element.name;
    }
   })
  return nameBook;
}

const expectedResult3 = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };

  const getNamedBook = (array) => array.find(element => element.name.length === 26);


const expectedResult4 = false;

const everyoneWasBornOnSecXX = (array) => array.every(element => element.birthYear > 1900 && element.birthYear < 2001);

const expectedResult5 = true;

const someBookWasReleaseOnThe80s = (array) => array.some(element => element.releaseYear > 1980 && element.releaseYear < 1990);

console.log(someBookWasReleaseOnThe80s(books))


