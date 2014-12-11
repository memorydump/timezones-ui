'use strict';

var db = require('../config/mongo');
var mongoose         = require('mongoose');

var Zones = new db.Schema({
  name      : { type: String, required: true },
  city      : { type: String, required: true },
  utcOffSet : { type: Number,   required: true },
  userId    : { type: db.Schema.ObjectId, ref: 'User', required: true},
  created   : { type: Date, required: true}
});

Zones.pre('save', function(next) {
  this.created = this.created ? this.created : new Date();
  next();
});

exports.zonesModel = mongoose.model('Zones', Zones);
