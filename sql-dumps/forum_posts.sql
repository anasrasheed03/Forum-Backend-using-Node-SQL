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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `createdBy` varchar(255) NOT NULL,
  `modifiedAt` datetime DEFAULT NULL,
  `activeInd` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_posts_username` (`createdBy`),
  CONSTRAINT `FK_posts_username` FOREIGN KEY (`createdBy`) REFERENCES `users` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'test post 1','this is testing post','2022-09-11 00:00:00','testPostman1',NULL,1),(2,'this is test title from postman 2','this is test body from postman 2','2022-09-13 00:00:00','testPostman1',NULL,1),(3,'test updated post','test updated post body','2022-09-14 00:00:00','testPostman2','2022-09-14 00:00:00',1),(4,'Test Portal Title Updated','Test Portal description blah blah balh Updated','2022-09-18 00:00:00','testPostman6','2022-09-18 00:00:00',0),(5,'Test Post','Test&#160; body with using rich text editor.&#160;<div><br></div><div>Thanks</div>','2022-09-18 00:00:00','testPostman6',NULL,1),(6,'Test Post for Socket','This is test body for testing with socket .io hope this will work fine.','2022-09-19 00:00:00','testPostman1',NULL,1),(7,'Testing Cases','Test adsasdasasdasd','2022-09-19 00:00:00','testPostman1',NULL,1),(8,'Testing Issue Case','This is aa test issue case.','2022-09-19 00:00:00','testPostman1',NULL,1),(9,'Test Updated Post final','<div>abc&#160;</div>this isi ssdasda asdasjasd ask jajkasksjadjskajkdja d<div>kaksjdkasjad</div><div>kakdjaskdsaajsdkadskjads</div><div>kasjkdsajdskjads</div><div><br></div><div>kjadjaskdjak</div><div><br></div><div>Thanks</div>','2022-09-19 00:00:00','testPostman6','2022-09-19 00:00:00',0),(10,'abc testv 12b','tesata tadaf','2022-09-19 00:00:00','testPostman6','2022-09-19 00:00:00',1),(11,'Test More','Hello Test.','2022-09-19 00:00:00','testPostman6',NULL,1);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-20 12:06:39
