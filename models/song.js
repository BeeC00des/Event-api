const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const SongSchema = new Schema({
  artist: {
    type: String,
    required: [true, 'song data is require'],
  },
  image:{
    type: String,
    required: [true, 'song image url require'],
  },
  title:{
    type: String,
    required: [true, 'song title is required'],
  },
  year:{
    type: String,
    required: [true, 'song year is required'],
  },
});

// Create model for todo
const Song = mongoose.model('song', SongSchema);

module.exports = Song;