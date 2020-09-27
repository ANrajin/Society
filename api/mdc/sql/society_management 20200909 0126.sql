-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	8.0.12


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema society_management
--

CREATE DATABASE IF NOT EXISTS society_management;
USE society_management;

--
-- Definition of table `company_position`
--

DROP TABLE IF EXISTS `company_position`;
CREATE TABLE `company_position` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `short_name` varchar(45) NOT NULL,
  `long_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `company_position`
--

/*!40000 ALTER TABLE `company_position` DISABLE KEYS */;
INSERT INTO `company_position` (`id`,`short_name`,`long_name`) VALUES 
 (1,'MD','Managing Director'),
 (2,'CEO','Chief Executive Officer'),
 (3,'Manager','Manager'),
 (4,'Receptionist','Receptionist'),
 (5,'Peon','Peon'),
 (6,'Driver','Driver'),
 (7,'Bua','Bua');
/*!40000 ALTER TABLE `company_position` ENABLE KEYS */;


--
-- Definition of table `company_registration`
--

DROP TABLE IF EXISTS `company_registration`;
CREATE TABLE `company_registration` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `company_name` varchar(45) NOT NULL,
  `business_type` varchar(45) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `road` varchar(45) NOT NULL,
  `house` varchar(45) NOT NULL,
  `flat` varchar(45) NOT NULL,
  `total_staff` int(10) unsigned NOT NULL DEFAULT '0',
  `attending_staff` int(10) unsigned NOT NULL DEFAULT '0',
  `remark` text,
  `created_at` datetime DEFAULT NULL,
  `created_by` int(10) unsigned NOT NULL,
  `inactive` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `company_registration`
--

/*!40000 ALTER TABLE `company_registration` DISABLE KEYS */;
/*!40000 ALTER TABLE `company_registration` ENABLE KEYS */;


--
-- Definition of table `company_staff`
--

DROP TABLE IF EXISTS `company_staff`;
CREATE TABLE `company_staff` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `person_name` varchar(45) NOT NULL,
  `position_id` int(10) unsigned NOT NULL,
  `dob` date NOT NULL,
  `gender` tinyint(1) NOT NULL DEFAULT '0',
  `blood_group` varchar(45) DEFAULT NULL,
  `mobile` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `nid` varchar(45) NOT NULL,
  `facebook_id` varchar(45) NOT NULL,
  `company_id` int(10) unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `company_staff`
--

/*!40000 ALTER TABLE `company_staff` DISABLE KEYS */;
/*!40000 ALTER TABLE `company_staff` ENABLE KEYS */;


--
-- Definition of table `resident_family_members`
--

DROP TABLE IF EXISTS `resident_family_members`;
CREATE TABLE `resident_family_members` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `resident_id` int(10) unsigned NOT NULL,
  `relation_id` int(10) unsigned NOT NULL,
  `name` varchar(45) NOT NULL,
  `nid` varchar(45) NOT NULL,
  `mobile` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `dob` date NOT NULL,
  `facebook_id` varchar(45) DEFAULT NULL,
  `blood_group` varchar(45) NOT NULL,
  `profession` varchar(45) NOT NULL,
  `is_contact_person` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `resident_family_members`
--

/*!40000 ALTER TABLE `resident_family_members` DISABLE KEYS */;
INSERT INTO `resident_family_members` (`id`,`resident_id`,`relation_id`,`name`,`nid`,`mobile`,`email`,`gender`,`dob`,`facebook_id`,`blood_group`,`profession`,`is_contact_person`) VALUES 
 (1,1,1,'Mohammad Towhidul Islam','3434345454343','017645356','jahidul@yahoo.com',0,'1980-01-01','facebook.com/jahid23','A+','Banker',1),
 (2,3,1,'Md. Moshiur Rahman','334343445445','024343355','rmoshiur81@gmail.com',0,'1978-01-01','nill','B+','na',1);
/*!40000 ALTER TABLE `resident_family_members` ENABLE KEYS */;


--
-- Definition of table `resident_registration`
--

DROP TABLE IF EXISTS `resident_registration`;
CREATE TABLE `resident_registration` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `mobile` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `nid` varchar(45) NOT NULL,
  `blood_group` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `gender` tinyint(1) NOT NULL DEFAULT '0',
  `road` varchar(45) NOT NULL,
  `house` varchar(45) NOT NULL,
  `flat` varchar(45) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `created_by` int(10) unsigned NOT NULL,
  `inactive` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `resident_registration`
--

/*!40000 ALTER TABLE `resident_registration` DISABLE KEYS */;
INSERT INTO `resident_registration` (`id`,`name`,`mobile`,`email`,`nid`,`blood_group`,`dob`,`gender`,`road`,`house`,`flat`,`status`,`created_at`,`created_by`,`inactive`) VALUES 
 (1,'Zinia','3433335343','towhid@yahoo.com','343434343','A+','1993-01-01',0,'1','12','A',0,'2020-01-09 17:36:58',1,0),
 (2,'Towhid','01715785434','softslab@yahoo.com','32323232','A+','1978-07-16',0,'1','12','A',0,'2020-01-09 18:39:26',1,0),
 (3,'Md. Moshiur Rahman','024343355','rmoshiur81@gmail.com','334343445445','B+','1978-01-01',0,'28','11','B',1,'2020-08-09 19:15:30',1,0);
/*!40000 ALTER TABLE `resident_registration` ENABLE KEYS */;


--
-- Definition of table `resident_relations`
--

DROP TABLE IF EXISTS `resident_relations`;
CREATE TABLE `resident_relations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `resident_relations`
--

/*!40000 ALTER TABLE `resident_relations` DISABLE KEYS */;
INSERT INTO `resident_relations` (`id`,`name`) VALUES 
 (1,'Chief Member'),
 (2,'Spouse'),
 (3,'Father'),
 (4,'Mother'),
 (5,'Son'),
 (6,'Daughter'),
 (7,'Niece'),
 (8,'Nephew'),
 (9,'Service Personnel'),
 (10,'Other');
/*!40000 ALTER TABLE `resident_relations` ENABLE KEYS */;


--
-- Definition of table `user_master`
--

DROP TABLE IF EXISTS `user_master`;
CREATE TABLE `user_master` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  `created_on` datetime NOT NULL,
  `inactive` tinyint(1) NOT NULL DEFAULT '0',
  `full_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_master`
--

/*!40000 ALTER TABLE `user_master` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_master` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
