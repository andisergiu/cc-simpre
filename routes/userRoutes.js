const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ruta pentru înregistrarea unui utilizator
router.post('/register', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = new User({ email, password, role });
    await user.save();
    res.status(201).json({ message: 'Utilizator înregistrat cu succes!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Ruta pentru autentificarea unui utilizator
router.post('/login', async (req, res) => {
  // Implementează logica de autentificare aici
});

module.exports = router;