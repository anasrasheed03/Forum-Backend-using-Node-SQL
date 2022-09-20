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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'testemail@test.com','password1234','Test User','testPostman','2022-09-13'),(2,'testemail1@test.com','password1234','Test User','testPostman1','2022-09-14'),(3,'testemail2@test.com','password1234','Test User','testPostman2','2022-09-14'),(4,'testemail1@test.com','password1234','Test User','testPostman1a','2022-09-14'),(5,'testemail2@test.com','password1234','Test User','testPostman3','2022-09-14'),(6,'testemail5@test.com','password1234','Test User','testPostman4','2022-09-14'),(7,'testemail6@test.com','$2a$08$WFDiK.NDiRxXm8dH1ATQdurP1D5pSPiJ94tHkTz4du6uto.iQauhW','Test User','testPostman6','2022-09-14'),(8,'anas.test1@testemail.com','$2a$08$B2246aIPEKFDc.vCa6Pnue8CXeO5uo1nGVLpH5wB.wYHsBQ/1hmU2','Anas ur Rasheed','anasTest1','2022-09-15'),(9,'crypto.0333@gmail.com','$2a$08$luMZlvHI8ABBK2ptdtxiOezKxfnvdflJrmdcvW9.wi.w2ehq4fGXq','Anas Test','crypto033','2022-09-15'),(10,'abcuser@hotmail.com','$2a$08$CdrlN/HX/4K9bqivkKKAxOGFDQ5DUjMr0ZYgSSh048ng4UEo/aso2','undefined','testabc1','2022-09-15'),(11,'anastestabc@test.com','$2a$08$PiIFOhjsjJG.ABzjGix/9uubw72JHNplc4AjX074Ve.hXl2JFMzGq','undefined','testinguser','2022-09-15');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
