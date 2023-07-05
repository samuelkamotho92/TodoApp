-- create a database called todo
CREATE DATABASE todo -- use the todo database
USE todo -- drop the users table if it exists
DROP TABLE IF EXISTS users;
-- drop the todoData table if it exists
DROP TABLE IF EXISTS todoData;
-- create the users table
CREATE TABLE users (
    id INT IDENTITY (1, 1) PRIMARY KEY,
    username VARCHAR (255) NOT NULL,
    password VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
);
-- create the todoData table
CREATE TABLE todoData (
    id INT IDENTITY (1, 1) PRIMARY KEY,
    description VARCHAR (255) NOT NULL,
);
-- insert some data into the users table
INSERT INTO todoData(description)
VALUES('walk in the park')
INSERT INTO todoData(description)
VALUES('swim on sunday')
INSERT INTO todoData(description)
VALUES('go to the gym')
INSERT INTO todoData(description)
VALUES('rest on monday') -- insert some data into the users table
INSERT INTO users(username, email)
VALUES('johndoe', 'johndoe@gmail.com')
INSERT INTO users(username, email)
VALUES('janedoe', 'janedoe@gmail.com')
INSERT INTO users(username, email)
VALUES('kevin', 'kevin@gmail.com')