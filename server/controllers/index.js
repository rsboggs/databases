var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(rows){
        res.send(rows);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
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
      models.users.get(function(rows) {
        res.send(rows);
      });
    },
    post: function (req, res) {
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

