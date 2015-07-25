CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  username varchar(20) NOT NULL PRIMARY KEY
);

CREATE TABLE messages (
  /* Describe your table here.*/
  /* INT NOT NULL PRIMARY KEY AUTO_INCREMENT */
  -- FOREIGN KEY REFERENCES Persons(P_Id)
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username varchar(20) NOT NULL,
  roomname varchar(20),
  message varchar(140),
  FOREIGN KEY (username) REFERENCES users(username)
);



-- select * where roomname = 'lobby';
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

