const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = new User({ email, password, role });
    await user.save();
    res.status(201).json({ message: 'Utilizator înregistrat cu succes!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  // Implementează logica de autentificare aici
};