const fs = require('fs').promises;
const path = require('path');

const validateName = (req, res, next) => {
  const { name } = req.body;
  console.log('Name:', name);
  if (!name) return res.status(400).json({ 'message': 'O campo "name" é obrigatório' });

  if (name.length < 4) return res.status(400).json({ 'message': 'O "name" deve ter pelo menos 4 caracteres' });

  next();
};

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (price === undefined) {
    return res.status(400).json({ 'message': 'O campo "price" é obrigatório' });
  }
  if (price < 0 || typeof price !== 'number') {
    return res.status(400).json({ 'message': 'O "price" deve ser maior ou igual a zero' });
  }
  next();
};

const validateDescription = (req, res, next) => {
  const { description } = req.body;

  if (!description) return res.status(400).json({ 'message': 'O campo "description" é obrigatório' });

  if (!description.createdAt) return res.status(400).json({ 'message': 'O campo "createdAt" é obrigatório' });

  if (!description.rating) return res.status(400).json({ 'message': 'O campo "rating" é obrigatório' });

  if (!description.difficulty) return res.status(400).json({ 'message': 'O campo "difficulty" é obrigatório' });

  next();
};

const validateCreatedAt = (req, res, next) => {
  const { createdAt } = req.body.description;

  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

  if (!dateRegex.test(createdAt)) return res.status(400).json({ 'message': "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });

  next();
}

const validateRating = (req, res, next) => {
  const { rating } = req.body.description;

  if (rating < 1 || rating > 5) return res.status(400).json({ 'message': 'O campo "rating" deve ser um inteiro de 1 à 5' });

  next();
};

const validateDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;
  const difficulties = ['Fácil', 'Médio', 'Difícil'];
  if (!difficulties.includes(difficulty)) return res.status(400).json({ 'message': 'O campo "difficulty" deve ser um desses: "Fácil", "Médio", "Difícil"' });

  next();
};

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ 'message': 'Token não encontrado' });

  const users = await fs.readFile(path.resolve(__dirname, './../users.json'), 'utf-8');
  const usersJson = JSON.parse(users);
  const authUser = usersJson.users.find((user) => user.token === authorization);
  if (authorization.length !== 16) return res.status(401).json({ 'message': 'Token inválido' });
  if (!authUser) return res.status(401).json({ 'message': 'Token inexistente' });

  next();

}
module.exports = {
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  authMiddleware,
}