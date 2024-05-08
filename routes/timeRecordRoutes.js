const express = require('express');
const router = express.Router();
const TimeRecord = require('../models/TimeRecord');

// Ruta pentru adăugarea unei noi înregistrări de timp
router.post('/', async (req, res) => {
  try {
    const { userId, timeIn, timeOut } = req.body;
    const timeRecord = new TimeRecord({ userId, timeIn, timeOut });
    await timeRecord.save();
    res.status(201).json({ message: 'Înregistrare de timp adăugată cu succes!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Ruta pentru obținerea înregistrărilor de timp pentru un anumit utilizator
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const timeRecords = await TimeRecord.find({ userId });
    res.json(timeRecords);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
