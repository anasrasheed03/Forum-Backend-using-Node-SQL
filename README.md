# Getting started

Make sure you have the node cli installed globally. 

We use npm the default package manager of NodeJs & install the dependencies with `npm install`.

update .env file for database if needed according to your setup.

Run `npm start` for a dev server. Navigate to `http://localhost:8080/`. 


# For DB Setup
use these below queries:
Create Schema query: 
CREATE SCHEMA `forum`;

post table query:
CREATE TABLE `forum`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `body` TEXT NOT NULL,
  `createdAt` DATE NOT NULL,
  `createdBy` VARCHAR(255) NOT NULL,
  `modifiedAt` DATE NULL,
  `activeInd` TINYINT NOT NULL,
  PRIMARY KEY (`id`));

user table query:
CREATE TABLE `forum`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `createdAt` DATE NOT NULL,
  PRIMARY KEY (`id`));

comments table query:
CREATE TABLE `forum`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `comment` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `createdBy` VARCHAR(255) NOT NULL,
  `activeInd` TINYINT NOT NULL,
  `modifiedAt` DATE NULL,
  `postId` INT NOT NULL,
  PRIMARY KEY (`id`));



likes table query:
CREATE TABLE forum.`likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int NOT NULL,
  `createdBy` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `activeInd` tinyint NOT NULL,
  `modifiedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`));


Foreign key contrain/FK Relation between Post and Comments
ALTER TABLE forum.comments ADD CONSTRAINT `FK_comments_postid` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`);

Foreign key contrain/FK Relation between Post and Likes
ALTER TABLE forum.likes ADD CONSTRAINT `FK_likes_postid` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`);

Foreign key contrain/FK Relation between Post and Users
ALTER TABLE forum.posts ADD CONSTRAINT `FK_posts_username` FOREIGN KEY (`createdBy`) REFERENCES `users` (`username`);

Foreign key contrain/FK Relation between Likes and Users
ALTER TABLE forum.likes ADD CONSTRAINT `FK_likes_username` FOREIGN KEY (`createdBy`) REFERENCES `users` (`username`);

Foreign key contrain/FK Relation between Comments and Users
ALTER TABLE forum.comments ADD CONSTRAINT `FK_comments_username` FOREIGN KEY (`createdBy`) REFERENCES `users` (`username`);