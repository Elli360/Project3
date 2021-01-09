DROP DATABASE IF EXISTS toolshed;
CREATE DATABASE tooldshed;
USE tooldshed


INSERT INTO tools (`name`, `description`)
VALUES('hammer','this is a hammer'),('nail','this is a nail')

INSERT INTO user (`name`, `email`)
VALUES('troy','troy.lochner@gmail.com')