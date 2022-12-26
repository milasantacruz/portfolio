-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema portfolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema portfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `portfolio` DEFAULT CHARACTER SET utf8mb3 ;
USE `portfolio` ;

-- -----------------------------------------------------
-- Table `portfolio`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `portfolio`.`educacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`educacion` (
  `ideducacion` INT NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `periodo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  `usuario_idusuario` INT NOT NULL,
  PRIMARY KEY (`ideducacion`, `usuario_idusuario`),
  INDEX `fk_educacion_usuario1_idx` (`usuario_idusuario` ASC) VISIBLE,
  CONSTRAINT `fk_educacion_usuario1`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `portfolio`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `portfolio`.`proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`proyecto` (
  `idproyecto` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `periodo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(255) NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  `usuario_idusuario` INT NOT NULL,
  PRIMARY KEY (`idproyecto`, `usuario_idusuario`),
  UNIQUE INDEX `imagen_UNIQUE` (`imagen` ASC) VISIBLE,
  INDEX `fk_proyecto_usuario1_idx` (`usuario_idusuario` ASC) VISIBLE,
  CONSTRAINT `fk_proyecto_usuario1`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `portfolio`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `portfolio`.`tecnologia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`tecnologia` (
  `idtecnologia` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `puntuacion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtecnologia`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `portfolio`.`tecnologia_has_proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`tecnologia_has_proyecto` (
  `tecnologia_idtecnologia` INT NOT NULL,
  `proyecto_idproyecto` INT NOT NULL,
  PRIMARY KEY (`tecnologia_idtecnologia`, `proyecto_idproyecto`),
  INDEX `fk_tecnologia_has_proyecto_proyecto1_idx` (`proyecto_idproyecto` ASC) VISIBLE,
  INDEX `fk_tecnologia_has_proyecto_tecnologia_idx` (`tecnologia_idtecnologia` ASC) VISIBLE,
  CONSTRAINT `fk_tecnologia_has_proyecto_tecnologia`
    FOREIGN KEY (`tecnologia_idtecnologia`)
    REFERENCES `portfolio`.`tecnologia` (`idtecnologia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tecnologia_has_proyecto_proyecto1`
    FOREIGN KEY (`proyecto_idproyecto`)
    REFERENCES `portfolio`.`proyecto` (`idproyecto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `portfolio`.`institucion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`institucion` (
  `idinstitucion` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(255) NULL,
  `url` VARCHAR(255) NULL,
  `educacion_ideducacion` INT NOT NULL,
  `educacion_usuario_idusuario` INT NOT NULL,
  PRIMARY KEY (`idinstitucion`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE,
  INDEX `fk_institucion_educacion1_idx` (`educacion_ideducacion` ASC, `educacion_usuario_idusuario` ASC) VISIBLE,
  CONSTRAINT `fk_institucion_educacion1`
    FOREIGN KEY (`educacion_ideducacion` , `educacion_usuario_idusuario`)
    REFERENCES `portfolio`.`educacion` (`ideducacion` , `usuario_idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`cliente` (
  `idcliente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcliente`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfolio`.`proyecto_has_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio`.`proyecto_has_cliente` (
  `proyecto_idproyecto` INT NOT NULL,
  `proyecto_usuario_idusuario` INT NOT NULL,
  `cliente_idcliente` INT NOT NULL,
  PRIMARY KEY (`proyecto_idproyecto`, `proyecto_usuario_idusuario`, `cliente_idcliente`),
  INDEX `fk_proyecto_has_cliente_cliente1_idx` (`cliente_idcliente` ASC) VISIBLE,
  INDEX `fk_proyecto_has_cliente_proyecto1_idx` (`proyecto_idproyecto` ASC, `proyecto_usuario_idusuario` ASC) VISIBLE,
  CONSTRAINT `fk_proyecto_has_cliente_proyecto1`
    FOREIGN KEY (`proyecto_idproyecto` , `proyecto_usuario_idusuario`)
    REFERENCES `portfolio`.`proyecto` (`idproyecto` , `usuario_idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_proyecto_has_cliente_cliente1`
    FOREIGN KEY (`cliente_idcliente`)
    REFERENCES `portfolio`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
