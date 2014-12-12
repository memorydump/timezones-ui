'use strict';

var db               = require('../config/mongo');
var mongoose         = require('mongoose');
var bcrypt           = require('bcrypt');
var SALT_WORK_FACTOR = 10;

// User schema
var User = new db.Schema({
  fullName : { type: String, required: true },
  email    : { type: String, required: true, unique: true, index : true },
  password : { type: String, required: true },
  created  : { type: Date,   default: Date.now },
  token    : String
});

// Bcrypt middleware on UserSchema
User.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) { return next(); }

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

//Password verification
User.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) { return cb(err); }
    cb(isMatch);
  });
};

// Export Models
exports.userModel  = mongoose.model('User',  User);
