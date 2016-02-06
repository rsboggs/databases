var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (resBody, callback) {
      var message = '"' + resBody.message + '"';
      var roomname = '"' + resBody.roomname + '"';
      var username = '"' + resBody.username + '"';
      db.query('INSERT INTO messages (message_text, roomname, user_id) VALUES(' + message + ',' + roomname +',(SELECT user_id FROM users WHERE username=' + username + '))', callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (resBody, callback) {
      var username = "'" + resBody.username + "'";
      db.query('INSERT INTO users (username) VALUES(' + username + ')', callback);
    }
  }
};

