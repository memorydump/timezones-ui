var express = require('express');
var router  = express.Router();

router.get('/*', function(req, res) {
  res.sendfile('./public/layouts/main.html');
});

module.exports = router;
