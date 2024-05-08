const TimeRecord = require('../models/TimeRecord');

exports.addTimeRecord = async (req, res) => {
  try {
    const { userId, timeIn, timeOut } = req.body;
    const timeRecord = new TimeRecord({ userId, timeIn, timeOut });
    await timeRecord.save();
    res.status(201).json({ message: 'Înregistrare de timp adăugată cu succes!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTimeRecordsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const timeRecords = await TimeRecord.find({ userId });
    res.json(timeRecords);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
