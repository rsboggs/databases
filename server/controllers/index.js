var models = require('../models');
var db = require ('../db');
module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(rows){
        res.status(200);
        res.send({results: rows});
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log("------------> req body is!", req.body);
    models.messages.post(req.body, function(error) {
      if(error){
          res.send(error);
        } else {
          res.send('All good bro!');
        }
    });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      db.users.findAll()
        .then(function(results) {
          res.json(results);
        });

      models.users.get(function(rows) {
        res.send(rows);
      });
    },
    post: function (req, res) {
      console.log('-----------> req', req.body);
      models.users.post(req.body, function(error) {
        if(error){
          res.send(error);
        } else {
          res.send('All good bro!');
        }
      });      
    }
  }
};

