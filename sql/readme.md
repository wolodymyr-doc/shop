create database shop;
CREATE USER 'ushop'@'localhost' IDENTIFIED BY 'pshop';
GRANT ALL PRIVILEGES ON * . * TO 'ushop'@'localhost';
++++ IMPORT shop.sql ++++++++++++++++++++++++++++++++++