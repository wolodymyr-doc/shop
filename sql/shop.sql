-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Фев 25 2017 г., 18:42
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `shop12`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE IF NOT EXISTS `shop_categories` (
  `id` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `parent` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name1` varchar(200) DEFAULT NULL,
  `name2` varchar(200) DEFAULT NULL,
  `name3` varchar(200) DEFAULT NULL,
  `name4` varchar(200) DEFAULT NULL,
  `name5` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE IF NOT EXISTS `shop_category` (
  `id` int(11) NOT NULL,
  `categories` int(11) NOT NULL,
  `characteristics` int(11) NOT NULL,
  `options` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `shop_characteristics`
--

CREATE TABLE IF NOT EXISTS `shop_characteristics` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `kind` int(11) NOT NULL,
  `name1` varchar(255) NOT NULL,
  `name2` varchar(255) NOT NULL,
  `name3` varchar(255) NOT NULL,
  `name4` varchar(255) NOT NULL,
  `name5` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `currency`
--

CREATE TABLE IF NOT EXISTS `shop_currency` (
  `id` int(11) NOT NULL,
  `rate` decimal(10,5) NOT NULL,
  `sign` varchar(5) NOT NULL,
  `kind` int(11) NOT NULL,
  `name1` varchar(20) NOT NULL,
  `name2` varchar(20) NOT NULL,
  `name3` varchar(20) NOT NULL,
  `name4` varchar(20) NOT NULL,
  `name5` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `goods`
--

CREATE TABLE IF NOT EXISTS `shop_goods` (
  `id` bigint(22) NOT NULL,
  `categories` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `price` decimal(11,2) DEFAULT NULL,
  `image_small` varchar(200) DEFAULT NULL,
  `image_big` varchar(200) DEFAULT NULL,
  `name1` varchar(200) DEFAULT NULL,
  `name2` varchar(200) DEFAULT NULL,
  `name3` varchar(200) DEFAULT NULL,
  `name4` varchar(200) DEFAULT NULL,
  `name5` varchar(200) DEFAULT NULL,
  `description1` text,
  `description2` text,
  `description3` text,
  `description4` text,
  `description5` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `language`
--

CREATE TABLE IF NOT EXISTS `shop_language` (
  `id` int(11) NOT NULL,
  `code` varchar(5) NOT NULL,
  `name` varchar(100) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `language`
--

INSERT INTO `shop_language` (`id`, `code`, `name`, `active`) VALUES
(1, 'en', 'English', 1),
(2, 'uk', 'Українська', 1),
(3, 'ru', 'Русский', 1),
(4, 'de', 'Deutsch', 0),
(5, 'fr', 'Français', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `order`
--

CREATE TABLE IF NOT EXISTS `shop_order` (
  `id` bigint(20) NOT NULL,
  `buyer` int(11) NOT NULL,
  `total_discount` int(11) NOT NULL,
  `total_cost` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `storage` int(11) NOT NULL,
  `start_time` datetime NOT NULL,
  `delivery_time` datetime NOT NULL,
  `finish_time` datetime NOT NULL,
  `mtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `seller` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `orderitem`
--

CREATE TABLE IF NOT EXISTS `shop_orderitem` (
  `id` bigint(20) NOT NULL,
  `order` bigint(22) NOT NULL,
  `goods` int(11) NOT NULL,
  `price` decimal(11,2) NOT NULL,
  `amount` decimal(11,3) NOT NULL,
  `cost` decimal(11,2) NOT NULL,
  `discount` decimal(11,2) NOT NULL,
  `position` int(11) NOT NULL,
  `mtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `order` (`order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `person`
--

CREATE TABLE IF NOT EXISTS `shop_person` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `address` text,
  `regdate` datetime NOT NULL,
  `password` varchar(200) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `role` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `person`
--

INSERT INTO `shop_person` (`id`, `name`, `address`, `regdate`, `password`, `phone`, `role`) VALUES
(1, 'Iryna', NULL, '0000-00-00 00:00:00', '45', '', 1),
(2, 'Dmytro', 'Wernadskogo 17', '0000-00-00 00:00:00', 'eva', '', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `role`
--

CREATE TABLE IF NOT EXISTS `shop_role` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `role`
--

INSERT INTO `shop_role` (`id`, `name`) VALUES
(1, 'user'),
(2, 'sales'),
(3, 'manager'),
(4, 'admin'),
(5, 'superadmin');

-- --------------------------------------------------------

--
-- Структура таблицы `shop_storage`
--

CREATE TABLE IF NOT EXISTS `shop_storage` (
  `id` bigint(22) NOT NULL,
  `warehouse` int(11) NOT NULL,
  `goods` bigint(22) NOT NULL,
  `discount` decimal(11,2) NOT NULL,
  `user` int(11) NOT NULL,
  `policy` text NOT NULL,
  `amount` decimal(11,3) NOT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `mtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `startDate` (`startDate`),
  KEY `endDate` (`endDate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `warehouse`
--

CREATE TABLE IF NOT EXISTS `shop_warehouse` (
  `id` int(11) NOT NULL,
  `location` varchar(50) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(200) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `name1` varchar(255) NOT NULL,
  `name2` varchar(255) NOT NULL,
  `name3` varchar(255) NOT NULL,
  `name4` varchar(255) NOT NULL,
  `name5` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
