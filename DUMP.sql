SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Schema desenvolvimentodb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `desenvolvimentodb` DEFAULT CHARACTER SET utf8mb3 ;
USE `desenvolvimentodb` ;

-- -----------------------------------------------------
-- Table `desenvolvimentodb`.`brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `desenvolvimentodb`.`brand` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `desenvolvimentodb`.`model`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `desenvolvimentodb`.`model` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NULL DEFAULT NULL,
  `id_brand` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_model_brand_idx` (`id_brand` ASC) VISIBLE,
  CONSTRAINT `fk_model_brand`
    FOREIGN KEY (`id_brand`)
    REFERENCES `desenvolvimentodb`.`brand` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `desenvolvimentodb`.`car`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `desenvolvimentodb`.`car` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NULL DEFAULT NULL,
  `renavam` BIGINT(11) NULL DEFAULT NULL,
  `license` VARCHAR(7) NULL DEFAULT NULL,
  `price` DECIMAL(10,2) NULL DEFAULT NULL,
  `year` YEAR NULL DEFAULT NULL,
  `id_model` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_car_model_idx` (`id_model` ASC) VISIBLE,
  CONSTRAINT `fk_car_model`
    FOREIGN KEY (`id_model`)
    REFERENCES `desenvolvimentodb`.`model` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
