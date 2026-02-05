SET CHARSET utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- -----------------------------------------------------
-- Load data for table `catalogue`
-- -----------------------------------------------------
LOAD DATA INFILE '/var/lib/mysql-files/catalogue.csv'
IGNORE INTO TABLE `catalogue`
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;
