-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: somdegaragemdb
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.16.04.2

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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo_album` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `desc_album` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `filepath_avatar` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `musicaID` int(11) NOT NULL,
  `artistaID` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `album_musicaid_foreign` (`musicaID`),
  KEY `album_artistaid_foreign` (`artistaID`),
  CONSTRAINT `album_artistaid_foreign` FOREIGN KEY (`artistaID`) REFERENCES `artistas` (`id`),
  CONSTRAINT `album_musicaid_foreign` FOREIGN KEY (`musicaID`) REFERENCES `musica` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
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
-- Table structure for table `album_has_musica`
--

DROP TABLE IF EXISTS `album_has_musica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `album_has_musica` (
  `musicaID` int(11) DEFAULT NULL,
  `albumID` int(11) DEFAULT NULL,
  KEY `musicaID` (`musicaID`),
  KEY `albumID` (`albumID`),
  CONSTRAINT `album_has_musica_ibfk_1` FOREIGN KEY (`musicaID`) REFERENCES `musica` (`id`),
  CONSTRAINT `album_has_musica_ibfk_2` FOREIGN KEY (`albumID`) REFERENCES `album` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album_has_musica`
--

LOCK TABLES `album_has_musica` WRITE;
/*!40000 ALTER TABLE `album_has_musica` DISABLE KEYS */;
INSERT INTO `album_has_musica` VALUES (4,3),(5,3);
/*!40000 ALTER TABLE `album_has_musica` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artistas`
--

LOCK TABLES `artistas` WRITE;
/*!40000 ALTER TABLE `artistas` DISABLE KEYS */;
INSERT INTO `artistas` VALUES (1,'Malu fernandes','artista renomada','/path/to/archive',1,1,NULL,NULL,NULL),(2,'Júlio gaiteiro','Artista renomado','path/to/file',2,2,'2018-10-14 19:48:50','2018-10-14 19:48:50',NULL),(3,'Decaídos de Plutão','Banda nascida da vontade de mudar a música com seu som','./img/decaidos.jpeg',3,3,'2018-10-20 03:15:41','2018-10-20 03:15:41',NULL),(17,'Júlio Vaz','Artista novo','teste',2,36,'2018-12-14 02:07:49','2018-12-14 02:07:49','2018-12-14 02:07:49');
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
INSERT INTO `artistas_has_generos` VALUES (2,1),(2,3),(2,6),(2,9),(2,12),(3,4),(3,8),(3,13),(2,13);
/*!40000 ALTER TABLE `artistas_has_generos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artistas_has_musicas`
--

DROP TABLE IF EXISTS `artistas_has_musicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artistas_has_musicas` (
  `artistaID` int(11) NOT NULL,
  `musicaID` int(11) NOT NULL,
  KEY `artistas_has_musicas_ibfk_1` (`artistaID`),
  KEY `artistas_has_musicas_ibfk_2` (`musicaID`),
  CONSTRAINT `artistas_has_musicas_ibfk_1` FOREIGN KEY (`artistaID`) REFERENCES `artistas` (`id`),
  CONSTRAINT `artistas_has_musicas_ibfk_2` FOREIGN KEY (`musicaID`) REFERENCES `musica` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artistas_has_musicas`
--

LOCK TABLES `artistas_has_musicas` WRITE;
/*!40000 ALTER TABLE `artistas_has_musicas` DISABLE KEYS */;
INSERT INTO `artistas_has_musicas` VALUES (3,4),(3,5),(2,36),(2,37),(2,38),(2,39),(2,40),(2,41),(2,42),(2,43),(2,43),(2,46),(2,47),(2,48);
/*!40000 ALTER TABLE `artistas_has_musicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contratos`
--

DROP TABLE IF EXISTS `contratos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contratos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_contratante` int(11) NOT NULL,
  `id_contratado` int(11) NOT NULL,
  `valor` int(11) NOT NULL,
  `prazo` smallint(6) DEFAULT NULL,
  `servico` text COLLATE utf8_unicode_ci,
  `idTipo` int(11) NOT NULL,
  `idStatus` int(10) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_status_idx` (`idStatus`),
  KEY `fk_contratante_idx` (`id_contratante`),
  KEY `fk_contratado_idx` (`id_contratado`),
  KEY `fk_tipo` (`idTipo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contratos`
--

LOCK TABLES `contratos` WRITE;
/*!40000 ALTER TABLE `contratos` DISABLE KEYS */;
INSERT INTO `contratos` VALUES (1,7,6,1750,36,'teste',1,3,'2018-11-21 01:15:53','2018-11-23 16:47:09'),(2,7,6,200,360,'<p>Manutenção de servidor e troca de memoria.</p>',1,2,'2018-11-23 15:49:00','2018-11-23 16:13:02'),(3,7,6,400,30,'<p>testehjshfajdfhajkdshgj</p>',1,2,'2018-11-23 16:28:17','2018-11-23 16:28:27');
/*!40000 ALTER TABLE `contratos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dadocontrato`
--

DROP TABLE IF EXISTS `dadocontrato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dadocontrato` (
  `id` int(11) NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `block` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gas` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `byteCode` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  KEY `fk_id_dado_Contrato_idx` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dadocontrato`
--

LOCK TABLES `dadocontrato` WRITE;
/*!40000 ALTER TABLE `dadocontrato` DISABLE KEYS */;
/*!40000 ALTER TABLE `dadocontrato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadocivil`
--

DROP TABLE IF EXISTS `estadocivil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estadocivil` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadocivil`
--

LOCK TABLES `estadocivil` WRITE;
/*!40000 ALTER TABLE `estadocivil` DISABLE KEYS */;
INSERT INTO `estadocivil` VALUES (1,'Solteiro(a)'),(2,'Casado(a)'),(3,'Viúvo(a)'),(4,'Separado judicialmente'),(5,'Divorciado(a)');
/*!40000 ALTER TABLE `estadocivil` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `musica`
--

LOCK TABLES `musica` WRITE;
/*!40000 ALTER TABLE `musica` DISABLE KEYS */;
INSERT INTO `musica` VALUES (1,1,1,'/path/to/archive','/path/to/archive',NULL,NULL,NULL,'Walk Through The Fire'),(2,1,1,'/path/to/archive','/path/to/archive',NULL,NULL,NULL,'Ruelle Madness'),(3,2,2,'path/to/file','filepath_avatar','2018-10-14 19:53:25','2018-10-14 19:53:25',NULL,'Kungs vs Cookin’ on 3 Burners - This Girl'),(4,3,3,'./musicas/pandora.mpeg','./img/decaidos2.jpeg','2018-10-20 03:17:47','2018-10-20 03:17:47',NULL,'Júlia e a caixa de pandora'),(5,3,3,'audios/6/contato.mp3','./img/decaidos2.jpeg','2018-10-20 03:18:07','2018-10-20 03:18:07',NULL,'Contato'),(12,0,9,'9','9','2011-12-18 13:58:03','0000-00-00 00:00:00','0000-00-00 00:00:00','02 - De Tanto Te Querer.mp3'),(15,0,17,'17','17','2013-12-18 14:21:39','0000-00-00 00:00:00','0000-00-00 00:00:00','teste.mp3'),(17,0,17,'17','17','2013-12-18 14:25:39','0000-00-00 00:00:00','0000-00-00 00:00:00','14 Matheus e Kauan - Р hoje.mp3'),(18,0,17,'17','17','2013-12-18 14:27:17','0000-00-00 00:00:00','0000-00-00 00:00:00','12 Matheus e Kauan - Mundo paralelo.mp3'),(19,0,17,'17','17','2013-12-18 14:29:57','0000-00-00 00:00:00','0000-00-00 00:00:00','15 Matheus e Kauan - Se entrega.mp3'),(20,0,17,'audios/17Ruelle - Hero.mp3','audios/17/images/WhatsApp Image 2018-10-10 at 23.07.11 (2).jpeg','2014-12-18 03:45:05','0000-00-00 00:00:00','0000-00-00 00:00:00','Ruelle - Hero.mp3'),(36,0,17,'audios/1709 Matheus e Kauan - Abelha sem mel.mp3','audios/17/images/WhatsApp Image 2018-10-10 at 23.07.11 (2).jpeg','2014-12-18 03:59:03','0000-00-00 00:00:00','0000-00-00 00:00:00','09 Matheus e Kauan - Abelha sem mel.mp3'),(37,0,17,'audios/1719 Sem Você (ao vivo).mp3','audios/17/images/decaidos.png','2014-12-18 04:08:47','0000-00-00 00:00:00','0000-00-00 00:00:00','19 Sem Você (ao vivo).mp3'),(38,0,17,'audios/17/14 Sem Trânsito, Sem Avião.mp3','audios/17/images/WhatsApp Image 2018-09-09 at 13.12.31 (2).jpeg','2014-12-18 04:11:25','0000-00-00 00:00:00','0000-00-00 00:00:00','semcarro.mp3'),(39,0,17,'audios/17/Ruelle - Hero.mp3','audios/17/images/pop.jpg','2014-12-18 04:19:28','0000-00-00 00:00:00','0000-00-00 00:00:00','Ruelle - Hero.mp3'),(40,0,17,'audios/17/12 - Luzes de São Paulo.mp3','audios/17/images/# CAPA DO CD.jpg','2014-12-18 04:22:17','0000-00-00 00:00:00','0000-00-00 00:00:00','luzes do rio.mp3'),(41,0,17,'audios/17/Escória - Mp3.mp3','audios/17/images/WhatsApp Image 2018-09-09 at 13.12.31 (2).jpeg','2014-12-18 10:46:42','0000-00-00 00:00:00','0000-00-00 00:00:00','música nova.mp3'),(42,0,17,'audios/17/joao-pedro-pinheiro-samba-e-amor-chico-buarque.mp3','audios/17/images/rock.jpg','2014-12-18 11:03:22','0000-00-00 00:00:00','0000-00-00 00:00:00','joao-pedro-pinheiro-samba-e-amor-chico-buarque.mp3'),(43,0,17,'audios/17/Escória - Mp3.mp3','audios/17/images/WhatsApp Image 2018-10-10 at 23.07.11 (1).jpeg','2014-12-18 11:25:11','0000-00-00 00:00:00','0000-00-00 00:00:00','Escória - Mp3.mp3'),(44,0,17,'audios/17/joao-pedro-pinheiro-samba-e-amor-chico-buarque.mp3','audios/17/images/WhatsApp Image 2018-10-10 at 23.07.11.jpeg','2014-12-18 09:13:49','0000-00-00 00:00:00','0000-00-00 00:00:00','joao-pedro-pinheiro-samba-e-amor-chico-buarque.mp3'),(46,0,28,'audios/28/Você.mp3','audios/28/images/CAPA OFICIAL.jpg','2014-12-18 11:36:31','0000-00-00 00:00:00','0000-00-00 00:00:00','Maisvocê.mp3'),(47,0,28,'audios/28/Luz das 4 horas.mp3','audios/28/images/Boa tb.jpg','2016-12-18 13:18:37','0000-00-00 00:00:00','0000-00-00 00:00:00','luzdameianotie.mp3'),(48,0,17,'audios/17/contato (online-audio-converter.com).mp3','audios/17/images/WhatsApp Image 2018-10-10 at 23.07.11 (2).jpeg','2027-12-18 13:40:59','0000-00-00 00:00:00','0000-00-00 00:00:00','contatodecaidos.mp3');
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
INSERT INTO `musica_has_genero` VALUES (1,13),(1,14),(1,16),(1,8),(1,4),(2,13),(2,14),(2,16),(2,8),(2,4),(3,13),(3,14),(3,16),(3,8),(3,4),(4,13),(4,14),(4,16),(4,8),(4,4),(5,13),(5,14),(5,16),(5,8),(5,4),(36,1),(37,1),(38,1),(39,1),(40,1),(41,1),(42,1),(43,1),(43,1),(46,1),(47,1),(48,1);
/*!40000 ALTER TABLE `musica_has_genero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nacionalidade`
--

DROP TABLE IF EXISTS `nacionalidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nacionalidade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nacionalidade`
--

LOCK TABLES `nacionalidade` WRITE;
/*!40000 ALTER TABLE `nacionalidade` DISABLE KEYS */;
INSERT INTO `nacionalidade` VALUES (1,'Alemão'),(2,'Americano'),(3,'Angolano'),(4,'Argelino'),(5,'Australiano'),(6,'Brasileiro'),(7,'Cabo-Verdiano'),(8,'Chinês'),(9,'Dinamarquês'),(10,'Espanhol'),(11,'Francês'),(12,'Grego'),(13,'Guineense'),(14,'Holandês'),(15,'Inglês'),(16,'Irlandês'),(17,'Italiano'),(18,'Japonês'),(19,'Marroquino'),(20,'Moçambicano'),(21,'Neozelandês'),(22,'Norueguês'),(23,'Palestiniano'),(24,'Polaco'),(25,'Português'),(26,'Russo'),(27,'São-Tomense'),(28,'Sueco'),(29,'Suíço'),(30,'Tailandês'),(31,'Timorense'),(32,'Venezuelano'),(33,'Vietnamita');
/*!40000 ALTER TABLE `nacionalidade` ENABLE KEYS */;
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
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `email_UNIQUE` (`email`) USING BTREE
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
-- Table structure for table `profissao`
--

DROP TABLE IF EXISTS `profissao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profissao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=317 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profissao`
--

LOCK TABLES `profissao` WRITE;
/*!40000 ALTER TABLE `profissao` DISABLE KEYS */;
INSERT INTO `profissao` VALUES (1,'ADMINISTRADOR '),(2,'ADMINISTRADOR DE EDIFICIO '),(3,'ADMINISTRADOR DE EXPLORACAO AGRICOLA '),(4,'ADMINISTRADORES '),(5,'ADVOGADO '),(6,'ADVOGADO DIREITO DO TRABALHO '),(7,'AGENCIADOR DE PROPAGANDA '),(8,'AGENTE ADMINISTRATIVO '),(9,'AGENTE DE COMPRAS '),(10,'AGENTE DE VENDA DE SERVICOS AS EMPRESAS '),(11,'AGENTE DE VIAGEM '),(12,'AGENTE PUBLICITARIO '),(13,'AGENTE TECNICO DE VENDAS '),(14,'AGENTES ADMINISTRATIVOS '),(15,'AGENTES DE ADMINISTRACAO DE EMPRESAS PUBLICAS E PRIVADAS '),(16,'ALMOXARIFE '),(17,'ANALISTA DE CARGOS E SALARIOS '),(18,'ANALISTA DE COMERCIALIZACAO '),(19,'ANALISTA DE COMUNICACA 8234    ANALISTA DE CREDITO E COBRANCA '),(20,'ANALISTA DE IMPORTACAO E EXPORTACAO '),(21,'ANALISTA DE OCUPACAO '),(22,'ANALISTA DE ORGANIZACAO E METODOS '),(23,'ANALISTA DE PESQUISA DE MERCADO '),(24,'ANALISTA DE RECURSOS HUMANOS '),(25,'ANALISTA DE SEGUROS '),(26,'ANALISTA DE SISTEMAS '),(27,'ANALISTA DE SUPORTE DE SISTEMA '),(28,'APONTADOR DE MAO DE OBRA '),(29,'APONTADOR DE PRODUCAO '),(30,'ARQUITETO '),(31,'ARQUIVISTA '),(32,'ASSISTENTE ADMINISTRATIVO '),(33,'ASSISTENTE DE PATRIMONIO '),(34,'ASSISTENTE DE VENDAS FINANCEIRO '),(35,'ASSISTENTE SOCIAL '),(36,'ATENDETE DE ENFERMAGEM '),(37,'ATLETA PROFISSIONAL DE FUTEBOL '),(38,'AUDITOR CONTABIL '),(39,'AUDITOR GERAL '),(40,'AUXILIAR DE ALMOXARIFADO '),(41,'AUXILIAR DE BIBLIOTECA '),(42,'AUXILIAR DE CONTABILidADE '),(43,'AUXILIAR DE ENFERMAGEM '),(44,'AUXILIAR DE ESCRITORIO '),(45,'AUXILIAR DE FARMACIA '),(46,'AUXILIAR DE IMPORTACAO E EXPORTACAO '),(47,'AUXILIAR DE LABORATORIO DE ANALISES CLINICAS '),(48,'AUXILIAR DE LABORATORIO DE ANALISES FISICOQUIMICAS '),(49,'AUXILIAR DE PESSOAL '),(50,'AUXILIAR DE SEGUROS '),(51,'AUXILIAR DE SERVICOS JURidICOS '),(52,'AUXILIARES DE CONTABILidADE '),(53,'AUXILIARES DE ESCRITORIO '),(54,'BABA '),(55,'BARMAN '),(56,'BIBLIOTECARIO '),(57,'BIOLOGISTA '),(58,'BIOQUIMICO '),(59,'CABELEIREIRO '),(60,'CARTEIRO '),(61,'CHEFE DE ADMINISTRATIVOS '),(62,'CHEFE DE ALMOXARIFADO '),(63,'CHEFE DE CONTABILidADE '),(64,'CHEFE DE CONTABILidADE E FINANCAS '),(65,'CHEFE DE CONTAS A PAGAR '),(66,'CHEFE DE CONTROLE DE PATRIMONIO '),(67,'CHEFE DE ESCRITORIO '),(68,'CHEFE DE ESCRITORIO CONTABILidADE '),(69,'CHEFE DE ESCRITORIO CREDITO E COBRANCA '),(70,'CHEFE DE ESCRITORIO ORCAMENTO '),(71,'CHEFE DE ESCRITORIO PESSOAL '),(72,'CHEFE DE ESCRITORIO SERVICOS GERAIS '),(73,'CHEFE DE ESCRITORIO TESOURARIA '),(74,'CHEFE DE RECEPCAO HOTEL '),(75,'CHEFE DE SERVICO DE TRANSPORTE RODOVIARIO '),(76,'CHEFE DE SERVICOS DE TELECOMUNICACOES '),(77,'CIRURGIAO '),(78,'CIRURGIAO DENTISTA '),(79,'CODIFICADOR DE DADOS '),(80,'COMERCIANTE VAREJISTA '),(81,'COMISSARIO DE BORDO AERONAVES '),(82,'COMPRADOR COMERCIO ATACADISTA E VAREJISTA '),(83,'CONDUTOR DE CAMINHAO BASCULANTE '),(84,'CONDUTORES DE AUTOMOVEIS '),(85,'CONSULTOR JURidICO '),(86,'CONTADOR '),(87,'CONTRAMESTRE DE EMBARCACAO '),(88,'CONTRAMESTRE INDUSTRIA TEXTIL '),(89,'COORDENADOR DE ENSINO '),(90,'CORRESPONDENTE COMERCIAL '),(91,'COZINHEIRO CHEFE '),(92,'CRONOANALISTA '),(93,'DATILOGRAFO '),(94,'DEMONSTRADOR '),(95,'DESENHISTA '),(96,'DESENHISTA PROJETISTA '),(97,'DESENHISTA TECNICO '),(98,'DESPACHANTE '),(99,'DIAGRAMADOR '),(100,'DIGITADOR '),(101,'DIRETOR DE EMPRESA '),(102,'DIRETOR DE EMPRESA DE COMERCIO VAREJISTA '),(103,'DIRETOR DE EMPRESA DE COMUNICACOES '),(104,'DIRETOR DE EMPRESA DE CONSTRUCAO CIVIL '),(105,'DIRETOR DE EMPRESA DE PRESTACAO DE SERVICOS '),(106,'DIRETOR DE EMPRESA DE SERVICOS CLINICOS E HOSPITALARES '),(107,'DIRETOR DE EMPRESA FINANCEIRA '),(108,'DIRETOR DE EMPRESA MANUFATUREIRA '),(109,'DIRETOR DE ESTABELECIMENTO DE ENSINO '),(110,'DIRETOR DE ESTABELECIMENTO DE ENSINO SUPERIOR '),(111,'DIRETORES DE EMPRESAS '),(112,'ECONOMISTA '),(113,'ECONOMISTA MERCADOLOGIA '),(114,'ECONOMISTA PROGRAMACAO ECONOMICO FINANCEIRA '),(115,'ECONOMISTAS '),(116,'EDITOR DE LIVROS '),(117,'ENCARREGADO DE DIGITACAO E OPERACAO '),(118,'ENFERMEIRO '),(119,'ENFERMEIRO DO TRABALHO '),(120,'ENFERMEIROS '),(121,'ENGENHEIRO AERONAUTICO '),(122,'ENGENHEIRO AGRONOMO '),(123,'ENGENHEIRO CIVIL '),(124,'ENGENHEIRO DE CONTROLE DE QUALidADE '),(125,'ENGENHEIRO DE MANUTENCAO ELETRICidADE E ELETRONICA '),(126,'ENGENHEIRO DE MINAS '),(127,'ENGENHEIRO DE ORGANIZACAO E METODOS '),(128,'ENGENHEIRO DE SEGURANCA DO TRABALHO '),(129,'ENGENHEIRO DE TELECOMUNICACOES '),(130,'ENGENHEIRO DE TRAFEGO '),(131,'ENGENHEIRO ELETRICISTA '),(132,'ENGENHEIRO ELETRONICO '),(133,'ENGENHEIRO MECANICO '),(134,'ENGENHEIRO QUIMICO '),(135,'ENGENHEIROS '),(136,'ESCRITURARIO '),(137,'ESCRIVAO '),(138,'ESTATISTICO '),(139,'ESTETICISTA '),(140,'FARMACEUTICO '),(141,'FISIOTERAPEUTA '),(142,'FONOAUDIOLOGO '),(143,'FUNCIONARIO PUBLICO ESTADUAL SUPERIOR '),(144,'FUNCIONARIO PUBLICO FEDERAL SUPERIOR '),(145,'FUNCIONARIO PUBLICO MUNICIPAL SUPERIOR '),(146,'FUNCIONARIO PUBLICO SUPERIOR '),(147,'GEOLOGO '),(148,'GERENTE ADMINISTRATIVO '),(149,'GERENTE COMERCIAL '),(150,'GERENTE DE BANCO '),(151,'GERENTE DE BAR '),(152,'GERENTE DE COMPRA '),(153,'GERENTE DE  EMPRESAS '),(154,'GERENTE DE HOTEL '),(155,'GERENTE DE INFORMATICA '),(156,'GERENTE DE LOJA '),(157,'GERENTE DE MARKETING '),(158,'GERENTE DE OPERACAO '),(159,'GERENTE DE PESQUISA E DESENVOLVIMENTO '),(160,'GERENTE DE PESSOAL '),(161,'GERENTE DE PLANEJAMENTO '),(162,'GERENTE DE POSTAL E TELECOMUNICACOES '),(163,'GERENTE DE PRODUCAO '),(164,'GERENTE DE PROPAGANDA '),(165,'GERENTE DE RESTAURANTE '),(166,'GERENTE DE RH '),(167,'GERENTE DE TRANSPORTE '),(168,'GERENTE DE VENDAS '),(169,'GERENTE EXECUTIVO '),(170,'GERENTE FINANCEIRO '),(171,'GERENTE OPERACIONAL '),(172,'INSPETOR DE PRODUCAO '),(173,'INSPETOR DE QUALidADE '),(174,'INSPETOR DE	SERVICOS DE TRANSPORTE '),(175,'INSPETOR TECNICO DE VENDAS '),(176,'INSTRUTOR DE APRENDIZAGEM E TREINAMENTO '),(177,'JORNALISTA '),(178,'LABORATORISTA ANALISES CLINICAS '),(179,'LABORATORISTA INDUSTRIAL '),(180,'LOCUTOR '),(181,'MAITRE '),(182,'MEDICO '),(183,'MEDICO ANESTESISTA '),(184,'MEDICO CARDIOLOGISTA '),(185,'MEDICO DO TRABALHO '),(186,'MEDICO GINECOLOGISTA '),(187,'MEDICO ORTOPEDISTA '),(188,'MEDICO PEDIATRA '),(189,'MEDICO PSIQUIATRA '),(190,'MEDICO VETERINARIO '),(191,'MESTRE CONTRUCAO CIVIL '),(192,'MESTRE INDUSTRIAL '),(193,'MOTOCICLISTA TRANSPORTE DE MERCADORIAS '),(194,'MOTORISTA '),(195,'MOTORISTA DE CAMINHAO '),(196,'MOTORISTA DE FURGAO OU VEICULO SIMILAR '),(197,'MOTORISTA DE ONIBUS '),(198,'MOTORISTA DE TAXI '),(199,'MUSICO '),(200,'NUTRICIONISTA '),(201,'OPERADOR DE CAMERA DE TELEVISAO '),(202,'OPERADOR DE COMPUTADOR '),(203,'OPERADOR DE EQUIPAMENTOS DE ENTRADA DE DADOS '),(204,'OPERADOR DE ESTACAO DE RADIO '),(205,'OPERADOR DE MAQUINAS E VEICULOS '),(206,'OPERADOR DE MICRO '),(207,'OPERADOR DE PRODUTOS FINANCEIROS '),(208,'OPERADOR DE RAIOS X '),(209,'OPERADOR DE TELEMARKETING '),(210,'ORIENTADOR EDUCACIONAL '),(211,'OURIVES '),(212,'PEDAGOGO '),(213,'PILOTO '),(214,'PINTOR '),(215,'PRODUTOR DE RADIO E TELEVISAO '),(216,'PROFESSOR DE 1A A 4A SERIE ENSINO DE 1O GRAU '),(217,'PROFESSOR DE ADMINISTRACAO ENSINO SUPERIOR '),(218,'PROFESSOR DE ALUNOS COM DEFICENCIAS MENTAIS '),(219,'PROFESSOR DE BIOLOGIA ENSINO DE 2O GRAU '),(220,'PROFESSOR DE CIENCIAS NATURAIS ENSINO DE 1O GRAU '),(221,'PROFESSOR DE COMUNICACAO '),(222,'PROFESSOR DE CONTABILidADE ENSINO SUPERIOR '),(223,'PROFESSOR DE DidATICA ENSINO SUPERIOR '),(224,'PROFESSOR DE DIREITO '),(225,'PROFESSOR DE ECONOMIA '),(226,'PROFESSOR DE EDUCACAO FISICA '),(227,'PROFESSOR DE ENFERMAGEM '),(228,'PROFESSOR DE ENSINO PRE ESCOLAR '),(229,'PROFESSOR DE ESTATISTICA '),(230,'PROFESSOR DE ESTUDOS SOCIAIS ENSINO DE 1O GRAU '),(231,'PROFESSOR DE FISICA '),(232,'PROFESSOR DE FISIOTERAPIA ENSINO SUPERIOR '),(233,'PROFESSOR DE HISTORIA '),(234,'PROFESSOR DE INGLES '),(235,'PROFESSOR DE LINGUA PORTUGUESA '),(236,'PROFESSOR DE LINGUAS ESTRANGEIRAS '),(237,'PROFESSOR DE MATEMATICA '),(238,'PROFESSOR DE ORIENTACAO EDUCACIONAL ENSINO SUPERIOR '),(239,'PROFESSOR DE PEDAGOGIA '),(240,'PROFESSOR DE PORTUGUES E LITERATURA '),(241,'PROFESSOR DE PRATICA DE ENSINO ENSINO SUPERIOR '),(242,'PROFESSOR DE PSICOLOGIA '),(243,'PROFESSOR DE QUIMICA '),(244,'PROFESSOR DE SOCIOLOGIA '),(245,'PROFESSOR DE TECNOLOGIA '),(246,'PROFESSORES '),(247,'PROFESSORES DE BIOLOGIA '),(248,'PROFESSORES DE CIENCIAS HUMANAS '),(249,'PROFESSORES DE ENSINO DE 2O GRAU '),(250,'PROFESSORES DE ENSINO DE PRIMEIRO GRAU '),(251,'PROFESSORES DE ENSINO ESPECIAL '),(252,'PROFESSORES DE ENSINO PRE ESCOLAR '),(253,'PROFESSORES DE ENSINO SUPERIOR '),(254,'PROFESSORES DE PEDAGOGIA '),(255,'PROFESSSOR DE GEOGRAFIA '),(256,'PROGRAMADOR DE COMPUTADOR '),(257,'PROPAGANDISTA DE PRODUTOS DE LABORATORIO '),(258,'PSICOLOGO '),(259,'QUIMICO '),(260,'QUIMICO ANALISTA '),(261,'QUIMICO INDUSTRIAL '),(262,'RECEPCIONISTA '),(263,'REDATOR '),(264,'RELACOES PUBLICAS '),(265,'REPORTER '),(266,'REPRESENTANTE COMERCIAL '),(267,'SECRETARIO '),(268,'SECRETARIO BILINGUE '),(269,'SECRETARIO EXECUTIVO '),(270,'SERVENTUARIOS DA JUSTICA '),(271,'SOCIOLOGO '),(272,'SUPERVISOR DE COMPRAS '),(273,'SUPERVISOR DE VENDAS COMERCIO ATACADISTA '),(274,'SUPERVISOR DE VENDAS COMERCIO VAREJISTA '),(275,'SUPERVISOR EDUCACIONAL '),(276,'SUPERVISORES DE COMPRAS E COMPRADORES '),(277,'SUPERVISORES DE VENDAS '),(278,'TECNICO '),(279,'TECNICO AGRICOLA '),(280,'TECNICO AGROPECUARIO '),(281,'TECNICO DE ADMINISTRACAO '),(282,'TECNICO DE CONTABILidADE '),(283,'TECNICO DE ENFERMAGEM '),(284,'TECNICO DE LABORATORIO '),(285,'TECNICO DE MANUTENCAO ELETRICA '),(286,'TECNICO DE MANUTENCAO ELETRONICA '),(287,'TECNICO DE OBRAS CIVIS '),(288,'TECNICO DE PLANEJAMENTO DE PRODUCAO '),(289,'TECNICO DE SEGURANCA DO TRABALHO '),(290,'TECNICO DE SEGUROS '),(291,'TECNICO DE TELECOMUNICACOES '),(292,'TECNICO ELETRONICO '),(293,'TECNICO MECANICO '),(294,'TECNICO MECANICO MAQUINAS '),(295,'TECNICO METALURGICO '),(296,'TECNICO QUIMICO '),(297,'TECNICOS DE BIOLOGIA  '),(298,'TECNICOS DE ELETRICidADE '),(299,'TECNICOS DE ENFERMAGEM '),(300,'TECNICOS DE OBRAS CIVIS '),(301,'TERAPEUTA OCUPACIONAL '),(302,'TOPOGRAFO '),(303,'TRABALHADORES DAS PROFISSOES CIENTIFICAS '),(304,'TRABALHADORES DE COMERCIO '),(305,'TRABALHADORES DE SERVICOS ADMINISTRATIVOS '),(306,'TRABALHADORES DE SERVICOS DE CONTABILidADE '),(307,'TRABALHADORES DE SERVICOS DE TURISMO '),(308,'VENDEDOR A DOMICILIO '),(309,'VENDEDOR AMBULANTE '),(310,'VENDEDOR DE COMERCIO ATACADISTA '),(311,'VENDEDOR DE COMERCIO VAREJISTA '),(312,'VENDEDOR PRACISTA '),(313,'VENDEDORES DE COMERCIO ATACADISTA E VAREJISTA '),(314,'VENDEDORES PRACISTAS '),(315,'VEREADOR '),(316,'ZOOTECNISTA');
/*!40000 ALTER TABLE `profissao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sexo`
--

DROP TABLE IF EXISTS `sexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sexo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sexo`
--

LOCK TABLES `sexo` WRITE;
/*!40000 ALTER TABLE `sexo` DISABLE KEYS */;
INSERT INTO `sexo` VALUES (1,'Masculino'),(2,'Feminino');
/*!40000 ALTER TABLE `sexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'aguardando'),(2,'Aprovado'),(3,'Recusado'),(4,'Deploy');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo`
--

DROP TABLE IF EXISTS `tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
INSERT INTO `tipo` VALUES (1,'Prestação de Serviço');
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_verifications`
--

LOCK TABLES `user_verifications` WRITE;
/*!40000 ALTER TABLE `user_verifications` DISABLE KEYS */;
INSERT INTO `user_verifications` VALUES (1,2,'hhrVZK6LjBJvdKlDl7crtoMB5I9kBA');
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
  `tipousuario` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin@somdegaragem.com.br','$2y$10$PJesuBFIC78ewxPu2jrz9eWhvYMsQPYcOQ.nMLEHMjB.w9ndM2iCm',0,NULL,NULL,NULL,0),(2,'Joao','joao@sgd.com.br','$2y$10$Qqhd0b8yjFnbzHkez4LMsehMOSgDfZP86kMzdvKGdpbZ5KCYVljCi',0,NULL,'2018-11-04 19:03:17','2018-11-04 19:03:17',0),(8,'Júlio','julio.oliveiravaz@hotmail.com','$2y$10$brpbbRDdMzTmGHNt/1q19uhM0VHbbxqTwZSqvwVSdcvNuGuJUKG6q',1,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0Ijo','2018-11-04 19:22:04','2018-11-25 01:53:55',0),(9,'Gustavo Roberto','grnrodrigues@gmail.com','$2y$10$LWPG95JU6QMfOnl8xnQsu.IQAfFk4hM7qSeHxZiQj4c02Szj7fHLa',1,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0Ijo','2018-11-14 01:42:57','2018-12-12 01:16:54',0),(10,'João Pedro de Oliveira Vaz','j-pedro_vaz@hotmail.com','$2y$10$Ig4cA1t2j.NGbpLWNclW1etkOk9jUGY8lAFPHKmSk0a9ICKL5AN3C',1,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0Ijo','2018-11-16 20:11:49','2018-11-16 20:17:41',0),(13,'Rodrigo Ribeiro de Sousa','rodrigodigos2009@hotmail.com','$2y$10$0TUWGeuXDiNFbf.TogYmd.Sy2jXIXns9SgQ86Sm4uDsSP69Pmidm2',1,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0Ijo','2018-11-17 16:56:23','2018-11-17 16:57:58',0),(18,'martina luiza','martina_luiza@hotmail.com','$2y$10$6BcUJknBZoOdMqu8aHjML.CIHWGIJb4r8s/4w2OyTtyxAK2XlheEa',1,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0Ijo','2018-11-19 18:02:00','2018-11-19 18:03:25',0),(19,'MICHAEL THOMAS VERTICCHIO SILVA','mikethomas_15@live.com','$2y$10$KRU.xRkDJ1nWV0Px.ls1iuQBEjP74cKSC.uoGT/L3QuSHoXfXfFqa',1,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0Ijo','2018-11-25 00:49:10','2018-11-25 00:51:59',0),(20,'Gabriel de Lima Cavalcanti','gabriellcavalcanti1@gmail.com','$2y$10$vrap2pMxMoXjSy8JJFIk6O0N5E6Qx7CWlMZz2ITiwnz9CreqSh1Ia',1,NULL,'2018-11-25 00:54:15','2018-11-25 00:55:09',0),(21,'gabriel','gabriel-ribeiro2009@hotmail.com','$2y$10$8e4uOYMXDt2jTA2TwHDhtOB5sQc.XjNrr.kte9x4cAkOhpx4O.X1C',1,NULL,'2018-11-25 00:56:27','2018-11-25 00:59:31',0),(28,'Guga Pine','artistasg1@gmail.com','$2y$10$JWg.MLaY/vB3FHB9q28lZOqTknyq6Vhb9s96CHN1iVotCDmWGyt0K',1,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0Ijo','2018-12-14 23:29:43','2018-12-17 01:16:41',2),(29,'João Pedro','ouvintesg@gmail.com','$2y$10$vuMxrkVi3QGZIraQpnpY3.Fq0PIoOFQNbPY8/nVV44k.gLw0aTpsi',1,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0Ijo','2018-12-14 23:31:57','2018-12-17 01:21:08',1),(31,'Júlio César Vaz','julio.oliveiravaz0@gmail.com','$2y$10$NK0DhGeAAhljidYynJZQZez.WoCP4/q9NApcU44pOTDtpWRLy94Bq',1,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0Ijo','2019-02-18 06:03:50','2019-02-18 06:07:30',2);
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

-- Dump completed on 2019-02-18  0:28:54
