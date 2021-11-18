const mongoose = require('mongoose');

var gridSchema = mongoose.Schema({
  session_game_id: Number,
});

module.exports = mongoose.model('grid', gridSchema);
