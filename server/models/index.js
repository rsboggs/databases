var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT messages.message_text, messages.roomname, users.username FROM messages inner join users ON (messages.user_id=users.user_id)', function(error, rows) { 
        if (error) {
          callback(error);
        } else {
          callback(rows);
        }
      });
    }, // a function which produces all the messages
    post: function (resBody, callback) {
      var message = '"' + resBody.message + '"';
      var roomname = '"' + resBody.roomname + '"';
      var username = '"' + resBody.username + '"';
      db.query('INSERT INTO messages (message_text, roomname, user_id) VALUES(' + message + ',' + roomname +',(SELECT user_id FROM users WHERE username=' + username + '))', function(error)  {
        if (error) {
          callback(error);
        } else {
          callback();
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT users.username FROM users', function(error, rows) { 
        if (error) {
          callback(error);
        } else {
          callback(rows);
        }
      });
    },
    post: function (resBody, callback) {
      var username = '"' + resBody.username + '"';
      db.query('INSERT INTO users (username) VALUES(' + username + ')', function(error)  {
        if (error) {
          callback(error);
        } else {
          callback();
        }
      });
    }
  }
};

