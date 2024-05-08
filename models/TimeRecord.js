const mongoose = require('mongoose');

const timeRecordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timeIn: { type: Date, required: true },
  timeOut: { type: Date }
});

const TimeRecord = mongoose.model('TimeRecord', timeRecordSchema);

module.exports = TimeRecord;