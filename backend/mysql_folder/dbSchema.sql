-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema books_ranking
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema books_ranking
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `books_ranking` DEFAULT CHARACTER SET utf8mb3 ;
USE `books_ranking` ;

-- -----------------------------------------------------
-- Table `books_ranking`.`books`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `books_ranking`.`books` (
  `book_id` INT NOT NULL AUTO_INCREMENT,
  `book_title` VARCHAR(45) NOT NULL,
  `book_image` VARCHAR(45) NOT NULL,
  `book_author` VARCHAR(45) NOT NULL,
  `book_genres` VARCHAR(45) NULL DEFAULT NULL,
  `book_year` VARCHAR(45) NULL,
  PRIMARY KEY (`book_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `books_ranking`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `books_ranking`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_email` VARCHAR(45) NOT NULL,
  `user_password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `books_ranking`.`rating`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `books_ranking`.`rating` (
  `users_user_id` INT NOT NULL,
  `books_book_id` INT NOT NULL,
  `rating` INT NOT NULL,
  PRIMARY KEY (`users_user_id`, `books_book_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Table `books_ranking`.`rating` UPDATE length
-- -----------------------------------------------------

ALTER TABLE `books_ranking`.`books` 
CHANGE COLUMN `book_title` `book_title` VARCHAR(255) NOT NULL ,
CHANGE COLUMN `book_image` `book_image` VARCHAR(1000) NOT NULL ,
CHANGE COLUMN `book_author` `book_author` VARCHAR(255) NOT NULL ;

-- -----------------------------------------------------
-- Table USERS UPDATE length
-- -----------------------------------------------------

ALTER TABLE `books_ranking`.`users` 
CHANGE COLUMN `user_name` `user_name` VARCHAR(255) NOT NULL ,
CHANGE COLUMN `user_email` `user_email` VARCHAR(255) NOT NULL ,
CHANGE COLUMN `user_password` `user_password` VARCHAR(255) NOT NULL ;

