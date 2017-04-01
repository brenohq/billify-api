let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var BillSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  expiresIn: {
    type: Date,
    required: true
  },
  description: {
    type: String
  },
  sharedWith: []
});

BillSchema.index({ name: 1, expiresIn: 1 }, { unique: true });

BillSchema.pre('save', function(next) {
  return next();
});

module.exports = mongoose.model('Bill', BillSchema);