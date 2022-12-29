const mongoose = require("mongoose");

const SoundSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  data: {
    type: Array,
    required: true,
  },
  name: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("sound", SoundSchema);
