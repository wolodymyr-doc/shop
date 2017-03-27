create database shop;
CREATE USER 'ushop' IDENTIFIED BY 'pshop';
GRANT ALL PRIVILEGES ON *.* TO 'ushop';
++++ IMPORT shop.sql ++++++++++++++++++++++++++++++++++