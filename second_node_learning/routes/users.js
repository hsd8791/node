// var express = require('express');
// var router = express.Router();

// router.get('/:name', function(req, res) {
//   res.send('hello, ' + req.params.name);
// });

// module.exports = router;



var express = require('express');
var router = express.Router();

router.get('/xxx/:race/:hobby/?', function(req, res) {
  res.render('users', {
  	race:req.params.race,
    name: req.query.name,
    age: req.query.age,
    hobby:req.params.hobby
  });
});

module.exports = router;