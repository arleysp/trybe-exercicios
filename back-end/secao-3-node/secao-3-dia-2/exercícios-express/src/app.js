const express = require('express');

const app = express();

app.use(express.json());

const fsPromise = require('fs').promises;
const path = require('path');
const pathMovies = path.resolve(__dirname, 'movies.json');

const readFile = async () => {
  try {
    const movies = await fsPromise.readFile(pathMovies, 'utf-8');
    return JSON.parse(movies);
  } catch (err) {
    console.log(`Arquivo não pôde ser lido: ${err}`);
  }
}

app.get('/movies', async (req, res) => {
  const movies = await readFile();
  res.status(200).send(JSON.stringify(movies));
})

app.get('/movies/:id', async (req, res) => {
  const movies = await readFile();
  const { id } = req.params;
  const movie = movies.find(movie => movie.id === +id);
  if (!movie) return res.status(404).send('Filme não encontrado');
  return res.status(200).send(movie);
})

app.post('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    const { movie, price } = req.body;
    const newMovie = { id: movies[movies.length - 1].id + 1, movie, price };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fsPromise.writeFile(pathMovies, allMovies);
    return res.status(201).json(newMovie);
  }
  catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


module.exports = app;