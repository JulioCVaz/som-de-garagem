-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: somdegaragemdb
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `acessos`
--

DROP TABLE IF EXISTS `acessos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `acessos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `desc_acessos` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acessos`
--

LOCK TABLES `acessos` WRITE;
/*!40000 ALTER TABLE `acessos` DISABLE KEYS */;
INSERT INTO `acessos` VALUES (1,'Ouvinte','2018-11-11 16:20:57','2018-11-11 16:20:57'),(2,'Artista','2018-11-11 16:20:57','2018-11-11 16:20:57'),(3,'Empresa','2018-11-11 16:20:57','2018-11-11 16:20:57'),(4,'Sysadmin','2018-11-11 16:20:57','2018-11-11 16:20:57');
/*!40000 ALTER TABLE `acessos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `album` (
  `id` int(11) NOT NULL,
  `titulo_album` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `desc_album` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `filepath_avatar` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `musicaID` int(11) NOT NULL,
  `artistaID` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  KEY `album_musicaid_foreign` (`musicaID`),
  KEY `album_artistaid_foreign` (`artistaID`),
  CONSTRAINT `album_artistaid_foreign` FOREIGN KEY (`artistaID`) REFERENCES `artistas` (`id`),
  CONSTRAINT `album_musicaid_foreign` FOREIGN KEY (`musicaID`) REFERENCES `musica` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
INSERT INTO `album` VALUES (1,'Black music','Album anos 2000','/path/to/file',2,2,'2018-10-14 19:57:56','2018-10-14 19:57:56',NULL),(2,'Eletronic music','This is eletronic','/path/to/file',1,1,'2018-10-14 21:04:58','2018-10-14 21:04:58',NULL),(3,'Olá Terráqueos','Album inicial da banda decaídos de plutão','./img/decaidos_logo.jpeg',3,3,'2018-10-20 03:20:23','2018-10-20 03:20:23',NULL);
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artistas`
--

DROP TABLE IF EXISTS `artistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artistas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomeartista` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `desc_artista` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `filepath` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `albumID` int(11) NOT NULL,
  `musicasID` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artistas`
--

LOCK TABLES `artistas` WRITE;
/*!40000 ALTER TABLE `artistas` DISABLE KEYS */;
INSERT INTO `artistas` VALUES (1,'Malu fernandes','artista renomada','/path/to/archive',1,1,NULL,NULL,NULL),(2,'Júlio gaiteiro','Artista renomado','path/to/file',2,2,'2018-10-14 19:48:50','2018-10-14 19:48:50',NULL),(3,'Decaídos de Plutão','Banda nascida da vontade de mudar a música com seu som','./img/decaidos.jpeg',3,3,'2018-10-20 03:15:41','2018-10-20 03:15:41',NULL);
/*!40000 ALTER TABLE `artistas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artistas_has_generos`
--

DROP TABLE IF EXISTS `artistas_has_generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artistas_has_generos` (
  `artistaid` int(11) NOT NULL,
  `generoid` int(11) NOT NULL,
  KEY `artistaid` (`artistaid`),
  KEY `generoid` (`generoid`),
  CONSTRAINT `artistas_has_generos_ibfk_1` FOREIGN KEY (`artistaid`) REFERENCES `artistas` (`id`),
  CONSTRAINT `artistas_has_generos_ibfk_2` FOREIGN KEY (`generoid`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artistas_has_generos`
--

LOCK TABLES `artistas_has_generos` WRITE;
/*!40000 ALTER TABLE `artistas_has_generos` DISABLE KEYS */;
/*!40000 ALTER TABLE `artistas_has_generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `generos`
--

DROP TABLE IF EXISTS `generos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `generos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `desc_genero` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generos`
--

LOCK TABLES `generos` WRITE;
/*!40000 ALTER TABLE `generos` DISABLE KEYS */;
INSERT INTO `generos` VALUES (1,'Axé'),(2,'Blues'),(3,'Country'),(4,'Eletrônica'),(5,'Forró'),(6,'Funk'),(7,'Gospel'),(8,'Hip Hop'),(9,'Jazz'),(10,'MPB'),(11,'Música clássica'),(12,'Pagode'),(13,'Pop'),(14,'Rap'),(15,'Reggae'),(16,'Rock'),(17,'Samba'),(18,'Sertanejo');
/*!40000 ALTER TABLE `generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES ('2014_10_12_000000_create_users_table',1),('2014_10_12_100000_create_password_resets_table',1),('2018_10_09_232830_create_planos_table',1),('2018_10_10_003404_create_acessos_table',2),('2018_10_13_191926_create_musicas_table',2),('2018_10_13_192325_create_albums_table',3),('2018_10_13_193209_create_artista_table',3),('2018_10_13_200312_create_artistas_table',4),('2018_10_13_200437_create_musica_table',4),('2018_10_13_200533_create_album_table',4);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `musica`
--

DROP TABLE IF EXISTS `musica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `musica` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `albumID` int(11) NOT NULL,
  `artistaID` int(11) NOT NULL,
  `filepath` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `filepath_avatar` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `nomemusica` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `musica`
--

LOCK TABLES `musica` WRITE;
/*!40000 ALTER TABLE `musica` DISABLE KEYS */;
INSERT INTO `musica` VALUES (1,1,1,'/path/to/archive','/path/to/archive',NULL,NULL,NULL,'Walk Through The Fire'),(2,1,1,'/path/to/archive','/path/to/archive',NULL,NULL,NULL,'Ruelle Madness'),(3,2,2,'path/to/file','filepath_avatar','2018-10-14 19:53:25','2018-10-14 19:53:25',NULL,'Kungs vs Cookin’ on 3 Burners - This Girl'),(4,3,3,'./musicas/pandora.mpeg','./img/decaidos2.jpeg','2018-10-20 03:17:47','2018-10-20 03:17:47',NULL,'Júlia e a caixa de pandora'),(5,3,3,'../musicas/contato.mpeg','./img/decaidos2.jpeg','2018-10-20 03:18:07','2018-10-20 03:18:07',NULL,'Contato');
/*!40000 ALTER TABLE `musica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `musica_has_genero`
--

DROP TABLE IF EXISTS `musica_has_genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `musica_has_genero` (
  `musicaID` int(11) DEFAULT NULL,
  `generoID` int(11) DEFAULT NULL,
  KEY `musicaID` (`musicaID`),
  KEY `generoID` (`generoID`),
  CONSTRAINT `musica_has_genero_ibfk_1` FOREIGN KEY (`musicaID`) REFERENCES `musica` (`id`),
  CONSTRAINT `musica_has_genero_ibfk_2` FOREIGN KEY (`generoID`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `musica_has_genero`
--

LOCK TABLES `musica_has_genero` WRITE;
/*!40000 ALTER TABLE `musica_has_genero` DISABLE KEYS */;
/*!40000 ALTER TABLE `musica_has_genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfil`
--

DROP TABLE IF EXISTS `perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perfil` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipoperfil` int(11) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `datanascimento` datetime DEFAULT NULL,
  `sexo` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tipoperfil` (`tipoperfil`),
  CONSTRAINT `perfil_ibfk_1` FOREIGN KEY (`tipoperfil`) REFERENCES `acessos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfil`
--

LOCK TABLES `perfil` WRITE;
/*!40000 ALTER TABLE `perfil` DISABLE KEYS */;
/*!40000 ALTER TABLE `perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfil_has_genero`
--

DROP TABLE IF EXISTS `perfil_has_genero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `perfil_has_genero` (
  `perfilID` int(11) DEFAULT NULL,
  `generoID` int(11) DEFAULT NULL,
  KEY `perfilID` (`perfilID`),
  KEY `generoID` (`generoID`),
  CONSTRAINT `perfil_has_genero_ibfk_1` FOREIGN KEY (`perfilID`) REFERENCES `perfil` (`id`),
  CONSTRAINT `perfil_has_genero_ibfk_2` FOREIGN KEY (`generoID`) REFERENCES `generos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfil_has_genero`
--

LOCK TABLES `perfil_has_genero` WRITE;
/*!40000 ALTER TABLE `perfil_has_genero` DISABLE KEYS */;
/*!40000 ALTER TABLE `perfil_has_genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `planos`
--

DROP TABLE IF EXISTS `planos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `planos` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planos`
--

LOCK TABLES `planos` WRITE;
/*!40000 ALTER TABLE `planos` DISABLE KEYS */;
INSERT INTO `planos` VALUES (1,'admin',9000.00,'2018-10-09 23:34:58','2018-10-09 23:34:58'),(2,'gratis',0.00,'2018-10-10 00:46:50','2018-10-10 00:46:50'),(3,'premium',29.90,'2018-10-10 00:47:10','2018-10-10 00:47:10');
/*!40000 ALTER TABLE `planos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_verifications`
--

DROP TABLE IF EXISTS `user_verifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_verifications` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_verifications_user_id_foreign` (`user_id`),
  CONSTRAINT `user_verifications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_verifications`
--

LOCK TABLES `user_verifications` WRITE;
/*!40000 ALTER TABLE `user_verifications` DISABLE KEYS */;
INSERT INTO `user_verifications` VALUES (1,2,'hhrVZK6LjBJvdKlDl7crtoMB5I9kBA'),(2,3,'2QONkVmtRUJHSzCQXlLBQ5GIkXfBhe');
/*!40000 ALTER TABLE `user_verifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `is_verified` tinyint(1) DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin@somdegaragem.com.br','$2y$10$PJesuBFIC78ewxPu2jrz9eWhvYMsQPYcOQ.nMLEHMjB.w9ndM2iCm',0,NULL,NULL,NULL),(2,'Joao','joao@sgd.com.br','$2y$10$Qqhd0b8yjFnbzHkez4LMsehMOSgDfZP86kMzdvKGdpbZ5KCYVljCi',0,NULL,'2018-11-04 19:03:17','2018-11-04 19:03:17'),(3,'Joao','julio.oliveiravaz0@gmail.com','$2y$10$M12VLT6P9hYrhwmR7wRSWuxzYKiOyi4Hj7ewaRmx3FuXIt6nCl8HO',0,NULL,'2018-11-04 19:05:51','2018-11-04 19:05:51'),(8,'Júlio','julio.oliveiravaz@hotmail.com','$2y$10$brpbbRDdMzTmGHNt/1q19uhM0VHbbxqTwZSqvwVSdcvNuGuJUKG6q',1,NULL,'2018-11-04 19:22:04','2018-11-04 19:29:24');
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

-- Dump completed on 2018-11-13 19:45:53
