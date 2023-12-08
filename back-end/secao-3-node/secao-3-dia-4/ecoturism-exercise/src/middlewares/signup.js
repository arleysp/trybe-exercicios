const validateSignup = (req, res, next) => {
  const signup = req.body;
  const datas = ['email', 'password', 'firstName', 'phone'];
  if (!datas.every((data) => signup.hasOwnProperty(data))) return res.status(401).json({ 'message': 'Campos ausentes!' });
  next();
}

module.exports = {
  validateSignup,
}