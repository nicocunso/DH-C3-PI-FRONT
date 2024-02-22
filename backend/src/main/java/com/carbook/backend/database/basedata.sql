# ================================================================================================
# Database carbook
# ================================================================================================

USE `carbook`;

# ================================================================================================
# carbook
# ================================================================================================

LOCK TABLES `tipo_autos` WRITE;
/*!40000 ALTER TABLE `tipo_autos` DISABLE KEYS */;
INSERT INTO `tipo_autos` VALUES
  (1, 'URBANO', NOW(), NOW()),
  (2, 'SEDAN', NOW(), NOW()),
  (3, 'COUPE', NOW(), NOW()),
  (4, 'DEPORTIVO', NOW(), NOW()),
  (5, 'TODOTERRENO', NOW(), NOW()),
  (6, 'SUV', NOW(), NOW()),
  (7, 'PICKUP', NOW(), NOW()),
  (8, 'FURGONETA', NOW(), NOW());
/*!40000 ALTER TABLE `tipo_autos` ENABLE KEYS */;
UNLOCK TABLES;

# ================================================================================================

LOCK TABLES `autos` WRITE;
/*!40000 ALTER TABLE `autos` DISABLE KEYS */;
INSERT INTO `autos` VALUES
  (1, 1, 'AB072IX', NULL, 'Chevrolet Onix', 2015, 'rojo', 'nafta super', NULL, 13000, 150000, 'activo', 5, 1, NULL, NOW(), NOW()),
  (2, 2, 'AB073IX', NULL, 'Chevrolet Prisma', 2016, 'blanco', 'nafta super', NULL, 5000, 200000, 'activo', 5, 1, NULL, NOW(), NOW()),
  (3, 3, 'AB074IX', NULL, 'Chevrolet Tracker', 2017, 'negro', 'nafta super', NULL, 1000, 250000, 'activo', 5, 1, NULL, NOW(), NOW());
/*!40000 ALTER TABLE `autos` ENABLE KEYS */;
UNLOCK TABLES;