-- MySQL dump 10.13  Distrib 5.6.24, for Win32 (x86)
--
-- Host: localhost    Database: security_guard
-- ------------------------------------------------------
-- Server version	5.6.17

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
-- Table structure for table `alerts`
--

DROP TABLE IF EXISTS `alerts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alerts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `message_id` int(10) unsigned NOT NULL,
  `typealert_id` int(10) unsigned NOT NULL,
  `station_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `alerts_station_id_foreign` (`station_id`),
  KEY `alerts_message_id_foreign` (`message_id`),
  KEY `alerts_typealert_id_foreign` (`typealert_id`),
  CONSTRAINT `alerts_message_id_foreign` FOREIGN KEY (`message_id`) REFERENCES `messages` (`id`),
  CONSTRAINT `alerts_station_id_foreign` FOREIGN KEY (`station_id`) REFERENCES `stations` (`id`),
  CONSTRAINT `alerts_typealert_id_foreign` FOREIGN KEY (`typealert_id`) REFERENCES `types_alerts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alerts`
--

LOCK TABLES `alerts` WRITE;
/*!40000 ALTER TABLE `alerts` DISABLE KEYS */;
/*!40000 ALTER TABLE `alerts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `areas`
--

DROP TABLE IF EXISTS `areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `areas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `telf` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `areas_name_unique` (`name`),
  KEY `areas_user_id_foreign` (`user_id`),
  CONSTRAINT `areas_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `areas`
--

LOCK TABLES `areas` WRITE;
/*!40000 ALTER TABLE `areas` DISABLE KEYS */;
INSERT INTO `areas` VALUES (1,'Santa Rosa','1','0000-00-00 00:00:00','0000-00-00 00:00:00',1),(2,'Loma Linda','1','0000-00-00 00:00:00','0000-00-00 00:00:00',1),(3,'Anaco','1','0000-00-00 00:00:00','0000-00-00 00:00:00',1),(4,'Operadora Santa Rosa','1','0000-00-00 00:00:00','0000-00-00 00:00:00',1),(5,'all','1','0000-00-00 00:00:00','0000-00-00 00:00:00',1);
/*!40000 ALTER TABLE `areas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cargos`
--

DROP TABLE IF EXISTS `cargos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cargos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargos`
--

LOCK TABLES `cargos` WRITE;
/*!40000 ALTER TABLE `cargos` DISABLE KEYS */;
INSERT INTO `cargos` VALUES (1,'ADMINISTRADOR'),(2,'ANALISTA DE CONTROL Y TRAZABILIDAD'),(3,'ANALISTA DE LABORATORIO'),(4,'APRENDIZ INCE'),(5,'ASESOR DE SERVICIOS AL CLIENTE'),(6,'ASESOR LEGAL'),(7,'ASISTENTE'),(8,'ASISTENTE DE ADMINISTRACION'),(9,'ASISTENTE DE ALMACEN'),(10,'ASISTENTE DE COMPRAS'),(11,'ASISTENTE DE CONTABILIDAD'),(12,'ASISTENTE DE FACTURACION'),(13,'ASISTENTE DE LOGISTICA OPERACIONAL'),(14,'ASISTENTE DE PLANIFICACION'),(15,'ASISTENTE DE RECURSOS HUMANOS'),(16,'ASISTENTE DE TRAZABILIDAD'),(17,'AYUDANTE DE CHOFER'),(18,'CHOFER'),(19,'CONTADOR'),(20,'COORDINADOR AMBIENTAL'),(21,'COORDINADOR DE CALIDAD'),(22,'COORDINADOR DE TALADROS'),(23,'CUSTODIO DEL DESECHO'),(24,'ELECTRICISTA'),(25,'GERENTE DE CASSO'),(26,'GERENTE DE IT'),(27,'GERENTE DE OPERACIONES Y COMERCIALIZACION'),(28,'GERENTE DE PLANTA '),(29,'INSPECTOR CASSO'),(30,'LOGISTICA OPERACIONAL'),(31,'MANTENIMIENTO OFICINA'),(32,'OBRERO'),(33,'OPERADOR DE INCINERACION'),(34,'OPERADOR DE MANTENIMIENTO'),(35,'OPERADOR DE TRAT. DE EFLUENTES'),(36,'PARAMEDICO'),(37,'PLANIFICADOR'),(38,'RECEPCIONISTA'),(39,'RECEPTOR DE DESECHOS'),(40,'SOLDADOR'),(41,'SUPERV. DE AREA DE BIORREMEDIACION'),(42,'SUPERVISOR'),(43,'SUPERVISOR AMBIENTAL'),(44,'SUPERVISOR CASSO'),(45,'SUPERVISOR DE  RR HH Y NOMINA'),(46,'SUPERVISOR DE COMPRAS'),(47,'SUPERVISOR DE FINANZAS'),(48,'SUPERVISOR DE LOGISTICA OPERACIONAL'),(49,'SUPERVISOR DE OPERACIONES'),(50,'SUPERVISOR DE SERVICIOS AL CLIENTE'),(51,'SUPERVISOR SIHO'),(52,'TRABAJADOR NIVEL 2'),(53,'VIGILANTE DE 1ERA.');
/*!40000 ALTER TABLE `cargos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `centros`
--

DROP TABLE IF EXISTS `centros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `centros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='centros integrales de manejo de desechos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `centros`
--

LOCK TABLES `centros` WRITE;
/*!40000 ALTER TABLE `centros` DISABLE KEYS */;
INSERT INTO `centros` VALUES (2,'CIMD LOMA LINDA  '),(3,'CIMD SANTA ROSA'),(1,'OFICINA ANACO  ');
/*!40000 ALTER TABLE `centros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciudades`
--

DROP TABLE IF EXISTS `ciudades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ciudades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `estado_id` int(11) NOT NULL,
  `ciudad` varchar(200) NOT NULL,
  `capital` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `id_estado` (`estado_id`),
  CONSTRAINT `ciudades_ibfk_1` FOREIGN KEY (`estado_id`) REFERENCES `estados` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=523 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudades`
--

LOCK TABLES `ciudades` WRITE;
/*!40000 ALTER TABLE `ciudades` DISABLE KEYS */;
INSERT INTO `ciudades` VALUES (1,1,'Maroa',0),(2,1,'Puerto Ayacucho',1),(3,1,'San Fernando de Atabapo',0),(4,2,'Anaco',0),(5,2,'Aragua de Barcelona',0),(6,2,'Barcelona',1),(7,2,'Boca de Uchire',0),(8,2,'Cantaura',0),(9,2,'Clarines',0),(10,2,'El Chaparro',0),(11,2,'El Pao Anzoátegui',0),(12,2,'El Tigre',0),(13,2,'El Tigrito',0),(14,2,'Guanape',0),(15,2,'Guanta',0),(16,2,'Lechería',0),(17,2,'Onoto',0),(18,2,'Pariaguán',0),(19,2,'Píritu',0),(20,2,'Puerto La Cruz',0),(21,2,'Puerto Píritu',0),(22,2,'Sabana de Uchire',0),(23,2,'San Mateo Anzoátegui',0),(24,2,'San Pablo Anzoátegui',0),(25,2,'San Tomé',0),(26,2,'Santa Ana de Anzoátegui',0),(27,2,'Santa Fe Anzoátegui',0),(28,2,'Santa Rosa',0),(29,2,'Soledad',0),(30,2,'Urica',0),(31,2,'Valle de Guanape',0),(43,3,'Achaguas',0),(44,3,'Biruaca',0),(45,3,'Bruzual',0),(46,3,'El Amparo',0),(47,3,'El Nula',0),(48,3,'Elorza',0),(49,3,'Guasdualito',0),(50,3,'Mantecal',0),(51,3,'Puerto Páez',0),(52,3,'San Fernando de Apure',1),(53,3,'San Juan de Payara',0),(54,4,'Barbacoas',0),(55,4,'Cagua',0),(56,4,'Camatagua',0),(58,4,'Choroní',0),(59,4,'Colonia Tovar',0),(60,4,'El Consejo',0),(61,4,'La Victoria',0),(62,4,'Las Tejerías',0),(63,4,'Magdaleno',0),(64,4,'Maracay',1),(65,4,'Ocumare de La Costa',0),(66,4,'Palo Negro',0),(67,4,'San Casimiro',0),(68,4,'San Mateo',0),(69,4,'San Sebastián',0),(70,4,'Santa Cruz de Aragua',0),(71,4,'Tocorón',0),(72,4,'Turmero',0),(73,4,'Villa de Cura',0),(74,4,'Zuata',0),(75,5,'Barinas',1),(76,5,'Barinitas',0),(77,5,'Barrancas',0),(78,5,'Calderas',0),(79,5,'Capitanejo',0),(80,5,'Ciudad Bolivia',0),(81,5,'El Cantón',0),(82,5,'Las Veguitas',0),(83,5,'Libertad de Barinas',0),(84,5,'Sabaneta',0),(85,5,'Santa Bárbara de Barinas',0),(86,5,'Socopó',0),(87,6,'Caicara del Orinoco',0),(88,6,'Canaima',0),(89,6,'Ciudad Bolívar',1),(90,6,'Ciudad Piar',0),(91,6,'El Callao',0),(92,6,'El Dorado',0),(93,6,'El Manteco',0),(94,6,'El Palmar',0),(95,6,'El Pao',0),(96,6,'Guasipati',0),(97,6,'Guri',0),(98,6,'La Paragua',0),(99,6,'Matanzas',0),(100,6,'Puerto Ordaz',0),(101,6,'San Félix',0),(102,6,'Santa Elena de Uairén',0),(103,6,'Tumeremo',0),(104,6,'Unare',0),(105,6,'Upata',0),(106,7,'Bejuma',0),(107,7,'Belén',0),(108,7,'Campo de Carabobo',0),(109,7,'Canoabo',0),(110,7,'Central Tacarigua',0),(111,7,'Chirgua',0),(112,7,'Ciudad Alianza',0),(113,7,'El Palito',0),(114,7,'Guacara',0),(115,7,'Guigue',0),(116,7,'Las Trincheras',0),(117,7,'Los Guayos',0),(118,7,'Mariara',0),(119,7,'Miranda',0),(120,7,'Montalbán',0),(121,7,'Morón',0),(122,7,'Naguanagua',0),(123,7,'Puerto Cabello',0),(124,7,'San Joaquín',0),(125,7,'Tocuyito',0),(126,7,'Urama',0),(127,7,'Valencia',1),(128,7,'Vigirimita',0),(129,8,'Aguirre',0),(130,8,'Apartaderos Cojedes',0),(131,8,'Arismendi',0),(132,8,'Camuriquito',0),(133,8,'El Baúl',0),(134,8,'El Limón',0),(135,8,'El Pao Cojedes',0),(136,8,'El Socorro',0),(137,8,'La Aguadita',0),(138,8,'Las Vegas',0),(139,8,'Libertad de Cojedes',0),(140,8,'Mapuey',0),(141,8,'Piñedo',0),(142,8,'Samancito',0),(143,8,'San Carlos',1),(144,8,'Sucre',0),(145,8,'Tinaco',0),(146,8,'Tinaquillo',0),(147,8,'Vallecito',0),(148,9,'Tucupita',1),(149,24,'Caracas',1),(150,24,'El Junquito',0),(151,10,'Adícora',0),(152,10,'Boca de Aroa',0),(153,10,'Cabure',0),(154,10,'Capadare',0),(155,10,'Capatárida',0),(156,10,'Chichiriviche',0),(157,10,'Churuguara',0),(158,10,'Coro',1),(159,10,'Cumarebo',0),(160,10,'Dabajuro',0),(161,10,'Judibana',0),(162,10,'La Cruz de Taratara',0),(163,10,'La Vela de Coro',0),(164,10,'Los Taques',0),(165,10,'Maparari',0),(166,10,'Mene de Mauroa',0),(167,10,'Mirimire',0),(168,10,'Pedregal',0),(169,10,'Píritu Falcón',0),(170,10,'Pueblo Nuevo Falcón',0),(171,10,'Puerto Cumarebo',0),(172,10,'Punta Cardón',0),(173,10,'Punto Fijo',0),(174,10,'San Juan de Los Cayos',0),(175,10,'San Luis',0),(176,10,'Santa Ana Falcón',0),(177,10,'Santa Cruz De Bucaral',0),(178,10,'Tocopero',0),(179,10,'Tocuyo de La Costa',0),(180,10,'Tucacas',0),(181,10,'Yaracal',0),(182,11,'Altagracia de Orituco',0),(183,11,'Cabruta',0),(184,11,'Calabozo',0),(185,11,'Camaguán',0),(196,11,'Chaguaramas Guárico',0),(197,11,'El Socorro',0),(198,11,'El Sombrero',0),(199,11,'Las Mercedes de Los Llanos',0),(200,11,'Lezama',0),(201,11,'Onoto',0),(202,11,'Ortíz',0),(203,11,'San José de Guaribe',0),(204,11,'San Juan de Los Morros',1),(205,11,'San Rafael de Laya',0),(206,11,'Santa María de Ipire',0),(207,11,'Tucupido',0),(208,11,'Valle de La Pascua',0),(209,11,'Zaraza',0),(210,12,'Aguada Grande',0),(211,12,'Atarigua',0),(212,12,'Barquisimeto',1),(213,12,'Bobare',0),(214,12,'Cabudare',0),(215,12,'Carora',0),(216,12,'Cubiro',0),(217,12,'Cují',0),(218,12,'Duaca',0),(219,12,'El Manzano',0),(220,12,'El Tocuyo',0),(221,12,'Guaríco',0),(222,12,'Humocaro Alto',0),(223,12,'Humocaro Bajo',0),(224,12,'La Miel',0),(225,12,'Moroturo',0),(226,12,'Quíbor',0),(227,12,'Río Claro',0),(228,12,'Sanare',0),(229,12,'Santa Inés',0),(230,12,'Sarare',0),(231,12,'Siquisique',0),(232,12,'Tintorero',0),(233,13,'Apartaderos Mérida',0),(234,13,'Arapuey',0),(235,13,'Bailadores',0),(236,13,'Caja Seca',0),(237,13,'Canaguá',0),(238,13,'Chachopo',0),(239,13,'Chiguara',0),(240,13,'Ejido',0),(241,13,'El Vigía',0),(242,13,'La Azulita',0),(243,13,'La Playa',0),(244,13,'Lagunillas Mérida',0),(245,13,'Mérida',1),(246,13,'Mesa de Bolívar',0),(247,13,'Mucuchíes',0),(248,13,'Mucujepe',0),(249,13,'Mucuruba',0),(250,13,'Nueva Bolivia',0),(251,13,'Palmarito',0),(252,13,'Pueblo Llano',0),(253,13,'Santa Cruz de Mora',0),(254,13,'Santa Elena de Arenales',0),(255,13,'Santo Domingo',0),(256,13,'Tabáy',0),(257,13,'Timotes',0),(258,13,'Torondoy',0),(259,13,'Tovar',0),(260,13,'Tucani',0),(261,13,'Zea',0),(262,14,'Araguita',0),(263,14,'Carrizal',0),(264,14,'Caucagua',0),(265,14,'Chaguaramas Miranda',0),(266,14,'Charallave',0),(267,14,'Chirimena',0),(268,14,'Chuspa',0),(269,14,'Cúa',0),(270,14,'Cupira',0),(271,14,'Curiepe',0),(272,14,'El Guapo',0),(273,14,'El Jarillo',0),(274,14,'Filas de Mariche',0),(275,14,'Guarenas',0),(276,14,'Guatire',0),(277,14,'Higuerote',0),(278,14,'Los Anaucos',0),(279,14,'Los Teques',1),(280,14,'Ocumare del Tuy',0),(281,14,'Panaquire',0),(282,14,'Paracotos',0),(283,14,'Río Chico',0),(284,14,'San Antonio de Los Altos',0),(285,14,'San Diego de Los Altos',0),(286,14,'San Fernando del Guapo',0),(287,14,'San Francisco de Yare',0),(288,14,'San José de Los Altos',0),(289,14,'San José de Río Chico',0),(290,14,'San Pedro de Los Altos',0),(291,14,'Santa Lucía',0),(292,14,'Santa Teresa',0),(293,14,'Tacarigua de La Laguna',0),(294,14,'Tacarigua de Mamporal',0),(295,14,'Tácata',0),(296,14,'Turumo',0),(297,15,'Aguasay',0),(298,15,'Aragua de Maturín',0),(299,15,'Barrancas del Orinoco',0),(300,15,'Caicara de Maturín',0),(301,15,'Caripe',0),(302,15,'Caripito',0),(303,15,'Chaguaramal',0),(305,15,'Chaguaramas Monagas',0),(307,15,'El Furrial',0),(308,15,'El Tejero',0),(309,15,'Jusepín',0),(310,15,'La Toscana',0),(311,15,'Maturín',1),(312,15,'Miraflores',0),(313,15,'Punta de Mata',0),(314,15,'Quiriquire',0),(315,15,'San Antonio de Maturín',0),(316,15,'San Vicente Monagas',0),(317,15,'Santa Bárbara',0),(318,15,'Temblador',0),(319,15,'Teresen',0),(320,15,'Uracoa',0),(321,16,'Altagracia',0),(322,16,'Boca de Pozo',0),(323,16,'Boca de Río',0),(324,16,'El Espinal',0),(325,16,'El Valle del Espíritu Santo',0),(326,16,'El Yaque',0),(327,16,'Juangriego',0),(328,16,'La Asunción',1),(329,16,'La Guardia',0),(330,16,'Pampatar',0),(331,16,'Porlamar',0),(332,16,'Puerto Fermín',0),(333,16,'Punta de Piedras',0),(334,16,'San Francisco de Macanao',0),(335,16,'San Juan Bautista',0),(336,16,'San Pedro de Coche',0),(337,16,'Santa Ana de Nueva Esparta',0),(338,16,'Villa Rosa',0),(339,17,'Acarigua',0),(340,17,'Agua Blanca',0),(341,17,'Araure',0),(342,17,'Biscucuy',0),(343,17,'Boconoito',0),(344,17,'Campo Elías',0),(345,17,'Chabasquén',0),(346,17,'Guanare',1),(347,17,'Guanarito',0),(348,17,'La Aparición',0),(349,17,'La Misión',0),(350,17,'Mesa de Cavacas',0),(351,17,'Ospino',0),(352,17,'Papelón',0),(353,17,'Payara',0),(354,17,'Pimpinela',0),(355,17,'Píritu de Portuguesa',0),(356,17,'San Rafael de Onoto',0),(357,17,'Santa Rosalía',0),(358,17,'Turén',0),(359,18,'Altos de Sucre',0),(360,18,'Araya',0),(361,18,'Cariaco',0),(362,18,'Carúpano',0),(363,18,'Casanay',0),(364,18,'Cumaná',1),(365,18,'Cumanacoa',0),(366,18,'El Morro Puerto Santo',0),(367,18,'El Pilar',0),(368,18,'El Poblado',0),(369,18,'Guaca',0),(370,18,'Guiria',0),(371,18,'Irapa',0),(372,18,'Manicuare',0),(373,18,'Mariguitar',0),(374,18,'Río Caribe',0),(375,18,'San Antonio del Golfo',0),(376,18,'San José de Aerocuar',0),(377,18,'San Vicente de Sucre',0),(378,18,'Santa Fe de Sucre',0),(379,18,'Tunapuy',0),(380,18,'Yaguaraparo',0),(381,18,'Yoco',0),(382,19,'Abejales',0),(383,19,'Borota',0),(384,19,'Bramon',0),(385,19,'Capacho',0),(386,19,'Colón',0),(387,19,'Coloncito',0),(388,19,'Cordero',0),(389,19,'El Cobre',0),(390,19,'El Pinal',0),(391,19,'Independencia',0),(392,19,'La Fría',0),(393,19,'La Grita',0),(394,19,'La Pedrera',0),(395,19,'La Tendida',0),(396,19,'Las Delicias',0),(397,19,'Las Hernández',0),(398,19,'Lobatera',0),(399,19,'Michelena',0),(400,19,'Palmira',0),(401,19,'Pregonero',0),(402,19,'Queniquea',0),(403,19,'Rubio',0),(404,19,'San Antonio del Tachira',0),(405,19,'San Cristobal',1),(406,19,'San José de Bolívar',0),(407,19,'San Josecito',0),(408,19,'San Pedro del Río',0),(409,19,'Santa Ana Táchira',0),(410,19,'Seboruco',0),(411,19,'Táriba',0),(412,19,'Umuquena',0),(413,19,'Ureña',0),(414,20,'Batatal',0),(415,20,'Betijoque',0),(416,20,'Boconó',0),(417,20,'Carache',0),(418,20,'Chejende',0),(419,20,'Cuicas',0),(420,20,'El Dividive',0),(421,20,'El Jaguito',0),(422,20,'Escuque',0),(423,20,'Isnotú',0),(424,20,'Jajó',0),(425,20,'La Ceiba',0),(426,20,'La Concepción de Trujllo',0),(427,20,'La Mesa de Esnujaque',0),(428,20,'La Puerta',0),(429,20,'La Quebrada',0),(430,20,'Mendoza Fría',0),(431,20,'Meseta de Chimpire',0),(432,20,'Monay',0),(433,20,'Motatán',0),(434,20,'Pampán',0),(435,20,'Pampanito',0),(436,20,'Sabana de Mendoza',0),(437,20,'San Lázaro',0),(438,20,'Santa Ana de Trujillo',0),(439,20,'Tostós',0),(440,20,'Trujillo',1),(441,20,'Valera',0),(442,21,'Carayaca',0),(443,21,'Litoral',0),(444,25,'Archipiélago Los Roques',0),(445,22,'Aroa',0),(446,22,'Boraure',0),(447,22,'Campo Elías de Yaracuy',0),(448,22,'Chivacoa',0),(449,22,'Cocorote',0),(450,22,'Farriar',0),(451,22,'Guama',0),(452,22,'Marín',0),(453,22,'Nirgua',0),(454,22,'Sabana de Parra',0),(455,22,'Salom',0),(456,22,'San Felipe',1),(457,22,'San Pablo de Yaracuy',0),(458,22,'Urachiche',0),(459,22,'Yaritagua',0),(460,22,'Yumare',0),(461,23,'Bachaquero',0),(462,23,'Bobures',0),(463,23,'Cabimas',0),(464,23,'Campo Concepción',0),(465,23,'Campo Mara',0),(466,23,'Campo Rojo',0),(467,23,'Carrasquero',0),(468,23,'Casigua',0),(469,23,'Chiquinquirá',0),(470,23,'Ciudad Ojeda',0),(471,23,'El Batey',0),(472,23,'El Carmelo',0),(473,23,'El Chivo',0),(474,23,'El Guayabo',0),(475,23,'El Mene',0),(476,23,'El Venado',0),(477,23,'Encontrados',0),(478,23,'Gibraltar',0),(479,23,'Isla de Toas',0),(480,23,'La Concepción del Zulia',0),(481,23,'La Paz',0),(482,23,'La Sierrita',0),(483,23,'Lagunillas del Zulia',0),(484,23,'Las Piedras de Perijá',0),(485,23,'Los Cortijos',0),(486,23,'Machiques',0),(487,23,'Maracaibo',1),(488,23,'Mene Grande',0),(489,23,'Palmarejo',0),(490,23,'Paraguaipoa',0),(491,23,'Potrerito',0),(492,23,'Pueblo Nuevo del Zulia',0),(493,23,'Puertos de Altagracia',0),(494,23,'Punta Gorda',0),(495,23,'Sabaneta de Palma',0),(496,23,'San Francisco',0),(497,23,'San José de Perijá',0),(498,23,'San Rafael del Moján',0),(499,23,'San Timoteo',0),(500,23,'Santa Bárbara Del Zulia',0),(501,23,'Santa Cruz de Mara',0),(502,23,'Santa Cruz del Zulia',0),(503,23,'Santa Rita',0),(504,23,'Sinamaica',0),(505,23,'Tamare',0),(506,23,'Tía Juana',0),(507,23,'Villa del Rosario',0),(508,21,'La Guaira',1),(509,21,'Catia La Mar',0),(510,21,'Macuto',0),(511,21,'Naiguatá',0),(512,25,'Archipiélago Los Monjes',0),(513,25,'Isla La Tortuga y Cayos adyacentes',0),(514,25,'Isla La Sola',0),(515,25,'Islas Los Testigos',0),(516,25,'Islas Los Frailes',0),(517,25,'Isla La Orchila',0),(518,25,'Archipiélago Las Aves',0),(519,25,'Isla de Aves',0),(520,25,'Isla La Blanquilla',0),(521,25,'Isla de Patos',0),(522,25,'Islas Los Hermanos',0);
/*!40000 ALTER TABLE `ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `codes`
--

DROP TABLE IF EXISTS `codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `codes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `station_id` int(10) unsigned NOT NULL,
  `group_id` int(10) unsigned NOT NULL,
  `pass_code` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `codes_station_id_foreign` (`station_id`),
  KEY `codes_group_id_foreign` (`group_id`),
  CONSTRAINT `codes_group_id_foreign` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`),
  CONSTRAINT `codes_station_id_foreign` FOREIGN KEY (`station_id`) REFERENCES `stations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `codes`
--

LOCK TABLES `codes` WRITE;
/*!40000 ALTER TABLE `codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `educationlevels`
--

DROP TABLE IF EXISTS `educationlevels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `educationlevels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `educationlevels`
--

LOCK TABLES `educationlevels` WRITE;
/*!40000 ALTER TABLE `educationlevels` DISABLE KEYS */;
INSERT INTO `educationlevels` VALUES (1,'Educación Inicial '),(2,'Educación Primaria'),(3,'Educación Secundaria'),(5,'Educación Superior'),(6,'Ninguna'),(4,'Técnico medio');
/*!40000 ALTER TABLE `educationlevels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empleados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `centro` varchar(45) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `segundo_nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `segundo_apellido` varchar(45) DEFAULT NULL,
  `preficed_id` int(11) DEFAULT NULL,
  `ci` varchar(45) DEFAULT NULL,
  `prefirif_id` int(11) DEFAULT NULL,
  `rif` varchar(45) DEFAULT NULL,
  `maritalstatus_id` int(11) DEFAULT NULL,
  `fecha_nacimiento` varchar(10) DEFAULT NULL,
  `sexo_id` int(11) DEFAULT NULL,
  `sangre_tipo` varchar(45) DEFAULT NULL,
  `lateralidad` varchar(45) DEFAULT NULL,
  `telf_fijo` varchar(45) DEFAULT NULL,
  `telf` varchar(45) DEFAULT NULL,
  `educationlevel_id` int(11) DEFAULT NULL,
  `cargo_id` int(11) DEFAULT NULL,
  `antiguedad` varchar(10) DEFAULT NULL,
  `estado_id` int(11) DEFAULT NULL,
  `municipio_id` int(11) DEFAULT NULL,
  `parroquia_id` int(11) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `discapacidad` varchar(600) DEFAULT NULL,
  `nombre_contacto` varchar(45) DEFAULT NULL,
  `rela_contacto` varchar(45) DEFAULT NULL,
  `telf_contacto` varchar(45) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` int(11) DEFAULT NULL COMMENT 'usuario que generó el registro',
  `user_id_update` int(11) DEFAULT NULL COMMENT 'Servirá para conocer quién actualizó el último registro',
  `tipocontrato_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `maritalstatus_id` (`maritalstatus_id`),
  KEY `cargo_id` (`cargo_id`),
  KEY `estado_id` (`estado_id`),
  KEY `municipio_id` (`municipio_id`),
  KEY `parroquia_id` (`parroquia_id`),
  KEY `sexo_id` (`sexo_id`),
  KEY `educationlevel_id` (`educationlevel_id`),
  KEY `empleados_ibfk_9_idx` (`user_id`),
  KEY `empleados_ibfk_10_idx` (`preficed_id`),
  KEY `empleados_ibfk_11_idx` (`prefirif_id`),
  KEY `tipocontrato_idx` (`tipocontrato_id`),
  CONSTRAINT `empleados_ibfk_10` FOREIGN KEY (`preficed_id`) REFERENCES `preficeds` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `empleados_ibfk_2` FOREIGN KEY (`maritalstatus_id`) REFERENCES `maritalstatus` (`id`),
  CONSTRAINT `empleados_ibfk_3` FOREIGN KEY (`cargo_id`) REFERENCES `cargos` (`id`),
  CONSTRAINT `empleados_ibfk_4` FOREIGN KEY (`estado_id`) REFERENCES `estados` (`id`),
  CONSTRAINT `empleados_ibfk_5` FOREIGN KEY (`municipio_id`) REFERENCES `municipios` (`id`),
  CONSTRAINT `empleados_ibfk_6` FOREIGN KEY (`parroquia_id`) REFERENCES `parroquias` (`id`),
  CONSTRAINT `empleados_ibfk_7` FOREIGN KEY (`sexo_id`) REFERENCES `sexos` (`id`),
  CONSTRAINT `empleados_ibfk_8` FOREIGN KEY (`educationlevel_id`) REFERENCES `educationlevels` (`id`),
  CONSTRAINT `empleados_ibfk_9` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `tipocontrato` FOREIGN KEY (`tipocontrato_id`) REFERENCES `tipocontratos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=183 DEFAULT CHARSET=utf8 COMMENT='Registros de empleados';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (147,'TALADROS-NORTE','Leonardo','Alexander','Alcalá','Bello',1,'17286693',0,NULL,5,'08-05-1985',2,'o+','diestro','02824257550','04260846640',5,43,'03-06-2015',2,8,26,'Francisco de miranda calle paez.Casa Nº 3-17','','María José Martinez','Conyugue','0426-382-26-06','2015-08-24 19:51:51','2015-08-24 19:53:14',3,3,NULL),(148,'TALADROS-ANACO','Victor','Daniel','Velis','Ortiz',1,'19312275',0,NULL,1,'28-12-1989',2,'o+','diestro','','04160830525',3,43,'30-07-2014',2,8,26,'Calle Tropical Sector Un Solo Pueblo Casa Nº 7','','Yorgelis Rodrígues','Hermana','0426-998-0836','2015-08-24 20:02:47','2015-08-24 20:09:51',3,3,NULL),(149,'TALADROS-ANACO','Yosemar','Gregorio','Valderrama','Molina',1,'20710635',1,'207106352',1,'20-06-1988',2,'','diestro','0414-785-92-64','',5,43,'24-01-2014',2,26,72,'Sector Francisco de miranda','','Ana Cedeño','Esposa','0416-034-7543','2015-08-24 20:33:54','2015-08-24 20:33:54',3,3,NULL),(150,'TALADROS-ANACO','Johan','','Mayorga','Muñoz',1,'14891108',1,'148911084',1,'22-03-1980',2,'','siniestro','','0414-8374414',5,43,'29-07-2015',2,8,26,'Av Jose  Antonio Anzoátegui Cruce con Calle Principal De Guayabal','','Mariela Muñoz','Madre','0414-7783539','2015-08-24 20:44:00','2015-08-24 20:44:00',3,3,NULL),(151,'TALADROS-NORTE','Robert','José','Gonzalez','Azuaje',1,'19775439',1,'197754393',1,'26-10-1990',2,'b-','diestro','','0426-4800689',5,43,'26-02-2013',2,22,62,'Alí Primera C/ paraiso 29','','Antonio González','Padre','016-8877950','2015-08-24 20:49:03','2015-08-24 20:49:03',3,3,NULL),(152,'TALADROS-NORTE','Julio','Cesar','Camacho','',1,'19248314',1,'192483146',1,'15-08-1987',2,'','diestro','','0426-885-78-07',5,43,'18-12-2014',2,8,26,'Calle Juan Antonio Sotillo','','Yesmi Camacho','Hermana','0426-880-72-02','2015-08-24 20:53:25','2015-08-24 20:53:25',3,3,NULL),(153,'TALADROS-ANACO','Antonio','Manuel','Lanza','Suarez',1,'13177420',0,NULL,1,'09-09-1975',2,'o-','diestro','0282-788-29-34','0426-380-79-50',5,43,'29-07-2015',2,8,26,'Sector Un Solo Pueblo','','Yaneida Zapata','Amistad','0414-780-63-71','2015-08-24 20:57:56','2015-08-24 20:57:56',3,3,NULL),(154,'TALADROS-ANACO','Rodney','Francisco','Arguello','Rojas',1,'19644642',1,'196446423',1,'01-02-1990',2,'a+','diestro','','0426-964-48-28',5,43,'25-10-2013',2,8,26,'Sector Nuevo Pueblo. Calle democracia #4-23b','','Rutbely','Novia','0416-033-90-14','2015-08-24 21:02:32','2015-08-24 21:02:32',3,3,NULL),(155,'TALADROS-ANACO','Alexis','Manuel','Osorio','Almeida',1,'17490208',1,'174902085',1,'09-08-1985',2,'b+','siniestro','0282-4552881','0416-582-85-90',5,43,'08-05-2015',2,22,62,'Primero Pueblo Nuevo. Los cocos #59','','Virgia Torrealba','Madre','0416-583-38-89','2015-08-24 21:07:43','2015-08-24 21:07:43',3,3,NULL),(156,'TALADROS-ANACO','Elbis','Leonardo','Franco','Perez',1,'19376329',1,'193763290',1,'04-04-1989',2,'ab+','diestro','','0426-225-72-87',5,43,'16-01-2013',2,8,26,'C/ Sucre Con Callejón Sucre #13','','Carmen Pérez','Madre','0416-1205907','2015-08-24 21:11:37','2015-08-24 21:11:37',3,3,NULL),(157,'TALADROS-ANACO','Orlando','Jose','Tablante','Aray',1,'19489868',0,NULL,1,'09-09-1989',2,'o+','diestro','0282-7882542','0424-8855531',5,43,'24-06-2014',2,22,62,'C/ Paraiso Sector Alí Primera','','Dilia Aray','Madre','0416-1976413','2015-08-25 15:28:56','2015-08-25 15:28:56',3,3,NULL),(158,'TALADROS-ANACO','Robinson','Jose','Perez','Garcia',1,'15212209',0,NULL,1,'19-06-1980',2,'o+','siniestro','0282-4578633','0426-3813891',5,43,'28-04-2015',2,26,72,'C/ Anzoátegui Nº 19','','Marileidys','Hermana','0424-8682669','2015-08-25 15:37:08','2015-08-25 15:37:08',3,3,NULL),(159,'TALADROS-NORTE','Emilio','Rafael','Jimenez','Gomez',1,'5192685',0,NULL,1,'14-01-1957',2,'a+','diestro','0281-2682370','0414-5429135',5,43,'18-12-2014',2,15,40,'Urbanización el chaure, segunda calle Nº 56','','Isabel Jimenez','Madre','0281-2682370','2015-08-25 15:42:55','2015-08-25 15:42:55',3,3,NULL),(160,'TALADROS-ANACO','Tirso','del valle','Reyes','Rojas',1,'18234673',0,NULL,1,'07-01-1988',2,'o+','diestro','','0412-0852173',5,43,'07-01-2015',2,26,71,'C/ Freites','','Yalitza Rojas','Madre','0412-2011190','2015-08-25 15:51:56','2015-08-25 15:51:56',3,3,NULL),(161,'TALADROS-ANACO','Oscar','Jesus','Torres','Parada',1,'19390079',1,'193900794',1,'27-08-1987',2,'o+','diestro','0282-4245801','0424-6059386',5,43,'12-05-2015',2,8,26,'C/ Orinoco Residencias Famaca Edif. Italia Planta Baja','','Jagnira','Comprometida','0424-8558836','2015-08-25 15:59:21','2015-08-25 15:59:21',3,3,NULL),(162,'TALADROS-ANACO','Wilfredo','Jose','Patiño','Guzman',1,'14816355',1,'148163550',1,'10-01-1981',2,'','diestro','','0414-8276166',5,43,'19-08-2014',2,27,75,'Urbanización el Saman. Residencia los samanes. Torre B - Planta baja A','','Wilfredo Patiño','Padre','0414-8393881','2015-08-25 16:06:35','2015-08-25 16:06:35',3,3,NULL),(163,'TALADROS-ANACO','Carlos','De jesus','Guacache','Guevara',1,'14552868',1,'145528689',2,'21-04-1980',2,'a+','diestro','','0426-1897886',5,43,'19-08-2014',15,263,671,'Sector la arboleda C/ el caro N°10','','Carlos Guacache','Padre','0416-2887663','2015-08-25 16:14:45','2015-08-25 16:14:45',3,3,NULL),(164,'TALADROS-ANACO','Romulo','Jose','Gomez','Martinez',1,'15563856',1,'155638569',1,'16-10-1981',2,'o+','siniestro','','0412-4847509',5,43,'28-11-2012',2,22,62,'Sector Negro primero C/ Negro primero N°13','','Eunice Josefina Martinez  Rojas','Madre','0424-8913969','2015-08-25 16:22:09','2015-08-25 16:22:09',3,3,NULL),(165,'OFICINA ANACO','Luis','Alberto','Brito','Sucre',1,'25428941',0,NULL,1,'18-08-1995',2,'o+','diestro','0282-4226432','',3,4,'01-06-2015',2,8,26,'Santiago mariño C/ via alterna viento fresco Nº1','','Nancy Sucre','Madre','0426-9823049','2015-08-25 18:42:23','2015-08-25 18:42:23',3,3,NULL),(166,'OFICINA ANACO','Taydiht','Del Valle','Perez','',1,'11001406',1,'110014062',1,'20-08-1972',1,'a+','diestro','0282-4241572','0424-8979333',5,13,'02-01-2013',2,8,26,'C/ 11 cruce con democracia Nº 1-21','','Maria dolores perez','Hermana','0282-4241572','2015-08-25 18:50:55','2015-08-25 18:50:55',3,3,NULL),(167,'OFICINA ANACO','Gabriel','','Cortes','Alvarez',1,'12577257',1,'125772575',1,'13-08-1977',2,'o+','diestro','0282-5147545','0414-8063759',5,30,'19-01-2015',2,8,26,'C/ Comercio. Ed la Florida Depto. Nº1','','Maria de los angeles','Madre','0414-8228771','2015-08-25 19:02:40','2015-08-25 19:02:40',3,3,NULL),(168,'OFICINA ANACO','Yvis','Karelys','Li','Garcia',1,'20447178',1,'204471785',1,'04-01-1990',1,'a+','diestro','0282-4242901','0414-9838871',5,14,'17-07-2015',2,8,26,'C/ 11 Nº 3-40','','Jhon Li','Padre','0424-3280788','2015-08-25 19:21:08','2015-08-25 19:22:21',3,3,NULL),(169,'OFICINA ANACO','Virginia','Coromoto','Cisa','Guillen',1,'16064565',0,NULL,1,'27-02-1984',1,'o+','diestro','0282-5146767','0424-8701057',5,8,'08-07-2008',2,8,26,'C/ Apure con democracia, sector Pueblo Nuevo','','Emilia Cisa','Hermana','0414-8261776','2015-08-25 19:32:39','2015-08-25 19:32:39',3,3,NULL),(170,'OFICINA ANACO','Yuliangel','Crismar','Perez','Roldan',1,'16963954',1,'169639546',1,'14-06-1986',1,'o+','diestro','','0414-7959566',5,37,'04-10-2011',2,8,26,'C/ San nicolas Sector Prados del Este. Nº6','','Yuli Roldan','Madre','0424-8878383','2015-08-25 19:43:12','2015-08-25 19:43:12',3,3,NULL),(171,'OFICINA ANACO','Yessika','Jose','Quintana','Guerra',1,'20446014',0,NULL,1,'10-09-1992',1,'o+','diestro','0282-4242727','0414-8201519',5,14,'01-07-2015',2,8,26,'C/ Romulo Gallegos Nº2- Sector José Antonio Anzoátegui','','Letty Guerra','Madre','0424-8510950','2015-08-25 19:52:05','2015-08-25 19:52:05',3,3,NULL),(172,'TALADROS-ANACO','Jose','Angel','Maestre','Maita',1,'19339890',1,'193398900',1,'31-12-1986',2,'o+','diestro','0282-9200821','0426-6210031',5,43,'05-08-2015',2,8,26,'Sector la floresta. 4ta calle Nº32','','Jose Maestre','Padre','0416-7814222','2015-08-26 12:38:12','2015-08-26 12:38:12',3,3,NULL),(173,'TALADROS-ANACO','Humberto','Jose','Bolivar','Hernandez',1,'14673053',0,NULL,1,'14-05-1981',2,'o+','diestro','','0424-3190029',4,43,'22-07-2015',11,137,439,'Urb Los Cerritos 2 C/ 5 Nº6','','Maria Isabel Hernandez','Madre','0424-8225003','2015-08-26 12:45:47','2015-08-26 12:45:47',3,3,NULL),(174,'TALADROS-NORTE','Yon','Josue','Guillen','Davila',1,'19503383',1,'195033832',1,'25-07-1989',2,'o+','diestro','','0424-7650300',5,43,'18-12-2014',2,8,26,'AV Mérida C/ Junín Edif. Doña Isabel 3er piso apto Nº 8','','Yudith Davila','Madre','0414-7457233','2015-08-26 13:13:16','2015-08-26 13:13:46',3,3,NULL),(175,'TALADROS-NORTE','Geovanni','Jose','Rodriguez','Guevara',1,'17999155',0,NULL,1,'11-12-1982',2,'','diestro','','0424-8623707',5,43,'18-12-2014',2,8,26,'Urb Terrazas de Anaco Nº 1','','Franmelys','Esposa','0414-7753732','2015-08-26 14:13:23','2015-08-26 14:13:23',3,3,NULL),(179,'TALADROS-ANACO','Marcos','Antonio','Roca','Perez',1,'22852644',0,NULL,1,'16-07-1991',2,'o+','diestro','0282-4578384','0412-4991969',4,43,'24-06-2015',2,26,72,'C/ Monagas','','Carmen Roca','Hermana','0414-7765358','2015-08-26 16:01:56','2015-08-26 16:01:56',3,3,NULL),(180,'TALADROS-ANACO','Nilio','De Jesus','Fernandez','Avila',1,'18596705',0,NULL,1,'17-03-1989',2,'o+','diestro','0281-5117680','0424-8192997',5,43,'24-06-2014',2,13,35,'Vereda 3 Casa Nº 8','','Norberto Fernandez','Padre','0414-8236505','2015-08-26 16:08:16','2015-08-26 16:08:16',3,3,NULL),(181,'TALADROS-ANACO','Jose','Gregorio','Ascenso','Rivero',1,'20918834',1,'209188348',2,'02-10-1991',2,'','diestro','0291-6519846','0426-6821150',5,43,'12-02-2015',15,265,676,'Urb. La Libertad C/ c. Casa Nº 47','','Leide Pizarro','Esposa','0426-9970445','2015-08-26 17:52:34','2015-08-26 20:33:44',3,3,2),(182,'test','calos','lios','lusis','cartuvchos',1,'12457896',1,'125852141441',4,'13-06-1990',2,'ab+','siniestro','','',2,15,'06-08-2015',13,189,552,'calle las palmas','discapacidad 1\r\ndiscapacidad 2\r\nmejorar conti\r\nLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas.','FULANO','SULTANO','65132032','2015-08-26 20:45:13','2015-08-28 17:35:51',3,3,2);
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados`
--

DROP TABLE IF EXISTS `estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `iso_3166-2` varchar(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados`
--

LOCK TABLES `estados` WRITE;
/*!40000 ALTER TABLE `estados` DISABLE KEYS */;
INSERT INTO `estados` VALUES (1,'Amazonas','VE-X'),(2,'Anzoátegui','VE-B'),(3,'Apure','VE-C'),(4,'Aragua','VE-D'),(5,'Barinas','VE-E'),(6,'Bolívar','VE-F'),(7,'Carabobo','VE-G'),(8,'Cojedes','VE-H'),(9,'Delta Amacuro','VE-Y'),(10,'Falcón','VE-I'),(11,'Guárico','VE-J'),(12,'Lara','VE-K'),(13,'Mérida','VE-L'),(14,'Miranda','VE-M'),(15,'Monagas','VE-N'),(16,'Nueva Esparta','VE-O'),(17,'Portuguesa','VE-P'),(18,'Sucre','VE-R'),(19,'Táchira','VE-S'),(20,'Trujillo','VE-T'),(21,'Vargas','VE-W'),(22,'Yaracuy','VE-U'),(23,'Zulia','VE-V'),(24,'Distrito Capital','VE-A'),(25,'Dependencias Federales','VE-Z');
/*!40000 ALTER TABLE `estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `familiars`
--

DROP TABLE IF EXISTS `familiars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `familiars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `ced` varchar(45) NOT NULL,
  `parentesco` varchar(45) NOT NULL,
  `nacimiento` varchar(10) DEFAULT NULL,
  `sexo_id` int(11) NOT NULL,
  `empleado_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `sexo_id` (`sexo_id`,`empleado_id`),
  KEY `empleado_id` (`empleado_id`),
  CONSTRAINT `familiars_ibfk_2` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`) ON DELETE CASCADE,
  CONSTRAINT `familiars_ibfk_3` FOREIGN KEY (`sexo_id`) REFERENCES `sexos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `familiars`
--

LOCK TABLES `familiars` WRITE;
/*!40000 ALTER TABLE `familiars` DISABLE KEYS */;
INSERT INTO `familiars` VALUES (54,'Daniel Alejandro','Velis Solano','','Hijo','27-03-2009',2,148,'2015-08-24 20:02:47','2015-08-24 20:02:47'),(55,'Angel Gabriel','Velis Solano','','Hijo','17-08-2012',2,148,'2015-08-24 20:02:47','2015-08-24 20:02:47'),(56,'Ivanna Lucia','Valderrama','','Hija','13-01-2015',1,149,'2015-08-24 20:33:54','2015-08-24 20:33:54'),(57,'Angel Aziel','Mayorga','','Hijo','10-02-2007',2,150,'2015-08-24 20:44:00','2015-08-24 20:44:00'),(58,'Aristides Alejandro','MAyorga','','Hijo','05-05-2009',2,150,'2015-08-24 20:44:00','2015-08-24 20:44:00'),(59,'Mathias Sebastian','Mayorga','','Hijo','29-03-2012',2,150,'2015-08-24 20:44:00','2015-08-24 20:44:00'),(60,'Gerlis Dayana','Casneiro Azuaje','19156990','Esposo/a','02-02-1988',1,150,'2015-08-24 20:44:00','2015-08-24 20:44:00'),(61,'Alexa Valentina','Osorio Torrealba','','Hija','02-05-2010',1,155,'2015-08-24 21:07:43','2015-08-24 21:07:43'),(62,'Oriana','Tablante','','Hija','02-01-2013',1,157,'2015-08-25 15:28:57','2015-08-25 15:28:57'),(63,'Ana Cristina','Martinez Gonzales','213291360','Esposo/a','09-11-1993',1,160,'2015-08-25 15:51:56','2015-08-25 15:51:56'),(64,'Christian de Jesus','Reyes Martinez','','Hijo','23-04-2013',2,160,'2015-08-25 15:51:56','2015-08-25 15:51:56'),(65,'Mariluz','Martinez','12017304','Esposo/a','21-03-1974',1,163,'2015-08-25 16:14:45','2015-08-25 16:14:45'),(66,'David Josue','Guacache','','Hijo','20-05-2000',2,163,'2015-08-25 16:14:45','2015-08-25 16:14:45'),(67,'Francisco','Martinez','23813855','Hijo','26-02-1996',2,163,'2015-08-25 16:14:45','2015-08-25 16:14:45'),(68,'Anais Josefa','Peña Beracierta','16667376','Esposo/a','29-04-1984',1,164,'2015-08-25 16:22:09','2015-08-25 16:22:09'),(69,'Zarah Camila','Gomez Peña','','Hija','03-04-2011',1,164,'2015-08-25 16:22:09','2015-08-25 16:22:09'),(70,'Gabriel Enrique','Cortes Gonzalez','','Hijo','16-06-2006',2,167,'2015-08-25 19:02:40','2015-08-25 19:02:40'),(71,'Diego Jose','Bolivar Ortega','','Hijo','25-04-2012',2,173,'2015-08-26 12:45:47','2015-08-26 12:45:47'),(72,'Isabella Valentina','Bolivar Fajardo','','Hija','07-10-2014',1,173,'2015-08-26 12:45:47','2015-08-26 12:45:47'),(73,'Mariela Alexandra','Rodriguez Gutierrez','19576102','Esposo/a','07-12-1987',1,174,'2015-08-26 13:13:16','2015-08-26 13:13:16'),(74,'Franmelys','Bolivar','17421767','Esposo/a','04-11-1986',1,175,'2015-08-26 14:13:23','2015-08-26 14:13:23'),(75,'Jose Gregorio','Ascenso Pizarro','','Hijo','16-12-2011',2,181,'2015-08-26 20:33:44','2015-08-26 20:33:44'),(76,'paz','perez','','Hijo','03-08-2015',2,182,'2015-08-28 17:35:51','2015-08-28 17:35:51'),(77,'POASA','PAOLA','','Hija','16-06-2015',1,182,'2015-08-28 17:35:51','2015-08-28 17:35:51'),(78,'LILA','LOMAS','','Hija','03-08-2015',1,182,'2015-08-28 17:35:51','2015-08-28 17:35:51'),(79,'LILASO','LULA','121454878','Esposo/a','19-06-1990',1,182,'2015-08-28 17:35:51','2015-08-28 17:35:51'),(80,'LUSIA','PATRICIA','12154587','Hija','13-01-2004',1,182,'2015-08-28 17:35:51','2015-08-28 17:35:51'),(81,'PAZ','GOMEZ','232656988','Hijo','12-08-1986',2,182,'2015-08-28 17:35:51','2015-08-28 17:35:51'),(82,'LUPITA','PAREJO','21215454','Hija','12-01-1999',1,182,'2015-08-28 17:35:51','2015-08-28 17:35:51'),(83,'ELVIS','PEREZ','215698656','Hijo','20-02-1996',2,182,'2015-08-28 17:35:52','2015-08-28 17:35:51'),(84,'ELVIS','COCHO','21254587856','Hijo','21-09-1993',2,182,'2015-08-28 17:35:52','2015-08-28 17:35:52'),(85,'CARLOSº','EL PROPIO','326569891','Hijo','28-05-1990',2,182,'2015-08-28 17:35:52','2015-08-28 17:35:52');
/*!40000 ALTER TABLE `familiars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `zone_id` int(10) unsigned NOT NULL,
  `schedule_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `groups_name_unique` (`name`),
  KEY `groups_zone_id_foreign` (`zone_id`),
  KEY `groups_schedule_id_foreign` (`schedule_id`),
  CONSTRAINT `groups_schedule_id_foreign` FOREIGN KEY (`schedule_id`) REFERENCES `schedules` (`id`),
  CONSTRAINT `groups_zone_id_foreign` FOREIGN KEY (`zone_id`) REFERENCES `zones` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (2,'cazador','0000-00-00 00:00:00','0000-00-00 00:00:00',2,NULL),(3,'Antorcha','2015-07-27 15:10:30','2015-07-27 15:10:30',2,NULL),(4,'Vengala','2015-07-27 15:10:51','2015-07-27 15:10:51',3,NULL);
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maritalstatus`
--

DROP TABLE IF EXISTS `maritalstatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `maritalstatus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maritalstatus`
--

LOCK TABLES `maritalstatus` WRITE;
/*!40000 ALTER TABLE `maritalstatus` DISABLE KEYS */;
INSERT INTO `maritalstatus` VALUES (1,'Soltero/a'),(2,'Casado/a'),(3,'Divorciado/a'),(4,'Viudo/a'),(5,'Concubino/a');
/*!40000 ALTER TABLE `maritalstatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `alert_id` int(10) unsigned NOT NULL,
  `descriptions` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `messages_alert_id_foreign` (`alert_id`),
  KEY `messages_user_id_foreign` (`user_id`),
  CONSTRAINT `messages_alert_id_foreign` FOREIGN KEY (`alert_id`) REFERENCES `alerts` (`id`),
  CONSTRAINT `messages_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
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
INSERT INTO `migrations` VALUES ('2015_07_13_185459_create_users_table',1),('2015_07_16_130539_create_password_reminders_table',1),('2015_07_20_162151_create_areas_table',1),('2015_07_20_163918_create_zonas_table',1),('2015_07_21_082605_create_person_table',1),('2015_07_21_083711_creaate_schedule_table',1),('2015_07_21_084211_creaate_group_table',1),('2015_07_21_084941_creaate_send_table',1),('2015_07_21_093148_creaate_stacion_table',1),('2015_07_21_094559_creaate_type-alert_table',1),('2015_07_21_100555_creaate_alert_table',1),('2015_07_21_141125_create_message_table',1),('2015_07_21_144011_create_relaciontableUseryMessages',2),('2015_07_21_145127_create_relaciontableAlertMessages',3),('2015_07_21_145741_typeUser',4),('2015_07_21_150412_create_code_table',5),('2015_07_22_141856_create_relacionZoneArea_table',6),('2015_07_22_143208_create_relacionUserArea_table',7),('2015_07_22_153433_create_centinela_table',7),('2015_07_27_094404_create_relacionGrupoZona_table',8),('2015_07_27_095026_create_relacionGroupsSchedule_table',9),('2015_07_27_133930_create_seoZona_table',10),('2015_08_27_151733_create_session_table',11);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `municipios`
--

DROP TABLE IF EXISTS `municipios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `municipios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `estado_id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_estado` (`estado_id`),
  CONSTRAINT `municipios_ibfk_1` FOREIGN KEY (`estado_id`) REFERENCES `estados` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=463 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `municipios`
--

LOCK TABLES `municipios` WRITE;
/*!40000 ALTER TABLE `municipios` DISABLE KEYS */;
INSERT INTO `municipios` VALUES (1,1,'Alto Orinoco'),(2,1,'Atabapo'),(3,1,'Atures'),(4,1,'Autana'),(5,1,'Manapiare'),(6,1,'Maroa'),(7,1,'Río Negro'),(8,2,'Anaco'),(9,2,'Aragua'),(10,2,'Manuel Ezequiel Bruzual'),(11,2,'Diego Bautista Urbaneja'),(12,2,'Fernando Peñalver'),(13,2,'Francisco Del Carmen Carvajal'),(14,2,'General Sir Arthur McGregor'),(15,2,'Guanta'),(16,2,'Independencia'),(17,2,'José Gregorio Monagas'),(18,2,'Juan Antonio Sotillo'),(19,2,'Juan Manuel Cajigal'),(20,2,'Libertad'),(21,2,'Francisco de Miranda'),(22,2,'Pedro María Freites'),(23,2,'Píritu'),(24,2,'San José de Guanipa'),(25,2,'San Juan de Capistrano'),(26,2,'Santa Ana'),(27,2,'Simón Bolívar'),(28,2,'Simón Rodríguez'),(29,3,'Achaguas'),(30,3,'Biruaca'),(31,3,'Muñóz'),(32,3,'Páez'),(33,3,'Pedro Camejo'),(34,3,'Rómulo Gallegos'),(35,3,'San Fernando'),(36,4,'Atanasio Girardot'),(37,4,'Bolívar'),(38,4,'Camatagua'),(39,4,'Francisco Linares Alcántara'),(40,4,'José Ángel Lamas'),(41,4,'José Félix Ribas'),(42,4,'José Rafael Revenga'),(43,4,'Libertador'),(44,4,'Mario Briceño Iragorry'),(45,4,'Ocumare de la Costa de Oro'),(46,4,'San Casimiro'),(47,4,'San Sebastián'),(48,4,'Santiago Mariño'),(49,4,'Santos Michelena'),(50,4,'Sucre'),(51,4,'Tovar'),(52,4,'Urdaneta'),(53,4,'Zamora'),(54,5,'Alberto Arvelo Torrealba'),(55,5,'Andrés Eloy Blanco'),(56,5,'Antonio José de Sucre'),(57,5,'Arismendi'),(58,5,'Barinas'),(59,5,'Bolívar'),(60,5,'Cruz Paredes'),(61,5,'Ezequiel Zamora'),(62,5,'Obispos'),(63,5,'Pedraza'),(64,5,'Rojas'),(65,5,'Sosa'),(66,6,'Caroní'),(67,6,'Cedeño'),(68,6,'El Callao'),(69,6,'Gran Sabana'),(70,6,'Heres'),(71,6,'Piar'),(72,6,'Angostura (Raúl Leoni)'),(73,6,'Roscio'),(74,6,'Sifontes'),(75,6,'Sucre'),(76,6,'Padre Pedro Chien'),(77,7,'Bejuma'),(78,7,'Carlos Arvelo'),(79,7,'Diego Ibarra'),(80,7,'Guacara'),(81,7,'Juan José Mora'),(82,7,'Libertador'),(83,7,'Los Guayos'),(84,7,'Miranda'),(85,7,'Montalbán'),(86,7,'Naguanagua'),(87,7,'Puerto Cabello'),(88,7,'San Diego'),(89,7,'San Joaquín'),(90,7,'Valencia'),(91,8,'Anzoátegui'),(92,8,'Tinaquillo'),(93,8,'Girardot'),(94,8,'Lima Blanco'),(95,8,'Pao de San Juan Bautista'),(96,8,'Ricaurte'),(97,8,'Rómulo Gallegos'),(98,8,'San Carlos'),(99,8,'Tinaco'),(100,9,'Antonio Díaz'),(101,9,'Casacoima'),(102,9,'Pedernales'),(103,9,'Tucupita'),(104,10,'Acosta'),(105,10,'Bolívar'),(106,10,'Buchivacoa'),(107,10,'Cacique Manaure'),(108,10,'Carirubana'),(109,10,'Colina'),(110,10,'Dabajuro'),(111,10,'Democracia'),(112,10,'Falcón'),(113,10,'Federación'),(114,10,'Jacura'),(115,10,'José Laurencio Silva'),(116,10,'Los Taques'),(117,10,'Mauroa'),(118,10,'Miranda'),(119,10,'Monseñor Iturriza'),(120,10,'Palmasola'),(121,10,'Petit'),(122,10,'Píritu'),(123,10,'San Francisco'),(124,10,'Sucre'),(125,10,'Tocópero'),(126,10,'Unión'),(127,10,'Urumaco'),(128,10,'Zamora'),(129,11,'Camaguán'),(130,11,'Chaguaramas'),(131,11,'El Socorro'),(132,11,'José Félix Ribas'),(133,11,'José Tadeo Monagas'),(134,11,'Juan Germán Roscio'),(135,11,'Julián Mellado'),(136,11,'Las Mercedes'),(137,11,'Leonardo Infante'),(138,11,'Pedro Zaraza'),(139,11,'Ortíz'),(140,11,'San Gerónimo de Guayabal'),(141,11,'San José de Guaribe'),(142,11,'Santa María de Ipire'),(143,11,'Sebastián Francisco de Miranda'),(144,12,'Andrés Eloy Blanco'),(145,12,'Crespo'),(146,12,'Iribarren'),(147,12,'Jiménez'),(148,12,'Morán'),(149,12,'Palavecino'),(150,12,'Simón Planas'),(151,12,'Torres'),(152,12,'Urdaneta'),(179,13,'Alberto Adriani'),(180,13,'Andrés Bello'),(181,13,'Antonio Pinto Salinas'),(182,13,'Aricagua'),(183,13,'Arzobispo Chacón'),(184,13,'Campo Elías'),(185,13,'Caracciolo Parra Olmedo'),(186,13,'Cardenal Quintero'),(187,13,'Guaraque'),(188,13,'Julio César Salas'),(189,13,'Justo Briceño'),(190,13,'Libertador'),(191,13,'Miranda'),(192,13,'Obispo Ramos de Lora'),(193,13,'Padre Noguera'),(194,13,'Pueblo Llano'),(195,13,'Rangel'),(196,13,'Rivas Dávila'),(197,13,'Santos Marquina'),(198,13,'Sucre'),(199,13,'Tovar'),(200,13,'Tulio Febres Cordero'),(201,13,'Zea'),(223,14,'Acevedo'),(224,14,'Andrés Bello'),(225,14,'Baruta'),(226,14,'Brión'),(227,14,'Buroz'),(228,14,'Carrizal'),(229,14,'Chacao'),(230,14,'Cristóbal Rojas'),(231,14,'El Hatillo'),(232,14,'Guaicaipuro'),(233,14,'Independencia'),(234,14,'Lander'),(235,14,'Los Salias'),(236,14,'Páez'),(237,14,'Paz Castillo'),(238,14,'Pedro Gual'),(239,14,'Plaza'),(240,14,'Simón Bolívar'),(241,14,'Sucre'),(242,14,'Urdaneta'),(243,14,'Zamora'),(258,15,'Acosta'),(259,15,'Aguasay'),(260,15,'Bolívar'),(261,15,'Caripe'),(262,15,'Cedeño'),(263,15,'Ezequiel Zamora'),(264,15,'Libertador'),(265,15,'Maturín'),(266,15,'Piar'),(267,15,'Punceres'),(268,15,'Santa Bárbara'),(269,15,'Sotillo'),(270,15,'Uracoa'),(271,16,'Antolín del Campo'),(272,16,'Arismendi'),(273,16,'García'),(274,16,'Gómez'),(275,16,'Maneiro'),(276,16,'Marcano'),(277,16,'Mariño'),(278,16,'Península de Macanao'),(279,16,'Tubores'),(280,16,'Villalba'),(281,16,'Díaz'),(282,17,'Agua Blanca'),(283,17,'Araure'),(284,17,'Esteller'),(285,17,'Guanare'),(286,17,'Guanarito'),(287,17,'Monseñor José Vicente de Unda'),(288,17,'Ospino'),(289,17,'Páez'),(290,17,'Papelón'),(291,17,'San Genaro de Boconoíto'),(292,17,'San Rafael de Onoto'),(293,17,'Santa Rosalía'),(294,17,'Sucre'),(295,17,'Turén'),(296,18,'Andrés Eloy Blanco'),(297,18,'Andrés Mata'),(298,18,'Arismendi'),(299,18,'Benítez'),(300,18,'Bermúdez'),(301,18,'Bolívar'),(302,18,'Cajigal'),(303,18,'Cruz Salmerón Acosta'),(304,18,'Libertador'),(305,18,'Mariño'),(306,18,'Mejía'),(307,18,'Montes'),(308,18,'Ribero'),(309,18,'Sucre'),(310,18,'Valdéz'),(341,19,'Andrés Bello'),(342,19,'Antonio Rómulo Costa'),(343,19,'Ayacucho'),(344,19,'Bolívar'),(345,19,'Cárdenas'),(346,19,'Córdoba'),(347,19,'Fernández Feo'),(348,19,'Francisco de Miranda'),(349,19,'García de Hevia'),(350,19,'Guásimos'),(351,19,'Independencia'),(352,19,'Jáuregui'),(353,19,'José María Vargas'),(354,19,'Junín'),(355,19,'Libertad'),(356,19,'Libertador'),(357,19,'Lobatera'),(358,19,'Michelena'),(359,19,'Panamericano'),(360,19,'Pedro María Ureña'),(361,19,'Rafael Urdaneta'),(362,19,'Samuel Darío Maldonado'),(363,19,'San Cristóbal'),(364,19,'Seboruco'),(365,19,'Simón Rodríguez'),(366,19,'Sucre'),(367,19,'Torbes'),(368,19,'Uribante'),(369,19,'San Judas Tadeo'),(370,20,'Andrés Bello'),(371,20,'Boconó'),(372,20,'Bolívar'),(373,20,'Candelaria'),(374,20,'Carache'),(375,20,'Escuque'),(376,20,'José Felipe Márquez Cañizalez'),(377,20,'Juan Vicente Campos Elías'),(378,20,'La Ceiba'),(379,20,'Miranda'),(380,20,'Monte Carmelo'),(381,20,'Motatán'),(382,20,'Pampán'),(383,20,'Pampanito'),(384,20,'Rafael Rangel'),(385,20,'San Rafael de Carvajal'),(386,20,'Sucre'),(387,20,'Trujillo'),(388,20,'Urdaneta'),(389,20,'Valera'),(390,21,'Vargas'),(391,22,'Arístides Bastidas'),(392,22,'Bolívar'),(407,22,'Bruzual'),(408,22,'Cocorote'),(409,22,'Independencia'),(410,22,'José Antonio Páez'),(411,22,'La Trinidad'),(412,22,'Manuel Monge'),(413,22,'Nirgua'),(414,22,'Peña'),(415,22,'San Felipe'),(416,22,'Sucre'),(417,22,'Urachiche'),(418,22,'José Joaquín Veroes'),(441,23,'Almirante Padilla'),(442,23,'Baralt'),(443,23,'Cabimas'),(444,23,'Catatumbo'),(445,23,'Colón'),(446,23,'Francisco Javier Pulgar'),(447,23,'Páez'),(448,23,'Jesús Enrique Losada'),(449,23,'Jesús María Semprún'),(450,23,'La Cañada de Urdaneta'),(451,23,'Lagunillas'),(452,23,'Machiques de Perijá'),(453,23,'Mara'),(454,23,'Maracaibo'),(455,23,'Miranda'),(456,23,'Rosario de Perijá'),(457,23,'San Francisco'),(458,23,'Santa Rita'),(459,23,'Simón Bolívar'),(460,23,'Sucre'),(461,23,'Valmore Rodríguez'),(462,24,'Libertador');
/*!40000 ALTER TABLE `municipios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parroquias`
--

DROP TABLE IF EXISTS `parroquias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parroquias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `municipio_id` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_municipio` (`municipio_id`),
  CONSTRAINT `parroquias_ibfk_1` FOREIGN KEY (`municipio_id`) REFERENCES `municipios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1139 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parroquias`
--

LOCK TABLES `parroquias` WRITE;
/*!40000 ALTER TABLE `parroquias` DISABLE KEYS */;
INSERT INTO `parroquias` VALUES (1,1,'Alto Orinoco'),(2,1,'Huachamacare Acanaña'),(3,1,'Marawaka Toky Shamanaña'),(4,1,'Mavaka Mavaka'),(5,1,'Sierra Parima Parimabé'),(6,2,'Ucata Laja Lisa'),(7,2,'Yapacana Macuruco'),(8,2,'Caname Guarinuma'),(9,3,'Fernando Girón Tovar'),(10,3,'Luis Alberto Gómez'),(11,3,'Pahueña Limón de Parhueña'),(12,3,'Platanillal Platanillal'),(13,4,'Samariapo'),(14,4,'Sipapo'),(15,4,'Munduapo'),(16,4,'Guayapo'),(17,5,'Alto Ventuari'),(18,5,'Medio Ventuari'),(19,5,'Bajo Ventuari'),(20,6,'Victorino'),(21,6,'Comunidad'),(22,7,'Casiquiare'),(23,7,'Cocuy'),(24,7,'San Carlos de Río Negro'),(25,7,'Solano'),(26,8,'Anaco'),(27,8,'San Joaquín'),(28,9,'Cachipo'),(29,9,'Aragua de Barcelona'),(30,11,'Lechería'),(31,11,'El Morro'),(32,12,'Puerto Píritu'),(33,12,'San Miguel'),(34,12,'Sucre'),(35,13,'Valle de Guanape'),(36,13,'Santa Bárbara'),(37,14,'El Chaparro'),(38,14,'Tomás Alfaro'),(39,14,'Calatrava'),(40,15,'Guanta'),(41,15,'Chorrerón'),(42,16,'Mamo'),(43,16,'Soledad'),(44,17,'Mapire'),(45,17,'Piar'),(46,17,'Santa Clara'),(47,17,'San Diego de Cabrutica'),(48,17,'Uverito'),(49,17,'Zuata'),(50,18,'Puerto La Cruz'),(51,18,'Pozuelos'),(52,19,'Onoto'),(53,19,'San Pablo'),(54,20,'San Mateo'),(55,20,'El Carito'),(56,20,'Santa Inés'),(57,20,'La Romereña'),(58,21,'Atapirire'),(59,21,'Boca del Pao'),(60,21,'El Pao'),(61,21,'Pariaguán'),(62,22,'Cantaura'),(63,22,'Libertador'),(64,22,'Santa Rosa'),(65,22,'Urica'),(66,23,'Píritu'),(67,23,'San Francisco'),(68,24,'San José de Guanipa'),(69,25,'Boca de Uchire'),(70,25,'Boca de Chávez'),(71,26,'Pueblo Nuevo'),(72,26,'Santa Ana'),(73,27,'Bergatín'),(74,27,'Caigua'),(75,27,'El Carmen'),(76,27,'El Pilar'),(77,27,'Naricual'),(78,27,'San Crsitóbal'),(79,28,'Edmundo Barrios'),(80,28,'Miguel Otero Silva'),(81,29,'Achaguas'),(82,29,'Apurito'),(83,29,'El Yagual'),(84,29,'Guachara'),(85,29,'Mucuritas'),(86,29,'Queseras del medio'),(87,30,'Biruaca'),(88,31,'Bruzual'),(89,31,'Mantecal'),(90,31,'Quintero'),(91,31,'Rincón Hondo'),(92,31,'San Vicente'),(93,32,'Guasdualito'),(94,32,'Aramendi'),(95,32,'El Amparo'),(96,32,'San Camilo'),(97,32,'Urdaneta'),(98,33,'San Juan de Payara'),(99,33,'Codazzi'),(100,33,'Cunaviche'),(101,34,'Elorza'),(102,34,'La Trinidad'),(103,35,'San Fernando'),(104,35,'El Recreo'),(105,35,'Peñalver'),(106,35,'San Rafael de Atamaica'),(107,36,'Pedro José Ovalles'),(108,36,'Joaquín Crespo'),(109,36,'José Casanova Godoy'),(110,36,'Madre María de San José'),(111,36,'Andrés Eloy Blanco'),(112,36,'Los Tacarigua'),(113,36,'Las Delicias'),(114,36,'Choroní'),(115,37,'Bolívar'),(116,38,'Camatagua'),(117,38,'Carmen de Cura'),(118,39,'Santa Rita'),(119,39,'Francisco de Miranda'),(120,39,'Moseñor Feliciano González'),(121,40,'Santa Cruz'),(122,41,'José Félix Ribas'),(123,41,'Castor Nieves Ríos'),(124,41,'Las Guacamayas'),(125,41,'Pao de Zárate'),(126,41,'Zuata'),(127,42,'José Rafael Revenga'),(128,43,'Palo Negro'),(129,43,'San Martín de Porres'),(130,44,'El Limón'),(131,44,'Caña de Azúcar'),(132,45,'Ocumare de la Costa'),(133,46,'San Casimiro'),(134,46,'Güiripa'),(135,46,'Ollas de Caramacate'),(136,46,'Valle Morín'),(137,47,'San Sebastían'),(138,48,'Turmero'),(139,48,'Arevalo Aponte'),(140,48,'Chuao'),(141,48,'Samán de Güere'),(142,48,'Alfredo Pacheco Miranda'),(143,49,'Santos Michelena'),(144,49,'Tiara'),(145,50,'Cagua'),(146,50,'Bella Vista'),(147,51,'Tovar'),(148,52,'Urdaneta'),(149,52,'Las Peñitas'),(150,52,'San Francisco de Cara'),(151,52,'Taguay'),(152,53,'Zamora'),(153,53,'Magdaleno'),(154,53,'San Francisco de Asís'),(155,53,'Valles de Tucutunemo'),(156,53,'Augusto Mijares'),(157,54,'Sabaneta'),(158,54,'Juan Antonio Rodríguez Domínguez'),(159,55,'El Cantón'),(160,55,'Santa Cruz de Guacas'),(161,55,'Puerto Vivas'),(162,56,'Ticoporo'),(163,56,'Nicolás Pulido'),(164,56,'Andrés Bello'),(165,57,'Arismendi'),(166,57,'Guadarrama'),(167,57,'La Unión'),(168,57,'San Antonio'),(169,58,'Barinas'),(170,58,'Alberto Arvelo Larriva'),(171,58,'San Silvestre'),(172,58,'Santa Inés'),(173,58,'Santa Lucía'),(174,58,'Torumos'),(175,58,'El Carmen'),(176,58,'Rómulo Betancourt'),(177,58,'Corazón de Jesús'),(178,58,'Ramón Ignacio Méndez'),(179,58,'Alto Barinas'),(180,58,'Manuel Palacio Fajardo'),(181,58,'Juan Antonio Rodríguez Domínguez'),(182,58,'Dominga Ortiz de Páez'),(183,59,'Barinitas'),(184,59,'Altamira de Cáceres'),(185,59,'Calderas'),(186,60,'Barrancas'),(187,60,'El Socorro'),(188,60,'Mazparrito'),(189,61,'Santa Bárbara'),(190,61,'Pedro Briceño Méndez'),(191,61,'Ramón Ignacio Méndez'),(192,61,'José Ignacio del Pumar'),(193,62,'Obispos'),(194,62,'Guasimitos'),(195,62,'El Real'),(196,62,'La Luz'),(197,63,'Ciudad Bolívia'),(198,63,'José Ignacio Briceño'),(199,63,'José Félix Ribas'),(200,63,'Páez'),(201,64,'Libertad'),(202,64,'Dolores'),(203,64,'Santa Rosa'),(204,64,'Palacio Fajardo'),(205,65,'Ciudad de Nutrias'),(206,65,'El Regalo'),(207,65,'Puerto Nutrias'),(208,65,'Santa Catalina'),(209,66,'Cachamay'),(210,66,'Chirica'),(211,66,'Dalla Costa'),(212,66,'Once de Abril'),(213,66,'Simón Bolívar'),(214,66,'Unare'),(215,66,'Universidad'),(216,66,'Vista al Sol'),(217,66,'Pozo Verde'),(218,66,'Yocoima'),(219,66,'5 de Julio'),(220,67,'Cedeño'),(221,67,'Altagracia'),(222,67,'Ascensión Farreras'),(223,67,'Guaniamo'),(224,67,'La Urbana'),(225,67,'Pijiguaos'),(226,68,'El Callao'),(227,69,'Gran Sabana'),(228,69,'Ikabarú'),(229,70,'Catedral'),(230,70,'Zea'),(231,70,'Orinoco'),(232,70,'José Antonio Páez'),(233,70,'Marhuanta'),(234,70,'Agua Salada'),(235,70,'Vista Hermosa'),(236,70,'La Sabanita'),(237,70,'Panapana'),(238,71,'Andrés Eloy Blanco'),(239,71,'Pedro Cova'),(240,72,'Raúl Leoni'),(241,72,'Barceloneta'),(242,72,'Santa Bárbara'),(243,72,'San Francisco'),(244,73,'Roscio'),(245,73,'Salóm'),(246,74,'Sifontes'),(247,74,'Dalla Costa'),(248,74,'San Isidro'),(249,75,'Sucre'),(250,75,'Aripao'),(251,75,'Guarataro'),(252,75,'Las Majadas'),(253,75,'Moitaco'),(254,76,'Padre Pedro Chien'),(255,76,'Río Grande'),(256,77,'Bejuma'),(257,77,'Canoabo'),(258,77,'Simón Bolívar'),(259,78,'Güigüe'),(260,78,'Carabobo'),(261,78,'Tacarigua'),(262,79,'Mariara'),(263,79,'Aguas Calientes'),(264,80,'Ciudad Alianza'),(265,80,'Guacara'),(266,80,'Yagua'),(267,81,'Morón'),(268,81,'Yagua'),(269,82,'Tocuyito'),(270,82,'Independencia'),(271,83,'Los Guayos'),(272,84,'Miranda'),(273,85,'Montalbán'),(274,86,'Naguanagua'),(275,87,'Bartolomé Salóm'),(276,87,'Democracia'),(277,87,'Fraternidad'),(278,87,'Goaigoaza'),(279,87,'Juan José Flores'),(280,87,'Unión'),(281,87,'Borburata'),(282,87,'Patanemo'),(283,88,'San Diego'),(284,89,'San Joaquín'),(285,90,'Candelaria'),(286,90,'Catedral'),(287,90,'El Socorro'),(288,90,'Miguel Peña'),(289,90,'Rafael Urdaneta'),(290,90,'San Blas'),(291,90,'San José'),(292,90,'Santa Rosa'),(293,90,'Negro Primero'),(294,91,'Cojedes'),(295,91,'Juan de Mata Suárez'),(296,92,'Tinaquillo'),(297,93,'El Baúl'),(298,93,'Sucre'),(299,94,'La Aguadita'),(300,94,'Macapo'),(301,95,'El Pao'),(302,96,'El Amparo'),(303,96,'Libertad de Cojedes'),(304,97,'Rómulo Gallegos'),(305,98,'San Carlos de Austria'),(306,98,'Juan Ángel Bravo'),(307,98,'Manuel Manrique'),(308,99,'General en Jefe José Laurencio Silva'),(309,100,'Curiapo'),(310,100,'Almirante Luis Brión'),(311,100,'Francisco Aniceto Lugo'),(312,100,'Manuel Renaud'),(313,100,'Padre Barral'),(314,100,'Santos de Abelgas'),(315,101,'Imataca'),(316,101,'Cinco de Julio'),(317,101,'Juan Bautista Arismendi'),(318,101,'Manuel Piar'),(319,101,'Rómulo Gallegos'),(320,102,'Pedernales'),(321,102,'Luis Beltrán Prieto Figueroa'),(322,103,'San José (Delta Amacuro)'),(323,103,'José Vidal Marcano'),(324,103,'Juan Millán'),(325,103,'Leonardo Ruíz Pineda'),(326,103,'Mariscal Antonio José de Sucre'),(327,103,'Monseñor Argimiro García'),(328,103,'San Rafael (Delta Amacuro)'),(329,103,'Virgen del Valle'),(330,10,'Clarines'),(331,10,'Guanape'),(332,10,'Sabana de Uchire'),(333,104,'Capadare'),(334,104,'La Pastora'),(335,104,'Libertador'),(336,104,'San Juan de los Cayos'),(337,105,'Aracua'),(338,105,'La Peña'),(339,105,'San Luis'),(340,106,'Bariro'),(341,106,'Borojó'),(342,106,'Capatárida'),(343,106,'Guajiro'),(344,106,'Seque'),(345,106,'Zazárida'),(346,106,'Valle de Eroa'),(347,107,'Cacique Manaure'),(348,108,'Norte'),(349,108,'Carirubana'),(350,108,'Santa Ana'),(351,108,'Urbana Punta Cardón'),(352,109,'La Vela de Coro'),(353,109,'Acurigua'),(354,109,'Guaibacoa'),(355,109,'Las Calderas'),(356,109,'Macoruca'),(357,110,'Dabajuro'),(358,111,'Agua Clara'),(359,111,'Avaria'),(360,111,'Pedregal'),(361,111,'Piedra Grande'),(362,111,'Purureche'),(363,112,'Adaure'),(364,112,'Adícora'),(365,112,'Baraived'),(366,112,'Buena Vista'),(367,112,'Jadacaquiva'),(368,112,'El Vínculo'),(369,112,'El Hato'),(370,112,'Moruy'),(371,112,'Pueblo Nuevo'),(372,113,'Agua Larga'),(373,113,'El Paují'),(374,113,'Independencia'),(375,113,'Mapararí'),(376,114,'Agua Linda'),(377,114,'Araurima'),(378,114,'Jacura'),(379,115,'Tucacas'),(380,115,'Boca de Aroa'),(381,116,'Los Taques'),(382,116,'Judibana'),(383,117,'Mene de Mauroa'),(384,117,'San Félix'),(385,117,'Casigua'),(386,118,'Guzmán Guillermo'),(387,118,'Mitare'),(388,118,'Río Seco'),(389,118,'Sabaneta'),(390,118,'San Antonio'),(391,118,'San Gabriel'),(392,118,'Santa Ana'),(393,119,'Boca del Tocuyo'),(394,119,'Chichiriviche'),(395,119,'Tocuyo de la Costa'),(396,120,'Palmasola'),(397,121,'Cabure'),(398,121,'Colina'),(399,121,'Curimagua'),(400,122,'San José de la Costa'),(401,122,'Píritu'),(402,123,'San Francisco'),(403,124,'Sucre'),(404,124,'Pecaya'),(405,125,'Tocópero'),(406,126,'El Charal'),(407,126,'Las Vegas del Tuy'),(408,126,'Santa Cruz de Bucaral'),(409,127,'Bruzual'),(410,127,'Urumaco'),(411,128,'Puerto Cumarebo'),(412,128,'La Ciénaga'),(413,128,'La Soledad'),(414,128,'Pueblo Cumarebo'),(415,128,'Zazárida'),(416,113,'Churuguara'),(417,129,'Camaguán'),(418,129,'Puerto Miranda'),(419,129,'Uverito'),(420,130,'Chaguaramas'),(421,131,'El Socorro'),(422,132,'Tucupido'),(423,132,'San Rafael de Laya'),(424,133,'Altagracia de Orituco'),(425,133,'San Rafael de Orituco'),(426,133,'San Francisco Javier de Lezama'),(427,133,'Paso Real de Macaira'),(428,133,'Carlos Soublette'),(429,133,'San Francisco de Macaira'),(430,133,'Libertad de Orituco'),(431,134,'Cantaclaro'),(432,134,'San Juan de los Morros'),(433,134,'Parapara'),(434,135,'El Sombrero'),(435,135,'Sosa'),(436,136,'Las Mercedes'),(437,136,'Cabruta'),(438,136,'Santa Rita de Manapire'),(439,137,'Valle de la Pascua'),(440,137,'Espino'),(441,138,'San José de Unare'),(442,138,'Zaraza'),(443,139,'San José de Tiznados'),(444,139,'San Francisco de Tiznados'),(445,139,'San Lorenzo de Tiznados'),(446,139,'Ortiz'),(447,140,'Guayabal'),(448,140,'Cazorla'),(449,141,'San José de Guaribe'),(450,141,'Uveral'),(451,142,'Santa María de Ipire'),(452,142,'Altamira'),(453,143,'El Calvario'),(454,143,'El Rastro'),(455,143,'Guardatinajas'),(456,143,'Capital Urbana Calabozo'),(457,144,'Quebrada Honda de Guache'),(458,144,'Pío Tamayo'),(459,144,'Yacambú'),(460,145,'Fréitez'),(461,145,'José María Blanco'),(462,146,'Catedral'),(463,146,'Concepción'),(464,146,'El Cují'),(465,146,'Juan de Villegas'),(466,146,'Santa Rosa'),(467,146,'Tamaca'),(468,146,'Unión'),(469,146,'Aguedo Felipe Alvarado'),(470,146,'Buena Vista'),(471,146,'Juárez'),(472,147,'Juan Bautista Rodríguez'),(473,147,'Cuara'),(474,147,'Diego de Lozada'),(475,147,'Paraíso de San José'),(476,147,'San Miguel'),(477,147,'Tintorero'),(478,147,'José Bernardo Dorante'),(479,147,'Coronel Mariano Peraza '),(480,148,'Bolívar'),(481,148,'Anzoátegui'),(482,148,'Guarico'),(483,148,'Hilario Luna y Luna'),(484,148,'Humocaro Alto'),(485,148,'Humocaro Bajo'),(486,148,'La Candelaria'),(487,148,'Morán'),(488,149,'Cabudare'),(489,149,'José Gregorio Bastidas'),(490,149,'Agua Viva'),(491,150,'Sarare'),(492,150,'Buría'),(493,150,'Gustavo Vegas León'),(494,151,'Trinidad Samuel'),(495,151,'Antonio Díaz'),(496,151,'Camacaro'),(497,151,'Castañeda'),(498,151,'Cecilio Zubillaga'),(499,151,'Chiquinquirá'),(500,151,'El Blanco'),(501,151,'Espinoza de los Monteros'),(502,151,'Lara'),(503,151,'Las Mercedes'),(504,151,'Manuel Morillo'),(505,151,'Montaña Verde'),(506,151,'Montes de Oca'),(507,151,'Torres'),(508,151,'Heriberto Arroyo'),(509,151,'Reyes Vargas'),(510,151,'Altagracia'),(511,152,'Siquisique'),(512,152,'Moroturo'),(513,152,'San Miguel'),(514,152,'Xaguas'),(515,179,'Presidente Betancourt'),(516,179,'Presidente Páez'),(517,179,'Presidente Rómulo Gallegos'),(518,179,'Gabriel Picón González'),(519,179,'Héctor Amable Mora'),(520,179,'José Nucete Sardi'),(521,179,'Pulido Méndez'),(522,180,'La Azulita'),(523,181,'Santa Cruz de Mora'),(524,181,'Mesa Bolívar'),(525,181,'Mesa de Las Palmas'),(526,182,'Aricagua'),(527,182,'San Antonio'),(528,183,'Canagua'),(529,183,'Capurí'),(530,183,'Chacantá'),(531,183,'El Molino'),(532,183,'Guaimaral'),(533,183,'Mucutuy'),(534,183,'Mucuchachí'),(535,184,'Fernández Peña'),(536,184,'Matriz'),(537,184,'Montalbán'),(538,184,'Acequias'),(539,184,'Jají'),(540,184,'La Mesa'),(541,184,'San José del Sur'),(542,185,'Tucaní'),(543,185,'Florencio Ramírez'),(544,186,'Santo Domingo'),(545,186,'Las Piedras'),(546,187,'Guaraque'),(547,187,'Mesa de Quintero'),(548,187,'Río Negro'),(549,188,'Arapuey'),(550,188,'Palmira'),(551,189,'San Cristóbal de Torondoy'),(552,189,'Torondoy'),(553,190,'Antonio Spinetti Dini'),(554,190,'Arias'),(555,190,'Caracciolo Parra Pérez'),(556,190,'Domingo Peña'),(557,190,'El Llano'),(558,190,'Gonzalo Picón Febres'),(559,190,'Jacinto Plaza'),(560,190,'Juan Rodríguez Suárez'),(561,190,'Lasso de la Vega'),(562,190,'Mariano Picón Salas'),(563,190,'Milla'),(564,190,'Osuna Rodríguez'),(565,190,'Sagrario'),(566,190,'El Morro'),(567,190,'Los Nevados'),(568,191,'Andrés Eloy Blanco'),(569,191,'La Venta'),(570,191,'Piñango'),(571,191,'Timotes'),(572,192,'Eloy Paredes'),(573,192,'San Rafael de Alcázar'),(574,192,'Santa Elena de Arenales'),(575,193,'Santa María de Caparo'),(576,194,'Pueblo Llano'),(577,195,'Cacute'),(578,195,'La Toma'),(579,195,'Mucuchíes'),(580,195,'Mucurubá'),(581,195,'San Rafael'),(582,196,'Gerónimo Maldonado'),(583,196,'Bailadores'),(584,197,'Tabay'),(585,198,'Chiguará'),(586,198,'Estánquez'),(587,198,'Lagunillas'),(588,198,'La Trampa'),(589,198,'Pueblo Nuevo del Sur'),(590,198,'San Juan'),(591,199,'El Amparo'),(592,199,'El Llano'),(593,199,'San Francisco'),(594,199,'Tovar'),(595,200,'Independencia'),(596,200,'María de la Concepción Palacios Blanco'),(597,200,'Nueva Bolivia'),(598,200,'Santa Apolonia'),(599,201,'Caño El Tigre'),(600,201,'Zea'),(601,223,'Aragüita'),(602,223,'Arévalo González'),(603,223,'Capaya'),(604,223,'Caucagua'),(605,223,'Panaquire'),(606,223,'Ribas'),(607,223,'El Café'),(608,223,'Marizapa'),(609,224,'Cumbo'),(610,224,'San José de Barlovento'),(611,225,'El Cafetal'),(612,225,'Las Minas'),(613,225,'Nuestra Señora del Rosario'),(614,226,'Higuerote'),(615,226,'Curiepe'),(616,226,'Tacarigua de Brión'),(617,227,'Mamporal'),(618,228,'Carrizal'),(619,229,'Chacao'),(620,230,'Charallave'),(621,230,'Las Brisas'),(622,231,'El Hatillo'),(623,232,'Altagracia de la Montaña'),(624,232,'Cecilio Acosta'),(625,232,'Los Teques'),(626,232,'El Jarillo'),(627,232,'San Pedro'),(628,232,'Tácata'),(629,232,'Paracotos'),(630,233,'Cartanal'),(631,233,'Santa Teresa del Tuy'),(632,234,'La Democracia'),(633,234,'Ocumare del Tuy'),(634,234,'Santa Bárbara'),(635,235,'San Antonio de los Altos'),(636,236,'Río Chico'),(637,236,'El Guapo'),(638,236,'Tacarigua de la Laguna'),(639,236,'Paparo'),(640,236,'San Fernando del Guapo'),(641,237,'Santa Lucía del Tuy'),(642,238,'Cúpira'),(643,238,'Machurucuto'),(644,239,'Guarenas'),(645,240,'San Antonio de Yare'),(646,240,'San Francisco de Yare'),(647,241,'Leoncio Martínez'),(648,241,'Petare'),(649,241,'Caucagüita'),(650,241,'Filas de Mariche'),(651,241,'La Dolorita'),(652,242,'Cúa'),(653,242,'Nueva Cúa'),(654,243,'Guatire'),(655,243,'Bolívar'),(656,258,'San Antonio de Maturín'),(657,258,'San Francisco de Maturín'),(658,259,'Aguasay'),(659,260,'Caripito'),(660,261,'El Guácharo'),(661,261,'La Guanota'),(662,261,'Sabana de Piedra'),(663,261,'San Agustín'),(664,261,'Teresen'),(665,261,'Caripe'),(666,262,'Areo'),(667,262,'Capital Cedeño'),(668,262,'San Félix de Cantalicio'),(669,262,'Viento Fresco'),(670,263,'El Tejero'),(671,263,'Punta de Mata'),(672,264,'Chaguaramas'),(673,264,'Las Alhuacas'),(674,264,'Tabasca'),(675,264,'Temblador'),(676,265,'Alto de los Godos'),(677,265,'Boquerón'),(678,265,'Las Cocuizas'),(679,265,'La Cruz'),(680,265,'San Simón'),(681,265,'El Corozo'),(682,265,'El Furrial'),(683,265,'Jusepín'),(684,265,'La Pica'),(685,265,'San Vicente'),(686,266,'Aparicio'),(687,266,'Aragua de Maturín'),(688,266,'Chaguamal'),(689,266,'El Pinto'),(690,266,'Guanaguana'),(691,266,'La Toscana'),(692,266,'Taguaya'),(693,267,'Cachipo'),(694,267,'Quiriquire'),(695,268,'Santa Bárbara'),(696,269,'Barrancas'),(697,269,'Los Barrancos de Fajardo'),(698,270,'Uracoa'),(699,271,'Antolín del Campo'),(700,272,'Arismendi'),(701,273,'García'),(702,273,'Francisco Fajardo'),(703,274,'Bolívar'),(704,274,'Guevara'),(705,274,'Matasiete'),(706,274,'Santa Ana'),(707,274,'Sucre'),(708,275,'Aguirre'),(709,275,'Maneiro'),(710,276,'Adrián'),(711,276,'Juan Griego'),(712,276,'Yaguaraparo'),(713,277,'Porlamar'),(714,278,'San Francisco de Macanao'),(715,278,'Boca de Río'),(716,279,'Tubores'),(717,279,'Los Baleales'),(718,280,'Vicente Fuentes'),(719,280,'Villalba'),(720,281,'San Juan Bautista'),(721,281,'Zabala'),(722,283,'Capital Araure'),(723,283,'Río Acarigua'),(724,284,'Capital Esteller'),(725,284,'Uveral'),(726,285,'Guanare'),(727,285,'Córdoba'),(728,285,'San José de la Montaña'),(729,285,'San Juan de Guanaguanare'),(730,285,'Virgen de la Coromoto'),(731,286,'Guanarito'),(732,286,'Trinidad de la Capilla'),(733,286,'Divina Pastora'),(734,287,'Monseñor José Vicente de Unda'),(735,287,'Peña Blanca'),(736,288,'Capital Ospino'),(737,288,'Aparición'),(738,288,'La Estación'),(739,289,'Páez'),(740,289,'Payara'),(741,289,'Pimpinela'),(742,289,'Ramón Peraza'),(743,290,'Papelón'),(744,290,'Caño Delgadito'),(745,291,'San Genaro de Boconoito'),(746,291,'Antolín Tovar'),(747,292,'San Rafael de Onoto'),(748,292,'Santa Fe'),(749,292,'Thermo Morles'),(750,293,'Santa Rosalía'),(751,293,'Florida'),(752,294,'Sucre'),(753,294,'Concepción'),(754,294,'San Rafael de Palo Alzado'),(755,294,'Uvencio Antonio Velásquez'),(756,294,'San José de Saguaz'),(757,294,'Villa Rosa'),(758,295,'Turén'),(759,295,'Canelones'),(760,295,'Santa Cruz'),(761,295,'San Isidro Labrador'),(762,296,'Mariño'),(763,296,'Rómulo Gallegos'),(764,297,'San José de Aerocuar'),(765,297,'Tavera Acosta'),(766,298,'Río Caribe'),(767,298,'Antonio José de Sucre'),(768,298,'El Morro de Puerto Santo'),(769,298,'Puerto Santo'),(770,298,'San Juan de las Galdonas'),(771,299,'El Pilar'),(772,299,'El Rincón'),(773,299,'General Francisco Antonio Váquez'),(774,299,'Guaraúnos'),(775,299,'Tunapuicito'),(776,299,'Unión'),(777,300,'Santa Catalina'),(778,300,'Santa Rosa'),(779,300,'Santa Teresa'),(780,300,'Bolívar'),(781,300,'Maracapana'),(782,302,'Libertad'),(783,302,'El Paujil'),(784,302,'Yaguaraparo'),(785,303,'Cruz Salmerón Acosta'),(786,303,'Chacopata'),(787,303,'Manicuare'),(788,304,'Tunapuy'),(789,304,'Campo Elías'),(790,305,'Irapa'),(791,305,'Campo Claro'),(792,305,'Maraval'),(793,305,'San Antonio de Irapa'),(794,305,'Soro'),(795,306,'Mejía'),(796,307,'Cumanacoa'),(797,307,'Arenas'),(798,307,'Aricagua'),(799,307,'Cogollar'),(800,307,'San Fernando'),(801,307,'San Lorenzo'),(802,308,'Villa Frontado (Muelle de Cariaco)'),(803,308,'Catuaro'),(804,308,'Rendón'),(805,308,'San Cruz'),(806,308,'Santa María'),(807,309,'Altagracia'),(808,309,'Santa Inés'),(809,309,'Valentín Valiente'),(810,309,'Ayacucho'),(811,309,'San Juan'),(812,309,'Raúl Leoni'),(813,309,'Gran Mariscal'),(814,310,'Cristóbal Colón'),(815,310,'Bideau'),(816,310,'Punta de Piedras'),(817,310,'Güiria'),(818,341,'Andrés Bello'),(819,342,'Antonio Rómulo Costa'),(820,343,'Ayacucho'),(821,343,'Rivas Berti'),(822,343,'San Pedro del Río'),(823,344,'Bolívar'),(824,344,'Palotal'),(825,344,'General Juan Vicente Gómez'),(826,344,'Isaías Medina Angarita'),(827,345,'Cárdenas'),(828,345,'Amenodoro Ángel Lamus'),(829,345,'La Florida'),(830,346,'Córdoba'),(831,347,'Fernández Feo'),(832,347,'Alberto Adriani'),(833,347,'Santo Domingo'),(834,348,'Francisco de Miranda'),(835,349,'García de Hevia'),(836,349,'Boca de Grita'),(837,349,'José Antonio Páez'),(838,350,'Guásimos'),(839,351,'Independencia'),(840,351,'Juan Germán Roscio'),(841,351,'Román Cárdenas'),(842,352,'Jáuregui'),(843,352,'Emilio Constantino Guerrero'),(844,352,'Monseñor Miguel Antonio Salas'),(845,353,'José María Vargas'),(846,354,'Junín'),(847,354,'La Petrólea'),(848,354,'Quinimarí'),(849,354,'Bramón'),(850,355,'Libertad'),(851,355,'Cipriano Castro'),(852,355,'Manuel Felipe Rugeles'),(853,356,'Libertador'),(854,356,'Doradas'),(855,356,'Emeterio Ochoa'),(856,356,'San Joaquín de Navay'),(857,357,'Lobatera'),(858,357,'Constitución'),(859,358,'Michelena'),(860,359,'Panamericano'),(861,359,'La Palmita'),(862,360,'Pedro María Ureña'),(863,360,'Nueva Arcadia'),(864,361,'Delicias'),(865,361,'Pecaya'),(866,362,'Samuel Darío Maldonado'),(867,362,'Boconó'),(868,362,'Hernández'),(869,363,'La Concordia'),(870,363,'San Juan Bautista'),(871,363,'Pedro María Morantes'),(872,363,'San Sebastián'),(873,363,'Dr. Francisco Romero Lobo'),(874,364,'Seboruco'),(875,365,'Simón Rodríguez'),(876,366,'Sucre'),(877,366,'Eleazar López Contreras'),(878,366,'San Pablo'),(879,367,'Torbes'),(880,368,'Uribante'),(881,368,'Cárdenas'),(882,368,'Juan Pablo Peñalosa'),(883,368,'Potosí'),(884,369,'San Judas Tadeo'),(885,370,'Araguaney'),(886,370,'El Jaguito'),(887,370,'La Esperanza'),(888,370,'Santa Isabel'),(889,371,'Boconó'),(890,371,'El Carmen'),(891,371,'Mosquey'),(892,371,'Ayacucho'),(893,371,'Burbusay'),(894,371,'General Ribas'),(895,371,'Guaramacal'),(896,371,'Vega de Guaramacal'),(897,371,'Monseñor Jáuregui'),(898,371,'Rafael Rangel'),(899,371,'San Miguel'),(900,371,'San José'),(901,372,'Sabana Grande'),(902,372,'Cheregüé'),(903,372,'Granados'),(904,373,'Arnoldo Gabaldón'),(905,373,'Bolivia'),(906,373,'Carrillo'),(907,373,'Cegarra'),(908,373,'Chejendé'),(909,373,'Manuel Salvador Ulloa'),(910,373,'San José'),(911,374,'Carache'),(912,374,'La Concepción'),(913,374,'Cuicas'),(914,374,'Panamericana'),(915,374,'Santa Cruz'),(916,375,'Escuque'),(917,375,'La Unión'),(918,375,'Santa Rita'),(919,375,'Sabana Libre'),(920,376,'El Socorro'),(921,376,'Los Caprichos'),(922,376,'Antonio José de Sucre'),(923,377,'Campo Elías'),(924,377,'Arnoldo Gabaldón'),(925,378,'Santa Apolonia'),(926,378,'El Progreso'),(927,378,'La Ceiba'),(928,378,'Tres de Febrero'),(929,379,'El Dividive'),(930,379,'Agua Santa'),(931,379,'Agua Caliente'),(932,379,'El Cenizo'),(933,379,'Valerita'),(934,380,'Monte Carmelo'),(935,380,'Buena Vista'),(936,380,'Santa María del Horcón'),(937,381,'Motatán'),(938,381,'El Baño'),(939,381,'Jalisco'),(940,382,'Pampán'),(941,382,'Flor de Patria'),(942,382,'La Paz'),(943,382,'Santa Ana'),(944,383,'Pampanito'),(945,383,'La Concepción'),(946,383,'Pampanito II'),(947,384,'Betijoque'),(948,384,'José Gregorio Hernández'),(949,384,'La Pueblita'),(950,384,'Los Cedros'),(951,385,'Carvajal'),(952,385,'Campo Alegre'),(953,385,'Antonio Nicolás Briceño'),(954,385,'José Leonardo Suárez'),(955,386,'Sabana de Mendoza'),(956,386,'Junín'),(957,386,'Valmore Rodríguez'),(958,386,'El Paraíso'),(959,387,'Andrés Linares'),(960,387,'Chiquinquirá'),(961,387,'Cristóbal Mendoza'),(962,387,'Cruz Carrillo'),(963,387,'Matriz'),(964,387,'Monseñor Carrillo'),(965,387,'Tres Esquinas'),(966,388,'Cabimbú'),(967,388,'Jajó'),(968,388,'La Mesa de Esnujaque'),(969,388,'Santiago'),(970,388,'Tuñame'),(971,388,'La Quebrada'),(972,389,'Juan Ignacio Montilla'),(973,389,'La Beatriz'),(974,389,'La Puerta'),(975,389,'Mendoza del Valle de Momboy'),(976,389,'Mercedes Díaz'),(977,389,'San Luis'),(978,390,'Caraballeda'),(979,390,'Carayaca'),(980,390,'Carlos Soublette'),(981,390,'Caruao Chuspa'),(982,390,'Catia La Mar'),(983,390,'El Junko'),(984,390,'La Guaira'),(985,390,'Macuto'),(986,390,'Maiquetía'),(987,390,'Naiguatá'),(988,390,'Urimare'),(989,391,'Arístides Bastidas'),(990,392,'Bolívar'),(991,407,'Chivacoa'),(992,407,'Campo Elías'),(993,408,'Cocorote'),(994,409,'Independencia'),(995,410,'José Antonio Páez'),(996,411,'La Trinidad'),(997,412,'Manuel Monge'),(998,413,'Salóm'),(999,413,'Temerla'),(1000,413,'Nirgua'),(1001,414,'San Andrés'),(1002,414,'Yaritagua'),(1003,415,'San Javier'),(1004,415,'Albarico'),(1005,415,'San Felipe'),(1006,416,'Sucre'),(1007,417,'Urachiche'),(1008,418,'El Guayabo'),(1009,418,'Farriar'),(1010,441,'Isla de Toas'),(1011,441,'Monagas'),(1012,442,'San Timoteo'),(1013,442,'General Urdaneta'),(1014,442,'Libertador'),(1015,442,'Marcelino Briceño'),(1016,442,'Pueblo Nuevo'),(1017,442,'Manuel Guanipa Matos'),(1018,443,'Ambrosio'),(1019,443,'Carmen Herrera'),(1020,443,'La Rosa'),(1021,443,'Germán Ríos Linares'),(1022,443,'San Benito'),(1023,443,'Rómulo Betancourt'),(1024,443,'Jorge Hernández'),(1025,443,'Punta Gorda'),(1026,443,'Arístides Calvani'),(1027,444,'Encontrados'),(1028,444,'Udón Pérez'),(1029,445,'Moralito'),(1030,445,'San Carlos del Zulia'),(1031,445,'Santa Cruz del Zulia'),(1032,445,'Santa Bárbara'),(1033,445,'Urribarrí'),(1034,446,'Carlos Quevedo'),(1035,446,'Francisco Javier Pulgar'),(1036,446,'Simón Rodríguez'),(1037,446,'Guamo-Gavilanes'),(1038,448,'La Concepción'),(1039,448,'San José'),(1040,448,'Mariano Parra León'),(1041,448,'José Ramón Yépez'),(1042,449,'Jesús María Semprún'),(1043,449,'Barí'),(1044,450,'Concepción'),(1045,450,'Andrés Bello'),(1046,450,'Chiquinquirá'),(1047,450,'El Carmelo'),(1048,450,'Potreritos'),(1049,451,'Libertad'),(1050,451,'Alonso de Ojeda'),(1051,451,'Venezuela'),(1052,451,'Eleazar López Contreras'),(1053,451,'Campo Lara'),(1054,452,'Bartolomé de las Casas'),(1055,452,'Libertad'),(1056,452,'Río Negro'),(1057,452,'San José de Perijá'),(1058,453,'San Rafael'),(1059,453,'La Sierrita'),(1060,453,'Las Parcelas'),(1061,453,'Luis de Vicente'),(1062,453,'Monseñor Marcos Sergio Godoy'),(1063,453,'Ricaurte'),(1064,453,'Tamare'),(1065,454,'Antonio Borjas Romero'),(1066,454,'Bolívar'),(1067,454,'Cacique Mara'),(1068,454,'Carracciolo Parra Pérez'),(1069,454,'Cecilio Acosta'),(1070,454,'Cristo de Aranza'),(1071,454,'Coquivacoa'),(1072,454,'Chiquinquirá'),(1073,454,'Francisco Eugenio Bustamante'),(1074,454,'Idelfonzo Vásquez'),(1075,454,'Juana de Ávila'),(1076,454,'Luis Hurtado Higuera'),(1077,454,'Manuel Dagnino'),(1078,454,'Olegario Villalobos'),(1079,454,'Raúl Leoni'),(1080,454,'Santa Lucía'),(1081,454,'Venancio Pulgar'),(1082,454,'San Isidro'),(1083,455,'Altagracia'),(1084,455,'Faría'),(1085,455,'Ana María Campos'),(1086,455,'San Antonio'),(1087,455,'San José'),(1088,456,'Donaldo García'),(1089,456,'El Rosario'),(1090,456,'Sixto Zambrano'),(1091,457,'San Francisco'),(1092,457,'El Bajo'),(1093,457,'Domitila Flores'),(1094,457,'Francisco Ochoa'),(1095,457,'Los Cortijos'),(1096,457,'Marcial Hernández'),(1097,458,'Santa Rita'),(1098,458,'El Mene'),(1099,458,'Pedro Lucas Urribarrí'),(1100,458,'José Cenobio Urribarrí'),(1101,459,'Rafael Maria Baralt'),(1102,459,'Manuel Manrique'),(1103,459,'Rafael Urdaneta'),(1104,460,'Bobures'),(1105,460,'Gibraltar'),(1106,460,'Heras'),(1107,460,'Monseñor Arturo Álvarez'),(1108,460,'Rómulo Gallegos'),(1109,460,'El Batey'),(1110,461,'Rafael Urdaneta'),(1111,461,'La Victoria'),(1112,461,'Raúl Cuenca'),(1113,447,'Sinamaica'),(1114,447,'Alta Guajira'),(1115,447,'Elías Sánchez Rubio'),(1116,447,'Guajira'),(1117,462,'Altagracia'),(1118,462,'Antímano'),(1119,462,'Caricuao'),(1120,462,'Catedral'),(1121,462,'Coche'),(1122,462,'El Junquito'),(1123,462,'El Paraíso'),(1124,462,'El Recreo'),(1125,462,'El Valle'),(1126,462,'La Candelaria'),(1127,462,'La Pastora'),(1128,462,'La Vega'),(1129,462,'Macarao'),(1130,462,'San Agustín'),(1131,462,'San Bernardino'),(1132,462,'San José'),(1133,462,'San Juan'),(1134,462,'San Pedro'),(1135,462,'Santa Rosalía'),(1136,462,'Santa Teresa'),(1137,462,'Sucre (Catia)'),(1138,462,'23 de enero');
/*!40000 ALTER TABLE `parroquias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reminders`
--

DROP TABLE IF EXISTS `password_reminders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_reminders` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  KEY `password_reminders_email_index` (`email`),
  KEY `password_reminders_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reminders`
--

LOCK TABLES `password_reminders` WRITE;
/*!40000 ALTER TABLE `password_reminders` DISABLE KEYS */;
INSERT INTO `password_reminders` VALUES ('teclaelvis01@gmail.com','72df1849a2a893d76995b49bf8b31a7640ac8385','2015-08-24 17:40:51');
/*!40000 ALTER TABLE `password_reminders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persons`
--

DROP TABLE IF EXISTS `persons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `persons` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `identify_card` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telf` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `persons_name_unique` (`name`),
  UNIQUE KEY `persons_identify_card_unique` (`identify_card`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persons`
--

LOCK TABLES `persons` WRITE;
/*!40000 ALTER TABLE `persons` DISABLE KEYS */;
/*!40000 ALTER TABLE `persons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preficeds`
--

DROP TABLE IF EXISTS `preficeds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preficeds` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `sigla` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COMMENT='entidad para controlar el tipo de cédula';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preficeds`
--

LOCK TABLES `preficeds` WRITE;
/*!40000 ALTER TABLE `preficeds` DISABLE KEYS */;
INSERT INTO `preficeds` VALUES (1,'venezolano','v'),(2,'Extranjero','e');
/*!40000 ALTER TABLE `preficeds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rifs`
--

DROP TABLE IF EXISTS `rifs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rifs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `sigla` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COMMENT='Rifs de los empleados';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rifs`
--

LOCK TABLES `rifs` WRITE;
/*!40000 ALTER TABLE `rifs` DISABLE KEYS */;
INSERT INTO `rifs` VALUES (0,'Ninguna','-'),(1,'Venezolano','v'),(2,'Jurídico','j'),(3,'Gubernamental','g'),(4,'Extranjero','e');
/*!40000 ALTER TABLE `rifs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedules`
--

DROP TABLE IF EXISTS `schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedules` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedules`
--

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sends`
--

DROP TABLE IF EXISTS `sends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sends` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `group_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `sends_group_id_foreign` (`group_id`),
  CONSTRAINT `sends_group_id_foreign` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sends`
--

LOCK TABLES `sends` WRITE;
/*!40000 ALTER TABLE `sends` DISABLE KEYS */;
/*!40000 ALTER TABLE `sends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sentinels`
--

DROP TABLE IF EXISTS `sentinels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sentinels` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `area_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `sentinels_user_id_foreign` (`user_id`),
  KEY `sentinels_area_id_foreign` (`area_id`),
  CONSTRAINT `sentinels_area_id_foreign` FOREIGN KEY (`area_id`) REFERENCES `areas` (`id`),
  CONSTRAINT `sentinels_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sentinels`
--

LOCK TABLES `sentinels` WRITE;
/*!40000 ALTER TABLE `sentinels` DISABLE KEYS */;
/*!40000 ALTER TABLE `sentinels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `payload` text COLLATE utf8_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL,
  UNIQUE KEY `sessions_id_unique` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('af6d413711a1c71142b5b6100878d18ca336136f','YTo0OntzOjY6Il90b2tlbiI7czo0MDoiNVAzdEFjV2VNRzV0UjV4N2g0TjNkbEx3Y2VkRzFXeHNBYjNkUDlpYyI7czo1OiJmbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjM4OiJsb2dpbl84MmU1ZDJjNTZiZGQwODExMzE4ZjBjZjA3OGI3OGJmYyI7aTozO3M6OToiX3NmMl9tZXRhIjthOjM6e3M6MToidSI7aToxNDQwNzk2ODk2O3M6MToiYyI7aToxNDQwNzk0NjM2O3M6MToibCI7czoxOiIwIjt9fQ==',1440796896),('b29ba6523d1dac688cf4bcd2a2ff15bc147b1bcf','YTozOntzOjY6Il90b2tlbiI7czo0MDoicUhpbzI2U3E1NE9jS1E2N1E4bnd5NUVLUFNYQzV2RmVPdWJLbm1BeSI7czo5OiJfc2YyX21ldGEiO2E6Mzp7czoxOiJ1IjtpOjE0NDA3OTY3OTE7czoxOiJjIjtpOjE0NDA3OTY3OTE7czoxOiJsIjtzOjE6IjAiO31zOjU6ImZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1440796791),('d6e74d094e8e50df432c9a25bdea1a8cd8d6a119','YTo0OntzOjY6Il90b2tlbiI7czo0MDoiSWhYS1JvNjE0QTFCejFxbGZOdUd0QXBtc1VwVkNFUXBwS2RQMHREbCI7czo1OiJmbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjM4OiJsb2dpbl84MmU1ZDJjNTZiZGQwODExMzE4ZjBjZjA3OGI3OGJmYyI7aTozO3M6OToiX3NmMl9tZXRhIjthOjM6e3M6MToidSI7aToxNDQwNzk2OTE2O3M6MToiYyI7aToxNDQwNzk2MTI1O3M6MToibCI7czoxOiIwIjt9fQ==',1440796916),('ec9628e2fbc960f201a0f35e39a39d2fdaaaa7b0','YTo0OntzOjY6Il90b2tlbiI7czo0MDoidENqMGx1dVBIekY1TVF0WjBUNHdqdjVOWUtIcXpLbGFLMjFRem9kSSI7czo1OiJmbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjM4OiJsb2dpbl84MmU1ZDJjNTZiZGQwODExMzE4ZjBjZjA3OGI3OGJmYyI7aTozO3M6OToiX3NmMl9tZXRhIjthOjM6e3M6MToidSI7aToxNDQwNzk0NjI1O3M6MToiYyI7aToxNDQwNzk0NTk1O3M6MToibCI7czoxOiIwIjt9fQ==',1440794626);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sexos`
--

DROP TABLE IF EXISTS `sexos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sexos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL COMMENT 'Genero',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='Tabla para identificar el género';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sexos`
--

LOCK TABLES `sexos` WRITE;
/*!40000 ALTER TABLE `sexos` DISABLE KEYS */;
INSERT INTO `sexos` VALUES (1,'Femenino'),(2,'Masculino');
/*!40000 ALTER TABLE `sexos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stations`
--

DROP TABLE IF EXISTS `stations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `zone_id` int(10) unsigned NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `mac_address` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `serial` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `model` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `brand` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `stations_name_unique` (`name`),
  UNIQUE KEY `stations_mac_address_unique` (`mac_address`),
  UNIQUE KEY `stations_serial_unique` (`serial`),
  KEY `stations_zone_id_foreign` (`zone_id`),
  CONSTRAINT `stations_zone_id_foreign` FOREIGN KEY (`zone_id`) REFERENCES `zones` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stations`
--

LOCK TABLES `stations` WRITE;
/*!40000 ALTER TABLE `stations` DISABLE KEYS */;
/*!40000 ALTER TABLE `stations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipocontratos`
--

DROP TABLE IF EXISTS `tipocontratos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipocontratos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(145) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipocontratos`
--

LOCK TABLES `tipocontratos` WRITE;
/*!40000 ALTER TABLE `tipocontratos` DISABLE KEYS */;
INSERT INTO `tipocontratos` VALUES (1,'Sin contrato',NULL),(2,'tiempo indeterminado',NULL),(3,'tiempo determinado',NULL),(4,'obra determinada',NULL);
/*!40000 ALTER TABLE `tipocontratos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types_alerts`
--

DROP TABLE IF EXISTS `types_alerts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `types_alerts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `description` enum('panico','stress','incorrecto','correcto') COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types_alerts`
--

LOCK TABLES `types_alerts` WRITE;
/*!40000 ALTER TABLE `types_alerts` DISABLE KEYS */;
/*!40000 ALTER TABLE `types_alerts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types_users`
--

DROP TABLE IF EXISTS `types_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `types_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` enum('admin','superadmin','supervisor','area_manager','guard') COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types_users`
--

LOCK TABLES `types_users` WRITE;
/*!40000 ALTER TABLE `types_users` DISABLE KEYS */;
INSERT INTO `types_users` VALUES (1,'admin','2015-07-21 04:30:00','2015-07-21 04:30:00'),(2,'superadmin','2015-07-21 04:30:00','2015-07-21 04:30:00'),(3,'supervisor','2015-07-21 04:30:00','2015-07-21 04:30:00'),(4,'area_manager','2015-07-21 04:30:00','2015-07-21 04:30:00'),(5,'guard','2015-07-21 04:30:00','2015-07-21 04:30:00');
/*!40000 ALTER TABLE `types_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `updates`
--

DROP TABLE IF EXISTS `updates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `updates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COMMENT='Tabla creada para clasificar el área en  la jornada de actuñiazación';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `updates`
--

LOCK TABLES `updates` WRITE;
/*!40000 ALTER TABLE `updates` DISABLE KEYS */;
INSERT INTO `updates` VALUES (1,'anaco'),(2,'santa rosa'),(3,'loma linda'),(4,'operadora'),(5,'all');
/*!40000 ALTER TABLE `updates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `id_person` int(10) unsigned DEFAULT NULL,
  `typeuser_id` int(10) unsigned DEFAULT NULL,
  `group_id` int(10) unsigned DEFAULT NULL,
  `id_creator` int(10) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `preficed_id` int(11) DEFAULT NULL,
  `identify_card` varchar(15) DEFAULT NULL,
  `telf` varchar(20) DEFAULT NULL,
  `ext` varchar(20) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `nickname` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL COMMENT 'Email del usuario',
  `password` varchar(64) NOT NULL COMMENT 'Contraseña del usuario',
  `remember_token` varchar(100) DEFAULT NULL COMMENT '_token de la sesión',
  `activo` int(1) NOT NULL COMMENT '0 - Sin sesión, 1 - sesión iniciada',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `area_update_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_user` (`nickname`),
  KEY `id_person` (`id_person`),
  KEY `id_type_user` (`typeuser_id`),
  KEY `id_group` (`group_id`),
  KEY `id_creator` (`id_creator`),
  KEY `id_type_user_2` (`typeuser_id`),
  KEY `users_ibfk_3_idx` (`preficed_id`),
  KEY `users_ibfk_4_idx` (`area_update_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`typeuser_id`) REFERENCES `types_users` (`id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`),
  CONSTRAINT `users_ibfk_3` FOREIGN KEY (`preficed_id`) REFERENCES `preficeds` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `users_ibfk_4` FOREIGN KEY (`area_update_id`) REFERENCES `updates` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1 COMMENT='Usuarios del sistema';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,1,NULL,NULL,'Elvis Reyes',1,'18205603','555555','211',NULL,'Admin','teclaelvis01@gmail.com','$2y$10$mwMoGmYZir5QYWue51c0UOAzQQ7klD88CEAxokdjmcVT/QRTQt3Ui','SrTRkbtf7K36eTVG1AFYY7ViyI21FPMZ7C14L4cSuILoai1XVorAnFUWf6gX',0,'2015-07-13 19:17:26','2015-08-24 09:26:53',1),(2,NULL,4,2,NULL,'John Maxwell',1,NULL,NULL,NULL,NULL,'John','elvis.reyes@evergreenservice.net','$2y$10$/JCLhokuuifbeBwXOoxvIeAVbgYNLAS3nYV9JXUJrl7PM1/ZBcn5q','LR4Vvdc7v3AUlpVtDvYouUcjMOmQ9Gv5Jqyq6O6YxQs4JYg6PyHLtbOdagTF',0,'2015-07-20 14:36:52','2015-08-24 09:37:59',2),(3,NULL,1,NULL,NULL,'Tirso Ruiz',1,'11003363','0282-4241101','117',NULL,'tirzo.ruiz','tirzo.ruiz@evergreenservice.net','$2y$10$PZli6jcRyx76wagHJKrR7OcN3.h83vf9McUSkA2k1xdFM4KD7tBCq','6BKQM4jEuxnKBL9Ifrg1Dm43Gdi8CpSCLQc8hBUMaYYxuTsXFuL5WMjyUYUS',0,'2015-08-05 00:00:00','2015-08-28 16:51:56',3),(4,NULL,4,NULL,NULL,'Amelia Guzman',1,'9814550','04248449531',NULL,NULL,'amelia.guzman','amelia.guzman@evergreenservice.net','$2y$10$PZli6jcRyx76wagHJKrR7OcN3.h83vf9McUSkA2k1xdFM4KD7tBCq','DDxWAUdqm15cJuNnlAoQMAby3EysNFzMZoO8KRKqGn2PyhBqzNioQmQUqEgy',0,'0000-00-00 00:00:00','2015-08-27 16:31:31',1),(5,NULL,4,NULL,NULL,'Lopez Julio',1,'11002451','0416-3867602',NULL,NULL,'julio.lopez@evergreenservice.net','julio.lopez@evergreenservice.net','',NULL,0,'0000-00-00 00:00:00','0000-00-00 00:00:00',2),(6,NULL,4,NULL,NULL,'Salazar, Diego',1,'11908775','04148173847',NULL,NULL,'Diego.Salazar@EvergreenService.net','Diego.Salazar@EvergreenService.net','',NULL,0,'0000-00-00 00:00:00','0000-00-00 00:00:00',1),(7,NULL,4,NULL,NULL,'Perez, Yorvy',1,'18228081','04148199951',NULL,NULL,'Yorvy.Perez@EvergreenService.net','Yorvy.Perez@EvergreenService.net','',NULL,0,'0000-00-00 00:00:00','0000-00-00 00:00:00',2),(8,NULL,4,NULL,NULL,'Moreno, Jennifer',1,'17786537','0424-831-5962',NULL,NULL,'Jennifer.Moreno@EvergreenService.net','Jennifer.Moreno@EvergreenService.net','',NULL,0,'0000-00-00 00:00:00','0000-00-00 00:00:00',3),(9,NULL,4,NULL,NULL,'Landaeta, Vanessa',1,'19490520','04121893480',NULL,NULL,'Vanessa.Landaeta@EvergreenService.net','Vanessa.Landaeta@EvergreenService.net','',NULL,0,'0000-00-00 00:00:00','0000-00-00 00:00:00',3),(10,NULL,4,NULL,NULL,'Javier Hernan',1,'25428813',NULL,NULL,NULL,'compras@operadorasantarosa.com','compras@operadorasantarosa.com','',NULL,0,'0000-00-00 00:00:00','0000-00-00 00:00:00',4),(11,NULL,4,NULL,NULL,'Carlos Rondón',NULL,NULL,NULL,NULL,NULL,'carlos.rondon@EvergreenService.net','carlos.rondon@EvergreenService.net','$2y$10$ibLH2H1VMo8yz6Cz1./lwO7mx3zUYqlyCJdHxJUsPE.003sgN4mWK','gaTY7JVTcMQdEvbuT5C5BNM2VPs1xnyY6adv1sBpQ8ncwIjbOpwvwJu3veQn',0,'0000-00-00 00:00:00','2015-08-25 07:56:54',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zones`
--

DROP TABLE IF EXISTS `zones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zones` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `uri` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `area_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `zones_area_id_foreign` (`area_id`),
  CONSTRAINT `zones_area_id_foreign` FOREIGN KEY (`area_id`) REFERENCES `areas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zones`
--

LOCK TABLES `zones` WRITE;
/*!40000 ALTER TABLE `zones` DISABLE KEYS */;
INSERT INTO `zones` VALUES (2,'Clave 01-A','clave-01-a','0000-00-00 00:00:00','0000-00-00 00:00:00',1),(3,'Clave 02-A','clave-02-a','0000-00-00 00:00:00','0000-00-00 00:00:00',1),(4,'Clave 03-A','clave-03-a','0000-00-00 00:00:00','0000-00-00 00:00:00',1),(5,'Clave 04-A','clave-04-a','0000-00-00 00:00:00','0000-00-00 00:00:00',1),(6,'Clave 05-A','clave-05-a','0000-00-00 00:00:00','0000-00-00 00:00:00',1);
/*!40000 ALTER TABLE `zones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-08-28 16:56:05
