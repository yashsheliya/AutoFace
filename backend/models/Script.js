// backend/models/Script.js
const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
  id: String,
  type: String,
  position: {
    x: Number,
    y: Number,
  },
  data: mongoose.Schema.Types.Mixed,
  formData: {
    videoCountMin: Number,
    videoCountMax: Number,
    watchTimeMin: Number,
    watchTimeMax: Number,
    randomLike1: Boolean,
    randomLike2: Boolean,
  },
});

const edgeSchema = new mongoose.Schema({
  id: String,
  source: String,
  target: String,
  label: String,
  sourceHandle: String,
  targetHandle: String,
});

const scriptSchema = new mongoose.Schema({
  name: { type: String, required: true },
  note: String,
  nodes: [nodeSchema],
  edges: [edgeSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Script', scriptSchema);
