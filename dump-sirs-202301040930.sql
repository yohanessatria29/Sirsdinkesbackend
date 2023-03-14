-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (arm64)
--
-- Host: localhost    Database: sirs
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `jenis_pelayanan`
--

DROP TABLE IF EXISTS `jenis_pelayanan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jenis_pelayanan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rl_id` int NOT NULL,
  `nama` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jenis_pelayanan_FK` (`rl_id`),
  CONSTRAINT `jenis_pelayanan_FK` FOREIGN KEY (`rl_id`) REFERENCES `rl` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jenis_pelayanan`
--

LOCK TABLES `jenis_pelayanan` WRITE;
/*!40000 ALTER TABLE `jenis_pelayanan` DISABLE KEYS */;
INSERT INTO `jenis_pelayanan` VALUES (1,1,'Penyakit Dalam'),(2,1,'Kesehatan Anak'),(3,1,'Obstetri'),(4,1,'Ginekologi'),(5,1,'Bedah'),(6,1,'Bedah Ortopedi'),(7,1,'Bedah Saraf'),(8,1,'Luka Bakar'),(9,1,'Saraf'),(10,1,'Jiwa');
/*!40000 ALTER TABLE `jenis_pelayanan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rl`
--

DROP TABLE IF EXISTS `rl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rl`
--

LOCK TABLES `rl` WRITE;
/*!40000 ALTER TABLE `rl` DISABLE KEYS */;
INSERT INTO `rl` VALUES (1,'RL 3.1'),(2,'RL 3.2');
/*!40000 ALTER TABLE `rl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rl_tiga_titik_satu`
--

DROP TABLE IF EXISTS `rl_tiga_titik_satu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rl_tiga_titik_satu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rs_id` varchar(10) NOT NULL,
  `tahun` int NOT NULL,
  `user_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rl_tiga_titik_satu`
--

LOCK TABLES `rl_tiga_titik_satu` WRITE;
/*!40000 ALTER TABLE `rl_tiga_titik_satu` DISABLE KEYS */;
/*!40000 ALTER TABLE `rl_tiga_titik_satu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rl_tiga_titik_satu_detail`
--

DROP TABLE IF EXISTS `rl_tiga_titik_satu_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rl_tiga_titik_satu_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rl_tiga_titik_satu_id` int NOT NULL,
  `jenis_pelayanan_id` int NOT NULL,
  `jumlah_pasien_awal_tahun` int NOT NULL,
  `jumlah_pasien_masuk` int NOT NULL,
  `kurang_dari_48_Jam` int NOT NULL,
  `jumlah_lama_dirawat` int NOT NULL,
  `jumlah_pasien_akhir_tahun` int NOT NULL,
  `jumlah_hari_perawatan` int NOT NULL,
  `kelas_VVIP` int NOT NULL,
  `kelas_VIP` int NOT NULL,
  `kelas_1` int NOT NULL,
  `kelas_2` int NOT NULL,
  `kelas_3` int NOT NULL,
  `kelas_khusus` int NOT NULL,
  `user_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rl_tiga_titik_satu_detail_FK` (`rl_tiga_titik_satu_id`),
  CONSTRAINT `rl_tiga_titik_satu_detail_FK` FOREIGN KEY (`rl_tiga_titik_satu_id`) REFERENCES `rl_tiga_titik_satu` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rl_tiga_titik_satu_detail`
--

LOCK TABLES `rl_tiga_titik_satu_detail` WRITE;
/*!40000 ALTER TABLE `rl_tiga_titik_satu_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `rl_tiga_titik_satu_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `refresh_token` text,
  `rs_id` varchar(10) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (26,'dwip','kotakelektronik@gmail.com','$2b$10$ZRewfGKYtdEK4aVf9eDhy.f0LxZXSi4q24S/U2pXc0bcwb679iFxa',NULL,'3174063','2023-01-02 00:02:05','2023-01-03 15:08:43'),(27,'inay','inay@gmail.com','$2b$10$BJE8dcbbRJRWSa38/TqEWeTidhk.aGux05jJwUOPxP/65F4q9FPmm',NULL,'1','2023-01-02 01:56:25','2023-01-02 09:42:19');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'sirs'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-04  9:30:48
