

CREATE DATABASE chat;

USE chat;



CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT, username VARCHAR(25), PRIMARY KEY(user_id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  message_id INT NOT NULL AUTO_INCREMENT, user_id INT NOT NULL, roomname TEXT, message_text TEXT, PRIMARY KEY(message_id), FOREIGN KEY(user_id) REFERENCES users(user_id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

