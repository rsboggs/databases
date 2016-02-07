var mysql = require('mysql');
var Sequelize = require('sequelize');

var db = new Sequelize('chat', 'root', 'superbowl');

var users = db.define('users', {
  user_id : {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
  username: {type: Sequelize.STRING, unique: true}
});

var messages = db.define('messages', {
  message_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
  user_id: {type: Sequelize.INTEGER, allowNull: false}
});

users.hasMany(messages);
messages.belongsTo(users);

users.sync();
messages.sync();

exports.users = users;
exports.messages = messages;

  // connection.connect();
  // module.exports = connection;
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


