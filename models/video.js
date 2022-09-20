const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const VideoSchema = new Schema({
  action: {
    type: String,
    required: [true, 'song data is require'],
  },
});

// Create model for todo
const Video = mongoose.model('video', SongSchema);

module.exports = Video;