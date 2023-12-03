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

app.delete('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const { id } = req.params;
    const index = movies.findIndex(movie => movie.id === +id);
    movies.splice(index, 1);
    const updatedMovies = JSON.stringify(movies);
    await fsPromise.writeFile(pathMovies, updatedMovies);
    res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/search', async (req, res) => {
  const movies = await readFile();
  const { q } = req.query;
  const filteredMovies = movies.filter(movie => movie.movie.includes(q));
  res.status(200).send(filteredMovies);
});

app.put('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const { id } = req.params;
    const { movie, price } = req.body;

    const index = movies.findIndex(movie => movie.id === +id);
    movies[index] = { id: +id, movie, price };
    const updatedMovies = JSON.stringify(movies);
    await fsPromise.writeFile(pathMovies, updatedMovies);
    res.status(200).json(movies[index]);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


module.exports = app;