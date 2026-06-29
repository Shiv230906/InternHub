-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: internhub
-- ------------------------------------------------------
-- Server version	8.0.46

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
-- Table structure for table `internships_internship`
--

DROP TABLE IF EXISTS `internships_internship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `internships_internship` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company_name` varchar(200) NOT NULL,
  `role` varchar(200) NOT NULL,
  `location` varchar(200) NOT NULL,
  `salary` varchar(100) NOT NULL,
  `application_date` date NOT NULL,
  `deadline` date DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `job_link` varchar(200) NOT NULL,
  `notes` longtext NOT NULL,
  `resume_name` varchar(100) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `internships_internship_user_id_cc7640c7_fk_auth_user_id` (`user_id`),
  CONSTRAINT `internships_internship_user_id_cc7640c7_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `internships_internship`
--

LOCK TABLES `internships_internship` WRITE;
/*!40000 ALTER TABLE `internships_internship` DISABLE KEYS */;
INSERT INTO `internships_internship` VALUES (2,'Google','Software Engineer Intern','Chennai','50000','2026-06-28','2026-07-15','Rejected','https://careers.google.com','Applied through Careers page','Resume_v1.pdf','2026-06-28 04:57:02.156256','2026-06-29 05:22:56.331678',1),(3,'Hexaware','Fsd','Chennai','34000','2026-06-28','2026-07-28','Applied','https://hexaware.com/','applied','Resume.pdf','2026-06-28 05:14:58.451924','2026-06-28 05:41:16.267940',1),(6,'Google','Software Engineer Intern','Chennai','50000','2026-05-29','2026-06-29','Interview','https://www.google.com/about/careers/applications/jobs/results','Got selected at 1st round','resume.pdf','2026-06-29 04:47:24.773495','2026-06-29 04:47:24.773509',2),(7,'Microsoft','Full Stack developer','Chennai','75000','2026-05-29','2026-06-29','Selected','https://www.google.com/about/careers/applications/jobs/results','Selected','resume.pdf','2026-06-29 05:22:28.286119','2026-06-29 05:22:28.286152',2);
/*!40000 ALTER TABLE `internships_internship` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-29 21:34:38
