# ================================================================================================
# Database carbook
# ================================================================================================

USE `carbook`;

# ================================================================================================
# create all necessary tables
# ================================================================================================

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

# ================================================================================================
# carbook
# ================================================================================================

DROP TABLE IF EXISTS `tipo_autos`;

CREATE TABLE `tipo_autos` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `tipo_auto` VARCHAR(50) DEFAULT NULL,
  `creado` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `actualizado` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

# ================================================================================================

DROP TABLE IF EXISTS `autos`;

CREATE TABLE `autos` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_tipo_auto` BIGINT UNSIGNED NOT NULL,
  `matricula` VARCHAR(50) DEFAULT NULL,
  `placa` VARCHAR(50) DEFAULT NULL,
  `modelo` VARCHAR(50) DEFAULT NULL,
  `anno` INT DEFAULT NULL,
  `color` VARCHAR(50) DEFAULT NULL,
  `tipo_combustible` VARCHAR(50) DEFAULT NULL,
  `transmision` VARCHAR(50) DEFAULT NULL,
  `kilometraje` INT DEFAULT NULL,
  `precio_x_dia` DECIMAL(10,0) DEFAULT 0,
  `estado` VARCHAR(20) DEFAULT NULL,
  `numero_puertas` INT DEFAULT NULL,
  `aire_acondicionado` TINYINT(1) NOT NULL DEFAULT 0,
  `tipo_maleta` VARCHAR(20) DEFAULT NULL,
  `creado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
    KEY `ix_autos_id_tipo_auto` (`id_tipo_auto`),
    CONSTRAINT `autos_id_tipo_auto` FOREIGN KEY (`id_tipo_auto`) REFERENCES `tipo_autos` (`id`)
);

# ================================================================================================

DROP TABLE IF EXISTS `imagenes`;

CREATE TABLE `imagenes` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_auto` BIGINT UNSIGNED NOT NULL,
  `nombre` VARCHAR(50) DEFAULT NULL,
  `tipo` VARCHAR(50) DEFAULT NULL,
  `datos` MEDIUMBLOB NOT NULL,
  `creado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `ix_autos_id_auto` (`id_auto`),
  CONSTRAINT `autos_id_auto` FOREIGN KEY (`id_auto`) REFERENCES `autos` (`id`)
);

# ================================================================================================

DROP TABLE IF EXISTS `clientes`;

CREATE TABLE `clientes` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) DEFAULT NULL,
  `apellido` VARCHAR(50) DEFAULT NULL,
  `tipo_documento` VARCHAR(3) DEFAULT NULL,
  `numero_documento` VARCHAR(20) DEFAULT NULL,
  `licencia_conducir` VARCHAR(50) DEFAULT NULL,
  `direccion` VARCHAR(50) DEFAULT NULL,
  `correo_electronico` VARCHAR(50) DEFAULT NULL,
  `fecha_nacimiento` DATE DEFAULT NULL,
  `creado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

# ================================================================================================

DROP TABLE IF EXISTS `rentas`;

CREATE TABLE `rentas` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_cliente` BIGINT UNSIGNED NOT NULL,
  `id_auto` BIGINT UNSIGNED NOT NULL,
  `fecha_inicio` TIMESTAMP NULL DEFAULT NULL,
  `fecha_entrega` TIMESTAMP NULL DEFAULT NULL,
  `creado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
    KEY `ix_rentas_id_cliente` (`id_cliente`),
    KEY `ix_rentas_id_auto` (`id_auto`),
    CONSTRAINT `rentas_id_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id`),
    CONSTRAINT `rentas_id_auto` FOREIGN KEY (`id_auto`) REFERENCES `autos` (`id`)
);

# ================================================================================================

DROP TABLE IF EXISTS `facturas`;

CREATE TABLE `facturas` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_renta` BIGINT UNSIGNED NOT NULL,
  `valor_unitario` DECIMAL(10,0) DEFAULT 0,
  `valor_impuestos` DECIMAL(10,0) DEFAULT 0,
  `valor_total` DECIMAL(10,0) DEFAULT 0,
  `fecha_factura` TIMESTAMP NULL DEFAULT NULL,
  `creado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
    KEY `ix_facturas_id_renta` (`id_renta`),
    CONSTRAINT `facturas_id_renta` FOREIGN KEY (`id_renta`) REFERENCES `rentas` (`id`)
);

# ================================================================================================

DROP TABLE IF EXISTS `pagos`;

CREATE TABLE `pagos` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_factura` BIGINT UNSIGNED NOT NULL,
  `valor_pago` DECIMAL(10,0) DEFAULT 0,
  `forma_pago` VARCHAR(20) DEFAULT NULL,
  `estado_pago` VARCHAR(20) DEFAULT NULL,
  `creado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
    KEY `ix_pagos_id_factura` (`id_factura`),
    CONSTRAINT `pagos_id_factura` FOREIGN KEY (`id_factura`) REFERENCES `facturas` (`id`)
);

# ================================================================================================

DROP TABLE IF EXISTS `tipo_usuarios`;

CREATE TABLE `tipo_usuarios` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `tipo_usuario` VARCHAR(20) DEFAULT NULL,
  `descripcion` VARCHAR(50) DEFAULT NULL,
  `creado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

# ================================================================================================

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_tipo_usuario` BIGINT UNSIGNED NOT NULL,
  `usuario` VARCHAR(20) DEFAULT NULL,
  `contrasena` VARCHAR(20) DEFAULT NULL,
  `creado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizado` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
    KEY `ix_usuarios_id_tipo_usuario` (`id_tipo_usuario`),
    CONSTRAINT `usuarios_id_tipo_usuario` FOREIGN KEY (`id_tipo_usuario`) REFERENCES `tipo_usuarios` (`id`)
);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;