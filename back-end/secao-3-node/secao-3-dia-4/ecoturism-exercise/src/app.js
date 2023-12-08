const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { validateName, validatePrice, validateDescription, validateCreatedAt, validateRating, validateDifficulty, authMiddleware } = require('./middlewares/activities');
const generateToken = require('./utils/crypto');
const { validateSignup } = require('./middlewares/signup');
require('express-async-errors');

const app = express();

app.use(express.json());

app.post('/activities', authMiddleware, validateName, validatePrice, validateDescription, validateCreatedAt, validateRating, validateDifficulty, async (req, res) => {
  const { name, price, description } = req.body;

  let activities = await fs.readFile(path.resolve(__dirname, './activities.json'), 'utf-8');
  activities = JSON.parse(activities);
  const activity = { id: activities.nextId, name, price, description };
  activities.nextId++;
  activities.activities.push(activity);
  await fs.writeFile(path.resolve(__dirname, './activities.json'), JSON.stringify(activities, null, 4));
  res.status(201).json({ 'message': 'Atividade cadastrada com sucesso!' });
});

app.get('/activities', async (req, res) => {
  let activities = await fs.readFile(path.resolve(__dirname, './activities.json'), 'utf-8');
  activities = JSON.parse(activities);
  res.status(200).json(activities.activities);
});



app.post('/signup', validateSignup, async (req, res) => {
  const newToken = generateToken();
  const users = await fs.readFile(path.resolve(__dirname, './users.json'), 'utf-8');
  const usersJson = JSON.parse(users);
  const { email, password, firstName, phone } = req.body;

  const user = { id: usersJson.nextId, email, password, firstName, phone, token: newToken };
  usersJson.nextId++;
  usersJson.users.push(user);
  await fs.writeFile(path.resolve(__dirname, './users.json'), JSON.stringify(usersJson, null, 4));
  res.status(200).json({ 'token': newToken });
})

module.exports =
{
  app,
}