'use strict';

var db = require('../models/zones-model');

exports.get = function(req, res) {
  console.log(req.user);
  if (!req.user) {
    return res.status(401).end();
  }

  var query = db.zonesModel.find({userId: req.user.id});
  query.sort([['created', 'descending']]);

  query.exec(function(err, results) {
    if (err) {
      console.log(err);
      return res.status(400).end();
    }

    return res.status(200).json(results);
  });
};

exports.create = function (req, res) {
  if (!req.user) {
    return res.status(401).end();
  }

  req.body.userId = req.user.id;

  var zone = new db.zonesModel(req.body);
  zone.save(function (err) {
    if (err) {
      console.error(err);
      return res.status(400).end();
    }
    return res.status(200).end();
  });
};

exports.update = function (req, res) {
  if (!req.user) {
    return res.status(401).end();
  }
  var id = req.body._id;

  delete req.body._id;
  delete req.body.created;

  console.log('updateing .. ' + id + 'body:');
  console.dir(req.body);

  db.zonesModel.update({_id : id, userId: req.user.id}, req.body, function (err) {
    if (err) {
      console.error(err);
      return res.status(400).end();
    }
    return res.status(200).end();
  });
};

exports.delete = function (req, res) {
  if (!req.user) {
    return res.status(401).end();
  }
  console.log(req);
  db.zonesModel.remove({ _id: req.params.id}, function (err) {
    if (err) {
      console.error(err);
      return res.status(400).end();
    }
    return res.status(200).end();
  });
};

