-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Апр 07 2017 г., 23:56
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `shop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `shop_categories`
--

DROP TABLE IF EXISTS `shop_categories`;
CREATE TABLE IF NOT EXISTS `shop_categories` (
  `id` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `parent` int(11) NOT NULL,
  `image` text,
  `name1` varchar(200) DEFAULT NULL,
  `name2` varchar(200) DEFAULT NULL,
  `name3` varchar(200) DEFAULT NULL,
  `name4` varchar(200) DEFAULT NULL,
  `name5` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `shop_categories`
--

INSERT INTO `shop_categories` (`id`, `level`, `parent`, `image`, `name1`, `name2`, `name3`, `name4`, `name5`) VALUES
(1, 0, 0, '', 'Books', 'Книги', 'Книги', 'Bücher', 'Livres'),
(2, 0, 0, '', 'Software', 'Програми', 'Программы', 'Software', 'Logiciel'),
(3, 0, 0, '', 'Electronics', 'Електроніка', 'Электроника', 'Elektronik', 'Électronique'),
(4, 0, 0, '', 'Home', 'Дом', 'Дом', 'Haus', 'Maison'),
(5, 0, 0, '', 'Garden', 'Сад город', 'Сад огород', 'Garten', 'Jardin'),
(6, 0, 0, '', 'Sport', 'Спорт', 'Спорт', 'Sport', 'Sport'),
(7, 0, 0, '', 'Art', 'Мистецтво', 'Исскуство', 'Kunst', 'Art'),
(8, 0, 0, '', 'Auto', 'Автомобілі', 'Автомобили', 'Auto', 'Voitures');

-- --------------------------------------------------------

--
-- Структура таблицы `shop_category`
--

DROP TABLE IF EXISTS `shop_category`;
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

DROP TABLE IF EXISTS `shop_characteristics`;
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
-- Структура таблицы `shop_currency`
--

DROP TABLE IF EXISTS `shop_currency`;
CREATE TABLE IF NOT EXISTS `shop_currency` (
  `id` int(11) NOT NULL,
  `rate` decimal(10,5) NOT NULL,
  `sign` varchar(20) NOT NULL,
  `kind` int(11) NOT NULL,
  `code` varchar(3) NOT NULL,
  `name1` varchar(20) NOT NULL,
  `name2` varchar(20) NOT NULL,
  `name3` varchar(20) NOT NULL,
  `name4` varchar(20) NOT NULL,
  `name5` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `shop_goods`
--

DROP TABLE IF EXISTS `shop_goods`;
CREATE TABLE IF NOT EXISTS `shop_goods` (
  `id` bigint(22) NOT NULL,
  `categories` int(11) NOT NULL,
  `group` int(11) NOT NULL,
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
  `update_user` int(11) NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `shop_group`
--

DROP TABLE IF EXISTS `shop_group`;
CREATE TABLE IF NOT EXISTS `shop_group` (
  `id` int(11) NOT NULL,
  `director` int(11) NOT NULL,
  `name1` varchar(255) NOT NULL,
  `name2` varchar(255) NOT NULL,
  `name3` varchar(255) NOT NULL,
  `name4` varchar(255) NOT NULL,
  `name5` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phones` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `accounts` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `shop_language`
--

DROP TABLE IF EXISTS `shop_language`;
CREATE TABLE IF NOT EXISTS `shop_language` (
  `id` int(11) NOT NULL,
  `code` varchar(5) NOT NULL,
  `name` varchar(100) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `shop_language`
--

INSERT INTO `shop_language` (`id`, `code`, `name`, `active`) VALUES
(1, 'en', 'English', 1),
(2, 'uk', 'Українська', 1),
(3, 'ru', 'Русский', 1),
(4, 'de', 'Deutsch', 0),
(5, 'fr', 'Français', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `shop_log`
--

DROP TABLE IF EXISTS `shop_log`;
CREATE TABLE IF NOT EXISTS `shop_log` (
  `id` bigint(20) NOT NULL,
  `group` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `ctime` datetime NOT NULL,
  `table` varchar(20) NOT NULL,
  `tableid` bigint(20) NOT NULL,
  `param1` bigint(20) NOT NULL,
  `param2` bigint(20) NOT NULL,
  `param3` int(11) NOT NULL,
  `param4` int(11) NOT NULL,
  `param5` int(11) NOT NULL,
  `param6` int(11) NOT NULL,
  `param7` int(11) NOT NULL,
  `comment` text NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`,`group`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `shop_order`
--

DROP TABLE IF EXISTS `shop_order`;
CREATE TABLE IF NOT EXISTS `shop_order` (
  `id` bigint(22) NOT NULL,
  `buyer` int(11) NOT NULL,
  `total_discount` int(11) NOT NULL,
  `total_cost` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `storage` int(11) NOT NULL,
  `start_time` datetime NOT NULL,
  `delivery_time` datetime NOT NULL,
  `finish_time` datetime NOT NULL,
  `mtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `group` int(11) DEFAULT NULL,
  `comment` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `shop_orderitem`
--

DROP TABLE IF EXISTS `shop_orderitem`;
CREATE TABLE IF NOT EXISTS `shop_orderitem` (
  `id` bigint(22) NOT NULL,
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
-- Структура таблицы `shop_person`
--

DROP TABLE IF EXISTS `shop_person`;
CREATE TABLE IF NOT EXISTS `shop_person` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `address` text,
  `regdate` datetime NOT NULL,
  `password` varchar(200) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `login` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `shop_person`
--

INSERT INTO `shop_person` (`id`, `name`, `address`, `regdate`, `password`, `phone`, `login`, `email`) VALUES
(1, 'Iryna', NULL, '0000-00-00 00:00:00', '45', '', '', ''),
(2, 'Dmytro', 'Wernadskogo 17', '0000-00-00 00:00:00', 'eva', '', '', '');

-- --------------------------------------------------------

--
-- Структура таблицы `shop_role`
--

DROP TABLE IF EXISTS `shop_role`;
CREATE TABLE IF NOT EXISTS `shop_role` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `shop_role`
--

INSERT INTO `shop_role` (`id`, `name`) VALUES
(1, 'buyer'),
(2, 'sale'),
(3, 'manager'),
(4, 'director'),
(5, 'admin');

-- --------------------------------------------------------

--
-- Структура таблицы `shop_storage`
--

DROP TABLE IF EXISTS `shop_storage`;
CREATE TABLE IF NOT EXISTS `shop_storage` (
  `id` bigint(22) NOT NULL,
  `warehouse` int(11) NOT NULL,
  `goods` bigint(22) NOT NULL,
  `discount` decimal(11,2) NOT NULL,
  `group` int(11) NOT NULL,
  `policy` text NOT NULL,
  `amount` decimal(11,3) NOT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_user` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `startDate` (`startDate`),
  KEY `endDate` (`endDate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `shop_user`
--

DROP TABLE IF EXISTS `shop_user`;
CREATE TABLE IF NOT EXISTS `shop_user` (
  `id` int(11) NOT NULL,
  `person` int(11) NOT NULL,
  `group` int(11) NOT NULL,
  `role` int(11) NOT NULL,
  `creator_user` int(11) NOT NULL,
  `startDate` int(11) NOT NULL,
  `endDate` int(11) NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `shop_warehouse`
--

DROP TABLE IF EXISTS `shop_warehouse`;
CREATE TABLE IF NOT EXISTS `shop_warehouse` (
  `id` int(11) NOT NULL,
  `group` int(11) NOT NULL,
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
