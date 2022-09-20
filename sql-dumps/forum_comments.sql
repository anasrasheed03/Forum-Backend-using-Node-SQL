-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: forum
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` text NOT NULL,
  `createdAt` date NOT NULL,
  `createdBy` varchar(255) NOT NULL,
  `activeInd` tinyint NOT NULL,
  `modifiedAt` date DEFAULT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_comments_postid` (`postId`),
  KEY `FK_comments_username` (`createdBy`),
  CONSTRAINT `FK_comments_postid` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`),
  CONSTRAINT `FK_comments_username` FOREIGN KEY (`createdBy`) REFERENCES `users` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'this is a test updated comment from postman','2022-09-13','testPostman',0,'2022-09-13',1),(2,'test comment','2022-09-14','testPostman',1,NULL,1),(3,'test comment','2022-09-14','testPostman',1,NULL,1),(4,'test comment1','2022-09-14','testPostman',1,NULL,1),(5,'Test Comment Post from portal.','2022-09-18','testPostman1',1,NULL,1),(6,'Testing new comment from portal.','2022-09-18','testPostman1',1,NULL,1),(7,'test comment','2022-09-18','testPostman6',0,'2022-09-18',1),(8,'test1 abcd Edit','2022-09-18','testPostman6',1,'2022-09-18',1),(9,'undefined','2022-09-18','testPostman1',1,NULL,1),(10,'test','2022-09-19','testPostman6',0,'2022-09-19',6),(11,'tesst123','2022-09-19','testPostman6',0,'2022-09-19',6),(12,'test','2022-09-19','testPostman6',1,NULL,6),(13,'test2','2022-09-19','testPostman6',1,NULL,6),(14,'tes12','2022-09-19','testPostman6',1,NULL,1),(15,'test comment','2022-09-19','testPostman6',1,NULL,9),(16,'New test commment 1 abcd123','2022-09-19','testPostman6',1,'2022-09-19',9),(17,'test 1 comment','2022-09-19','testPostman6',1,NULL,5),(18,'test 2 comment','2022-09-19','testPostman6',1,NULL,5),(19,'test 3 comment','2022-09-19','testPostman6',1,NULL,5);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-20 12:06:40
