var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NotebookSchema = new Schema({
  id: { type: Number, min: 0 },
  name: { type: String, default: '' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notebook', NotebookSchema);