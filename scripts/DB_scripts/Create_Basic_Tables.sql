
-- @BLOCK
-- @NAME Create_Basic_Tables
CREATE TABLE IF NOT EXISTS `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL unique,
  `username` varchar(255) NOT NULL unique,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
-- @BLOCK
CREATE TABLE IF NOT EXISTS `Messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender_id` INT(11) NOT NULL,
  `receiver_id` INT(11) NOT NULL,
  `content` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`sender_id`) REFERENCES `Users`(`id`),
  FOREIGN KEY (`receiver_id`) REFERENCES `Users`(`id`)
);


-- @BLOCK
-- @NAME Create_Users_Index
CREATE INDEX IF NOT EXISTS `username_index` ON `Users` (`username`);

-- @BLOCK
-- @NAME Insert_Base_Users
INSERT INTO `Users` (`email`, `username`, `password`) 
VALUES
    ('gilad1016@gmail.com', 'gilad', '123456');


-- @BLOCK
-- @NAME Validate
SELECT * FROM `Users`;