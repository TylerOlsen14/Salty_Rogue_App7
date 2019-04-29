const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RecordSchema = new Schema({
  ClientName: {
    type: String,
    required: true
  },
  ClientPhoneNumber: {
    type: Number,
    required: true,
  },
  ClientNotes: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Record = mongoose.model('record', RecordSchema);


