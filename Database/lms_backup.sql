-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: lms
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books` (
  `book_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `isbn` varchar(25) DEFAULT NULL,
  `pages` int(11) DEFAULT NULL CHECK (`pages` > 0),
  `available_copies` int(11) NOT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `publication_year` smallint(6) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`book_id`),
  UNIQUE KEY `isbn` (`isbn`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'The Great Gatsby','F. Scott Fitzgerald','978-0-7432-7356-5',180,3,'Charles Scribner\'s Sons',1925,'The Great Gatsby is a 1925 tragedy novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway\'s interactions with Jay Gatsby, a mysterious millionaire obsessed with reuniting with his former lover, Daisy Buchanan.','Classic'),(2,'1984','George Orwell','978-0451524935',320,4,'Secker & Warburg',1949,'Nineteen Eighty-Four is a dystopian novel by the English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell\'s ninth and final completed book. Thematically, it centres on totalitarianism, mass surveillance and repressive regimentation of people and behaviours.','Dystopian'),(3,'To Kill a Mockingbird','Harper Lee','978-0446310789',281,4,'J.B. Lippincott & Co.',1960,'Set in 1930s Maycomb, Alabama, the story follows young Scout Finch as her lawyer father, Atticus, defends Tom Robinson, a Black man falsely accused of raping a white woman, exposing deep-seated racial prejudice despite Atticus\'s strong defense','Classic'),(4,'Pride and Prejudice','Jane Austen',NULL,259,3,'T. Egerton, Whitehall',1813,'Pride and Prejudice, which was published by Jane Austen in 1813, follows the burgeoning relationship between Elizabeth Bennet, the daughter of a country gentleman, and the wealthy, reserved Fitzwilliam Darcy. They must overcome their central flaws of pride and prejudice in order to fall in love and marry.','Romance'),(5,'The Catcher in the Rye','J.D. Salinger','978-0316769488',234,7,'Little, Brown and Company',1951,'The Catcher in the Rye is about 16-year-old Holden Caulfield, a disillusioned prep school student who, after being expelled, wanders through New York City for a few days, railing against the \"phoniness\" of the adult world while struggling with grief, loneliness, and a desire to protect childhood innocence','Classic'),(6,'Harry Potter and the Philosopher\'s Stone','J. K. Rowling','978-0747532699',223,10,'Bloomsbury Publishing',1997,'Harry Potter and the Philosopher\'s Stone follows orphaned Harry Potter discovering he\'s a wizard, attending Hogwarts, making friends Ron and Hermione, and learning about the evil Lord Voldemort who murdered his parents.','Fantasy'),(7,'The Hobbit','J. R. R. Tolkien',NULL,310,8,'George Allen & Unwin',1937,'The Hobbit follows home-loving hobbit Bilbo Baggins, who is recruited by Gandalf the wizard and thirteen dwarves, led by Thorin Oakenshield, to reclaim their stolen treasure from the fearsome dragon Smaug at the Lonely Mountain','Fantasy'),(8,'A Brave New World','Aldous Huxley','978-0701107901',311,4,'Chatto & Windus',1932,'Brave New World is a dystopian novel by Aldous Huxley set in a futuristic World State where science, technology, and conditioning create a stable, class-based society by eliminating individuality, strong emotions, and personal relationships for engineered happiness through promiscuity, consumerism, and the drug soma','Dystopian');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `borrowing_transaction`
--

DROP TABLE IF EXISTS `borrowing_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `borrowing_transaction` (
  `transaction_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `borrow_date` date NOT NULL,
  `due_date` date NOT NULL,
  `return_date` date DEFAULT NULL,
  `staff_id` int(11) NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`transaction_id`),
  KEY `student_id` (`student_id`),
  KEY `book_id` (`book_id`),
  KEY `staff_id` (`staff_id`),
  CONSTRAINT `borrowing_transaction_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  CONSTRAINT `borrowing_transaction_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `books` (`book_ID`),
  CONSTRAINT `staff_id` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`staff_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `borrowing_transaction`
--

LOCK TABLES `borrowing_transaction` WRITE;
/*!40000 ALTER TABLE `borrowing_transaction` DISABLE KEYS */;
INSERT INTO `borrowing_transaction` VALUES (1,1,1,'2025-12-17','2025-12-31','2025-12-17',1,'returned'),(3,2,2,'2025-12-17','2025-12-12','2025-12-17',2,'late');
/*!40000 ALTER TABLE `borrowing_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `penalty`
--

DROP TABLE IF EXISTS `penalty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `penalty` (
  `penalty_id` int(11) NOT NULL AUTO_INCREMENT,
  `transaction_id` int(11) NOT NULL,
  `staff_id` int(11) DEFAULT NULL,
  `amount` decimal(8,2) NOT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `date_issued` date NOT NULL,
  `date_paid` date DEFAULT NULL,
  `student_id` int(11) NOT NULL,
  PRIMARY KEY (`penalty_id`),
  KEY `transaction_id` (`transaction_id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `penalty_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `borrowing_transaction` (`transaction_id`),
  CONSTRAINT `student_id` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `penalty`
--

LOCK TABLES `penalty` WRITE;
/*!40000 ALTER TABLE `penalty` DISABLE KEYS */;
INSERT INTO `penalty` VALUES (2,3,1,60.00,'Corrected staff after audit','2025-12-17','2025-12-17',2);
/*!40000 ALTER TABLE `penalty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `staff` (
  `staff_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(20) NOT NULL,
  `position` varchar(255) NOT NULL,
  `date_hired` date DEFAULT NULL,
  `role` enum('staff','admin') DEFAULT 'staff',
  PRIMARY KEY (`staff_id`),
  UNIQUE KEY `phone_number` (`phone_number`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (1,'Evelyn','Foster','evelynfoster@gmail.com','09445678919','Librarian','2015-06-24','staff'),(2,'Eleanor','Vance','eleanorvance@gmail.com','09992345672','Head Librarian','2013-09-12','admin'),(3,'Jasper','Finch','jasperfinch@gmail.com','09876543211','Assistant Librarian','2016-11-16','staff'),(4,'Willow','Hayes','willowhayes@gmail.com','09876656767','IT Staff','2012-07-17','admin'),(5,'Caleb','Thorne','calebthorne@gmail.com','09205563456','IT Staff','2013-09-12','admin'),(6,'Seraphina','Bell','seraphinabell@gmail.com','09876665675','Librarian','2015-02-09','staff'),(7,'Owen','Sterling','owensterling@gmail.com','09888765545','Assistant Librarian','2020-03-18','staff'),(8,'Aurora','Skye','auroraskye','09776897765','Librarian','2017-12-05','staff');
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `students` (
  `student_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `lrn` varchar(12) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `favorite_genre` varchar(255) DEFAULT NULL,
  `monthly_reading_goal` int(11) DEFAULT NULL CHECK (`monthly_reading_goal` >= 0),
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `lrn` (`lrn`),
  UNIQUE KEY `phone_number` (`phone_number`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'John Benedict','Iledan','2024300386','09204744820','jbpiledan@pcu.edu.ph','Fantasy',5,'2024-04-10 14:42:34'),(2,'Justin Lloyd','Sabdula','2023456098','09874567236','justinsabdula@pcu.edu.ph','Romance',7,'2023-06-16 14:42:34'),(3,'Nathan','Perez','2022348912','09451193340','nathan.perez@pcu.edu.ph','Horror',5,'2023-01-18 16:47:25'),(4,'Karl Chrirstian','Legaspi','2023445670','09113480912','karllegaspi@pcu.edu.ph','Classic',4,'2024-08-14 09:47:25'),(5,'Neil Christian','Grospe','2022407897','09230997856','neilgrospe@pcu.edu.ph','Fantasy',3,'2023-07-11 10:55:43'),(6,'Gen Benedict','Casio','2023567890','09236661212','benedictcasio@pcu.edu.ph','Classic',2,'2023-08-16 14:57:37'),(7,'Ynigo','Patron','2023555123','09984741190','ynigopatron@pcu.edu.ph','Horror',3,'2023-03-07 14:57:37'),(8,'Matthew','Abenis','2022556786','09234567782','matthewabenis@pcu.edu.ph','Dystopian',4,'2022-08-17 13:00:00');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-17 20:18:40
