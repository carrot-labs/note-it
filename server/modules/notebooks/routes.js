var express  = require('express');
var router   = express.Router();
var notebook = require('./controller');

var cb = function(err, data, res) {
  if (err) throw err;
  res.json(data);
};

router.get('/', function(req, res) {
  notebook.retrieve(req, res, cb);
});

router.get('/:id', function(req, res, cb) {
  notebook.findOne(req, res, cb);
});

router.post('/', function(req, res) {
  notebook.create(req, res, cb);
});

router.put('/:id', function(req, res) {
  notebook.update(req, res, cb);
});

router.delete('/:id', function(req, res) {
  notebook.delete(req, res, cb);
});