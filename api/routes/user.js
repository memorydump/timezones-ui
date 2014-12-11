'use strict';

var jwt    = require('jsonwebtoken');
var secret = require('../config/secret');
var db     = require('../models/user-model');

exports.signin = function(req, res) {
  var email    = req.body.email || '';
  var password = req.body.password || '';

  if (email === '' || password === '') {
    return res.status(401).send({errorMsg: 'User doesn\'t exist'});
  }

  db.userModel.findOne({email: email}, function (err, user) {
    if (err) {
      console.log(err);
      return res.send(401);
    }

    if (!user) {
      return res.status(401).send({errorMsg: 'User doesn\'t exist'});
    }

    user.comparePassword(password, function(isMatch) {
      if (!isMatch) {
        console.log('Attempt failed to login with ' + user.email);
        return res.status(401).send({errorMsg: 'Wrong password'});
      }
      var cleanUser = {};
      cleanUser.fullName = user.fullName;
      cleanUser.email    = user.email;
      cleanUser.token    = jwt.sign({id: user._id}, secret.secretToken, { expiresInMinutes: 60 });

      return res.json(cleanUser);
    });

  });
};

exports.logout = function(req, res) {
  if (req.user) {
    //tokenManager.expireToken(req.headers);

    delete req.user;
    return res.send(200);
  }
  else {
    return res.send(401);
  }
};

exports.register = function(req, res) {
  var fullName = req.body.fullName || '';
  var password = req.body.password || '';
  var email    = req.body.email || '';

  //var passwordConfirmation = req.body.passwordConfirmation || '';
  var passwordConfirmation = password;

  if (email === '' || password === '' || password !== passwordConfirmation) {
    return res.send(400);
  }

  var user = new db.userModel();

  user.fullName = fullName;
  user.password = password;
  user.email    = email;

  user.save(function(err) {
    if (err) {
      console.log(err);

      if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(409).send({errorCode: 0, errorMsg: 'This email address is already taken'});
      }

      return res.send(500);
    }

    var cleanUser = {};
    cleanUser.fullName = user.fullName;
    cleanUser.email    = user.email;
    cleanUser.token    = jwt.sign({id: user._id}, secret.secretToken, { expiresInMinutes: 60 });

    return res.json(cleanUser);
  });
};
