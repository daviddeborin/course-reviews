var {Subject, Course} = require('../index');


var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
    res.json({message : "subject", name : "hi"});
    Subject.create({ name : "CS", courses : []}).then(cs => {
      console.log("CS auto gen id", cs.id);
    });
  });

router.post('/', function(req, res) {
  Subject.create({ name : "CS", courses : []}).then(cs => {
    console.log("CS auto gen id", cs.id);
  });

  res.send("hi");
});

module.exports = router;