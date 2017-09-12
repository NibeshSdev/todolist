'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required : true
  },
  Created_date : {
    type: Date,
    defaulr: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing','completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Task', TaskSchema);