var express = require('express');
var router  = express.Router();

/* GET users listing. */
router.get('/api/users', function(req, res) {
  var users = [{}];
  res.send(JSON.stringify(users));
});

module.exports = router;
