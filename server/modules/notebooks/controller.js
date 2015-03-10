var Notebook = require('./model');

module.exports = {

  create: function(req, res, cb) {
    var notebook = new Notebook(req.body);

    notebook.save(function(err, data) {
      cb(err, data, res);
    });
  },

  retrieve: function(req, res, cb) {
    Notebook.find({}, function(err, data) {
      cb(err, data, res);
    });
  },

  findOne: function(req, res, cb) {
    var id = req.params.id;
    var query = {_id: id};

    Notebook.findOne(query, function(err, data) {
      cb(err, data, res);
    });
  },

  update: function(req, res, cb) {
    var id = req.params.id;
    var query = {_id: id};
    var mod = req.body;

    delete mod._id;

    Notebook.update(query, mod, function(err, data) {
      cb(err, data, res);
    });
  },

  delete: function(req, res, cb) {
    var id = req.params.id;
    var query = {_id: id};

    Notebook.remove(query, function(err, data) {
      cb(err, data, res);
    });
  }

};
