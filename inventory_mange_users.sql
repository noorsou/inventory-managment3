SET NAMES utf8 ;
DROP TABLE IF EXISTS `users`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `idUsers` int(11) NOT NULL,
  `UserName` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `Role` varchar(45) NOT NULL,
  PRIMARY KEY (`idUsers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES (1,'Hassen','hassen@gmail.com','hass1234','');
UNLOCK TABLES;


